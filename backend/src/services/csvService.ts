import csv from 'csv-parser';
import { Readable } from 'stream';
import { inferFieldType } from '../config/normalizer';

export interface CSVColumn {
  name: string;
  sampleValues: string[];
  inferredType: string;
  confidence: number;
}

export interface FieldMapping {
  csvColumn: string;
  targetField: string;
  confidence: number;
}

export class CSVService {
  static async parseCSV(buffer: Buffer): Promise<{ rows: any[]; columns: CSVColumn[] }> {
    const rows: any[] = [];
    const columnValues: Map<string, string[]> = new Map();

    const stream = Readable.from(buffer.toString());

    await new Promise((resolve, reject) => {
      stream
        .pipe(csv())
        .on('data', (data) => {
          rows.push(data);
          for (const [key, value] of Object.entries(data)) {
            if (!columnValues.has(key)) {
              columnValues.set(key, []);
            }
            const values = columnValues.get(key)!;
            if (values.length < 10 && value) {
              values.push(value as string);
            }
          }
        })
        .on('end', resolve)
        .on('error', reject);
    });

    const columns: CSVColumn[] = [];
    for (const [name, samples] of columnValues.entries()) {
      const inferredType = inferFieldType(samples);
      const confidence = this.calculateConfidence(samples, inferredType);

      columns.push({
        name,
        sampleValues: samples,
        inferredType,
        confidence
      });
    }

    return { rows, columns };
  }

  static autoMapFields(csvColumns: CSVColumn[], targetFields: any[]): FieldMapping[] {
    const mappings: FieldMapping[] = [];

    for (const csvCol of csvColumns) {
      let bestMatch: FieldMapping | null = null;
      let bestScore = 0;

      for (const targetField of targetFields) {
        let score = 0;

        if (csvCol.name.toLowerCase() === targetField.name.toLowerCase()) {
          score += 100;
        } else if (
          targetField.name.toLowerCase().includes(csvCol.name.toLowerCase()) ||
          csvCol.name.toLowerCase().includes(targetField.name.toLowerCase())
        ) {
          score += 50;
        }

        if (csvCol.inferredType === targetField.type) {
          score += 30;
        } else if (this.areTypesCompatible(csvCol.inferredType, targetField.type)) {
          score += 15;
        }

        if (csvCol.name.toLowerCase().includes('email') && targetField.name.toLowerCase().includes('email')) {
          score += 40;
        }
        if (csvCol.name.toLowerCase().includes('name') && targetField.name.toLowerCase().includes('name')) {
          score += 30;
        }

        if (score > bestScore) {
          bestScore = score;
          bestMatch = {
            csvColumn: csvCol.name,
            targetField: targetField.name,
            confidence: Math.min(score, 100)
          };
        }
      }

      if (bestMatch && bestMatch.confidence > 30) {
        mappings.push(bestMatch);
      }
    }

    return mappings.sort((a, b) => b.confidence - a.confidence);
  }

  static async processImport(
    rows: any[],
    mapping: Record<string, string>,
    configSlug: string,
    configVersion: string,
    entitySlug: string,
    userId?: string
  ): Promise<{ success: number; errors: number; errorDetails: any[] }> {
    const { prisma } = await import('../db/prisma');

    let successCount = 0;
    let errorCount = 0;
    const errorDetails: any[] = [];

    for (let i = 0; i < rows.length; i++) {
      try {
        const row = rows[i];
        const mappedData: any = {};

        for (const [targetField, sourceColumn] of Object.entries(mapping)) {
          if (sourceColumn && row[sourceColumn] !== undefined) {
            mappedData[targetField] = row[sourceColumn];
          }
        }

        await prisma.appData.create({
          data: {
            config_slug: configSlug,
            config_version: configVersion,
            entity_slug: entitySlug,
            payload: mappedData,
            owner_id: userId
          }
        });

        successCount++;
      } catch (error: any) {
        errorCount++;
        errorDetails.push({
          row: i + 1,
          error: error.message,
          data: rows[i]
        });
      }
    }

    return {
      success: successCount,
      errors: errorCount,
      errorDetails: errorDetails.slice(0, 100)
    };
  }

  private static calculateConfidence(samples: string[], type: string): number {
    if (samples.length === 0) return 0;

    let matches = 0;
    for (const sample of samples) {
      switch (type) {
        case 'email':
          if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sample)) matches++;
          break;
        case 'number':
          if (!isNaN(Number(sample))) matches++;
          break;
        case 'date':
          if (!isNaN(Date.parse(sample))) matches++;
          break;
        case 'boolean':
          if (['true', 'false', 'yes', 'no', '1', '0'].includes(sample.toLowerCase())) matches++;
          break;
        default:
          matches++;
      }
    }

    return (matches / samples.length) * 100;
  }

  private static areTypesCompatible(csvType: string, targetType: string): boolean {
    const compatible: Record<string, string[]> = {
      text: ['text', 'email', 'number'],
      number: ['number', 'text'],
      email: ['email', 'text'],
      date: ['date', 'text'],
      boolean: ['boolean', 'text']
    };

    return compatible[csvType]?.includes(targetType) || false;
  }
}

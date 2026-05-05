export class EngineError extends Error {
  public readonly errors: any[];
  public readonly metadata: any;
  public readonly isFatal: boolean;

  constructor(errors: any[], metadata: any, isFatal: boolean = false) {
    super('Engine execution failed');
    this.name = 'EngineError';
    this.errors = errors;
    this.metadata = metadata;
    this.isFatal = isFatal;
  }

  toJSON() {
    return {
      name: this.name,
      errors: this.errors,
      metadata: this.metadata,
      isFatal: this.isFatal
    };
  }
}

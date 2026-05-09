import { EventEmitter } from 'events';
import { EngineContext } from './types.js';
import { EngineError } from './EngineError.js';
import { authenticate } from './pipeline/authenticate.js';
import { authorize } from './pipeline/authorize.js';
import { resolveFilters } from './pipeline/resolveFilters.js';
import { executeDB } from './pipeline/executeDB.js';
import { maskSensitive } from './pipeline/maskSensitive.js';
import { emitEvents } from './pipeline/emitEvents.js';
import { safeModeHandler } from './safeMode/safeModeHandler.js';

export class Engine extends EventEmitter {
  private pipeline: Array<(ctx: EngineContext) => Promise<EngineContext>>;
  private safeMode: boolean;

  constructor(private config: any, safeMode: boolean = false) {
    super();
    this.safeMode = safeMode;
    this.pipeline = [
      authenticate,
      authorize,
      resolveFilters,
      executeDB,
      maskSensitive,
      emitEvents
    ];
  }

  async run(req: any): Promise<any> {
    let ctx: EngineContext = {
      config: this.config,
      user: req.user,
      input: req.body,
      headers: req.headers,
      ip: req.ip,
      query: {},
      result: null,
      errors: [],
      warnings: [],
      metadata: {
        startTime: Date.now(),
        safeMode: this.safeMode
      }
    };

    try {
      for (const step of this.pipeline) {
        try {
          ctx = await step(ctx);

          this.emit('step-completed', {
            step: step.name,
            duration: Date.now() - ctx.metadata.startTime,
            hasErrors: ctx.errors.length > 0
          });

          if (ctx.errors.some((e: any) => e.fatal)) {
            if (this.safeMode) {
              ctx = await safeModeHandler(ctx);
            } else {
              break;
            }
          }
        } catch (stepError: any) {
          ctx.errors.push({
            message: stepError.message,
            step: step.name,
            fatal: true,
            timestamp: new Date().toISOString()
          });

          if (this.safeMode) {
            ctx = await safeModeHandler(ctx);
          } else {
            throw stepError;
          }
        }
      }

      ctx.metadata.endTime = Date.now();
      ctx.metadata.duration = ctx.metadata.endTime - ctx.metadata.startTime;

      this.emit('completed', ctx);

      if (ctx.warnings.length > 0 && this.safeMode) {
        return {
          data: ctx.result,
          warnings: ctx.warnings,
          safeMode: true,
          metadata: ctx.metadata
        };
      }

      if (ctx.errors.length > 0 && !this.safeMode) {
        throw new EngineError(ctx.errors, ctx.metadata, true);
      }

      return {
        data: ctx.result,
        metadata: ctx.metadata
      };
    } catch (error) {
      if (error instanceof EngineError) throw error;

      throw new EngineError(
        [{ message: (error as Error).message, fatal: true }],
        ctx.metadata,
        true
      );
    }
  }

  use(middleware: (ctx: EngineContext) => Promise<EngineContext>) {
    this.pipeline.push(middleware);
    return this;
  }

  getPipeline() {
    return this.pipeline.map(step => step.name);
  }
}

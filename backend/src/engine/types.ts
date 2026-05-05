export interface EngineContext {
  config: any;
  user?: any;
  input: any;
  headers?: Record<string, any>;
  ip?: string;
  query: any;
  result: any;
  errors: any[];
  warnings: any[];
  metadata: Record<string, any>;
}

export interface PipelineStep {
  name: string;
  execute(ctx: EngineContext): Promise<EngineContext>;
}

export interface SafeModeResult {
  data: any;
  fallbackUsed: boolean;
  fallbackReason?: string;
  repairs: any[];
}

export function generateFallbackResult(ctx: any): any {
  const { action, entity } = ctx.input;

  switch (action) {
    case 'list':
      return {
        data: [],
        safeMode: true,
        message: 'Unable to load data due to configuration issues',
        diagnostics: ctx.errors
      };

    case 'get':
      return {
        data: null,
        safeMode: true,
        message: `Unable to load ${entity} due to configuration issues`,
        diagnostics: ctx.errors
      };

    case 'create':
      return {
        data: null,
        safeMode: true,
        message: 'Create operation disabled in safe mode',
        diagnostics: ctx.errors
      };

    default:
      return {
        data: null,
        safeMode: true,
        message: 'Operation unavailable in safe mode',
        diagnostics: ctx.errors
      };
  }
}

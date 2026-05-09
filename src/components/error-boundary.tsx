import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
  label?: string;
}
interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, errorInfo: any) {
    // eslint-disable-next-line no-console
    console.error("[ErrorBoundary] CAUGHT ERROR:", error);
    console.error("[ErrorBoundary] Label:", this.props.label);
    console.error("[ErrorBoundary] Stack:", error.stack);
    console.error("[ErrorBoundary] Component Stack:", errorInfo.componentStack);
  }
  render() {
    if (this.state.error) {
      console.error('[ErrorBoundary] Component error - Label:', this.props.label, 'Error:', this.state.error.message, 'Stack:', this.state.error.stack);
      return (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm">
          <div className="mb-1 flex items-center gap-2 font-medium text-destructive">
            <AlertTriangle className="h-4 w-4" />
            {this.props.label ?? "Component"} failed to render
          </div>
          <code className="text-xs text-muted-foreground">{this.state.error.message}</code>
          <details className="mt-2 text-xs">
            <summary>Stack trace</summary>
            <pre className="overflow-auto bg-black/20 p-2 rounded mt-1">{this.state.error.stack}</pre>
          </details>
        </div>
      );
    }
    try {
      return this.props.children;
    } catch (err) {
      console.error('[ErrorBoundary] Unexpected error rendering children:', err);
      throw err;
    }
  }
}

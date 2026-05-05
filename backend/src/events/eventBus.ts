import { EventEmitter } from 'events';

class EnhancedEventEmitter extends EventEmitter {
  private eventHistory: any[] = [];
  private maxHistory = 1000;

  emit(event: string, payload: any): boolean {
    this.eventHistory.unshift({
      event,
      payload,
      timestamp: new Date().toISOString()
    });

    if (this.eventHistory.length > this.maxHistory) {
      this.eventHistory.pop();
    }

    const result = super.emit(event, payload);
    super.emit('*', { event, payload, timestamp: new Date().toISOString() });

    const pattern = event.split('.').slice(0, -1).join('.') + '.*';
    if (pattern !== '*') {
      super.emit(pattern, { event, payload, timestamp: new Date().toISOString() });
    }

    return result;
  }

  on(event: string | symbol, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  getHistory(event?: string): any[] {
    if (event) {
      return this.eventHistory.filter(h => h.event === event || h.event.startsWith(event.replace('*', '')));
    }
    return this.eventHistory;
  }

  clearHistory(): void {
    this.eventHistory = [];
  }

  getStats(): any {
    const events = new Map();
    for (const h of this.eventHistory) {
      events.set(h.event, (events.get(h.event) || 0) + 1);
    }

    return {
      totalEvents: this.eventHistory.length,
      uniqueEvents: events.size,
      topEvents: Array.from(events.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
      listeners: this.listenerCount('*'),
      uptime: process.uptime()
    };
  }
}

export const eventBus = new EnhancedEventEmitter();

eventBus.setMaxListeners(100);

if (process.env.NODE_ENV === 'development') {
  eventBus.on('*', (data) => {
    console.log(`[EVENT] ${data.event}`, data.payload);
  });
}

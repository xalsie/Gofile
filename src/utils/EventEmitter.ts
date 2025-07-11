export class UploadEventEmitter {
    private listeners: { [event: string]: Function[] } = {};

    on(event: string, listener: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    emit(event: string, data: any): void {
        if (this.listeners[event]) {
            this.listeners[event].forEach((listener) => listener(data));
        }
    }
}

class KeyDownEvent extends egret.Event {
    public static KEY_DOWN: string = "KEY_DOWN";
    private evt: KeyboardEvent;
    public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
    public setValue(evt: KeyboardEvent) {
        this.evt = evt;
    }

    public getEvt(): KeyboardEvent {
        return this.evt;
    }

}
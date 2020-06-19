class MouseMoveEvent extends egret.Event {
	public static MOVE: string = "MOVE";
	private x: number;
	private y: number;
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}
	public setValue(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public getX(): number {
		return this.x;
	}

	public getY(): number {
		return this.y;
	}

}
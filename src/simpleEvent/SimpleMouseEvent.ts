class SimpleMouseEvent extends egret.Event {
	public static MOVE: string = "MOVE";
	public static DOWN: string = "DOWN";
	public static UP: string = "UP";
	public static CLICK: string = "CLICK";

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
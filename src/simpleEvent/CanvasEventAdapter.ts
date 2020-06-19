class CanvasEventAdapter {
	canvas: any;
	container: egret.DisplayObjectContainer;

	public constructor(container: egret.DisplayObjectContainer) {
		this.container = container;
		this.canvas = document.getElementsByTagName("CANVAS")[0];
		this.canvas.addEventListener('mousemove', this.onMove);
		document.addEventListener('keydown', this.onKeyDown);
	}

	private onKeyDown = (e: KeyboardEvent) => {
		// console.log(e);
		let temp: KeyDownEvent = new KeyDownEvent(KeyDownEvent.KEY_DOWN);
		temp.setValue(e);
		this.container.dispatchEvent(temp);
	}

	private onMove = (evt: MouseEvent) => {
		let temp: MouseMoveEvent = this.getPoint(evt.currentTarget, evt.x, evt.y);
		this.container.dispatchEvent(temp);
	}

	private getPoint(canvas, x: number, y: number) {
		var style = window.getComputedStyle(canvas, null);
		var rect = canvas.getBoundingClientRect();
		let xx: number = (x - rect.left) * (canvas.width / parseFloat(style['width']));
		let yy: number = (y - rect.top) * (canvas.height / parseFloat(style['height']));
		let t: MouseMoveEvent = new MouseMoveEvent(MouseMoveEvent.MOVE);
		t.setValue(xx, yy);
		return t;
	}
}
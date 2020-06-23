class CanvasEventAdapter {
	canvas: any;
	container: egret.DisplayObjectContainer;

	public constructor(container: egret.DisplayObjectContainer) {
		this.container = container;
		this.canvas = document.getElementsByTagName("CANVAS")[0];
		this.canvas.addEventListener('mousemove', this.onMove);
		this.canvas.addEventListener('mousedown', this.onDown);
		this.canvas.addEventListener('mouseup', this.onUp);
		this.canvas.addEventListener('click', this.onClick);
		this.canvas.addEventListener('mousewheel', this.onMouseWhell);
		document.addEventListener('keydown', this.onKeyDown);


	}

	private onMouseWhell = (evt: WheelEvent) => {
		let temp: SimpleMouseEvent = this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.WHEEL);
		temp.setDeltaY(evt.deltaY);
		this.container.dispatchEvent(temp);
	}

	private onKeyDown = (e: KeyboardEvent) => {
		// console.log(e);
		let temp: KeyDownEvent = new KeyDownEvent(KeyDownEvent.KEY_DOWN);
		temp.setValue(e);
		this.container.dispatchEvent(temp);
	}

	private onMove = (evt: MouseEvent) => {
		let temp: SimpleMouseEvent = this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.MOVE);
		this.container.dispatchEvent(temp);
	}


	private onDown = (evt: MouseEvent) => {
		let temp: SimpleMouseEvent = this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.DOWN);
		this.container.dispatchEvent(temp);
	}


	private onUp = (evt: MouseEvent) => {
		let temp: SimpleMouseEvent = this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.UP);
		this.container.dispatchEvent(temp);
	}

	private onClick = (evt: MouseEvent) => {
		let temp: SimpleMouseEvent = this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.CLICK);
		this.container.dispatchEvent(temp);
	}

	private getPoint(canvas, x: number, y: number, evtType: string) {
		var style = window.getComputedStyle(canvas, null);
		var rect = canvas.getBoundingClientRect();
		let xx: number = (x - rect.left) * (canvas.width / parseFloat(style['width']));
		let yy: number = (y - rect.top) * (canvas.height / parseFloat(style['height']));
		let t: SimpleMouseEvent = new SimpleMouseEvent(evtType);
		t.setValue(xx, yy);
		return t;
	}
}
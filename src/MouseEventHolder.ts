class MouseEventHolder {
	canvas: any;
	mels: MEL[] = [];
	public constructor() {
		this.canvas = document.getElementsByTagName("CANVAS")[0];
		this.canvas.addEventListener('mousemove', this.onMove);

	}

	private onMove = (evt: MouseEvent) => {
		if (this.mels.length == 0) {
			return;
		}
		let temp: mousemove.MousePoint = this.getPoint(evt.currentTarget, evt.x, evt.y);
		for (let i = 0; i < this.mels.length; i++) {
			let mel: MEL = this.mels[i];
			mel.onIn(temp);
		}
	}

	public addEventListener(egretEle: egret.DisplayObject, moveIn: Function, moveOut: Function) {
		this.mels.push(new MEL(egretEle, moveIn, moveOut));
	}

	private getPoint(canvas, x: number, y: number) {
		var style = window.getComputedStyle(canvas, null);
		var rect = canvas.getBoundingClientRect();
		let xx: number = (x - rect.left) * (canvas.width / parseFloat(style['width']));
		let yy: number = (y - rect.top) * (canvas.height / parseFloat(style['height']));
		return new mousemove.MousePoint(xx, yy);
	}
}
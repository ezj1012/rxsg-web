class MouseEventHolder {
	canvas: any;

	public constructor() {
		this.canvas = document.getElementsByTagName("CANVAS")[0];
		this.canvas.addEventListener('mousemove', this.onMove);
	}

	private onMove = (evt: MouseEvent) => {
		let temp = this.getPoint(evt.currentTarget, evt.x, evt.y);
		console.log(temp);
	}

	private getPoint(canvas, x: number, y: number) {
		var style = window.getComputedStyle(canvas, null);
		var rect = canvas.getBoundingClientRect();
		return {
			x: (x - rect.left) * (canvas.width / parseFloat(style['width'])),
			y: (y - rect.top) * (canvas.height / parseFloat(style['height']))
		}
	}
}
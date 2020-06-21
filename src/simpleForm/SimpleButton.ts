class SimpleButton {
	private img: egret.Bitmap;
	private icon_down: any;
	private icon_on: any;
	private icon: any;
	private click: Function;
	private hoveFlag: boolean;
	public constructor(clickFun: Function, icon: any, icon_on: any, icon_down: any) {
		this.icon = RES.getRes(icon);
		this.icon_on = RES.getRes(icon_on);
		this.icon_down = RES.getRes(icon_down);
		this.click = clickFun;
		this.img = new egret.Bitmap();
		this.img.texture = this.icon;
	}

	public getImg() {
		return this.img;
	}

	public handMouseMoveEvent(evt: SimpleMouseEvent, shapeFlag: boolean = false) {
		if (evt.type == SimpleMouseEvent.MOVE) {
			if (this.img.hitTestPoint(evt.getX(), evt.getY(), shapeFlag)) {
				if (this.hoveFlag) {
					return;
				}
				this.hoveFlag = true;
				this.img.texture = this.icon_on;
			} else {
				if (this.hoveFlag) {
					this.hoveFlag = false;
					this.img.texture = this.icon;
				}
			}
		} else if (evt.type == SimpleMouseEvent.DOWN) {
			if (this.hoveFlag) {
				this.img.texture = this.icon_down;
				//click
				if (this.click != null) {
					this.click(evt);
				}
			}
		} else if (evt.type == SimpleMouseEvent.UP) {
			this.img.texture = this.hoveFlag ? this.icon_on : this.icon;
		}
	}

	public setPosition(x: number, y: number) {
		this.img.x = x;
		this.img.y = y;
	}

	public setRange(w: number, h: number) {
		this.img.width = w;
		this.img.height = h;
	}
}
class SimpleRadio {
	private img: egret.Bitmap;
	private text: egret.TextField;
	private icon_down: any;
	private icon_on: any;
	private icon: any;
	private click: Function;
	private hoveFlag: boolean;
	private selectedFlag: boolean;
	private disableCancel: boolean;//禁用取消
	public constructor(clickFun: Function, icon: any, icon_on: any, icon_down: any, disableCancel: boolean = false) {
		this.icon = RES.getRes(icon);
		this.icon_on = RES.getRes(icon_on);
		this.icon_down = RES.getRes(icon_down);
		this.click = clickFun;
		this.disableCancel = disableCancel;
		this.img = new egret.Bitmap();
		this.img.texture = this.icon;

	}

	public getImg() {
		return this.img;
	}

	public getText() {
		if (this.text == null) {
			this.text = new egret.TextField();
		}
		return this.text;
	}

	/**
	 * @return true被选中,false未被选中
	 */
	public isSelected() {
		return this.selectedFlag;
	}

	public changeSelect(s: boolean) {
		if (s == this.selectedFlag) { return; }
		this.selectedFlag = s;
		if (this.selectedFlag) {
			this.img.texture = this.icon_on;
		} else {
			this.img.texture = this.hoveFlag ? this.icon_on : this.icon;
		}
	}

	public setText(text: string, size: number, color: number) {
		let t = this.getText();
		t.text = text;
		t.size = size;
		t.textColor = color;
		t.x = this.img.x + this.img.width + 3;
		t.y = this.img.y + (this.img.height - this.text.height) / 2;
		return t;
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
					this.img.texture = this.selectedFlag ? this.icon_on : this.icon;
				}
			}
		} else if (evt.type == SimpleMouseEvent.DOWN) {
			if (this.hoveFlag) {
				this.img.texture = this.icon_down;
				if (this.selectedFlag && this.disableCancel) {
					return;
				}
				this.selectedFlag = !this.selectedFlag;
				//click
				if (this.click != null) {
					this.click(evt, this.selectedFlag, this);
				}
			}
		} else if (evt.type == SimpleMouseEvent.UP) {
			this.img.texture = this.hoveFlag || this.selectedFlag ? this.icon_on : this.icon;
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
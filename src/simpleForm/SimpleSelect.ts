class SimpleSelect extends egret.Sprite {
	private backImg: egret.Bitmap;
	fontColor: number;
	private upIcon: any;
	private downIcon: any;
	private data: any;
	private downed: boolean = false;
	private downImg: egret.Bitmap;
	private upImg: egret.Bitmap;

	public constructor(upIcon: string, downIcon: string, data: any) {
		super();
		this.data = data;
		this.upIcon = RES.getRes(upIcon);
		this.downIcon = RES.getRes(downIcon);
		this.backImg = new egret.Bitmap();
		this.backImg.texture = this.upIcon;
		this.addChild(this.backImg);
	}

	public getImg() {
		return this.backImg;
	}

	public handMouseMoveEvent(evt: SimpleMouseEvent, shapeFlag: boolean = false) {
		if (evt.type == SimpleMouseEvent.DOWN) {
			if (this.backImg.hitTestPoint(evt.getX(), evt.getY())) {
				if (this.downed) {
					this.up();
				} else {
					this.down();
				}
			} else {
				this.up();
			}
		}
	}

	private up() {
		if (!this.downed) { return; }
		this.downed = false;
		this.backImg.texture = this.upIcon;
	}

	private down() {
		if (this.downed) { return; }
		this.downed = true;
		this.backImg.texture = this.downIcon;
	}

}
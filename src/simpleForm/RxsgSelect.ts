class RxsgSelect extends egret.Sprite {
	private datas: Array<string>;
	private openSelect: boolean;
	private list: RxsgSelectList;
	private up: egret.Texture;
	private down: egret.Texture;
	private text: egret.TextField;
	private bImg: egret.Bitmap;
	public constructor(data: Array<string>) {
		super();
		this.datas = data;
		this.datas = [
			"随机", "司隶", "冀州", "豫州", "兖州", "徐州", "青州", "荆州", "扬州", "益州", "凉州", "并州", "幽州", "交州"
		];
		this.width = 145;
		this.list = new RxsgSelectList(this.datas, this.updateSelected);
		this.list.y = 26;

		this.up = RES.getRes("combobox_up_png");
		this.down = RES.getRes("combobox_down_png");
		this.bImg = new egret.Bitmap(this.up);

		this.text = new egret.TextField();
		this.text.background = true;
		this.text.backgroundColor = 0x1A231D;
		this.text.size = 12;
		this.text.textColor = 0xF3E29E;
		this.text.textAlign = egret.HorizontalAlign.CENTER;
		this.text.verticalAlign = egret.VerticalAlign.MIDDLE;

		this.updatePosistion();
		this.updateSelected();
		this.addChild(this.bImg);
		this.addChild(this.text);
	}

	private updatePosistion() {
		this.bImg.width = this.width;
		this.text.x = 3;
		this.text.y = 2;
		this.text.width = this.bImg.width - 29;
		this.text.height = this.bImg.height - 4;

	}

	public handMouseMoveEvent(evt: SimpleMouseEvent, shapeFlag: boolean = false) {
		if (evt.type == SimpleMouseEvent.DOWN) {
			if (this.bImg.hitTestPoint(evt.getX(), evt.getY())) {
				this.reversalView();
			}
		}
		if (this.openSelect) {
			this.bImg.texture = this.down;
			this.list.handMouseMoveEvent(evt, shapeFlag);
		} else {
			this.bImg.texture = this.up;
		}
	}

	private updateSelected = () => {
		if (this.openSelect) {
			this.openSelect = false;
			this.removeChild(this.list);
		}
		this.bImg.texture = this.down;
		let idx = this.list.getSelected();
		this.text.text = this.datas[idx];
	}

	public reversalView() {
		this.openSelect = !this.openSelect;
		if (this.openSelect) {
			this.addChild(this.list);
		} else {
			this.removeChild(this.list);
		}
	}

}
class RxsgSelectList extends egret.Sprite {

	private up: egret.Texture;
	private down: egret.Texture;
	private box_ctrl: egret.Texture;

	private ctrlImg: egret.Bitmap;
	private ctrFilter: egret.GlowFilter;
	private cImg: egret.Bitmap;
	private upImg: egret.Bitmap;
	private downImg: egret.Bitmap;


	public constructor() {
		super();
		this.up = RES.getRes("combobox_list_up_png");
		this.down = RES.getRes("combobox_list_down_png");
		this.box_ctrl = RES.getRes("combobox_list_ctrl_png");

		this.cImg = new egret.Bitmap(RES.getRes("combobox_list_png"));
		this.upImg = new egret.Bitmap(this.up);
		this.downImg = new egret.Bitmap(this.up);
		this.ctrlImg = new egret.Bitmap(this.box_ctrl);
		this.ctrFilter = new egret.GlowFilter(0x33CCFF);
		this.ctrlImg.filters = [this.ctrFilter];


		this.updatePosition();
		this.addChild(this.cImg);
		this.addChild(this.upImg);
		this.addChild(this.downImg);
		this.addChild(this.ctrlImg);
	}

	public setH(h: number) {
		this.height = h;
		this.cImg.height = h;
		this.updatePosition();
	}



	public setSize(w: number, h: number) {
		this.width = w;
		this.height = h;
	}

	private updatePosition() {
		this.upImg.x = this.cImg.x + 2;
		this.upImg.y = this.cImg.y + 2;
		this.downImg.x = this.cImg.x + 2;
		this.downImg.y = this.cImg.y + this.cImg.height - 2 - this.downImg.height;
		this.ctrlImg.x = this.cImg.x + 2;
		this.ctrlImg.y = this.cImg.x + 16;
		console.log(this.upImg.x + " ," + this.upImg.y + ", " + this.downImg.x + "," + this.downImg.y);
	}
}
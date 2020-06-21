class RegisterWorldMap extends egret.Sprite {

	private bckImg: egret.Bitmap;
	private si: egret.Bitmap;
	private idx: number = 0;
	private disIdx: number = -1;
	private itemName: string[] = [
		"yuzhou_png", "yunzhou_png", "youzhou_png", "yizhou_png", "yangzhou_png", "xuzhou_png", "silv_png", "qingzhou_png", "liangzhou_png", "jizhou_png", "jingzhou_png", "jiaozhou_png", "bingzhou_png"
	];
	private itemIdx: number[][] = [[327, 185], [369, 149], [354, 0], [33, 214], [368, 233], [416, 178], [203, 153], [423, 116], [-5, 2], [356, 84], [248, 229], [128, 356], [213, 40]];
	private lc: boolean[] = [];
	private itemImg: egret.Bitmap[] = [];
	public constructor() {
		super();
		this.createSc();
	}

	private createSc() {
		this.bckImg = new egret.Bitmap();
		this.bckImg.texture = RES.getRes("sanguo_map_png");
		this.addChild(this.bckImg);

		for (let i = 0; i < this.itemName.length; i++) {
			var img2: egret.Bitmap = new egret.Bitmap();
			img2.texture = RES.getRes(this.itemName[i]);
			img2.x = this.itemIdx[i][0];
			img2.y = this.itemIdx[i][1];
			img2.alpha = 0;
			this.itemImg.push(img2);
			this.addChild(img2);
			this.lc.push(false);
		}
		this.si = this.itemImg[this.idx];


		// this.addEventListener(egret.Event)
		// this.meh.addEventListener(img2, (egretEle: egret.DisplayObject) => {
		// 	console.log("aaaa" + egretEle.x);
		// }, (egretEle: egret.DisplayObject) => {
		// 	console.log("bbbbb" + egretEle.y);
		// });
	}

	public handMouseEvent = (evt: SimpleMouseEvent) => {
		if (evt.type == SimpleMouseEvent.MOVE) {
			let x = evt.getX();
			let y = evt.getY();
			if (x < 335 || x > 950 || y < 64 || y > 560) {
				if (this.disIdx != -1) {
					this.itemImg[this.disIdx].alpha = 0;
				}
				return;
			}

			let pIdx: number = -1;
			for (let i = 0; i < this.itemName.length; i++) {
				var img2: egret.Bitmap = this.itemImg[i];
				if (img2.hitTestPoint(x, y, true)) {
					pIdx = i;
					break;
				}
			}
			this.disIdx = pIdx;
			for (let i = 0; i < this.itemName.length; i++) {
				this.itemImg[i].alpha = i == pIdx ? 1 : 0;
			}
		}
	}


	public onClick = (evt: egret.TouchEvent) => {
		// this.si.alpha = 1;
		// if (!this.lc[this.idx]) {
		// 	this.si.x = evt.localX - 355;
		// 	this.si.y = evt.localY - 64;
		// }
	}

	public onKeyDown(e: KeyDownEvent) {
		if (e)
			return;

		// console.log("aaaa");
		// console.log(e);
		let keyCode = e.getEvt().keyCode;
		switch (keyCode) {
			case 38: {
				if (this.lc[this.idx]) {
					break;
				}
				this.si.y -= 1; break;
			}
			case 40: {
				if (this.lc[this.idx]) {
					break;
				}
				this.si.y += 1; break;
			}
			case 37: {
				if (this.lc[this.idx]) {
					break;
				}
				this.si.x -= 1; break;
			}
			case 39: {
				if (this.lc[this.idx]) {
					break;
				}
				this.si.x += 1; break;
			}
			case 65: {
				//a 换一个元素
				let oldName = this.itemName[this.idx];
				this.idx -= 1;
				if (this.idx < 0) {
					this.idx = this.itemImg.length - 1;
				}
				this.si = this.itemImg[this.idx];
				console.log("从" + oldName + "切换到" + this.itemName[this.idx] + "当前锁[" + this.lc[this.idx] + "]");
				break;
			}
			case 69: {	//E
				this.lc[this.idx] = !this.lc[this.idx];
				this.itemName[this.idx] + "当前锁[" + this.lc[this.idx] + "]"
				break;
			}
			case 83: {
				console.log(this.itemName[this.idx] + " " + this.idx);
				console.log("[" + this.si.x + "," + this.si.y + "]");
				break;
			}
			case 81: {
				let aa = "[";
				for (let i = 0; i < this.itemName.length; i++) {
					let t: egret.Bitmap = this.itemImg[i];
					aa += "[" + t.x + "," + t.y + "]";
				}
				console.log(aa); break;
			}

			case 68: {
				//d 换一个元素
				let oldName = this.itemName[this.idx];
				this.idx += 1;
				if (this.idx >= this.itemImg.length) {
					this.idx = 0;
				}
				this.si = this.itemImg[this.idx];

				console.log("从" + oldName + "切换到" + this.itemName[this.idx] + "当前锁[" + this.lc[this.idx] + "]");
				break;
			}
		}
	}

}

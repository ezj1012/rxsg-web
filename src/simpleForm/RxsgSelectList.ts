class RxsgSelectList extends egret.Sprite {
	private static itemHeight: number = 22;
	private up: egret.Texture;
	private down: egret.Texture;
	private box_ctrl: egret.Texture;

	private ctrlImg: egret.Bitmap;
	private ctrlHove: boolean;
	private ctrlCanMove: boolean;
	private ctrlStartY: number;
	private ctrlOY: number = 0;
	private ctrlOneY: number = 0;
	private ctrFilter: Array<egret.GlowFilter>;
	private cImg: egret.Bitmap;


	private upImg: egret.Bitmap;
	private upClick: boolean;
	private downImg: egret.Bitmap;
	private downClick: boolean;

	private backImg: egret.Bitmap;
	private showItems: Array<egret.TextField>;
	private datas: Array<string>;

	private showSize: number;
	private selectIdx: number = 0;
	private selectedBC: number = 0x1D3E28;
	private selectHoveBC: number = 0x35483B;
	private displayStartIdx: number;//页面看到的第一个元素点
	private moveInIdx: number = -1;	//从0开始

	private updateSelectNotifyFun: Function;

	public constructor(datas: Array<string>, updateSelectNotifyFun: Function) {
		super();
		this.updateSelectNotifyFun = updateSelectNotifyFun;
		this.datas = datas;

		let showSize = 7;
		if (showSize > this.datas.length) {
			showSize = this.datas.length;
		}
		this.showSize = showSize;
		this.width = 145;
		this.height = showSize * RxsgSelectList.itemHeight + 2;

		this.up = RES.getRes("combobox_list_up_png");
		this.down = RES.getRes("combobox_list_down_png");
		this.box_ctrl = RES.getRes("combobox_list_ctrl_png");

		this.backImg = new egret.Bitmap(RES.getRes("box_border_one_p_png"));

		this.cImg = new egret.Bitmap(RES.getRes("combobox_list_png"));
		this.upImg = new egret.Bitmap(this.up);
		this.downImg = new egret.Bitmap(this.up);
		this.ctrlImg = new egret.Bitmap(this.box_ctrl);
		this.ctrFilter = [];
		this.ctrFilter.push(new egret.GlowFilter(0x33CCFF));
		// this.ctrlImg.filters = this.ctrFilter;


		//显示选择框文字


		this.showItems = [];
		for (let i = 0; i < this.showSize; i++) {
			let tf = new egret.TextField();
			tf.size = 12;
			tf.textColor = 0xF3E29E;
			tf.textAlign = egret.HorizontalAlign.CENTER;
			tf.verticalAlign = egret.VerticalAlign.MIDDLE;
			tf.height = RxsgSelectList.itemHeight;
			tf.y = 2 + i * RxsgSelectList.itemHeight;
			this.showItems.push(tf);
		}

		this.updateList(this.getShowData());

		this.updatePosition();
		this.addChild(this.backImg);
		this.addChild(this.cImg);
		this.addChild(this.upImg);
		this.addChild(this.downImg);
		this.addChild(this.ctrlImg);
		for (let i = 0; i < this.showSize; i++) {
			this.addChild(this.showItems[i]);
		}
	}



	private getShowDataByIdx(idx: number) {
		let result: Array<string> = [];
		if (idx <= 0) {
			idx = 0;
		}
		if (idx + this.showSize >= this.datas.length) {
			idx = this.datas.length - this.showSize;
		}
		if (idx <= 0) {
			idx = 0;
		}
		this.displayStartIdx = idx;
		for (let i = idx; i < idx + this.showSize; i++) {
			result.push(this.datas[i]);
		}
		return result;
	}

	private getShowData() {
		let sIdx = 0;
		let result: Array<string> = [];
		if (this.selectIdx == 0) {
			sIdx = 0;
		} else if (this.selectIdx + this.showSize - 1 < this.datas.length) {
			sIdx = this.selectIdx - 1;
		} else {
			sIdx = this.datas.length - this.showSize;
		}
		this.displayStartIdx = sIdx;
		for (let i = sIdx; i < sIdx + this.showSize; i++) {
			result.push(this.datas[i]);
		}
		return result;
	}

	private updateList(showDatas: Array<string>) {
		for (let i = 0; i < this.showSize; i++) {
			this.showItems[i].text = showDatas[i];
			if (i + this.displayStartIdx == this.selectIdx) {
				this.showItems[i].background = true;
				this.showItems[i].backgroundColor = this.selectedBC;
			} else {
				this.showItems[i].background = false;
			}
		}
	}


	public handMouseMoveEvent(evt: SimpleMouseEvent, shapeFlag: boolean = false) {
		if (evt.type == SimpleMouseEvent.MOVE) {
			if (this.ctrlImg.hitTestPoint(evt.getX(), evt.getY())) {
				if (!this.ctrlHove) {
					this.ctrlHove = true;
					this.ctrlImg.filters = this.ctrFilter;
				}
				if (this.ctrlCanMove) {
					this.moveCtrl(evt.getY() - this.ctrlStartY);
					this.ctrlStartY = evt.getY();
				}
			} else {
				this.restoreCtrl();
			}
		} else if (evt.type == SimpleMouseEvent.DOWN) {
			if (this.ctrlHove) {
				this.ctrlCanMove = true;
				this.ctrlStartY = evt.getY();
				return;
			} else if (this.listHitTestPoint(evt)) {
				let f = this.listHitIndex(evt);
				this.updateSelect(this.displayStartIdx + f);
			} else if (!this.upClick && this.upImg.hitTestPoint(evt.getX(), evt.getY())) {
				this.upImg.texture = this.down;
				this.upClick = true;
				return;
			} else if (!this.downClick && this.downImg.hitTestPoint(evt.getX(), evt.getY())) {
				this.downImg.texture = this.down;
				this.downClick = true;
				return;
			}
		} else if (evt.type == SimpleMouseEvent.UP) {
			this.ctrlCanMove = false;
			if (this.upClick) {
				this.upImg.texture = this.up;
				this.upClick = false;
				this.onUpClick();
				return;
			}
			if (this.downClick) {
				this.downImg.texture = this.up;
				this.downClick = false;
				this.onDownClick();
				return;
			}
		} else if (evt.type == SimpleMouseEvent.WHEEL) {
			if (evt.getDeltaY() < 0) {
				this.onUpClick();
			} else if (evt.getDeltaY() > 0) {
				this.onDownClick();
			}
		}


		if (this.listHitTestPoint(evt)) {
			let f = this.listHitIndex(evt);
			if (f != this.moveInIdx) {
				this.restoreBack(this.moveInIdx);
				this.moveInIdx = f;
			}
			this.showItems[f].background = true;
			this.showItems[f].backgroundColor = this.selectHoveBC;
		} else {
			this.restoreBack(this.moveInIdx);
		}
	}

	public setH(h: number) {
		this.height = h;

		this.updatePosition();
	}

	private listHitTestPoint(evt: SimpleMouseEvent) {
		let ox = evt.getX() - this.x;
		let oy = evt.getY() - this.y - 1;
		return ox > 0 && ox < this.width - 18 && oy > 0 && oy < this.height - 1;
	}

	private listHitIndex(evt: SimpleMouseEvent) {
		let oy = evt.getY() - this.y - 1;
		let f = Math.floor(oy / RxsgSelectList.itemHeight);
		//修正部分计算错误的情况
		f = f < 0 ? 0 : f;
		f = f >= this.showSize ? this.showSize - 1 : f;
		return f;
	}


	public setSize(w: number, h: number) {
		this.width = w;
		this.height = h;
	}

	private onUpClick = () => {
		this.updateList(this.getShowDataByIdx(this.displayStartIdx - 1));
		this.ctrlOY = this.ctrlOneY * this.displayStartIdx;
		this.updateCtrlPosistion();
	}

	private onDownClick = () => {
		this.updateList(this.getShowDataByIdx(this.displayStartIdx + 1));
		this.ctrlOY = this.ctrlOneY * this.displayStartIdx;
		this.updateCtrlPosistion();
	}

	public updateSelect(selectIdx: number) {
		if (selectIdx < 0 || selectIdx >= this.datas.length) {
			console.log('下来选择框值输入错误!');
		}
		this.selectIdx = selectIdx;
		this.updateList(this.getShowData());
		this.ctrlOY = this.ctrlOneY * this.displayStartIdx;
		this.updateCtrlPosistion();
		if (this.updateSelectNotifyFun) {
			this.updateSelectNotifyFun(this.getSelected());
		}
	}

	public getSelected(): number {
		return this.selectIdx;
	}

	private moveCtrl(move: number) {
		let moved = false;
		if (move < 0) {
			let tt = this.ctrlOY + move < 0 ? 0 : this.ctrlOY + move;
			moved = tt != this.ctrlOY;
			this.ctrlOY = tt;
		} else {
			let t = this.cImg.height - 32 - this.ctrlImg.height;
			let tt = this.ctrlOY + move > t ? t : this.ctrlOY + move;
			moved = tt != this.ctrlOY;
			this.ctrlOY = tt;
		}
		let newIdx = Math.floor(this.ctrlOY / this.ctrlOneY);
		// if (this.displayStartIdx != newIdx) {
		this.updateList(this.getShowDataByIdx(newIdx));
		// }
		this.updateCtrlPosistion();
		return moved;
	}

	private updatePosition() {
		this.backImg.x = 0; this.backImg.y = 0;
		this.backImg.width = this.width; this.backImg.height = this.height;

		this.cImg.height = this.height - 2;
		this.cImg.y = this.y + 1;
		this.cImg.x = this.x + this.width - 1 - this.cImg.width;

		this.upImg.x = this.cImg.x + 2;
		this.upImg.y = this.cImg.y + 2;
		this.downImg.x = this.cImg.x + 2;
		this.downImg.y = this.cImg.y + this.cImg.height - 2 - this.downImg.height;
		this.ctrlImg.x = this.cImg.x + 2;

		this.ctrlOneY = (this.cImg.height - 32 - this.ctrlImg.height) / (this.datas.length - this.showSize);
		for (let i = 0; i < this.showSize; i++) {
			this.showItems[i].x = this.x + 1;
			this.showItems[i].width = this.width - 18;
		}

		this.updateCtrlPosistion();
	}

	private updateCtrlPosistion() {
		this.ctrlImg.y = this.cImg.y + 16 + this.ctrlOY;
	}

	private restoreBack(idx: number) {
		if (this.moveInIdx >= 0 && this.moveInIdx < this.showSize) {
			if (idx + this.displayStartIdx == this.selectIdx) {
				this.showItems[idx].backgroundColor = this.selectedBC;
			} else {
				this.showItems[idx].background = false;
			}
		}
	}

	private restoreCtrl() {
		if (this.ctrlHove) {
			this.ctrlImg.filters = null;
		}
		this.ctrlHove = false;
		this.ctrlCanMove = false;
	}
}
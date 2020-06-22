class PlayerRegister extends egret.Sprite {

	worldMap: RegisterWorldMap;
	register: RegisterInfo;
	tt: RxsgSelectList;
	public constructor() {
		super();
		this.x = 0;
		this.y = 0;
		this.width = 1000;
		this.height = 600;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private async onAddToStage(event: egret.Event) {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
		await RES.loadConfig("resource/default.res.json", "resource/");
		await RES.loadGroup("simpleWorld");
		await RES.loadGroup("board");
		await RES.loadGroup("player");
	}

	private onGroupComplete() {
		this.tt = new RxsgSelectList();
		// this.tt.setH(300);
		this.addChild(this.tt);

		// this.worldMap = new RegisterWorldMap();
		// this.worldMap.x = 335;
		// this.worldMap.y = 64;
		// this.worldMap.width = 620;
		// this.worldMap.height = 500;

		// this.register = new RegisterInfo();


		// this.addChild(this.register);
		// this.addChild(this.worldMap);

	}


	public handMouseEvent = (evt: SimpleMouseEvent) => {
		// console.log(evt.type);
		if (this.tt != null) {
			this.tt.handMouseMoveEvent(evt);
		}

		if (this.worldMap != null) {
			this.worldMap.handMouseEvent(evt);
		}
		if (this.register != null) {
			this.register.handMouseEvent(evt);
		}
	}


	public onKeyDown = (evt: KeyDownEvent) => {
		if (this.worldMap != null) {
			this.worldMap.onKeyDown(evt);
		}
		if (this.register != null) {
			this.register.onKeyDown(evt);
		}
	}


}
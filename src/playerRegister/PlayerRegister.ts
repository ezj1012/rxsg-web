class PlayerRegister extends egret.Sprite {

	worldMap: RegisterWorldMap;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private async onAddToStage(event: egret.Event) {
		RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
		await RES.loadConfig("resource/default.res.json", "resource/");
		await RES.loadGroup("simpleWorld");
	}

	private onGroupComplete() {
		this.worldMap = new RegisterWorldMap();
		this.worldMap.x = 335;
		this.worldMap.y = 64;

		this.addChild(this.worldMap);
	}


	public onMove = (evt: MouseMoveEvent) => {
		this.worldMap.onMove(evt);
	}

	public onKeyDown(e: KeyDownEvent) {
		this.worldMap.onKeyDown(e);
	}

	public onClick = (evt: egret.TouchEvent) => {
		this.worldMap.onClick(evt);
	}
}
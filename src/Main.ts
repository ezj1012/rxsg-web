class Main extends egret.DisplayObjectContainer {

    private meh: MouseEventHolder;
    private playerRegister: PlayerRegister;
    private cea: CanvasEventAdapter;


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private async onAddToStage(event: egret.Event) {
        // this.meh = new MouseEventHolder();
        this.cea = new CanvasEventAdapter(this);
        this.playerRegister = new PlayerRegister();
        this.addChild(this.playerRegister);

        this.addEventListener(KeyDownEvent.KEY_DOWN, this.onKeyDown, this);
        this.addEventListener(MouseMoveEvent.MOVE, this.playerRegister.onMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onClick, this);
        // RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        await RES.loadConfig("resource/default.res.json", "resource/");
        // await RES.loadGroup("simpleWorld");
    }

    private onKeyDown(e: KeyDownEvent) {
        this.playerRegister.onKeyDown(e);
    }
    private onClick = (evt: egret.TouchEvent) => {
        this.playerRegister.onClick(evt);
    }
    private onGroupComplete() {
        // this.playerRegister = new PlayerRegister();
        // this.addChild(img);
        // this.addChild(this.playerRegister);
        // let bckImg: egret.Bitmap = new egret.Bitmap();
        // bckImg.texture = RES.getRes("sanguo_map_png");
        // this.addChild(bckImg);
    }
}
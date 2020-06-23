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
        this.addEventListener(SimpleMouseEvent.MOVE, this.playerRegister.handMouseEvent, this);
        this.addEventListener(SimpleMouseEvent.DOWN, this.playerRegister.handMouseEvent, this);
        this.addEventListener(SimpleMouseEvent.UP, this.playerRegister.handMouseEvent, this);
        this.addEventListener(SimpleMouseEvent.CLICK, this.playerRegister.handMouseEvent, this);
        this.addEventListener(SimpleMouseEvent.WHEEL, this.playerRegister.handMouseEvent, this);
        await RES.loadConfig("resource/default.res.json", "resource/");
        
    }

    private onKeyDown(e: KeyDownEvent) {
        this.playerRegister.onKeyDown(e);
    }

    private onGroupComplete() {
  
    }
}
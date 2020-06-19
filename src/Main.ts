class Main extends egret.DisplayObjectContainer {

    private meh: MouseEventHolder;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private async onAddToStage(event: egret.Event) {
        this.meh = new MouseEventHolder();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("simpleWorld");
    }


    private onGroupComplete() {
        var img: egret.Bitmap = new egret.Bitmap();
        img.texture = RES.getRes("sanguo_map_png");

        this.addChild(img);
    }
}
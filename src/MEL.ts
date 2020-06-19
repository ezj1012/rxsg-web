class MEL {

    private ele: egret.DisplayObject;

    private inFun: Function;
    private outFun: Function;

    private moveInFlag: boolean;
    private started: boolean;
    public constructor(displayObject: egret.DisplayObject, inFun: Function, outFun: Function) {
        this.ele = displayObject;
        this.moveInFlag = false;
        this.inFun = inFun;
        this.outFun = outFun;
        this.started = false;
    }

    public onIn(p: mousemove.MousePoint) {
        console.log("onIn 1 = " + p.getX() + " " + p.getY());
        console.log("onIn 2 = " + this.ele.x + " " + this.ele.y);
        let mi: boolean = this.ele.hitTestPoint(p.getX(), p.getY(), true);
        console.log("碰撞结果"+mi);
        if (mi != this.moveInFlag || !this.started) {
            this.started = true;
            this.moveInFlag = mi;
            if (mi) {
                this.onMouseMoveIn();
            } else {
                this.onMouseMoveOut();
            }
        } 
    }

    public onMouseMoveIn() {
        if (this.inFun != null) {
            this.inFun(this.ele);
        }
    }

    public onMouseMoveOut() {
        if (this.outFun != null) {
            this.outFun(this.ele);
        }
    }

}
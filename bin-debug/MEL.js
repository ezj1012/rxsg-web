var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MEL = (function () {
    function MEL(displayObject, inFun, outFun) {
        this.ele = displayObject;
        this.moveInFlag = false;
        this.inFun = inFun;
        this.outFun = outFun;
        this.started = false;
    }
    MEL.prototype.onIn = function (p) {
        console.log("onIn 1 = " + p.getX() + " " + p.getY());
        console.log("onIn 2 = " + this.ele.x + " " + this.ele.y);
        var mi = this.ele.hitTestPoint(p.getX(), p.getY(), true);
        console.log("碰撞结果" + mi);
        if (mi != this.moveInFlag || !this.started) {
            this.started = true;
            this.moveInFlag = mi;
            if (mi) {
                this.onMouseMoveIn();
            }
            else {
                this.onMouseMoveOut();
            }
        }
    };
    MEL.prototype.onMouseMoveIn = function () {
        if (this.inFun != null) {
            this.inFun(this.ele);
        }
    };
    MEL.prototype.onMouseMoveOut = function () {
        if (this.outFun != null) {
            this.outFun(this.ele);
        }
    };
    return MEL;
}());
__reflect(MEL.prototype, "MEL");
//# sourceMappingURL=MEL.js.map
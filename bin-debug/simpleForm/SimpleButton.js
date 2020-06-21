var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SimpleButton = (function () {
    function SimpleButton(clickFun, icon, icon_on, icon_down) {
        this.icon = RES.getRes(icon);
        this.icon_on = RES.getRes(icon_on);
        this.icon_down = RES.getRes(icon_down);
        this.click = clickFun;
        this.img = new egret.Bitmap();
        this.img.texture = this.icon;
    }
    SimpleButton.prototype.getImg = function () {
        return this.img;
    };
    SimpleButton.prototype.handMouseMoveEvent = function (evt, shapeFlag) {
        if (shapeFlag === void 0) { shapeFlag = false; }
        if (evt.type == SimpleMouseEvent.MOVE) {
            if (this.img.hitTestPoint(evt.getX(), evt.getY(), shapeFlag)) {
                if (this.hoveFlag) {
                    return;
                }
                this.hoveFlag = true;
                this.img.texture = this.icon_on;
            }
            else {
                if (this.hoveFlag) {
                    this.hoveFlag = false;
                    this.img.texture = this.icon;
                }
            }
        }
        else if (evt.type == SimpleMouseEvent.DOWN) {
            if (this.hoveFlag) {
                this.img.texture = this.icon_down;
                //click
                if (this.click != null) {
                    this.click(evt);
                }
            }
        }
        else if (evt.type == SimpleMouseEvent.UP) {
            this.img.texture = this.hoveFlag ? this.icon_on : this.icon;
        }
    };
    SimpleButton.prototype.setPosition = function (x, y) {
        this.img.x = x;
        this.img.y = y;
    };
    SimpleButton.prototype.setRange = function (w, h) {
        this.img.width = w;
        this.img.height = h;
    };
    return SimpleButton;
}());
__reflect(SimpleButton.prototype, "SimpleButton");
//# sourceMappingURL=SimpleButton.js.map
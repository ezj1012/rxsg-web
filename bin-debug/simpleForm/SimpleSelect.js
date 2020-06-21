var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SimpleSelect = (function (_super) {
    __extends(SimpleSelect, _super);
    function SimpleSelect(upIcon, downIcon, data) {
        var _this = _super.call(this) || this;
        _this.downed = false;
        _this.data = data;
        _this.upIcon = RES.getRes(upIcon);
        _this.downIcon = RES.getRes(downIcon);
        _this.backImg = new egret.Bitmap();
        _this.backImg.texture = _this.upIcon;
        _this.addChild(_this.backImg);
        return _this;
    }
    SimpleSelect.prototype.getImg = function () {
        return this.backImg;
    };
    SimpleSelect.prototype.handMouseMoveEvent = function (evt, shapeFlag) {
        if (shapeFlag === void 0) { shapeFlag = false; }
        if (evt.type == SimpleMouseEvent.DOWN) {
            if (this.backImg.hitTestPoint(evt.getX(), evt.getY())) {
                if (this.downed) {
                    this.up();
                }
                else {
                    this.down();
                }
            }
            else {
                this.up();
            }
        }
    };
    SimpleSelect.prototype.up = function () {
        if (!this.downed) {
            return;
        }
        this.downed = false;
        this.backImg.texture = this.upIcon;
    };
    SimpleSelect.prototype.down = function () {
        if (this.downed) {
            return;
        }
        this.downed = true;
        this.backImg.texture = this.downIcon;
    };
    return SimpleSelect;
}(egret.Sprite));
__reflect(SimpleSelect.prototype, "SimpleSelect");
//# sourceMappingURL=SimpleSelect.js.map
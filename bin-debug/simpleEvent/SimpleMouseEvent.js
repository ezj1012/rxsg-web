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
var SimpleMouseEvent = (function (_super) {
    __extends(SimpleMouseEvent, _super);
    function SimpleMouseEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    SimpleMouseEvent.prototype.setValue = function (x, y) {
        this.x = x;
        this.y = y;
    };
    SimpleMouseEvent.prototype.getX = function () {
        return this.x;
    };
    SimpleMouseEvent.prototype.getY = function () {
        return this.y;
    };
    SimpleMouseEvent.MOVE = "MOVE";
    SimpleMouseEvent.DOWN = "DOWN";
    SimpleMouseEvent.UP = "UP";
    SimpleMouseEvent.CLICK = "CLICK";
    return SimpleMouseEvent;
}(egret.Event));
__reflect(SimpleMouseEvent.prototype, "SimpleMouseEvent");
//# sourceMappingURL=SimpleMouseEvent.js.map
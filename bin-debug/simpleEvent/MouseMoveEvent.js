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
var MouseMoveEvent = (function (_super) {
    __extends(MouseMoveEvent, _super);
    function MouseMoveEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    MouseMoveEvent.prototype.setValue = function (x, y) {
        this.x = x;
        this.y = y;
    };
    MouseMoveEvent.prototype.getX = function () {
        return this.x;
    };
    MouseMoveEvent.prototype.getY = function () {
        return this.y;
    };
    MouseMoveEvent.MOVE = "MOVE";
    return MouseMoveEvent;
}(egret.Event));
__reflect(MouseMoveEvent.prototype, "MouseMoveEvent");
//# sourceMappingURL=MouseMoveEvent.js.map
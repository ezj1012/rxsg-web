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
var KeyDownEvent = (function (_super) {
    __extends(KeyDownEvent, _super);
    function KeyDownEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    KeyDownEvent.prototype.setValue = function (evt) {
        this.evt = evt;
    };
    KeyDownEvent.prototype.getEvt = function () {
        return this.evt;
    };
    KeyDownEvent.KEY_DOWN = "KEY_DOWN";
    return KeyDownEvent;
}(egret.Event));
__reflect(KeyDownEvent.prototype, "KeyDownEvent");
//# sourceMappingURL=KeyDownEvent.js.map
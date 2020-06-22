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
var RxsgSelect = (function (_super) {
    __extends(RxsgSelect, _super);
    function RxsgSelect(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    RxsgSelect.prototype.refreshView = function () {
        if (this.openSelect) {
            this.addChild(this.list);
        }
        else {
            this.removeChild(this.list);
        }
    };
    return RxsgSelect;
}(egret.Sprite));
__reflect(RxsgSelect.prototype, "RxsgSelect");
//# sourceMappingURL=RxsgSelect.js.map
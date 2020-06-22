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
var RxsgSelectList = (function (_super) {
    __extends(RxsgSelectList, _super);
    function RxsgSelectList() {
        var _this = _super.call(this) || this;
        _this.up = RES.getRes("combobox_list_up_png");
        _this.down = RES.getRes("combobox_list_down_png");
        _this.box_ctrl = RES.getRes("combobox_list_ctrl_png");
        _this.cImg = new egret.Bitmap(RES.getRes("combobox_list_png"));
        _this.upImg = new egret.Bitmap(_this.up);
        _this.downImg = new egret.Bitmap(_this.up);
        _this.ctrlImg = new egret.Bitmap(_this.box_ctrl);
        _this.ctrFilter = new egret.GlowFilter(0x33CCFF);
        _this.ctrlImg.filters = [_this.ctrFilter];
        _this.updatePosition();
        _this.addChild(_this.cImg);
        _this.addChild(_this.upImg);
        _this.addChild(_this.downImg);
        _this.addChild(_this.ctrlImg);
        return _this;
    }
    RxsgSelectList.prototype.setH = function (h) {
        this.height = h;
        this.cImg.height = h;
        this.updatePosition();
    };
    RxsgSelectList.prototype.setSize = function (w, h) {
        this.width = w;
        this.height = h;
    };
    RxsgSelectList.prototype.updatePosition = function () {
        this.upImg.x = this.cImg.x + 2;
        this.upImg.y = this.cImg.y + 2;
        this.downImg.x = this.cImg.x + 2;
        this.downImg.y = this.cImg.y + this.cImg.height - 2 - this.downImg.height;
        this.ctrlImg.x = this.cImg.x + 2;
        this.ctrlImg.y = this.cImg.x + 16;
        console.log(this.upImg.x + " ," + this.upImg.y + ", " + this.downImg.x + "," + this.downImg.y);
    };
    return RxsgSelectList;
}(egret.Sprite));
__reflect(RxsgSelectList.prototype, "RxsgSelectList");
//# sourceMappingURL=RxsgSelectList.js.map
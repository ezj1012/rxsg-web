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
        _this.updateSelected = function () {
            if (_this.openSelect) {
                _this.openSelect = false;
                _this.removeChild(_this.list);
            }
            _this.bImg.texture = _this.down;
            var idx = _this.list.getSelected();
            _this.text.text = _this.datas[idx];
        };
        _this.datas = data;
        _this.datas = [
            "随机", "司隶", "冀州", "豫州", "兖州", "徐州", "青州", "荆州", "扬州", "益州", "凉州", "并州", "幽州", "交州"
        ];
        _this.width = 145;
        _this.list = new RxsgSelectList(_this.datas, _this.updateSelected);
        _this.list.y = 26;
        _this.up = RES.getRes("combobox_up_png");
        _this.down = RES.getRes("combobox_down_png");
        _this.bImg = new egret.Bitmap(_this.up);
        _this.text = new egret.TextField();
        _this.text.background = true;
        _this.text.backgroundColor = 0x1A231D;
        _this.text.size = 12;
        _this.text.textColor = 0xF3E29E;
        _this.text.textAlign = egret.HorizontalAlign.CENTER;
        _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.updatePosistion();
        _this.updateSelected();
        _this.addChild(_this.bImg);
        _this.addChild(_this.text);
        return _this;
    }
    RxsgSelect.prototype.updatePosistion = function () {
        this.bImg.width = this.width;
        this.text.x = 3;
        this.text.y = 2;
        this.text.width = this.bImg.width - 29;
        this.text.height = this.bImg.height - 4;
    };
    RxsgSelect.prototype.handMouseMoveEvent = function (evt, shapeFlag) {
        if (shapeFlag === void 0) { shapeFlag = false; }
        if (evt.type == SimpleMouseEvent.DOWN) {
            if (this.bImg.hitTestPoint(evt.getX(), evt.getY())) {
                this.reversalView();
            }
        }
        if (this.openSelect) {
            this.bImg.texture = this.down;
            this.list.handMouseMoveEvent(evt, shapeFlag);
        }
        else {
            this.bImg.texture = this.up;
        }
    };
    RxsgSelect.prototype.reversalView = function () {
        this.openSelect = !this.openSelect;
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
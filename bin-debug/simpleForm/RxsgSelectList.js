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
        _this.ctrlOY = 0;
        _this.ctrlOneY = 0;
        _this.selectIdx = 0;
        _this.selectedBC = 0x1D3E28;
        _this.selectHoveBC = 0x35483B;
        _this.moveInIdx = -1; //从0开始
        _this.onUpClick = function () {
            _this.updateList(_this.getShowDataByIdx(_this.displayStartIdx - 1));
            _this.ctrlOY = _this.ctrlOneY * _this.displayStartIdx;
            _this.updateCtrlPosistion();
        };
        _this.onDownClick = function () {
            _this.updateList(_this.getShowDataByIdx(_this.displayStartIdx + 1));
            _this.ctrlOY = _this.ctrlOneY * _this.displayStartIdx;
            _this.updateCtrlPosistion();
        };
        _this.datas = [
            "随机", "司隶", "冀州", "豫州", "兖州", "徐州", "青州", "荆州", "扬州", "益州", "凉州", "并州", "幽州", "交州"
        ];
        var showSize = 7;
        if (showSize > _this.datas.length) {
            showSize = _this.datas.length;
        }
        _this.showSize = showSize;
        _this.width = 145;
        _this.height = showSize * RxsgSelectList.itemHeight + 2;
        _this.up = RES.getRes("combobox_list_up_png");
        _this.down = RES.getRes("combobox_list_down_png");
        _this.box_ctrl = RES.getRes("combobox_list_ctrl_png");
        _this.backImg = new egret.Bitmap(RES.getRes("box_border_one_p_png"));
        _this.cImg = new egret.Bitmap(RES.getRes("combobox_list_png"));
        _this.upImg = new egret.Bitmap(_this.up);
        _this.downImg = new egret.Bitmap(_this.up);
        _this.ctrlImg = new egret.Bitmap(_this.box_ctrl);
        _this.ctrFilter = [];
        _this.ctrFilter.push(new egret.GlowFilter(0x33CCFF));
        // this.ctrlImg.filters = this.ctrFilter;
        //显示选择框文字
        _this.showItems = [];
        for (var i = 0; i < _this.showSize; i++) {
            var tf = new egret.TextField();
            tf.size = 12;
            tf.textColor = 0xF3E29E;
            tf.textAlign = egret.HorizontalAlign.CENTER;
            tf.verticalAlign = egret.VerticalAlign.MIDDLE;
            tf.height = RxsgSelectList.itemHeight;
            tf.y = 2 + i * RxsgSelectList.itemHeight;
            _this.showItems.push(tf);
        }
        _this.updateList(_this.getShowData());
        _this.updatePosition();
        _this.addChild(_this.backImg);
        _this.addChild(_this.cImg);
        _this.addChild(_this.upImg);
        _this.addChild(_this.downImg);
        _this.addChild(_this.ctrlImg);
        for (var i = 0; i < _this.showSize; i++) {
            _this.addChild(_this.showItems[i]);
        }
        return _this;
    }
    RxsgSelectList.prototype.getShowDataByIdx = function (idx) {
        var result = [];
        if (idx <= 0) {
            idx = 0;
        }
        if (idx + this.showSize >= this.datas.length) {
            idx = this.datas.length - this.showSize;
        }
        if (idx <= 0) {
            idx = 0;
        }
        this.displayStartIdx = idx;
        for (var i = idx; i < idx + this.showSize; i++) {
            result.push(this.datas[i]);
        }
        return result;
    };
    RxsgSelectList.prototype.getShowData = function () {
        var sIdx = 0;
        var result = [];
        if (this.selectIdx == 0) {
            sIdx = 0;
        }
        else if (this.selectIdx + this.showSize < this.datas.length) {
            sIdx = this.selectIdx + 1;
        }
        else {
            sIdx = this.datas.length - this.showSize;
        }
        this.displayStartIdx = sIdx;
        for (var i = sIdx; i < sIdx + this.showSize; i++) {
            result.push(this.datas[i]);
        }
        return result;
    };
    RxsgSelectList.prototype.updateList = function (showDatas) {
        for (var i = 0; i < this.showSize; i++) {
            this.showItems[i].text = showDatas[i];
            if (i + this.displayStartIdx == this.selectIdx) {
                this.showItems[i].background = true;
                this.showItems[i].backgroundColor = this.selectedBC;
            }
            else {
                this.showItems[i].background = false;
            }
        }
    };
    RxsgSelectList.prototype.handMouseMoveEvent = function (evt, shapeFlag) {
        if (shapeFlag === void 0) { shapeFlag = false; }
        if (evt.type == SimpleMouseEvent.MOVE) {
            var ox = evt.getX() - this.x;
            var oy = evt.getY() - this.y - 1;
            if (ox > 0 && ox < this.width - 18 &&
                oy > 0 && oy < this.height - 1) {
                var f = Math.floor(oy / RxsgSelectList.itemHeight);
                if (f == this.moveInIdx) {
                    return;
                }
                this.restoreBack(this.moveInIdx);
                this.showItems[f].background = true;
                this.showItems[f].backgroundColor = this.selectHoveBC;
                this.moveInIdx = f;
            }
            else {
                this.restoreBack(this.moveInIdx);
            }
            if (this.ctrlImg.hitTestPoint(evt.getX(), evt.getY())) {
                if (!this.ctrlHove) {
                    this.ctrlHove = true;
                    this.ctrlImg.filters = this.ctrFilter;
                }
                if (this.ctrlCanMove) {
                    this.moveCtrl(evt.getY() - this.ctrlStartY);
                    this.ctrlStartY = evt.getY();
                }
            }
            else {
                this.restoreCtrl();
            }
        }
        else if (evt.type == SimpleMouseEvent.DOWN) {
            if (this.ctrlHove) {
                this.ctrlCanMove = true;
                this.ctrlStartY = evt.getY();
                return;
            }
            if (!this.upClick && this.upImg.hitTestPoint(evt.getX(), evt.getY())) {
                this.upImg.texture = this.down;
                this.upClick = true;
                return;
            }
            if (!this.downClick && this.downImg.hitTestPoint(evt.getX(), evt.getY())) {
                this.downImg.texture = this.down;
                this.downClick = true;
                return;
            }
        }
        else if (evt.type == SimpleMouseEvent.UP) {
            this.ctrlCanMove = false;
            if (this.upClick) {
                this.upImg.texture = this.up;
                this.upClick = false;
                this.onUpClick();
                return;
            }
            if (this.downClick) {
                this.downImg.texture = this.up;
                this.downClick = false;
                this.onDownClick();
                return;
            }
        }
    };
    RxsgSelectList.prototype.setH = function (h) {
        this.height = h;
        this.updatePosition();
    };
    RxsgSelectList.prototype.setSize = function (w, h) {
        this.width = w;
        this.height = h;
    };
    RxsgSelectList.prototype.moveCtrl = function (move) {
        var moved = false;
        if (move < 0) {
            var tt = this.ctrlOY + move < 0 ? 0 : this.ctrlOY + move;
            moved = tt != this.ctrlOY;
            this.ctrlOY = tt;
        }
        else {
            var t = this.cImg.height - 32 - this.ctrlImg.height;
            var tt = this.ctrlOY + move > t ? t : this.ctrlOY + move;
            moved = tt != this.ctrlOY;
            this.ctrlOY = tt;
        }
        var newIdx = Math.floor(this.ctrlOY / this.ctrlOneY);
        // if (this.displayStartIdx != newIdx) {
        this.updateList(this.getShowDataByIdx(newIdx));
        // }
        this.updateCtrlPosistion();
        return moved;
    };
    RxsgSelectList.prototype.updatePosition = function () {
        this.backImg.x = 0;
        this.backImg.y = 0;
        this.backImg.width = this.width;
        this.backImg.height = this.height;
        this.cImg.height = this.height - 2;
        this.cImg.y = this.y + 1;
        this.cImg.x = this.x + this.width - 1 - this.cImg.width;
        this.upImg.x = this.cImg.x + 2;
        this.upImg.y = this.cImg.y + 2;
        this.downImg.x = this.cImg.x + 2;
        this.downImg.y = this.cImg.y + this.cImg.height - 2 - this.downImg.height;
        this.ctrlImg.x = this.cImg.x + 2;
        this.ctrlOneY = (this.cImg.height - 32 - this.ctrlImg.height) / (this.datas.length - this.showSize);
        for (var i = 0; i < this.showSize; i++) {
            this.showItems[i].x = this.x + 1;
            this.showItems[i].width = this.width - 18;
        }
        this.updateCtrlPosistion();
    };
    RxsgSelectList.prototype.updateCtrlPosistion = function () {
        this.ctrlImg.y = this.cImg.y + 16 + this.ctrlOY;
    };
    RxsgSelectList.prototype.restoreBack = function (idx) {
        if (this.moveInIdx >= 0 && this.moveInIdx < this.showSize) {
            if (idx + this.displayStartIdx == this.selectIdx) {
                this.showItems[idx].backgroundColor = this.selectedBC;
            }
            else {
                this.showItems[idx].background = false;
            }
        }
    };
    RxsgSelectList.prototype.restoreCtrl = function () {
        if (this.ctrlHove) {
            this.ctrlImg.filters = null;
        }
        this.ctrlHove = false;
        this.ctrlCanMove = false;
    };
    RxsgSelectList.itemHeight = 22;
    return RxsgSelectList;
}(egret.Sprite));
__reflect(RxsgSelectList.prototype, "RxsgSelectList");
//# sourceMappingURL=RxsgSelectList.js.map
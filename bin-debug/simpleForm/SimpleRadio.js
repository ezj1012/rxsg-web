var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SimpleRadio = (function () {
    function SimpleRadio(clickFun, icon, icon_on, icon_down, disableCancel) {
        if (disableCancel === void 0) { disableCancel = false; }
        this.icon = RES.getRes(icon);
        this.icon_on = RES.getRes(icon_on);
        this.icon_down = RES.getRes(icon_down);
        this.click = clickFun;
        this.disableCancel = disableCancel;
        this.img = new egret.Bitmap();
        this.img.texture = this.icon;
    }
    SimpleRadio.prototype.getImg = function () {
        return this.img;
    };
    SimpleRadio.prototype.getText = function () {
        if (this.text == null) {
            this.text = new egret.TextField();
        }
        return this.text;
    };
    /**
     * @return true被选中,false未被选中
     */
    SimpleRadio.prototype.isSelected = function () {
        return this.selectedFlag;
    };
    SimpleRadio.prototype.changeSelect = function (s) {
        if (s == this.selectedFlag) {
            return;
        }
        this.selectedFlag = s;
        if (this.selectedFlag) {
            this.img.texture = this.icon_on;
        }
        else {
            this.img.texture = this.hoveFlag ? this.icon_on : this.icon;
        }
    };
    SimpleRadio.prototype.setText = function (text, size, color) {
        var t = this.getText();
        t.text = text;
        t.size = size;
        t.textColor = color;
        t.x = this.img.x + this.img.width + 3;
        t.y = this.img.y + (this.img.height - this.text.height) / 2;
        return t;
    };
    SimpleRadio.prototype.handMouseMoveEvent = function (evt, shapeFlag) {
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
                    this.img.texture = this.selectedFlag ? this.icon_on : this.icon;
                }
            }
        }
        else if (evt.type == SimpleMouseEvent.DOWN) {
            if (this.hoveFlag) {
                this.img.texture = this.icon_down;
                if (this.selectedFlag && this.disableCancel) {
                    return;
                }
                this.selectedFlag = !this.selectedFlag;
                //click
                if (this.click != null) {
                    this.click(evt, this.selectedFlag, this);
                }
            }
        }
        else if (evt.type == SimpleMouseEvent.UP) {
            this.img.texture = this.hoveFlag || this.selectedFlag ? this.icon_on : this.icon;
        }
    };
    SimpleRadio.prototype.setPosition = function (x, y) {
        this.img.x = x;
        this.img.y = y;
    };
    SimpleRadio.prototype.setRange = function (w, h) {
        this.img.width = w;
        this.img.height = h;
    };
    return SimpleRadio;
}());
__reflect(SimpleRadio.prototype, "SimpleRadio");
//# sourceMappingURL=SimpleRadio.js.map
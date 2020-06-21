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
var RegisterWorldMap = (function (_super) {
    __extends(RegisterWorldMap, _super);
    function RegisterWorldMap() {
        var _this = _super.call(this) || this;
        _this.idx = 0;
        _this.disIdx = -1;
        _this.itemName = [
            "yuzhou_png", "yunzhou_png", "youzhou_png", "yizhou_png", "yangzhou_png", "xuzhou_png", "silv_png", "qingzhou_png", "liangzhou_png", "jizhou_png", "jingzhou_png", "jiaozhou_png", "bingzhou_png"
        ];
        _this.itemIdx = [[327, 185], [369, 149], [354, 0], [33, 214], [368, 233], [416, 178], [203, 153], [423, 116], [-5, 2], [356, 84], [248, 229], [128, 356], [213, 40]];
        _this.lc = [];
        _this.itemImg = [];
        _this.handMouseEvent = function (evt) {
            if (evt.type == SimpleMouseEvent.MOVE) {
                var x = evt.getX();
                var y = evt.getY();
                if (x < 335 || x > 950 || y < 64 || y > 560) {
                    if (_this.disIdx != -1) {
                        _this.itemImg[_this.disIdx].alpha = 0;
                    }
                    return;
                }
                var pIdx = -1;
                for (var i = 0; i < _this.itemName.length; i++) {
                    var img2 = _this.itemImg[i];
                    if (img2.hitTestPoint(x, y, true)) {
                        pIdx = i;
                        break;
                    }
                }
                _this.disIdx = pIdx;
                for (var i = 0; i < _this.itemName.length; i++) {
                    _this.itemImg[i].alpha = i == pIdx ? 1 : 0;
                }
            }
        };
        _this.onClick = function (evt) {
            // this.si.alpha = 1;
            // if (!this.lc[this.idx]) {
            // 	this.si.x = evt.localX - 355;
            // 	this.si.y = evt.localY - 64;
            // }
        };
        _this.createSc();
        return _this;
    }
    RegisterWorldMap.prototype.createSc = function () {
        this.bckImg = new egret.Bitmap();
        this.bckImg.texture = RES.getRes("sanguo_map_png");
        this.addChild(this.bckImg);
        for (var i = 0; i < this.itemName.length; i++) {
            var img2 = new egret.Bitmap();
            img2.texture = RES.getRes(this.itemName[i]);
            img2.x = this.itemIdx[i][0];
            img2.y = this.itemIdx[i][1];
            img2.alpha = 0;
            this.itemImg.push(img2);
            this.addChild(img2);
            this.lc.push(false);
        }
        this.si = this.itemImg[this.idx];
        // this.addEventListener(egret.Event)
        // this.meh.addEventListener(img2, (egretEle: egret.DisplayObject) => {
        // 	console.log("aaaa" + egretEle.x);
        // }, (egretEle: egret.DisplayObject) => {
        // 	console.log("bbbbb" + egretEle.y);
        // });
    };
    RegisterWorldMap.prototype.onKeyDown = function (e) {
        if (e)
            return;
        // console.log("aaaa");
        // console.log(e);
        var keyCode = e.getEvt().keyCode;
        switch (keyCode) {
            case 38: {
                if (this.lc[this.idx]) {
                    break;
                }
                this.si.y -= 1;
                break;
            }
            case 40: {
                if (this.lc[this.idx]) {
                    break;
                }
                this.si.y += 1;
                break;
            }
            case 37: {
                if (this.lc[this.idx]) {
                    break;
                }
                this.si.x -= 1;
                break;
            }
            case 39: {
                if (this.lc[this.idx]) {
                    break;
                }
                this.si.x += 1;
                break;
            }
            case 65: {
                //a 换一个元素
                var oldName = this.itemName[this.idx];
                this.idx -= 1;
                if (this.idx < 0) {
                    this.idx = this.itemImg.length - 1;
                }
                this.si = this.itemImg[this.idx];
                console.log("从" + oldName + "切换到" + this.itemName[this.idx] + "当前锁[" + this.lc[this.idx] + "]");
                break;
            }
            case 69: {
                this.lc[this.idx] = !this.lc[this.idx];
                this.itemName[this.idx] + "当前锁[" + this.lc[this.idx] + "]";
                break;
            }
            case 83: {
                console.log(this.itemName[this.idx] + " " + this.idx);
                console.log("[" + this.si.x + "," + this.si.y + "]");
                break;
            }
            case 81: {
                var aa = "[";
                for (var i = 0; i < this.itemName.length; i++) {
                    var t = this.itemImg[i];
                    aa += "[" + t.x + "," + t.y + "]";
                }
                console.log(aa);
                break;
            }
            case 68: {
                //d 换一个元素
                var oldName = this.itemName[this.idx];
                this.idx += 1;
                if (this.idx >= this.itemImg.length) {
                    this.idx = 0;
                }
                this.si = this.itemImg[this.idx];
                console.log("从" + oldName + "切换到" + this.itemName[this.idx] + "当前锁[" + this.lc[this.idx] + "]");
                break;
            }
        }
    };
    return RegisterWorldMap;
}(egret.Sprite));
__reflect(RegisterWorldMap.prototype, "RegisterWorldMap");
//# sourceMappingURL=RegisterWorldMap.js.map
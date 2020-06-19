var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MouseEventHolder = (function () {
    function MouseEventHolder() {
        var _this = this;
        this.mels = [];
        this.onMove = function (evt) {
            if (_this.mels.length == 0) {
                return;
            }
            var temp = _this.getPoint(evt.currentTarget, evt.x, evt.y);
            for (var i = 0; i < _this.mels.length; i++) {
                var mel = _this.mels[i];
                mel.onIn(temp);
            }
        };
        this.canvas = document.getElementsByTagName("CANVAS")[0];
        this.canvas.addEventListener('mousemove', this.onMove);
    }
    MouseEventHolder.prototype.addEventListener = function (egretEle, moveIn, moveOut) {
        this.mels.push(new MEL(egretEle, moveIn, moveOut));
    };
    MouseEventHolder.prototype.getPoint = function (canvas, x, y) {
        var style = window.getComputedStyle(canvas, null);
        var rect = canvas.getBoundingClientRect();
        var xx = (x - rect.left) * (canvas.width / parseFloat(style['width']));
        var yy = (y - rect.top) * (canvas.height / parseFloat(style['height']));
        return new mousemove.MousePoint(xx, yy);
    };
    return MouseEventHolder;
}());
__reflect(MouseEventHolder.prototype, "MouseEventHolder");
//# sourceMappingURL=MouseEventHolder.js.map
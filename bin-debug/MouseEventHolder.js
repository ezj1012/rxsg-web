var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MouseEventHolder = (function () {
    function MouseEventHolder() {
        var _this = this;
        this.onMove = function (evt) {
            var temp = _this.getPoint(evt.currentTarget, evt.x, evt.y);
            console.log(temp);
        };
        this.canvas = document.getElementsByTagName("CANVAS")[0];
        this.canvas.addEventListener('mousemove', this.onMove);
    }
    MouseEventHolder.prototype.getPoint = function (canvas, x, y) {
        var style = window.getComputedStyle(canvas, null);
        var rect = canvas.getBoundingClientRect();
        return {
            x: (x - rect.left) * (canvas.width / parseFloat(style['width'])),
            y: (y - rect.top) * (canvas.height / parseFloat(style['height']))
        };
    };
    return MouseEventHolder;
}());
__reflect(MouseEventHolder.prototype, "MouseEventHolder");
//# sourceMappingURL=MouseEventHolder.js.map
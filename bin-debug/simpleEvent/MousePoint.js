var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mousemove;
(function (mousemove) {
    var MousePoint = (function () {
        function MousePoint(x, y) {
            this.x = x;
            this.y = y;
        }
        MousePoint.prototype.getX = function () {
            return this.x;
        };
        MousePoint.prototype.getY = function () {
            return this.y;
        };
        return MousePoint;
    }());
    mousemove.MousePoint = MousePoint;
    __reflect(MousePoint.prototype, "mousemove.MousePoint");
})(mousemove || (mousemove = {}));
//# sourceMappingURL=MousePoint.js.map
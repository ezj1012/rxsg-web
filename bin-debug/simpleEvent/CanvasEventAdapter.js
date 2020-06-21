var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CanvasEventAdapter = (function () {
    function CanvasEventAdapter(container) {
        var _this = this;
        this.onKeyDown = function (e) {
            // console.log(e);
            var temp = new KeyDownEvent(KeyDownEvent.KEY_DOWN);
            temp.setValue(e);
            _this.container.dispatchEvent(temp);
        };
        this.onMove = function (evt) {
            var temp = _this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.MOVE);
            _this.container.dispatchEvent(temp);
        };
        this.onDown = function (evt) {
            var temp = _this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.DOWN);
            _this.container.dispatchEvent(temp);
        };
        this.onUp = function (evt) {
            var temp = _this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.UP);
            _this.container.dispatchEvent(temp);
        };
        this.onClick = function (evt) {
            var temp = _this.getPoint(evt.currentTarget, evt.x, evt.y, SimpleMouseEvent.CLICK);
            _this.container.dispatchEvent(temp);
        };
        this.container = container;
        this.canvas = document.getElementsByTagName("CANVAS")[0];
        this.canvas.addEventListener('mousemove', this.onMove);
        this.canvas.addEventListener('mousedown', this.onDown);
        this.canvas.addEventListener('mouseup', this.onUp);
        this.canvas.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeyDown);
    }
    CanvasEventAdapter.prototype.getPoint = function (canvas, x, y, evtType) {
        var style = window.getComputedStyle(canvas, null);
        var rect = canvas.getBoundingClientRect();
        var xx = (x - rect.left) * (canvas.width / parseFloat(style['width']));
        var yy = (y - rect.top) * (canvas.height / parseFloat(style['height']));
        var t = new SimpleMouseEvent(evtType);
        t.setValue(xx, yy);
        return t;
    };
    return CanvasEventAdapter;
}());
__reflect(CanvasEventAdapter.prototype, "CanvasEventAdapter");
//# sourceMappingURL=CanvasEventAdapter.js.map
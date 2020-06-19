class MyGrid extends egret.Shape {
    public constructor() {
        super();
        this.drawGrid();
    }

    private drawGrid() {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
    }
}
class RxsgSelect extends egret.Sprite {
	private data: Array<string>;
	private selectIdx: number;
	private openSelect: boolean;
	private list: RxsgSelectList;

	public constructor(data: Array<string>) {
		super();
		this.data = data;

	}

	public refreshView() {

		if(this.openSelect) {
			this.addChild(this.list);
		} else {
			this.removeChild(this.list);
		}
	}
	
}
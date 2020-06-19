module mousemove {
	export class MousePoint {

		x: number;
		y: number;
		public constructor(x: number, y: number) {
			this.x = x;
			this.y = y;
		}

		public getX(): number {
			return this.x;
		}

		public getY(): number {
			return this.y;
		}

	}
}
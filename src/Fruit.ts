enum FruitType {
	None, Fruit1, Fruit2, Fruit3
}
class Fruit extends eui.Image{
	public constructor(type:FruitType, speed: number) {
		super();
		this.fruitType = type;
		this.speed = speed;
	}
	public width: number;
	public height: number;
	public speed: number;
	public hp: number;
	public score: number;
	public isRectangle: boolean;
	public rectangleArea: Array<myRectangle>;
	
	private _fruitType : FruitType;
	public get fruitType() : FruitType {
		return this._fruitType;
	}
	public set fruitType(v : FruitType) {
		this._fruitType = v;
		this.source = RES.getRes(`fruit_${<number>v}_png`);
		this.width = GameVar.FruitWidth[<number>v];
		this.height = GameVar.FruitHeight[<number>v];
		this.hp = GameVar.FruitHP[<number>v];
		this.score = GameVar.FruitScore[<number>v];
		this.isRectangle = GameVar.FruitRectangle[<number>v];
		this.rectangleArea = GameVar.FruitRectangleArray[<number>v];
	}
	
}
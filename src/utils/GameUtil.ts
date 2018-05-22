class GameUtil {
	public constructor() {
	}

	public static hitTestFruitAir(fruit:Fruit, air:Aircraft):boolean
	{
		if (fruit.isRectangle) {
			for (let rectangle1 of fruit.rectangleArea) {
				for (let rectangle2 of GameVar.AirRectangle) {
					let rect1:egret.Rectangle = new egret.Rectangle(fruit.x + rectangle1.x, fruit.y + rectangle1.y, rectangle1.width, rectangle1.height);
					let rect2:egret.Rectangle = new egret.Rectangle(air.x + rectangle2.x, air.y + rectangle2.y, rectangle2.width, rectangle2.height);
					if(rect1.intersects(rect2)) {
						return true;
					}
				}
			}
			return false;
		}
		else {
			return this.hitTestObjAir(fruit, air);
		}
    }

	public static hitTestObjAir(obj1:egret.DisplayObject, air:Aircraft):boolean
	{
		let rect1:egret.Rectangle = new egret.Rectangle(obj1.x, obj1.y, obj1.width, obj1.height);
		for (let rectangle2 of GameVar.AirRectangle) {
			let rect2:egret.Rectangle = new egret.Rectangle(air.x + rectangle2.x, air.y + rectangle2.y, rectangle2.width, rectangle2.height);
			if(rect1.intersects(rect2)) {
				return true;
			}
		}
		return false;
    }

	public static hitTestFruitObj(fruit:Fruit, obj2:egret.DisplayObject):boolean
	{
		if (fruit.isRectangle) {
			let rect2:egret.Rectangle = new egret.Rectangle(obj2.x, obj2.y, obj2.width, obj2.height);
			for (let rectangle1 of fruit.rectangleArea) {
				let rect1:egret.Rectangle = new egret.Rectangle(fruit.x + rectangle1.x, fruit.y + rectangle1.y, rectangle1.width, rectangle1.height);
				if(rect1.intersects(rect2)) {
					return true;
				}
			}
			return false;
		} else {
			return this.hitTest(fruit, obj2);
		}
    }

	public static hitTest(obj1:egret.DisplayObject,obj2:egret.DisplayObject):boolean
	{
		var rect1:egret.Rectangle = new egret.Rectangle(obj1.x, obj1.y, obj1.width, obj1.height)
		var rect2:egret.Rectangle = new egret.Rectangle(obj2.x, obj2.y, obj2.width, obj2.height)
		return rect1.intersects(rect2);
    }
}
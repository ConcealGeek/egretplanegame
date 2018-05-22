var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtil = (function () {
    function GameUtil() {
    }
    GameUtil.hitTestFruitAir = function (fruit, air) {
        if (fruit.isRectangle) {
            for (var _i = 0, _a = fruit.rectangleArea; _i < _a.length; _i++) {
                var rectangle1 = _a[_i];
                for (var _b = 0, _c = GameVar.AirRectangle; _b < _c.length; _b++) {
                    var rectangle2 = _c[_b];
                    var rect1 = new egret.Rectangle(fruit.x + rectangle1.x, fruit.y + rectangle1.y, rectangle1.width, rectangle1.height);
                    var rect2 = new egret.Rectangle(air.x + rectangle2.x, air.y + rectangle2.y, rectangle2.width, rectangle2.height);
                    if (rect1.intersects(rect2)) {
                        return true;
                    }
                }
            }
            return false;
        }
        else {
            return this.hitTestObjAir(fruit, air);
        }
    };
    GameUtil.hitTestObjAir = function (obj1, air) {
        var rect1 = new egret.Rectangle(obj1.x, obj1.y, obj1.width, obj1.height);
        for (var _i = 0, _a = GameVar.AirRectangle; _i < _a.length; _i++) {
            var rectangle2 = _a[_i];
            var rect2 = new egret.Rectangle(air.x + rectangle2.x, air.y + rectangle2.y, rectangle2.width, rectangle2.height);
            if (rect1.intersects(rect2)) {
                return true;
            }
        }
        return false;
    };
    GameUtil.hitTestFruitObj = function (fruit, obj2) {
        if (fruit.isRectangle) {
            var rect2 = new egret.Rectangle(obj2.x, obj2.y, obj2.width, obj2.height);
            for (var _i = 0, _a = fruit.rectangleArea; _i < _a.length; _i++) {
                var rectangle1 = _a[_i];
                var rect1 = new egret.Rectangle(fruit.x + rectangle1.x, fruit.y + rectangle1.y, rectangle1.width, rectangle1.height);
                if (rect1.intersects(rect2)) {
                    return true;
                }
            }
            return false;
        }
        else {
            return this.hitTest(fruit, obj2);
        }
    };
    GameUtil.hitTest = function (obj1, obj2) {
        var rect1 = new egret.Rectangle(obj1.x, obj1.y, obj1.width, obj1.height);
        var rect2 = new egret.Rectangle(obj2.x, obj2.y, obj2.width, obj2.height);
        return rect1.intersects(rect2);
    };
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");
//# sourceMappingURL=GameUtil.js.map
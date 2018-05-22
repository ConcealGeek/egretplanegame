var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FruitType;
(function (FruitType) {
    FruitType[FruitType["None"] = 0] = "None";
    FruitType[FruitType["Fruit1"] = 1] = "Fruit1";
    FruitType[FruitType["Fruit2"] = 2] = "Fruit2";
    FruitType[FruitType["Fruit3"] = 3] = "Fruit3";
})(FruitType || (FruitType = {}));
var Fruit = (function (_super) {
    __extends(Fruit, _super);
    function Fruit(type, speed) {
        var _this = _super.call(this) || this;
        _this.fruitType = type;
        _this.speed = speed;
        return _this;
    }
    Object.defineProperty(Fruit.prototype, "fruitType", {
        get: function () {
            return this._fruitType;
        },
        set: function (v) {
            this._fruitType = v;
            this.source = RES.getRes("fruit_" + v + "_png");
            this.width = GameVar.FruitWidth[v];
            this.height = GameVar.FruitHeight[v];
            this.hp = GameVar.FruitHP[v];
            this.score = GameVar.FruitScore[v];
            this.isRectangle = GameVar.FruitRectangle[v];
            this.rectangleArea = GameVar.FruitRectangleArray[v];
        },
        enumerable: true,
        configurable: true
    });
    return Fruit;
}(eui.Image));
__reflect(Fruit.prototype, "Fruit");
//# sourceMappingURL=Fruit.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameVar = (function () {
    function GameVar() {
    }
    GameVar.changeSpeed = function (score) {
        if (score > 3) {
            this.FruitBirthSpeed = 2;
        }
        if (score > 10) {
            this.FruitBirthSpeed = 1;
        }
    };
    GameVar.stageWidth = 750; //舞台宽度
    GameVar.stageHeight = 1334; //舞台高度
    GameVar.bulletWidth = 29; //子弹宽度
    GameVar.bulletHeight = 47; //子弹高度
    GameVar.FruitRandom = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3]; //水果随机几率设置
    GameVar.FruitSpeedRandom = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3]; //苹果速度随机几率设置
    GameVar.FruitDownSpeed = [0, 0.2, 0.15, 0.1]; //水果下降速度
    GameVar.FruitWidth = [0, 40, 80, 160]; //水果宽度
    GameVar.FruitHeight = [0, 41, 77, 226]; //水果高度
    GameVar.FruitHP = [0, 1, 5, 10]; //水果血量
    GameVar.FruitScore = [0, 1000, 6000, 30000]; //水果分数
    GameVar.FruitRectangle = [false, false, true, false]; //水果是否是单个矩形判定框
    GameVar.FruitRectangleArray = [[], [], [new myRectangle(1, 20, 46, 57), new myRectangle(32, 1, 47, 62)], []]; //水果矩形判定框数组
    GameVar.AirRectangle = [new myRectangle(60, 18, 42, 34), new myRectangle(14, 50, 134, 68)]; //飞机矩形判定框数组
    GameVar.FireDelay = 100; //子弹函数延时(ms)
    GameVar.BulletSpeed = 1.5; //子弹移动速度
    GameVar.BulletBirthSpeed = 100; //子弹生成间隔时间(ms)
    GameVar.FruitBirthSpeed = 1000; //水果生成间隔时间(ms)
    GameVar.BgDownSpeed = 0.1; //背景下落速度
    GameVar.BigScore = 5;
    GameVar.SmallScore = 1;
    return GameVar;
}());
__reflect(GameVar.prototype, "GameVar");
//# sourceMappingURL=GameVar.js.map
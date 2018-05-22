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
// TypeScript file
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.bullets = [];
        _this.bulletlasttime = 0;
        _this.bulletbirthtime = 0;
        _this.lasttime = 0;
        _this.birthtime = 0;
        _this.skinName = "resource/skins/GameSkin.exml";
        return _this;
    }
    Game.getInstance = function () {
        if (this._instance == null) {
            this._instance = new Game();
        }
        return this._instance;
    };
    Object.defineProperty(Game.prototype, "gameScore", {
        get: function () {
            return this._gameScore;
        },
        set: function (v) {
            this._gameScore = v;
            this.lb_score.text = this.lb_overscore.text = v.toString();
            if (v > 1600000 && GameVar.FruitBirthSpeed == 400) {
                GameVar.FruitBirthSpeed = 200;
                // for(let speed of GameVar.FruitDownSpeed) {
                //     speed = speed * 1.1;
                // }
            }
            else if (v > 400000 && GameVar.FruitBirthSpeed == 600) {
                GameVar.FruitBirthSpeed = 400;
                // for(let speed of GameVar.FruitDownSpeed) {
                //     speed = speed * 1.1;
                // }
            }
            else if (v > 150000 && GameVar.FruitBirthSpeed == 800) {
                GameVar.FruitBirthSpeed = 600;
                // for(let speed of GameVar.FruitDownSpeed) {
                //     speed = speed * 1.1;
                // }
            }
            else if (v > 50000 && GameVar.FruitBirthSpeed == 1000) {
                GameVar.FruitBirthSpeed = 800;
                // for(let speed of GameVar.FruitDownSpeed) {
                //     speed = speed * 1.1;
                // }
            }
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.restart = function () {
        this.lasttime = 0;
        this.birthtime = 0;
        this.bulletlasttime = 0;
        this.bulletbirthtime = 0;
        this.com_aircreft.x = 295;
        this.com_aircreft.y = 1127.52;
        this.com_aircreft.visible = true;
        this.gp_fruit.removeChildren();
        this.removeChild(this.gp_gameover);
        this.com_aircreft.fire();
        this.com_aircreft.moveAir();
        this.com_aircreft.addEventListener("createBullet", this.createBulletHandler, this);
        egret.startTick(this.onUpdate, this);
        var data = RES.getRes("boom_json");
        var txtr = RES.getRes("boom_png");
        this.boomFactory = new egret.MovieClipDataFactory(data, txtr);
        this.gameScore = 0;
    };
    Game.prototype.back = function () {
        this.parent.addChild(StartUI.getInstance());
        this.parent.removeChild(this);
    };
    Game.prototype.gameOver = function () {
        this.addChild(this.gp_gameover);
        this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.restart, this);
        this.btn_mainmenu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back, this);
        this.com_aircreft.stopFire();
        this.com_aircreft.stopMoveAir();
        this.com_aircreft.removeEventListener("createBullet", this.createBulletHandler, this);
        egret.stopTick(this.onUpdate, this);
        for (var i = 0; i < this.gp_gameover.numChildren; i++) {
            var item = this.gp_gameover.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item).wait(i * 200)
                .to({ "alpha": 1 }, 500);
        }
    };
    Game.prototype.createBulletHandler = function (evt) {
        var timestamp = egret.getTimer();
        var dt = timestamp - this.bulletlasttime;
        this.bulletlasttime = timestamp;
        this.bulletbirthtime += dt;
        if (this.bulletbirthtime > GameVar.BulletBirthSpeed) {
            this.bulletbirthtime = 0;
            var bullet = new Bullet();
            bullet.x = this.com_aircreft.x + this.com_aircreft.width / 2 - bullet.width / 2;
            bullet.y = this.com_aircreft.y - bullet.height + 20;
            this.addChild(bullet);
            this.bullets.push(bullet);
        }
    };
    Game.prototype.onUpdate = function (timestamp) {
        var _this = this;
        var dt = timestamp - this.lasttime;
        if (this.lasttime == 0) {
            this.lasttime = timestamp;
            return false;
        }
        this.lasttime = timestamp;
        this.birthtime += dt;
        for (var i = this.bullets.length - 1; i >= 0; i--) {
            var bullet = this.bullets[i];
            bullet.y -= dt * GameVar.BulletSpeed;
            if (bullet.y < 0) {
                this.removeChild(bullet);
                this.bullets.splice(i, 1);
            }
        }
        if (this.birthtime > GameVar.FruitBirthSpeed) {
            this.birthtime = 0;
            var fruitRandom = GameVar.FruitRandom[Math.floor(Math.random() * 20)];
            var speed = GameVar.FruitDownSpeed[fruitRandom] * (Math.random() + 1);
            if (fruitRandom != 3) {
                speed = GameVar.FruitDownSpeed[fruitRandom] * (Math.random() + GameVar.FruitSpeedRandom[Math.floor(Math.random() * 10)]);
            }
            var fruit = new Fruit(fruitRandom, speed);
            fruit.x = Math.random() * (this.gp_fruit.width - this.com_aircreft.width) + this.com_aircreft.width / 2 - fruit.width / 2;
            this.gp_fruit.addChild(fruit);
        }
        var _loop_1 = function (i) {
            element = this_1.gp_fruit.getChildAt(i);
            var disy = dt * element.speed;
            element.y += disy;
            if (GameUtil.hitTestFruitAir(element, this_1.com_aircreft)) {
                var boom_gif_1 = new egret.MovieClip(this_1.boomFactory.generateMovieClipData("boom"));
                boom_gif_1.x = this_1.com_aircreft.x + this_1.com_aircreft.width / 2;
                boom_gif_1.y = this_1.com_aircreft.y + this_1.com_aircreft.height / 2;
                this_1.addChild(boom_gif_1);
                boom_gif_1.gotoAndPlay(0, 1);
                this_1.com_aircreft.visible = false;
                this_1.gameOver();
                boom_gif_1.addEventListener(egret.Event.COMPLETE, function (e) {
                    _this.removeChild(boom_gif_1);
                    boom_gif_1 = null;
                }, this_1);
                return { value: false };
            }
            if (element.y > this_1.gp_fruit.height) {
                this_1.gp_fruit.removeChild(element);
            }
        };
        var this_1 = this, element;
        for (var i = this.gp_fruit.numChildren - 1; i >= 0; i--) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        for (var j = this.bullets.length - 1; j >= 0; j--) {
            var bullet = this.bullets[j];
            var _loop_2 = function (i) {
                element = this_2.gp_fruit.getChildAt(i);
                if (GameUtil.hitTestFruitObj(element, bullet)) {
                    this_2.removeChild(bullet);
                    this_2.bullets.splice(j, 1);
                    element.hp--;
                    if (element.hp == 0) {
                        this_2.gameScore += element.score;
                        var boom_gif_2 = new egret.MovieClip(this_2.boomFactory.generateMovieClipData("boom"));
                        boom_gif_2.x = element.x + element.width / 2;
                        boom_gif_2.y = element.y + element.height / 2;
                        this_2.addChild(boom_gif_2);
                        boom_gif_2.gotoAndPlay(0, 1);
                        boom_gif_2.addEventListener(egret.Event.COMPLETE, function (e) {
                            _this.removeChild(boom_gif_2);
                            boom_gif_2 = null;
                        }, this_2);
                        this_2.gp_fruit.removeChild(element);
                    }
                    return "break";
                }
            };
            var this_2 = this, element;
            for (var i = this.gp_fruit.numChildren - 1; i >= 0; i--) {
                var state_2 = _loop_2(i);
                if (state_2 === "break")
                    break;
            }
        }
        this.gp_fruit_bg.anchorOffsetY -= dt * GameVar.BgDownSpeed;
        if (this.gp_fruit_bg.anchorOffsetY <= -1125) {
            this.gp_fruit_bg.anchorOffsetY = 0;
        }
        return false;
    };
    Game._instance = null;
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map
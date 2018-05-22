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
var Aircraft = (function (_super) {
    __extends(Aircraft, _super);
    function Aircraft() {
        var _this = _super.call(this) || this;
        _this._touchStatus = false;
        _this._distance = new egret.Point();
        _this.fireDelay = GameVar.FireDelay;
        _this.fireTimer = new egret.Timer(_this.fireDelay);
        _this.fireTimer.addEventListener(egret.TimerEvent.TIMER, _this.createBullet, _this);
        return _this;
    }
    /**开火*/
    Aircraft.prototype.fire = function () {
        this.fireTimer.start();
    };
    /**停火*/
    Aircraft.prototype.stopFire = function () {
        this.fireTimer.stop();
    };
    /**开始移动*/
    Aircraft.prototype.moveAir = function () {
        console.log(this.hasEventListener(egret.TouchEvent.TOUCH_BEGIN));
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    /**停火*/
    Aircraft.prototype.stopMoveAir = function () {
        console.log(this.hasEventListener(egret.TouchEvent.TOUCH_BEGIN));
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Aircraft.prototype.createBullet = function (evt) {
        this.dispatchEventWith("createBullet");
    };
    Aircraft.prototype.mouseDown = function (evt) {
        // console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.x;
        this._distance.y = evt.stageY - this.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Aircraft.prototype.mouseMove = function (evt) {
        if (this._touchStatus) {
            // console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
            this.x = Math.min(Math.max(0, evt.stageX - this._distance.x), GameVar.stageWidth - this.width);
            this.y = Math.min(Math.max(0, evt.stageY - this._distance.y), GameVar.stageHeight - this.height);
            // console.log("moving now ! this: [X:"+this.x+",Y:"+this.y+"]");
        }
    };
    Aircraft.prototype.mouseUp = function (evt) {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    return Aircraft;
}(eui.Component));
__reflect(Aircraft.prototype, "Aircraft");
//# sourceMappingURL=Aircraft.js.map
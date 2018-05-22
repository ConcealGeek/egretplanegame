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
var StartUI = (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/StartSkin.exml";
        _this.btn_play.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_play, _this);
        return _this;
    }
    StartUI.getInstance = function () {
        if (StartUI._instance == null) {
            StartUI._instance = new StartUI();
        }
        return StartUI._instance;
    };
    StartUI.prototype.onclick_play = function () {
        this.parent.addChild(Game.getInstance());
        this.parent.removeChild(this);
        Game.getInstance().restart();
    };
    StartUI._instance = null;
    return StartUI;
}(eui.Component));
__reflect(StartUI.prototype, "StartUI");
//# sourceMappingURL=StartUI.js.map
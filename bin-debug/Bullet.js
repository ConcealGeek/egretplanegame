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
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super.call(this) || this;
        _this.source = RES.getRes("aircraftBullet_png");
        _this.width = GameVar.bulletWidth;
        _this.height = GameVar.bulletHeight;
        _this.anchorOffsetX = 0;
        _this.anchorOffsetY = 0;
        return _this;
    }
    return Bullet;
}(eui.Image));
__reflect(Bullet.prototype, "Bullet");
//# sourceMappingURL=Bullet.js.map
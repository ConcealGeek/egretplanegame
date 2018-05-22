var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var myRectangle = (function () {
    function myRectangle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return myRectangle;
}());
__reflect(myRectangle.prototype, "myRectangle");
//# sourceMappingURL=myRectangle.js.map
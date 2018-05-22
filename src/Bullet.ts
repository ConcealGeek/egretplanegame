class Bullet extends eui.Image{
	public constructor() {
		super();
		this.source = RES.getRes(`aircraftBullet_png`);
		this.width = GameVar.bulletWidth;
		this.height = GameVar.bulletHeight;
		this.anchorOffsetX = 0;
		this.anchorOffsetY = 0;
	}
}
class StartUI extends eui.Component{
	private static _instance: StartUI = null;
	public static getInstance() {
		if(StartUI._instance == null) {
			StartUI._instance = new StartUI();
		}
		return StartUI._instance;
	}
	private btn_play: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/skins/StartSkin.exml";
		this.btn_play.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_play, this);
	}
	public onclick_play() {
		this.parent.addChild(Game.getInstance());
		this.parent.removeChild(this);
		Game.getInstance().restart();
	}
}
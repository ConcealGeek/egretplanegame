class GameVar {
	public static stageWidth: number = 750;//舞台宽度
	public static stageHeight: number = 1334;//舞台高度
	public static bulletWidth: number = 29;//子弹宽度
	public static bulletHeight: number = 47;//子弹高度
	public static FruitRandom: Array<number> = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3];//水果随机几率设置
	public static FruitSpeedRandom: Array<number> = [1, 1, 1, 1, 1, 1, 1, 1, 1, 3];//苹果速度随机几率设置
	public static FruitDownSpeed: Array<number> = [0, 0.2, 0.15, 0.1];//水果下降速度
	public static FruitWidth: Array<number> = [0, 40, 80, 160];//水果宽度
	public static FruitHeight: Array<number> = [0, 41, 77, 226];//水果高度
	public static FruitHP: Array<number> = [0, 1, 5, 10];//水果血量
	public static FruitScore: Array<number> = [0, 1000, 6000, 30000];//水果分数
	public static FruitRectangle: Array<boolean> = [false, false, true, false];//水果是否是单个矩形判定框
	public static FruitRectangleArray: myRectangle[][] = [[],[],[new myRectangle(1,20,46,57),new myRectangle(32,1,47,62)],[]];//水果矩形判定框数组
	public static AirRectangle: myRectangle[] = [new myRectangle(60,18,42,34),new myRectangle(14,50,134,68)];//飞机矩形判定框数组
	public static FireDelay: number = 100;//子弹函数延时(ms)
	public static BulletSpeed: number = 1.5;//子弹移动速度
	public static BulletBirthSpeed:number = 100;//子弹生成间隔时间(ms)
	public static FruitBirthSpeed:number = 1000;//水果生成间隔时间(ms)
	public static BgDownSpeed:number = 0.1;//背景下落速度
	public static BigScore:number = 5;
	public static SmallScore:number = 1;
	public constructor() {
	}

	public static changeSpeed(score: number) {
		if (score > 3) {
			this.FruitBirthSpeed = 2;
		}
		if (score > 10) {
			this.FruitBirthSpeed = 1;
		}
	}
}
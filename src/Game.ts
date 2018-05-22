// TypeScript file
class Game extends eui.Component {
	private static _instance: Game = null;
	public static getInstance() {
		if(this._instance == null) {
			this._instance = new Game();
		}
		return this._instance;
	}
	public gp_fruit:eui.Group;
	public gp_fruit_bg:eui.Group;
    public com_aircreft:Aircraft;
    public lb_score:eui.Label;
    
    private boomFactory:egret.MovieClipDataFactory;
	public gp_gameover:eui.Group;
	public lb_overscore:eui.Label;
	public btn_restart:eui.Button;
	public btn_mainmenu:eui.Button;
    
    private _gameScore : number;
    public get gameScore() : number {
        return this._gameScore;
    }
    public set gameScore(v : number) {
        this._gameScore = v;
        this.lb_score.text = this.lb_overscore.text = v.toString();
        if (v>1600000 && GameVar.FruitBirthSpeed == 400) {
            GameVar.FruitBirthSpeed = 200;
            // for(let speed of GameVar.FruitDownSpeed) {
            //     speed = speed * 1.1;
            // }
        } else if (v>400000 && GameVar.FruitBirthSpeed == 600) {
            GameVar.FruitBirthSpeed = 400;
            // for(let speed of GameVar.FruitDownSpeed) {
            //     speed = speed * 1.1;
            // }
        } else if (v>150000 && GameVar.FruitBirthSpeed == 800) {
            GameVar.FruitBirthSpeed = 600;
            // for(let speed of GameVar.FruitDownSpeed) {
            //     speed = speed * 1.1;
            // }
        } else if (v>50000 && GameVar.FruitBirthSpeed == 1000) {
            GameVar.FruitBirthSpeed = 800;
            // for(let speed of GameVar.FruitDownSpeed) {
            //     speed = speed * 1.1;
            // }
        }
    }
    public constructor () {
        super();
        this.skinName = "resource/skins/GameSkin.exml";
    }

    public restart () {
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
        this.com_aircreft.addEventListener("createBullet",this.createBulletHandler,this);
        egret.startTick(this.onUpdate, this);
        let data = RES.getRes("boom_json");
        let txtr = RES.getRes("boom_png");
        this.boomFactory = new egret.MovieClipDataFactory(data,txtr);
        this.gameScore = 0;
    }

	private back() {
		this.parent.addChild(StartUI.getInstance());
		this.parent.removeChild(this);
	}


	private gameOver() {
        this.addChild(this.gp_gameover);
		this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.restart, this);
		this.btn_mainmenu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back, this);
        this.com_aircreft.stopFire();
        this.com_aircreft.stopMoveAir();
        this.com_aircreft.removeEventListener("createBullet",this.createBulletHandler,this);
        egret.stopTick(this.onUpdate, this);
		for (let i = 0; i < this.gp_gameover.numChildren; i++) {
			let item = this.gp_gameover.getChildAt(i);
			item.alpha = 0;
			egret.Tween.get(item).wait(i*200)
				.to({"alpha": 1}, 500);
		}
	}
    private bullets:Bullet[] = [];
	private bulletlasttime: number = 0;
	private bulletbirthtime: number = 0;

    private createBulletHandler(evt:egret.Event):void{
        let timestamp = egret.getTimer();
        let dt = timestamp - this.bulletlasttime;
		this.bulletlasttime = timestamp;
		this.bulletbirthtime += dt;
		if (this.bulletbirthtime > GameVar.BulletBirthSpeed) {
            this.bulletbirthtime = 0;
            let bullet:Bullet = new Bullet();
            bullet.x = this.com_aircreft.x + this.com_aircreft.width / 2 - bullet.width / 2;
            bullet.y = this.com_aircreft.y - bullet.height + 20;
            this.addChild(bullet);
            this.bullets.push(bullet);
        }
    }

	private lasttime: number = 0;
	private birthtime: number = 0;
    private onUpdate(timestamp: number): boolean{
        let dt = timestamp - this.lasttime;
		if (this.lasttime == 0) {
			this.lasttime = timestamp;
			return false;
		}
		this.lasttime = timestamp;
		this.birthtime += dt;

        for (let i = this.bullets.length - 1; i >= 0; i--) {
            let bullet = this.bullets[i];
            bullet.y -= dt * GameVar.BulletSpeed;
            if (bullet.y < 0) {
                this.removeChild(bullet);
                this.bullets.splice(i,1);
            }
        }

		if (this.birthtime > GameVar.FruitBirthSpeed) {
			this.birthtime = 0;
            let fruitRandom = GameVar.FruitRandom[Math.floor(Math.random() * 20)];
            let speed = GameVar.FruitDownSpeed[fruitRandom] * (Math.random() + 1);
            if(fruitRandom != 3) {
                speed = GameVar.FruitDownSpeed[fruitRandom] * (Math.random() + GameVar.FruitSpeedRandom[Math.floor(Math.random() * 10)]);
            }
			let fruit = new Fruit(<FruitType>fruitRandom, speed);
			fruit.x = Math.random() * (this.gp_fruit.width - this.com_aircreft.width) + this.com_aircreft.width / 2 - fruit.width / 2;
			this.gp_fruit.addChild(fruit);
		}
		for (let i = this.gp_fruit.numChildren - 1; i >= 0; i--) {
			var element = <Fruit>this.gp_fruit.getChildAt(i);
            let disy = dt * element.speed;
			element.y += disy;
            if (GameUtil.hitTestFruitAir(element, this.com_aircreft)) {
                let boom_gif:egret.MovieClip =  new egret.MovieClip(this.boomFactory.generateMovieClipData("boom"));
                boom_gif.x = this.com_aircreft.x + this.com_aircreft.width / 2;
                boom_gif.y = this.com_aircreft.y + this.com_aircreft.height / 2;
                this.addChild(boom_gif);
                boom_gif.gotoAndPlay(0, 1);
                this.com_aircreft.visible = false;
                this.gameOver();
                boom_gif.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
                    this.removeChild(boom_gif);
                    boom_gif = null;
                }, this);
                return false;
            }
			if(element.y > this.gp_fruit.height) {
				this.gp_fruit.removeChild(element);
			}
		}
        for (let j = this.bullets.length - 1; j >= 0; j--) {
            let bullet = this.bullets[j];
            for (let i = this.gp_fruit.numChildren - 1; i >= 0; i--) {
                var element = <Fruit>this.gp_fruit.getChildAt(i);
                if (GameUtil.hitTestFruitObj(element, bullet)) {
                    this.removeChild(bullet);
                    this.bullets.splice(j,1);
                    element.hp--;
                    if(element.hp == 0) {
                        this.gameScore += element.score;
                        let boom_gif:egret.MovieClip =  new egret.MovieClip(this.boomFactory.generateMovieClipData("boom"));
                        boom_gif.x = element.x + element.width / 2;
                        boom_gif.y = element.y + element.height / 2;
                        this.addChild(boom_gif);
                        boom_gif.gotoAndPlay(0, 1);
                        boom_gif.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
                            this.removeChild(boom_gif);
                            boom_gif = null;
                        }, this);
                        this.gp_fruit.removeChild(element);
                    }
                    break;
                }
            }
        }
		this.gp_fruit_bg.anchorOffsetY -= dt * GameVar.BgDownSpeed;
		if(this.gp_fruit_bg.anchorOffsetY <= -1125) {
			this.gp_fruit_bg.anchorOffsetY = 0;
		}
        return false;
    }
}
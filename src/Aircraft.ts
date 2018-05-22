class Aircraft extends eui.Component{
	private fireDelay: number;
    private fireTimer:egret.Timer;
    private airStage:egret.Stage;
	public constructor() {
		super();
		this.fireDelay = GameVar.FireDelay;
		this.fireTimer = new egret.Timer(this.fireDelay);
		this.fireTimer.addEventListener(egret.TimerEvent.TIMER, this.createBullet, this);
	}

	/**开火*/
    public fire():void {
        this.fireTimer.start();
    }
    /**停火*/
    public stopFire():void {
        this.fireTimer.stop();
    }
	/**开始移动*/
    public moveAir():void {
        console.log(this.hasEventListener(egret.TouchEvent.TOUCH_BEGIN));
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    }
    /**停火*/
    public stopMoveAir():void {
        console.log(this.hasEventListener(egret.TouchEvent.TOUCH_BEGIN));
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

	private createBullet(evt: egret.TimerEvent) {
		this.dispatchEventWith("createBullet");
	}


	private _touchStatus = false;
    private _distance:egret.Point = new egret.Point();
	private mouseDown(evt:egret.TouchEvent)
    {
        // console.log("Mouse Down.");
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.x;
        this._distance.y = evt.stageY - this.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(evt:egret.TouchEvent)
    {
        if( this._touchStatus )
        {
            // console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
			this.x = Math.min(Math.max(0, evt.stageX - this._distance.x), GameVar.stageWidth - this.width);
			this.y = Math.min(Math.max(0, evt.stageY - this._distance.y), GameVar.stageHeight - this.height);
            // console.log("moving now ! this: [X:"+this.x+",Y:"+this.y+"]");
        }
    }

    private mouseUp(evt:egret.TouchEvent)
    {
        // console.log("Mouse Up.");
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }
}
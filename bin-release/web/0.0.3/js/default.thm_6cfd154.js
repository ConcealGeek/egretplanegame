
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {}
generateEUI.paths['resource/skins/AirCraft.exml'] = window.AirCraft = (function (_super) {
	__extends(AirCraft, _super);
	function AirCraft() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 140;
		this.width = 160;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = AirCraft.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.pixelHitTest = true;
		t.right = 0;
		t.source = "aircraft_png";
		t.top = 0;
		return t;
	};
	return AirCraft;
})(eui.Skin);generateEUI.paths['resource/skins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin1 = 	(function (_super) {
		__extends(GameSkin$Skin1, _super);
		function GameSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_replay1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin1;
	})(eui.Skin);

	var GameSkin$Skin2 = 	(function (_super) {
		__extends(GameSkin$Skin2, _super);
		function GameSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_start1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin2;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["gp_fruit_bg","gp_fruit","com_aircreft","lb_score","lb_overscore","btn_restart","btn_mainmenu","gp_gameover"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gp_fruit_bg_i(),this.gp_fruit_i(),this.com_aircreft_i(),this.lb_score_i(),this.gp_gameover_i()];
	}
	var _proto = GameSkin.prototype;

	_proto.gp_fruit_bg_i = function () {
		var t = new eui.Group();
		this.gp_fruit_bg = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 1125;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1125;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.y = -916;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1125;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.y = -2041;
		return t;
	};
	_proto.gp_fruit_i = function () {
		var t = new eui.Group();
		this.gp_fruit = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.com_aircreft_i = function () {
		var t = new Aircraft();
		this.com_aircreft = t;
		t.height = 140;
		t.skinName = "AirCraft";
		t.width = 160;
		t.x = 295;
		t.y = 1127.52;
		return t;
	};
	_proto.lb_score_i = function () {
		var t = new eui.Label();
		this.lb_score = t;
		t.bold = true;
		t.size = 48;
		t.text = "90000";
		t.textColor = 0xffffff;
		t.x = 42;
		t.y = 33;
		return t;
	};
	_proto.gp_gameover_i = function () {
		var t = new eui.Group();
		this.gp_gameover = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this.lb_overscore_i(),this.btn_restart_i(),this.btn_mainmenu_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 96;
		t.text = "游戏结束";
		t.y = 336;
		return t;
	};
	_proto.lb_overscore_i = function () {
		var t = new eui.Label();
		this.lb_overscore = t;
		t.horizontalCenter = 0;
		t.size = 96;
		t.text = "999999";
		t.y = 542;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Button();
		this.btn_restart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 460;
		t.y = 963.51;
		t.skinName = GameSkin$Skin1;
		return t;
	};
	_proto.btn_mainmenu_i = function () {
		var t = new eui.Button();
		this.btn_mainmenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 460;
		t.y = 1102.52;
		t.skinName = GameSkin$Skin2;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	var StartSkin$Skin3 = 	(function (_super) {
		__extends(StartSkin$Skin3, _super);
		function StartSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSkin$Skin3;
	})(eui.Skin);

	function StartSkin() {
		_super.call(this);
		this.skinParts = ["btn_play"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_play_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1334;
		t.source = "bgGrey_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "title_png";
		t.x = 162;
		t.y = 133.27;
		return t;
	};
	_proto.btn_play_i = function () {
		var t = new eui.Button();
		this.btn_play = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 354;
		t.y = 1085;
		t.skinName = StartSkin$Skin3;
		return t;
	};
	return StartSkin;
})(eui.Skin);
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
var RegisterInfo = (function (_super) {
    __extends(RegisterInfo, _super);
    function RegisterInfo() {
        var _this = _super.call(this) || this;
        // 用户头像索引 从1开始10结束
        _this.playerIconIdx = 1;
        _this.initd = false;
        _this.changeSex = function (evt, select, radio) {
            if (_this.maleRadio.getText().text == radio.getText().text) {
                if (!_this.sex) {
                    console.log("aaa");
                    _this.sex = true;
                    _this.playerIconIdx = 1;
                    _this.uptPlayerIcon();
                }
                _this.femaleRadio.changeSelect(false);
            }
            else {
                if (_this.sex) {
                    console.log("bbbb");
                    _this.sex = false;
                    _this.playerIconIdx = 1;
                    _this.uptPlayerIcon();
                }
                _this.maleRadio.changeSelect(false);
            }
        };
        _this.nextPlayIcon = function () {
            console.log("nextClick");
            _this.playerIconIdx++;
            _this.uptPlayerIcon();
        };
        _this.prePlayIcon = function () {
            console.log("preClick");
            _this.playerIconIdx--;
            _this.uptPlayerIcon();
        };
        _this.handMouseEvent = function (evt) {
            if (!_this.initd) {
                return;
            }
            _this.preB.handMouseMoveEvent(evt, true);
            _this.nextB.handMouseMoveEvent(evt, true);
            _this.femaleRadio.handMouseMoveEvent(evt, true);
            _this.maleRadio.handMouseMoveEvent(evt, true);
            _this.cityIdx.handMouseMoveEvent(evt, false);
        };
        _this.onKeyDown = function (evt) {
        };
        _this.x = 50;
        _this.y = 64;
        _this.width = 260;
        _this.height = 500;
        _this.createSc();
        return _this;
    }
    RegisterInfo.prototype.createSc = function () {
        // this.graphics.beginFill(0xe7d18d);
        // this.graphics.draw
        // this.graphics.endFill();
        this.backImg = new egret.Bitmap();
        this.backImg.texture = RES.getRes("board_input_png");
        this.backImg.width = this.width;
        this.backImg.height = this.height;
        this.backImg.x = 0;
        this.backImg.y = 0;
        this.addChild(this.backImg);
        this.createIconSelect();
        this.createUserInfo();
        // let backImg3 = new egret.Bitmap();
        // backImg3.texture = RES.getRes("board_tip_png");
        // backImg3.width = this.width - 30;
        // backImg3.height = 100;
        // backImg3.x = 10;
        // backImg3.y = 200;
        // let backImg4 = new egret.Bitmap();
        // backImg4.texture = RES.getRes("board_hint_png");
        // backImg4.width = this.width - 30;
        // backImg4.height = 100;
        // backImg4.x = 10;
        // backImg4.y = 350;
        // this.addChild(backImg3);
        // this.addChild(backImg4);
        // this.graphics.beginFill(0xfff000);
        // console.log(this.width + "  eeeeee " + this.height);
        // this.graphics.drawRect(0, 0, this.width, this.height);
        // this.graphics.endFill();
        this.initd = true;
    };
    RegisterInfo.prototype.createIconSelect = function () {
        var text = new egret.TextField();
        text.textColor = 0xe7d18d;
        text.text = "选择头像";
        text.x = 100;
        text.y = 15;
        text.width = 60;
        text.height = 20;
        text.size = 15;
        this.addChild(text);
        //背景
        var backImg2 = new egret.Bitmap();
        backImg2.texture = RES.getRes("board_popup_png");
        backImg2.width = 230;
        backImg2.height = 160;
        backImg2.x = 15;
        backImg2.y = 50;
        this.addChild(backImg2);
        //
        this.preB = new SimpleButton(this.prePlayIcon, "btn_prev_png", "btn_prev_on_png", "btn_prev_down_png");
        this.preB.setPosition(50, 100);
        this.nextB = new SimpleButton(this.nextPlayIcon, "btn_next_png", "btn_next_on_png", "btn_next_down_png");
        this.nextB.setPosition(190, 100);
        // 用户头像绘制
        var playBackImg = new egret.Bitmap();
        playBackImg.texture = RES.getRes("board_popup_png");
        playBackImg.width = 90;
        playBackImg.height = 100;
        playBackImg.x = 85;
        playBackImg.y = 60;
        this.addChild(playBackImg);
        this.userImg = new egret.Bitmap();
        this.uptPlayerIcon();
        this.userImg.width = 82;
        this.userImg.height = 92;
        this.userImg.x = 89;
        this.userImg.y = 64;
        // this.userImg.anchorOffsetX = 10;
        // this.userImg.anchorOffsetY = 10;
        this.addChild(this.userImg);
        this.maleRadio = new SimpleRadio(this.changeSex, "radio_unselected_png", "radio_unselected_over_png", "radio_selected_png", true);
        this.maleRadio.setPosition(85, 170);
        this.maleRadio.setText("男", 15, 0xe7d18d);
        this.femaleRadio = new SimpleRadio(this.changeSex, "radio_unselected_png", "radio_unselected_over_png", "radio_selected_png", true);
        this.femaleRadio.setPosition(145, 170);
        this.femaleRadio.setText("女", 15, 0xe7d18d);
        this.femaleRadio.changeSelect(true);
        this.addChild(this.preB.getImg());
        this.addChild(this.nextB.getImg());
        this.addChild(this.femaleRadio.getImg());
        this.addChild(this.femaleRadio.getText());
        this.addChild(this.maleRadio.getImg());
        this.addChild(this.maleRadio.getText());
    };
    RegisterInfo.prototype.createUserInfo = function () {
        //80 25
        var fbImg1 = new egret.Bitmap();
        fbImg1.texture = RES.getRes("board_popup_png");
        fbImg1.width = 80;
        fbImg1.height = 28;
        fbImg1.x = 15;
        fbImg1.y = 222;
        this.addChild(fbImg1);
        var txt1 = new egret.TextField();
        txt1.text = "君主姓名";
        txt1.x = 30;
        txt1.y = 232;
        txt1.width = 80;
        txt1.height = 25;
        txt1.size = 13;
        this.addChild(txt1);
        var nbImg = new egret.Bitmap();
        nbImg.texture = RES.getRes("box_border_l_shadow_png");
        nbImg.width = 145;
        nbImg.height = 26;
        nbImg.x = 100;
        nbImg.y = 223;
        this.addChild(nbImg);
        this.nameIpt = new egret.TextField();
        this.nameIpt.type = egret.TextFieldType.INPUT;
        this.nameIpt.x = 107;
        this.nameIpt.y = 228;
        this.nameIpt.width = 140;
        this.nameIpt.height = 24;
        this.nameIpt.size = 15;
        this.nameIpt.maxChars = 8;
        this.addChild(this.nameIpt);
        var fbImg2 = new egret.Bitmap();
        fbImg2.texture = RES.getRes("board_popup_png");
        fbImg2.x = 15;
        fbImg2.y = 258;
        fbImg2.width = 80;
        fbImg2.height = 28;
        this.addChild(fbImg2);
        var txt2 = new egret.TextField();
        txt2.text = "城池属地";
        txt2.x = 30;
        txt2.y = 268;
        txt2.size = 13;
        this.addChild(txt2);
        this.cityIdx = new SimpleSelect("combobox_up_png", "combobox_down_png", {});
        this.cityIdx.getImg().x = 100;
        this.cityIdx.getImg().y = 258;
        this.cityIdx.getImg().width = 145;
        // this.cityIdx.getImg().height = 28;
        this.addChild(this.cityIdx);
    };
    RegisterInfo.prototype.uptPlayerIcon = function () {
        if (this.playerIconIdx < 1) {
            this.playerIconIdx = 10;
        }
        if (this.playerIconIdx > 10) {
            this.playerIconIdx = 1;
        }
        if (this.userImg != null) {
            this.userImg.texture = this.sex ?
                RES.getRes("player_male_" + this.playerIconIdx + "_jpg") :
                RES.getRes("player_female_" + this.playerIconIdx + "_jpg");
        }
    };
    return RegisterInfo;
}(egret.Sprite));
__reflect(RegisterInfo.prototype, "RegisterInfo");
//# sourceMappingURL=RegisterInfo.js.map
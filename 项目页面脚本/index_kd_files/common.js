/***********************页面提取过来********************/
 <!-- 右侧边栏  end-->  



/************************************************************/
$(document).ajaxSend(function(a, b, c) {
    if (c.type == 'POST') {
        b.setRequestHeader('X-CSRF-Token', $('meta[name=csrf-token]').attr('content'));
    }
});


$(function(){

    //登录后用户信息
    var after_time=null;
    $(".js_login_after").hover(function() {
        clearTimeout(after_time);
        $(this).next(".aft-info").show();
    }, function() {
        var $this=$(this);
        after_time=setTimeout(function(){
            $this.next(".aft-info").hide();
        },300);
    });

    $(".js_login_info").hover(function() {
        clearTimeout(after_time);
    }, function() {
        $(this).stop(true).hide();
    });

    //顶部 导航菜单
    $(".navi2 li").hover(function() {
        $(this).find("dl").show();
    }, function() {
        $(this).find("dl").hide();
    });

    
    // 精品课程 and 搜索列表
    $(document).on('mouseenter', '.js_kclist li', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find(".info").stop(true,true).slideDown();
    });

    $(document).on('mouseleave', '.js_kclist li', function(event) {
        $(this).find(".info").stop(true,true).slideUp();
    });

    //搜索框聚焦
    $(".search_inp").focus(function(){
        $(".search_box").addClass('active');
    });
    $(".search_inp").blur(function(){
        $(".search_box").removeClass('active');
    });

    $(document).GoTop();//返回顶部

    //IE低版本友好提示。
    $("body").iealert();

    //课程体系 响应式导航
    $("#navbar").on('click', function(event) {
        $("#navbar_con").slideToggle("slow");
    });

})


$.fn.extend({
    //首页处理函数
    indexFn:function(){
        //首页左侧 导航
        $("#navi1>li").hover(function() {
            $(this).find(".sub").addClass('active').end()
                   .find(".sub_menu").show();
        }, function() {
            $(this).find(".sub").removeClass('active').end()
                   .find(".sub_menu").hide();
        });

        // 首页公告滚动
        $(".js_speaker").slide({titCell:".hd",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,delayTime:1000});

        //公开课
        $(".js_gkk").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:false,vis:4});

        /*首页 banner切换*/
        $("#banner").PicChange({
            "$oWrap": $("#banner"),
            "$PicList": $("#banner_list").find("a"),
            "$prevBtn": $("#bannerChangeBtn").find("a").first(),
            "$nextBtn": $("#bannerChangeBtn").find("a").last(),
            "$smallBtnWrap": $("#banner_btn")
        });

        // 首页 试学课程切换
        $("#kcsx_menu").on('mouseenter', 'li', function(event) {
            var index=$(this).index();
            $("#kcsx_menu li").siblings().removeClass('active').eq(index).addClass('active');
            $(".kcbox .kcbox_list").siblings().removeClass('active').eq(index).addClass('active');
        });

        //存储cookie
        if(window.location.search){
            document.cookie="tg1000="+window.location.search.substring(1);
        }

    },
    moreFn:function(){
        $(document).on('click', '.js_more li:last-child', function(event) {
            if($(this).siblings('li.dn').length>0){
                $(this).siblings('li').removeClass('dn');
                $(this).find("a").empty("").html("收起更多");
            }else{
                $(this).siblings('li.js_dn').addClass('dn'); 
                $(this).find("a").empty("").html("显示更多");
            }
            
        });
    },
    //登录检测
    isLogin:function (options){
        var def=$.extend({
            successFn:function(){},
            failFn:function(){}
        },options);
        
        $.ajax({
            url: "/api/userinfo",
            type: 'get',
            dataType: 'json',
            data: {t:new Date().getTime()},
            success:function(data){
                if(data.type=='success'){
                    if(def.successFn){def.successFn();}
                }else{
                    if(def.failFn){def.failFn();}
                }
            }
        })  
    }
});


//返回顶部
$.fn.GoTop=function(options){
    var def={
        target:"#gotop",
        top:"200",
        time:"500"
    }
    var opts=$.extend({},def,options);

    //显隐返回顶部按钮
    function showGoTop() {
        var winT = $(document).scrollTop();
        if (winT > opts.top) {
            $(opts.target).slideDown();
        } else {
            $(opts.target).slideUp();
        } 
    }

    $(opts.target).click(function(event) {
        $('body,html').animate({ scrollTop: 0 }, opts.time);
    });

    $(window).scroll(function(e) {
        showGoTop();
    });
}

// 注册
$.fn.Reg=function(options){
	var def={
		regForm:"#reg_form",
		regBtn:"#js_reg",
		ajaxReg:"/login/register",
		ajaxSendSms:"/experience/verification_code",
		captcha:"/captcha_num"
	}

	var opts=$.extend({}, def, options);
	var _this=this,
		$this=$(opts.regForm),
        ajax_succ={
            mobile:false,
            captcha_num:false,
            sms_captcha_num:false,
            nickname:false
        },
        focus_val="",
        ajax_succ_num=0;

	$(opts.regBtn).click(function(event) {
		if($(this).hasClass('disabled')){return false;}

		if(!validator(opts)){
			// console.log("普通验证没通过"); 
			return false;
		} 
        //ajax 异步验证
        var ajaxinp=$this.find("input[data-v]"),
            ajaxinp_L=ajaxinp.length;
        if(ajaxinp_L==$this.find("input[data-v=true]").length){
            $this.submit();
        }else{
            return false;
        }

        // console.log(ajax_succ)
        // console.log(ajax_succ_num+"|"+ajax_succ.length)
        // if(ajax_succ_num==4){
        //     $this.submit();
        // }else{
        //     return false;
        // }

        
	});

	//图片验证码 点击刷新
	$(".js_yzm").click(function(event) {
    	updatacode();
    });

	function updatacode(){
		$(".js_yzm img").attr("src",opts.captcha+"?"+Math.random());
	}

	$(".js_sms_send").click(function(event) {
        if(!_regpiccode()||!ajax_succ.captcha_num||!_regphone()){
            return false;
        }
		if($(this).hasClass('disab')){return false;}
        $.ajax({
            url: opts.ajaxSendSms,
            type: "GET",
            data: { to: $("input[name='mobile']").val(), r: Math.random(),code:$("input[name='captcha_num']").val() },
            beforeSend: function () {
                $(".js_sms_send").addClass("disab").attr("disabled", true).html("发送中...");
            },
            success: function (d) {
				// console.log(d);
               $(".js_sms_send").attr("disabled", "disabled").html( d.time +"秒后可重新发送");
               countDown($(".js_sms_send"),d.time)
            },
            error: function () { }
        })
       
	});


    function countDown (obj, seconds) {
        $obj = $(obj);
        timer = setInterval(function () {
            if (seconds >= 1) {
                seconds = seconds - 1;
                $obj.html( seconds  +"秒后可重新发送");
            } else {
                clearInterval(timer);
                $obj.removeClass('disab').removeAttr("disabled").html("获取短信验证码");
            }
        }, 1000);
    }

    function validator(opts){
    	var flag=true;
        if(!_regphone()|| !_regsmscode()||!_regnicename() ||  !_regpassword()||!_regcheck()) {
        	flag=false;
        }
    	return flag;
    }

    $this.find("input").focus(function(event){
        focus_val=$(this).val();
    })

    $this.find("input").blur(function(event) {
        //减少请求
        var blur_val=$.trim($(this).val());
        if(blur_val==focus_val&&blur_val!=""){ return false;}
    	var name=$(this).attr("name");
    	switch (name) {
    	  case "nickname": _regnicename(); break;
		  case "mobile":    _regphone(); break;
		  case "password": _regpassword();break;
		  case "captcha_num": _regpiccode();break;
		  case "sms_captcha_num": _regsmscode(); break;
		  default: ;
		}	
    });

    $this.find("input").keyup(function(event) {
        var name=$(this).attr("name");
        switch (name) {
          // case "nickname": _regnicename(); break;
          case "mobile":    _regphone(); break;
          // case "password": _regpassword();break;
          // case "captcha_num": _regpiccode();break;
          // case "sms_captcha_num": _regsmscode(); break;
          default: ;
        }   
    });


    function checkuser(url,userele){

    	$.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            data: { value:$(userele).val(), r: Math.random() },
            success: function (data) {
                var name=$(userele).attr("name");
                if(!data.success){
                    $(userele).attr("data-v",false);
                    ajax_succ[name]=false;
                    showMsg(userele,data.message);
               		return false;
                }else{
               		ajax_succ[name]=true;
                    $(userele).attr("data-v",true);
                    showMsg(userele,data.message,"succ");
               		return true;
               }


            },
            error: function () { }
        })
    }



    function _regcheck(){
        //勾选同意条款
        if($("#user_terms").is(":checked")){
            hideMsg("#user_terms");return true;
        }else{
            showMsg("#user_terms","勾选同意此服务协议，才能继续注册");return false;
        } 
    }

    function _regphone(){
    	var phone=$this.find("input[name='mobile']"),
			reg_mobile = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/,
        	isMobile = reg_mobile.test($(phone).val());
    	if($(phone).val()==""||!isMobile){
			showMsg(phone,"请输入正确的手机号");
            return false;
		}else{
			checkuser($(phone).attr("data-url"),phone);return true;
		}
    }

    function _regnicename(){
    	var nickname=$this.find("input[name='nickname']"),
    		patternreg=/^[\w\u4e00-\u9fa5]+$/gi;
    	if($(nickname).val()==""){
			showMsg(nickname,"请输入昵称");return false;
		}else{
            var l = calculateByteLength($(nickname).val());
            if(l< Number(4)){
            	showMsg(nickname,"昵称的长度必须大于等于4，一个中文字算2个字符");return false;
            }else if(l> Number(18)){
            	showMsg(nickname,"昵称的长度必须小于等于18，一个中文字算2个字符");return false;
            }else if(!patternreg.test($(nickname).val())){
            	showMsg(nickname,"请输入昵称可包含(中文、数字、字母、下划线)");return false;
            }else{
       			checkuser($(nickname).attr("data-url"),nickname);
       			return true;
            }
		}
    }

    function _regpassword(){
    	var password=$this.find("input[name='password']");
    	if($(password).val()==""){
			showMsg(password,"请输入密码");return false;
		}else{
			var m = calculateByteLength($(password).val());
            if(m<= Number(4)){
            	showMsg(password,"密码的长度必须大于或等于5");return false;
            }else if(m> Number(20)){
            	showMsg(password,"密码的长度必须小于或等于20");return false;
            }else{
                showMsg(password,"密码可用","succ");
                return true;
            }
			
		}
    }

    function _regpiccode(){
    	var piccode=$this.find("input[name='captcha_num']");
    	if($(piccode).val()==""){
			$(piccode).parents(".form_item").find(".help_block").html("请输入图片验证码").show();return false;
		}else{
			checkuser($(piccode).attr("data-url"),piccode);
			return true;
		}
    }

    function _regsmscode(){
    	var smscode=$this.find("input[name='sms_captcha_num']");
    	if($(smscode).val()==""){
			$(smscode).parents(".form_item").find(".help_block").html("请输入验证码").show();return false;
		}else{
			checkuser($(smscode).attr("data-url"),smscode);
			return true;
		}
    }


    function _regterms(){
    	if($("#user_terms").is(":checked")){
			hideMsg("#user_terms");return true;
		}else{
			showMsg("#user_terms","勾选同意此服务协议，才能继续注册");return false;
		}
    }


    function showMsg(element,message){
        if(arguments.length==3){ //成功信息
            $(element).parents(".form_item").find(".help_block").addClass("succ").html(message).fadeIn('slow');
            //验证手机时，显示其他表单
            if($(element).attr("name")=="mobile"){
                $this.find(".js_dn").removeClass('dn');
            }
        }else{ //错误信息
            $(element).parents(".form_item").find(".help_block").removeClass("succ").html(message).fadeIn('slow');
            if($(element).attr("name")=="mobile"){
                $this.find(".js_dn").addClass('dn');
            }
        }
    	
    }	

    function hideMsg(element){
    	$(element).parents(".form_item").find(".help_block").html("").fadeOut('slow');
    }

    function calculateByteLength (string) {
        var length = string.length;
        for ( var i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) > 127)
                length++;
        }
        return length;
    }
}


//登录
$.fn.Login=function(options){
	var loginsocial=''+
		'<div class="social-login">'+
	    '    <span>'+
		'      <a href="/login/bind/weibo?_target_path=%2F" class="social-icon social-weibo">'+
		'	      <i class="es-icon es-icon-weibo"></i>'+
		'	  </a>'+
		'      <a href="/login/bind/qq?_target_path=%2F" class="social-icon social-qq">'+
		'	      <i class="es-icon es-icon-qq"></i>'+
		'	  </a>'+
		'      <a href="/login/bind/weixin?_target_path=%2F" class="social-icon social-weixin">'+
		'	      <i class="es-icon es-icon-weixin"></i>'+
		'	  </a>'+
	    '    </span>'+
	    '    <div class="line"></div>'+
	    '</div>';
	var loginHtml=''+
		'<div class="login_reg_box">'+
		'	<div class="login_box" >'+
		'		<span class="js_popclose pop_close"></span>'+
		'		<h1>登录扣丁学堂<a target="_blank" href="/register" class="fr">注册</a></h1>			' +
		'			<form id="login_form" method="post" novalidate="novalidate" >'+
		'			<div class="form_group js_message"></div>'+
		'			<div class="form_group ">'+
		'				<label class="control_label" for="login_username">帐号</label>'+
		'				<div class="controls">'+
		'					<input class="form_control" id="login_username" type="text" name="_username" value=""  placeholder="邮箱/用户名" >'+
		'					<div class="help_block"></div>'+
		'				</div>'+
		'			</div>'+
		'			<div class="form_group">'+
		'				<label class="control_label" for="login_password">密码</label>'+
		'				<div class="controls">'+
		'					<input class="form_control" id="login_password" type="password" name="_password"  placeholder="密码" >'+
		'					<div class="help_block"></div>'+
		'				</div>'+
		'			</div>'+
		'			<div class="form_group">'+
		'				<div class="controls">'+
		'					<span class="checkbox mtm ">'+
		'					<label><input type="checkbox" name="_remember_me" checked="checked"> 记住密码 </label>'+
		'					<a class="fr for_passwordbtn" href="/password/reset">忘记密码</a>'+
		'					</span>'+
		'					<div class="help_block"></div>'+
		'				</div>'+
		'				<input class="login_btn" type="submit" value="登录">'+
		'			</div>'+
		'		</form>'+loginsocial+
		'     </div>'+
		'	<div class="mask"></div>'+
	    '</div>';
    var def={
        loginForm:"#login_form",
        loginBtn:"#js_login",
        ajaxLogin:"/login_check",
        captcha:"/captcha_num",
        isClose:true, //是否需要关闭按钮，默认需要
        isAlone:false //是否是独立登录页面，默认弹出框形式
    }
    var opts=$.extend({}, def, options);


    if(!opts.isAlone){  //弹出框形式
        $(".login_reg_box").remove();
        $("body").append(loginHtml);

        var _this=this,
            $this=$(".login_reg_box");
        var winwidth = $(window).width();
        var thisleft = winwidth / 2 - $(".login_reg_box .login_box").outerWidth(true) / 2;
        var thistop = $(window).height() / 2 - $(".login_reg_box .login_box").height() / 2 + $(window).scrollTop();
        var bodyheight = Math.max($(document.body).outerHeight(true), $(document).height(), $(window).height());
        $(".login_reg_box .mask").css("height", bodyheight);
        $(".login_reg_box .login_box").css({ 'left': thisleft, 'top': thistop });

        if(opts.isClose){ //默认需要按钮
            $(".login_reg_box .js_popclose").show();
            $(document).on('click', ".login_reg_box .js_popclose", function(event) {
                event.preventDefault();
                $(".login_reg_box").remove();
            });
        }else{
            $(".login_reg_box .js_popclose").hide();
        }
        

    }
    



	//登录 提交表单
    $(opts.loginForm).submit(function () {
    	var submitBtn=$(opts.loginForm).find("input[type=submit]");
    	if( submitBtn.hasClass('disabled') ){return false;}
    	if(!validator(opts)){

    		return false;
    	}else{
			submitBtn.addClass('disabled').val("登录中...").empty().html("登录中...");
    		$.ajax({
                url: opts.ajaxLogin,
                type: "POST",
                data: {'_username':$("input[name='_username']").val(),'_password':$("input[name='_password']").val(),'_csrf_token':$('meta[name=csrf-token]').attr('content')},
                success: function (data) {
                	// console.log(data)
					  
					if(data.success==true){
						location.reload();
					}

					submitBtn.removeClass('disabled').val("登录").empty().html("登录");
					$(opts.loginForm).find(".js_message").empty().html(data.message);
                },
				error:function(jqxhr, textStatus, errorThrown) {
					var data = jQuery.parseJSON(jqxhr.responseText);
					submitBtn.removeClass('disabled').val("登录").empty().html("登录");
					$(opts.loginForm).find(".js_message").empty().html(data.message);
				}

            })
			return false;
    	}
    	return false;
    })


    function validator(opts){
    	var flag=true;
    	var _usernameEle="input[name='_username']",
			_password="input[name='_password']";
		//验证登录
		if($(_usernameEle).val()==""){
			$(_usernameEle).parents(".controls").find(".help_block").html("请输入账号").fadeIn('slow');
			$(_usernameEle).parents(".form_group").addClass('group_error'); 
			flag=false;
		}else{
			$(_usernameEle).parents(".controls").find(".help_block").html("").fadeOut('slow');
			$(_usernameEle).parents(".form_group ").removeClass('group_error');
		}
		if($(_password).val()==""){
			$(_password).parents(".controls").find(".help_block").html("请输入密码").fadeIn('slow');
			$(_password).parents(".form_group ").addClass('group_error');
			flag=false;
		}else{
			$(_password).parents(".controls").find(".help_block").html("").fadeOut('slow');
			$(_password).parents(".form_group ").removeClass('group_error');
		}
		return flag;
    }

}

/*图片渐隐封装*/
;(function($, window, document, undefined) {
    var Init = function(opt) {
        this.defaults = {
            "$oWrap": null,
            "$PicList": null,
            "$prevBtn": null,
            "$nextBtn": null,
            "$smallBtnWrap": null,
            "delayTime": 5000,
            "moveTime": 1000,
            "smallBtnActive": "active"
        };
        this.settings = $.extend({}, this.defaults, opt);
        this.str = "";
        this.n = 0;
        this.timer = null;
        this.iTrue = true;
        this.iLen = this.settings.$PicList.length;

    };
    Init.prototype = {
        picChange: function() {
            this.addSmallBtn();
            this.setTime();
            this.nextEvent();
            this.prevEvent();
            this.smallBtnEvent();
        },
        prevEvent: function() {
            var that = this;
            that.clearTime(this.settings.$prevBtn, that);
            this.settings.$prevBtn.click(function() {
                if (!that.iTrue) return;
                that.n--;
                if (that.n < 0) {
                    that.n = that.iLen - 1;
                }
                that.base();
            })

        },
        nextEvent: function() {
            var that = this;
            that.clearTime(this.settings.$nextBtn, that);
            this.settings.$nextBtn.click(function() {
                if (!that.iTrue) return;
                that.n++;
                if (that.n > that.iLen - 1) {
                    that.n = 0;
                }
                that.base();
            });

        },
        smallBtnEvent: function() {
            var that = this;
            this.$smallBtn.each(function(index) {
                $(this).on("mouseover", function() {
                    that.n = index;
                    that.base();
                });
                that.clearTime($(this), that);
            });
        },
        setTime: function() {
            var that = this;
            this.timer = setInterval(function() {
                that.n++;
                if (that.n > that.iLen - 1) {
                    that.n = 0;
                }
                that.base();
            }, that.settings.delayTime);

        },
        clearTime: function(obj, wrap) {
            obj.hover(function() {
                clearInterval(wrap.timer);
            }, function() {
                wrap.setTime();
            });
        },
        addSmallBtn: function() {
            var That = this;
            this.settings.$PicList.each(function(index) {
                $(this).css("z-index", 10 - index);
                That.str += '<a href="javascript:void(0);"></a>';
            });
            this.settings.$smallBtnWrap.append(this.str);
            this.$smallBtn = this.settings.$smallBtnWrap.find("a");
            this.$smallBtn.first().addClass(this.settings.smallBtnActive);
        },
        base: function() {
            var that = this;
            this.iTrue = false;
            this.$smallBtn.eq(this.n).addClass(this.settings.smallBtnActive).siblings().removeClass(this.settings.smallBtnActive);
            this.settings.$PicList.eq(this.n).css("display", "block");
            this.settings.$PicList.eq(this.n).stop().animate({
                "opacity": 1
            }, this.settings.moveTime);
            var list = this.settings.$PicList.eq(this.n).siblings();
            this.settings.$PicList.eq(this.n).siblings().stop().animate({
                "opacity": 0
            }, this.settings.moveTime, function() {
                that.iTrue = true;
                list.css("display", "none");
            });
        }
    };
    $.fn.PicChange = function(options) {
        return new Init(options).picChange();
    }
})(jQuery, window, document);


//弹出框
// $.pop({
//  title: "我是标题", 
//  content:"我是内容",
//  btn:'<a class="com-pop-btn0 ">确定</a>',
//  clickFn:function(){
//  $(".com-pop-btn0").click(function(event) {
//  //按钮的点击事件
//  alert(1);
//  return false;
//  });
//  }
// });
;
(function($) {
    'use strict'
    $.extend({
        pop: function(options) {
            var def = {
                title: "", //弹框中的标题
                content: "", //弹框中的Html页面
                skin: "", //弹出框皮肤样式类
                btn: "", //按钮，按钮中加入 js_popclose类可以关闭弹出框
                autoHideTime: "0", //3秒后自动隐藏（对应弹框样式 需要设置 skin），默认0 不自动隐藏
                clickFn: function() {} //弹框中的按钮回调
            }
            $.extend(def, options);


            var ran = Math.round(Math.random() * 1000),
                popbox = "popbox" + ran,
                popmask = "popmask" + ran,
                pophtml = "" +
                    '<div id="' + popbox + '" class="com-pop-box ' + def.skin + '" >' +
                    ' <div class="com-pop-title" >' + def.title + '</div>' +
                    ' <div class="com-pop-content">' + def.content + '</div>' +
                    ' <span class="com-pop-close"><a class="js_popclose" href="javascript:;">X</a></span>' +
                    ' <div class="com-pop-btn">' + def.btn + '</div>' +
                    '</div>',
                popmaskhtml = '<div id="' + popmask + '" class="com-pop-mask" ></div>';


            if (def.autoHideTime != "0") { //自动隐藏提示框
                $("body").append(pophtml);
                setTimeout(function() {
                    $("#" + popmask).remove();
                    $("#" + popbox).remove();
                }, def.autoHideTime)
            } else {
                $("body").append(pophtml + popmaskhtml);
            }


            var winwidth = $(window).width();
            var thisleft = winwidth / 2 - $("#" + popbox).width() / 2;
            // var thistop = $(window).height() / 2 - $("#"+popbox).height() / 2 + $(window).scrollTop();
            var thistop = $(window).height() / 2 - $("#" + popbox).height() / 2;
            var bodyheight = Math.max($(document.body).outerHeight(true), $(window).height());
            $("#" + popmask).css("height", bodyheight);
            $("#" + popbox).css({
                'left': thisleft,
                'top': thistop
            });

            //关闭按钮
            $("#" + popmask).click(function() {
                $("#" + popmask).remove();
                $("#" + popbox).remove();
            });

            $("#" + popbox).find(".js_popclose").click(function() {
                $("#" + popmask).remove();
                $("#" + popbox).remove();
            });

            if (def.clickFn) {
                def.clickFn();
            }

        }
    })
})(jQuery)


// 低版本IE提示
;(function($){
    function initialize($obj, title, text){
        var panel = "<span>"+ title +"</span>"
              + "<div class='browser_tip'> "+ text +"</div>"
              + "<div class='browser'>"
              + "<ul>"
              + "<li><a class='chrome' href='https://www.google.com/chrome/' target='_blank'></a></li>"
              + "<li><a class='firefox' href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'></a></li>"
              + "<li><a class='ie9' href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank'></a></li>"
              + "<li><a class='safari' href='http://www.apple.com/safari/download/' target='_blank'></a></li>"
              + "<li><a class='opera' href='http://www.opera.com/download/' target='_blank'></a></li>"
              + "<ul>"
              + "</div>"; 

        var overlay = $("<div id='ie-alert-overlay'></div>");
        var iepanel = $("<div id='ie-alert-panel'>"+ panel +"</div>");

        var docHeight = $(document).height();

        overlay.css("height", docHeight + "px");


        $obj.prepend(iepanel);
        $obj.prepend(overlay);
        $("#ie-alert-panel").css("background-position","-626px -116px");
        $obj.css("margin","0");   
        
        $(document).on('click', '#goon', function(event) {
            $("#ie-alert-overlay").hide();  
            $("#ie-alert-panel").hide();    
            event.preventDefault();                   
        });
            
    }; 



    $.fn.iealert = function(options){
        var defaults = { 
            title: '你知道你的Internet Explorer是过时了吗?<a class="red"  href="http://browsehappy.com/" target="_blank">速速点击换一个</a>', // title text
            text: " 为了得到我们网站最好的体验效果,我们建议您升级到最新版本的Internet Explorer或选择另一个web浏览器，<b class='red'>以下列表是最流行的web浏览器..</b><br /><br />ps:使用国产浏览器(360、猎豹、搜狗、遨游、QQ)用户建议切换成<b class='red'>高速</b>或<b class='red'>极速模式</b>可以获得更好的用户体验!!!<br /><h1 id='goon'>>>>继续访问</h1>",
            ieVersion:"9.0"
        };
        var userAgent = navigator.userAgent.toLowerCase(),
            isIE = userAgent.indexOf("msie")>-1,
            ieVersion;
        var option = $.extend(defaults, options);
        var $this = $(this);  
        
        if(isIE){
            ieVersion =  userAgent.match(/msie ([\d.]+)/)[1];
           if(ieVersion <= option.ieVersion ){
                initialize($this, option.title, option.text);
           }
        }
    };
})(jQuery);


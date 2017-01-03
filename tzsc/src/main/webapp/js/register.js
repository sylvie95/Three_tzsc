// 注册
$.fn.Reg = function(options) {
	var def = {
		regForm : "#reg_form",
		regBtn : "#js_reg",
		ajaxReg : "/login/register",
		ajaxSendSms : "/experience/verification_code",
		captcha : "/captcha_num"
	}

	var opts = $.extend({}, def, options);
	var _this = this, $this = $(opts.regForm), ajax_succ = {
		mobile : false,
		captcha_num : false,
		sms_captcha_num : false,
		nickname : false
	}, focus_val = "", ajax_succ_num = 0;

	$(opts.regBtn).click(function(event) {
		if ($(this).hasClass('disabled')) {
			return false;
		}

		if (!validator(opts)) {
			console.log("普通验证没通过");
			return false;
		}
		//ajax 异步验证
		var ajaxinp = $this.find("input[data-v]"), ajaxinp_L = ajaxinp.length;
		if (ajaxinp_L == $this.find("input[data-v=true]").length) {
			$this.submit();
		} else {
			return false;
		}
	});

	//图片验证砿 点击刷新
	$(".js_yzm").click(function(event) {
		updatacode();
	});

	function updatacode() {
		$(".js_yzm img").attr("src", opts.captcha + "?" + Math.random());
	}

	$(".js_sms_send").click(
			function(event) {
				if (!_regpiccode() || !ajax_succ.captcha_num || !_regphone()) {
					return false;
				}
				if ($(this).hasClass('disab')) {
					return false;
				}
				$.ajax({
					url : opts.ajaxSendSms,
					type : "GET",
					data : {
						to : $("input[name='mobile']").val(),
						r : Math.random(),
						code : $("input[name='captcha_num']").val()
					},
					beforeSend : function() {
						$(".js_sms_send").addClass("disab").attr("disabled",
								true).html("发送中...");
					},
					success : function(d) {
						$(".js_sms_send").attr("disabled", "disabled").html(
								d.time + "秒后可重新发逿");
						countDown($(".js_sms_send"), d.time)
					},
					error : function() {
					}
				})
			});

	function countDown(obj, seconds) {
		$obj = $(obj);
		timer = setInterval(function() {
			if (seconds >= 1) {
				seconds = seconds - 1;
				$obj.html(seconds + "秒后可重新发逿");
			} else {
				clearInterval(timer);
				$obj.removeClass('disab').removeAttr("disabled").html("获取短信验证砿");
				$obj.removeClass('disab').removeAttr("disabled")
						.html("获取短信验证砿");
			}
		}, 1000);
	}

	function validator(opts) {
		var flag = true;
		if (!_regphone() || !_regsmscode() || !_regnicename()
				|| !_regpassword() || !_regcheck()) {
			flag = false;
		}
		return flag;
	}

	$this.find("input").focus(function(event) {
		focus_val = $(this).val();
	})

	$this.find("input").blur(function(event) {
		//减少请求
		var blur_val = $.trim($(this).val());
		if (blur_val == focus_val && blur_val != "") {
			return false;
		}
		var name = $(this).attr("name");
		switch (name) {
		case "nickname":
			_regnicename();
			break;
		case "mobile":
			_regphone();
			break;
		case "password":
			_regpassword();
			break;
		case "captcha_num":
			_regpiccode();
			break;
		case "sms_captcha_num":
			_regsmscode();
			break;
		default:
			;
		}
	});

	$this.find("input").keyup(function(event) {
		var name = $(this).attr("name");
		switch (name) {
		// case "nickname": _regnicename(); break;
		case "mobile":
			_regphone();
			break;
		// case "password": _regpassword();break;
		// case "captcha_num": _regpiccode();break;
		// case "sms_captcha_num": _regsmscode(); break;
		default:
			;
		}
	});

	function checkuser(url, userele) {

		$.ajax({
			url : url,
			type : "GET",
			dataType : "json",
			data : {
				value : $(userele).val(),
				r : Math.random()
			},
			success : function(data) {
				var name = $(userele).attr("name");
				if (!data.success) {
					$(userele).attr("data-v", false);
					ajax_succ[name] = false;
					showMsg(userele, data.message);
					return false;
				} else {
					ajax_succ[name] = true;
					$(userele).attr("data-v", true);
					showMsg(userele, data.message, "succ");
					return true;
				}
			},
			error : function() {
			}
		})
	}

	function _regcheck() {
		//勾选同意条欿
		if ($("#user_terms").is(":checked")) {
			hideMsg("#user_terms");
			return true;
		} else {
			showMsg("#user_terms", "勾选同意此服务协议，才能继续注冿");
			return false;
		}
	}

	function _regphone() {
		var phone = $this.find("input[name='mobile']"), reg_mobile = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/, isMobile = reg_mobile
				.test($(phone).val());
		if ($(phone).val() == "" || !isMobile) {
			showMsg(phone, "请输入正确的手机号");
			return false;
		} else {
			checkuser($(phone).attr("data-url"), phone);
			return true;
		}
	}

	function _regnicename() {
		var nickname = $this.find("input[name='nickname']"), patternreg = /^[\w\u4e00-\u9fa5]+$/gi;
		if ($(nickname).val() == "") {
			showMsg(nickname, "请输入昵秿");
			return false;
		} else {
			var l = calculateByteLength($(nickname).val());
			if (l < Number(4)) {
				showMsg(nickname, "昵称的长度必须大于等亿4，一个中文字箿2个字笿");
				return false;
			} else if (l > Number(18)) {
				showMsg(nickname, "昵称的长度必须小于等亿18，一个中文字箿2个字笿");
				return false;
			} else if (!patternreg.test($(nickname).val())) {
				showMsg(nickname, "请输入昵称可包含(中文、数字、字母、下划线)");
				return false;
			} else {
				checkuser($(nickname).attr("data-url"), nickname);
				return true;
			}
		}
	}

	function _regpassword() {
		var password = $this.find("input[name='password']");
		if ($(password).val() == "") {
			showMsg(password, "请输入密砿");
			return false;
		} else {
			var m = calculateByteLength($(password).val());
			if (m <= Number(4)) {
				showMsg(password, "密码的长度必须大于或等于5");
				return false;
			} else if (m > Number(20)) {
				showMsg(password, "密码的长度必须小于或等于20");
				return false;
			} else {
				showMsg(password, "密码可用", "succ");
				return true;
			}
		}
	}

	function _regpiccode() {
		var piccode = $this.find("input[name='captcha_num']");
		if ($(piccode).val() == "") {
			$(piccode).parents(".form_item").find(".help_block").html(
					"请输入图片验证码").show();
			return false;
		} else {
			checkuser($(piccode).attr("data-url"), piccode);
			return true;
		}
	}

	function _regsmscode() {
		var smscode = $this.find("input[name='sms_captcha_num']");
		if ($(smscode).val() == "") {
			$(smscode).parents(".form_item").find(".help_block").html("请输入验证码")
					.show();
			return false;
		} else {
			checkuser($(smscode).attr("data-url"), smscode);
			return true;
		}
	}

	function _regterms() {
		if ($("#user_terms").is(":checked")) {
			hideMsg("#user_terms");
			return true;
		} else {
			showMsg("#user_terms", "勾选同意此服务协议，才能继续注冿");
			return false;
		}
	}

	function showMsg(element, message) {
		if (arguments.length == 3) { //成功信息
			$(element).parents(".form_item").find(".help_block").addClass(
					"succ").html(message).fadeIn('slow');
			//验证手机时，显示其他表单
			if ($(element).attr("name") == "mobile") {
				$this.find(".js_dn").removeClass('dn');
			}
		} else { //错误信息
			$(element).parents(".form_item").find(".help_block").removeClass(
					"succ").html(message).fadeIn('slow');
			if ($(element).attr("name") == "mobile") {
				$this.find(".js_dn").addClass('dn');
			}
		}
	}

	function hideMsg(element) {
		$(element).parents(".form_item").find(".help_block").html("").fadeOut(
				'slow');
	}

	function calculateByteLength(string) {
		var length = string.length;
		for (var i = 0; i < string.length; i++) {
			if (string.charCodeAt(i) > 127)
				length++;
		}
		return length;
	}
}

//登录
$.fn.Login = function(options) {
	var loginsocial = ''
			+ '<div class="social-login">'
			+ '    </span>' + '<div class="line"></div>' + '</div>';
	var loginHtml = ''
			+ '<div class="login_reg_box">'
			+ '	<div class="login_box" >'
			+ '		<span class="js_popclose pop_close"></span>'
			+ '		<h1>登录易淘网<a target="_blank" href="/register" class="fr">注册</a></h1>			'
			+ '			<form id="login_form" method="post" novalidate="novalidate" >'
			+ '			<div class="form_group js_message"></div>'
			+ '			<div class="form_group ">'
			+ '				<label class="control_label" for="login_username">帐号</label>'
			+ '				<div class="controls">'
			+ '					<input class="form_control" id="login_username" type="text" name="_username" value=""  placeholder="邮箱/用户吿" >'
			+ '					<div class="help_block"></div>'
			+ '				</div>'
			+ '			</div>'
			+ '			<div class="form_group">'
			+ '				<label class="control_label" for="login_password">密码</label>'
			+ '				<div class="controls">'
			+ '					<input class="form_control" id="login_password" type="password" name="_password"  placeholder="密码" >'
			+ '					<div class="help_block"></div>'
			+ '				</div>'
			+ '			</div>'
			+ '			<div class="form_group">'
			+ '				<div class="controls">'
			+ '					<span class="checkbox mtm ">'
			+ '					<label><input type="checkbox" name="_remember_me" checked="checked"> 记住密码 </label>'
			+ '					<a class="fr for_passwordbtn" href="/password/reset">忘记密码</a>'
			+ '					</span>' + '					<div class="help_block"></div>'
			+ '				</div>'
			+ '				<input class="login_btn" type="submit" value="登录">'
			+ '			</div>' + '	</form>' + loginsocial + ' </div>'
			+ '	<div class="mask"></div>' + '</div>';
	var def = {
		loginForm : "#login_form",
		loginBtn : "#js_login",
		ajaxLogin : "/login_check",
		captcha : "/captcha_num",
		isClose : true, //是否需要关闭按钮，默认需覿
		isAlone : false
	//是否是独立登录页面，默认弹出框形弿
	}
	var opts = $.extend({}, def, options);

	if (!opts.isAlone) { //弹出框形弿
		$(".login_reg_box").remove();
		$("body").append(loginHtml);

		var _this = this, $this = $(".login_reg_box");
		var winwidth = $(window).width();
		var thisleft = winwidth / 2
				- $(".login_reg_box .login_box").outerWidth(true) / 2;
		var thistop = $(window).height() / 2
				- $(".login_reg_box .login_box").height() / 2
				+ $(window).scrollTop();
		var bodyheight = Math.max($(document.body).outerHeight(true), $(
				document).height(), $(window).height());
		$(".login_reg_box .mask").css("height", bodyheight);
		$(".login_reg_box .login_box").css({
			'left' : thisleft,
			'top' : thistop
		});

		if (opts.isClose) { //默认需要按钿
			$(".login_reg_box .js_popclose").show();
			$(document).on('click', ".login_reg_box .js_popclose",
					function(event) {
						event.preventDefault();
						$(".login_reg_box").remove();
					});
		} else {
			$(".login_reg_box .js_popclose").hide();
		}
	}
}

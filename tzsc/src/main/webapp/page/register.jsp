<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>注册 - 易淘网</title>
	<link rel="stylesheet" type="text/css" href="../css/register.css">
</head>

<body class="bgf4">
<!-- top begin-->
<div class="top2 bb1c">
	<div class="wrap top ">
		<div class="logo"><a href=""><img src="/themes/codingnew-1/img/common/logo.png?1.1.3" width="122" height="37" alt="易淘网"></a><span><em>|</em>账号通行证</span></div>
		<div class="login_txt"><a onclick="$(document).Login();return false;" href="javascript:;">登录</a></div>
	</div>
</div>
<!-- top end -->

<div class=" reg_con2 clear">
   <div class="reg_box clear">
   		<h1>新用户注册</h1>
		<div class="reg2">
			<form novalidate="novalidate" action="/register" method="post" class="form-vertical" id="reg_form">
				<div class="form_item">
					<input type="text" id="register_emailOrMobile" name="mobile" class="inp" placeholder="请输入手机号" data-url="/register/mobile/check" data-v="false"  >
					<p class="help_block" ></p>
				</div>

				<div class="form_item ">
					<input type="text" class="inp inp2" id="captcha_num" name="captcha_num" maxlength="5" placeholder="图片验证码" data-v="false" data-url="/register/captcha/check" >
					<a class="js_yzm pic_code_btn" href="javascript:;"><img  class="yzmpic"  alt="点击图片刷新验证码" width="120px" height="40px;"  src="/captcha_num?"></a>
					<div class="help_block"></div>
				</div>

				<div class="form_item ">
					<input type="text" id="sms_captcha_num js_sms_send" name="sms_captcha_num" class="inp" placeholder="短信验证码" data-v="false" data-url="/experience/auth_code" >
					<a class="js_sms_send sms_code_btn " href="javascript:;" data-url="/experience/verification_code" id="send" >获取短信验证码</a>
					<p class="help_block"></p>
				</div>

				<div class="form_item ">
					<input type="text" id="register_nickname" name="nickname" class=" inp" data-v="false" placeholder="请输入昵称" data-url="/register/nickname/check" >
					<p class="help_block"></p>
				</div>

				<div class="form_item">
					<input type="password" id="register_password" name="password" class=" inp" maxlength="20" autocomplete="off" placeholder="密码">
					<p class="help_block"></p>
				</div>

				<div class="form_item">
					<input type="checkbox" id="user_terms" checked="checked"> 同意<a class="xieyi" href="/userterms" target="_blank">扣丁学堂用户协议</a>
					<div class="help_block" style="top:18px;" ></div>
				</div>
				<div class="form_item">
					<input type="hidden" name="mobile_phone" value="1">
					<input type="hidden" name="_csrf_token" value="bc16b80da3e278b27407eb621d813951a72da50c">
					<button id="js_reg" class="login_btn ">立即注册</button>
				</div> 
			</form>
		</div>
   </div>
</div>
	
<script src="../js/jquery-1.12.4.js"></script>
<script src="../js/register.js"></script>
<script>
	$(function(){
		$("#reg_form").Reg();
	})
</script>
</body>
</html>
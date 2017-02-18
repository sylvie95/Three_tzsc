<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/tzsc/">
<meta charset="utf-8">
<title>详情页面</title>
<link type="text/css" rel="stylesheet" href="css/fabu.css">
</head>

<body>
<header>
	<div class="header1">
        <div class="header1_1">
        	<ul>
                <li>你好！XXX欢迎您！</li>
            </ul>
            <ul>
                <li><a href="#">网站导航</a></li>
                <li><a href="#">帮助中心</a></li>
                <li><span></span><a href="#">个人应用</a>
                	<ul class="hidden1">
                    	<li><a href="#">个人中心</a></li>
                        <li><a href="#">我的订单</a></li>
                        <li style="cursor:pointer">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</li>
                    </ul>
                </li>
                <li>HI~请[<a href="login.html">登录</a>]&nbsp;&nbsp;<a href="register.html" style="color:#FD843D">[免费注册]</a></li>
            </ul>
        </div>
    
    </div>
    <!-- logo与搜索部分 -->
    <div class="header2">
    	<div class="header2_1">
        	<img/>
            <!--<p><input placeholder="请输入关键词..."/><a href="#">搜索</a></p>-->
        </div>
    </div>
</header>

<article>
	<div class="article1_1">
        <span><a href="#">首页</a></span><span>&nbsp;&nbsp;>&nbsp;&nbsp;发布闲置</span>
    </div>
	<div class="article1_2">
    	<form>
        	<ul>
            	<li><label>标题</label><input/></li>
                <li><label>类型</label><select><option>你好</option></select><select><option>你好</option></select></li>
                <li><label>描述</label><textarea></textarea></li>
                <li><label>价格</label><input/></li>
                <li>
                	<ul class="imgul">
                    	<li><img class="img0"/></li>
                        <li><img class="img1"/></li>
                        <li><img class="img2"/></li>
                        <li><img class="img3"/></li>
                        <li><img class="img4"/></li>
                    	<li id="addImgli"><span id="addImg"></span></li>
                        <li><input id="addPic" type="file" onchange="chgPic(this)" style="visibility:hidden"/></li>
                    </ul>
                </li>
                <li><label>联系电话</label><input/></li>
                <li><label>QQ</label><input/></li>
                <li><input id="fabuBtn" type="button" value="发布"/></li>
            </ul>
            
        </form>
    </div>
</article>

<footer>
	<div class="footer1_1">
        <div class="footer2_1">
            <ul>
                <li><img src="images/footer1.png"/></li>
                <li>
                	<ul>
                    	<li class="zi1">关于我们</li>
                        <li><a class="zi2" href="#">公司简介</a></li>
                        <li><a class="zi2" href="#">联系方式</a></li>
                    </ul>
                </li>
                <li>
                	<ul>
                    	<li class="zi1">交易保障</li>
                        <li><a class="zi2" href="#">网站协议</a></li>
                        <li><a class="zi2" href="#">支付方式</a></li>
                    </ul>
                </li>
                <li>
                	<ul>
                    	<li class="zi1">关注我们</li>
                        <li><a class="zi2" href="#">用户意见反馈</a></li>
                        <li><a class="zi2" href="#">分享给好友</a></li>
                    </ul>
                </li>
                <li>
                	<ul>
                    	<li class="zi1">联系我们</li>
                        <li style="color:#E75E08;font-weight:bold;">150-0895-9836</li>
                    </ul>
                </li>
            </ul>
    	</div>
        <div class="footer2_2">
        	<ul>
            	<li><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">平台公告</a></li>
                <li><a href="#">支付方式</a></li>
                <li><a href="#">联系方式</a></li>
                <li><a href="#">客服中心</a></li>
                <li><a href="#">联系合作</a></li>
                <li><a href="#">网站导航</a></li>
                <li><a href="#">公司资质</a></li>
            </ul>
            <span>Copyright 2017 lsy 版权所有</span>
        </div>
    </div>
</footer>

	<script type="text/javascript" src="js/jquery-1.12.4.js"></script>	
	<script type="text/javascript" src="js/fabu.js"></script>
</body>
</html>

<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<base href="/tzsc/">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 重要样式, 勿动 -->
<link href="defaultcss/common.css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</head>
<body><!-- top -->
    <div class="wrap">
        <div class="top">
            <div class="logo"><a class="mt15" href="http://www.codingke.com/"><img src="./index_kd_files/logo2.jpg" alt="扣丁学堂" title="扣丁学堂" width="180" height="50"></a></div>
            <div class="search_box">
                <form action="http://www.codingke.com/search" method="get">
                    <input type="text" class="search_inp" placeholder="搜索你想要的课程" name="q">
                    <input type="submit" class="search_btn" value="">
                </form>
                <ul class="search_tip">
                    <li><a href="http://www.codingke.com/search?category=204">HTML5</a></li>
                    <li><a href="http://www.codingke.com/search?category=205">UI</a></li>
                </ul>
            </div>
            <div class="login_txt">
                                    支持微信微博QQ登录&nbsp;&nbsp;
            	<!-- 登录之前 begin-->
            	<a onclick="$(document).Login();return false;" href="javascript:;">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.codingke.com/register">注册</a>
            	<!-- 登录之前 end-->
       		</div>
        </div>
    </div><!-- 导航 -->
    <div class="wrap clear">
        <div class="navi1">
            <span class="navi1_tit">课程表</span>
            <ul class="navi1_menu" id="navi1">
        		<li>
                	<a class="sub" title="HTML5" href="http://www.codingke.com/html5" target="_blank">HTML5</a>
                    <div class="sub_menu" style="display: none;">
                        <a class="sub_txt" title="HTML5开发工程师 学习路线" href="http://www.codingke.com/html5" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                  		<dl class="clear">
                            <dt><a href="http://www.codingke.com/v/227-course-227-course" title="HTML+CSS" target="_blank">HTML+CSS</a></dt>
               				<dd><a href="http://www.codingke.com/v/395-chapter-227-course" title="HTML语法结构与基础标签" target="_blank">HTML语法结构与基础标签</a></dd>
                         	<dd><a href="http://www.codingke.com/v/398-chapter-227-course" title="CSS样式应用" target="_blank">CSS样式应用</a></dd>
                        	<dd><a href="http://www.codingke.com/v/401-chapter-227-course" title="DIV+CSS商城布局" target="_blank">DIV+CSS商城布局</a></dd>
                		</dl>                  
                    </div>
                </li>
               	<li>
                    <a class="sub" title="UI" href="http://www.codingke.com/ui" target="_blank">UI</a>
                    <div class="sub_menu" style="display: none;">
                        <a class="sub_txt" title="UI设计师 学习路线" href="http://www.codingke.com/ui" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                    	<dl class="clear">
                            <dt><a href="http://www.codingke.com/v/224-course-224-course" title="设计基础" target="_blank">设计基础</a></dt>
                       		<dd><a href="http://www.codingke.com/v/379-chapter-224-course" title="课程介绍" target="_blank">课程介绍</a></dd>
                        	<dd><a href="http://www.codingke.com/v/380-chapter-224-course" title="PS基础操作" target="_blank">PS基础操作</a></dd>
                         	<dd><a href="http://www.codingke.com/v/381-chapter-224-course" title="PS工具应用" target="_blank">PS工具应用</a></dd>
                     	</dl>                   
                    </div>
                </li>
             	<li>
                    <a class="sub" title="iOS" href="http://www.codingke.com/ios" target="_blank">iOS</a>
                    <div class="sub_menu" style="display: none;">
                        <a class="sub_txt" title="iOS开发工程师 学习路线" href="http://www.codingke.com/ios" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                    	<dl class="clear">
                            <dt><a href="http://www.codingke.com/v/213-course-213-course" title="Objective-C语言基础" target="_blank">Objective-C语言基础</a></dt>
                       		<dd><a href="http://www.codingke.com/v/288-chapter-213-course" title="环境简介" target="_blank">环境简介</a></dd>
                         	<dd><a href="http://www.codingke.com/v/289-chapter-213-course" title="面向对象基础" target="_blank">面向对象基础</a></dd>
                        	<dd><a href="http://www.codingke.com/v/291-chapter-213-course" title="字符串 数组 字典" target="_blank">字符串 数组 字典</a></dd>
                          	<dd><a href="http://www.codingke.com/v/294-chapter-213-course" title="文件操作" target="_blank">文件操作</a></dd>
                         	<dd><a href="http://www.codingke.com/v/295-chapter-213-course" title="语法进阶" target="_blank">语法进阶</a></dd>
                        	<dd><a href="http://www.codingke.com/v/425-chapter-213-course" title="常用设计模式" target="_blank">常用设计模式</a></dd>
                    	</dl>                  
                    </div>
                </li>
              	<li>
                    <a class="sub" title="Android" href="http://www.codingke.com/android" target="_blank">Android</a>
                    <div class="sub_menu" style="display: none;">
                        <a class="sub_txt" title="Android开发工程师 学习路线" href="http://www.codingke.com/android" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                    	<dl class="clear">
                      		<dt><a href="http://www.codingke.com/v/166-course-166-course" title="核心技术初级" target="_blank">核心技术初级</a></dt>
                       		<dd><a href="http://www.codingke.com/v/243-chapter-166-course" title="教程学习指南" target="_blank">教程学习指南</a></dd>
                         	<dd><a href="http://www.codingke.com/v/96-chapter-166-course" title="Android开发环境搭建" target="_blank">Android开发环境搭建</a></dd>
                          	<dd><a href="http://www.codingke.com/v/97-chapter-166-course" title="UI布局" target="_blank">UI布局</a></dd>
                          	<dd><a href="http://www.codingke.com/v/102-chapter-166-course" title="基础UI组件（一）" target="_blank">基础UI组件（一）</a></dd>
                        	<dd><a href="http://www.codingke.com/v/104-chapter-166-course" title="基础UI组件（二）" target="_blank">基础UI组件（二）</a></dd>
                         	<dd><a href="http://www.codingke.com/v/128-chapter-166-course" title="高级UI组件（一）" target="_blank">高级UI组件（一）</a></dd>
                          	<dd><a href="http://www.codingke.com/v/129-chapter-166-course" title="高级UI组件（二）" target="_blank">高级UI组件（二）</a></dd>
                        	<dd><a href="http://www.codingke.com/v/130-chapter-166-course" title="高级UI组件（三）" target="_blank">高级UI组件（三）</a></dd>
                      	</dl>            
                    </div>
                </li>
                <li>
                    <a class="sub" title="PHP" href="http://www.codingke.com/php" target="_blank">PHP</a>
                    <div class="sub_menu" style="display: none;">
                        <a class="sub_txt" title="PHP全栈开发工程师 学习路线" href="http://www.codingke.com/php" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                       	<dl class="clear">
                            <dt><a href="http://www.codingke.com/v/226-course-226-course" title="PHP5 基础语法" target="_blank">PHP5 基础语法</a></dt>
                            <dd><a href="http://www.codingke.com/v/385-chapter-226-course" title="PHP 开发环境" target="_blank">PHP 开发环境</a></dd>
                            <dd><a href="http://www.codingke.com/v/387-chapter-226-course" title="PHP 基础语法入门" target="_blank">PHP 基础语法入门</a></dd>
                            <dd><a href="http://www.codingke.com/v/388-chapter-226-course" title="PHP 数据类型" target="_blank">PHP 数据类型</a></dd>
                            <dd><a href="http://www.codingke.com/v/389-chapter-226-course" title="PHP 运算符" target="_blank">PHP 运算符</a></dd>
                            <dd><a href="http://www.codingke.com/v/390-chapter-226-course" title="PHP 流程控制" target="_blank">PHP 流程控制</a></dd>
                            <dd><a href="http://www.codingke.com/v/391-chapter-226-course" title="PHP 函数" target="_blank">PHP 函数</a></dd>
                            <dd><a href="http://www.codingke.com/v/392-chapter-226-course" title="PHP 数组" target="_blank">PHP 数组</a></dd>
                        </dl>
                    </div>
                </li>
               	<li>
                    <a class="sub" title="JavaEE" href="http://www.codingke.com/javaee" target="_blank">JavaEE</a>
                    <div class="sub_menu">
                        <a class="sub_txt" title="JavaEE全栈开发工程师 学习路线" href="http://www.codingke.com/javaee" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                       	<dl class="clear">
                            <dt><a href="http://www.codingke.com/v/216-course-216-course" title="Java编程基础" target="_blank">Java编程基础</a></dt>
                         	<dd><a href="http://www.codingke.com/v/308-chapter-216-course" title="环境搭建 基础语法" target="_blank">环境搭建 基础语法</a></dd>
                          	<dd><a href="http://www.codingke.com/v/314-chapter-216-course" title="运算符" target="_blank">运算符</a></dd>
                         	<dd><a href="http://www.codingke.com/v/386-chapter-216-course" title="流程控制" target="_blank">流程控制</a></dd>
                       		<dd><a href="http://www.codingke.com/v/393-chapter-216-course" title="函数" target="_blank">函数</a></dd>
                           	<dd><a href="http://www.codingke.com/v/394-chapter-216-course" title="数组" target="_blank">数组</a></dd>
                          	<dd><a href="http://www.codingke.com/v/402-chapter-216-course" title="多种排序" target="_blank">多种排序</a></dd>
                           	<dd><a href="http://www.codingke.com/v/405-chapter-216-course" title="面向对象基础" target="_blank">面向对象基础</a></dd>
                           	<dd><a href="http://www.codingke.com/v/417-chapter-216-course" title="继承 抽象类" target="_blank">继承 抽象类</a></dd>
                           	<dd><a href="http://www.codingke.com/v/419-chapter-216-course" title="接口与多态" target="_blank">接口与多态</a></dd>
                          	<dd><a href="http://www.codingke.com/v/420-chapter-216-course" title="内部类" target="_blank">内部类</a></dd>
                           	<dd><a href="http://www.codingke.com/v/434-chapter-216-course" title="包装类 日期类 数学类" target="_blank">包装类 日期类 数学类</a></dd>
                          	<dd><a href="http://www.codingke.com/v/435-chapter-216-course" title="集合" target="_blank">集合</a></dd>
                          	<dd><a href="http://www.codingke.com/v/439-chapter-216-course" title="泛型" target="_blank">泛型</a></dd>
                        	<dd><a href="http://www.codingke.com/v/440-chapter-216-course" title="Map应用" target="_blank">Map应用</a></dd>
                         	<dd><a href="http://www.codingke.com/v/441-chapter-216-course" title="工具类" target="_blank">工具类</a></dd>
                        </dl>                 
                    </div>
                </li>
               	<li>
                    <a class="sub" title="大数据" href="http://www.codingke.com/bigdata" target="_blank">大数据</a>
                    <div class="sub_menu" style="display: none;">
                        <a class="sub_txt" title="大数据开发工程师 学习路线" href="http://www.codingke.com/bigdata" target="_blank">学习路线<i class="iconfont icon-14052218"></i></a>
                       	<dl class="clear">
                            <dt><a href="http://www.codingke.com/v/239-course-239-course" title="大数据开发" target="_blank">大数据开发</a></dt>
                           	<dd><a href="http://www.codingke.com/v/431-chapter-239-course" title="环境基础" target="_blank">环境基础</a></dd>
                           	<dd><a href="http://www.codingke.com/v/432-chapter-239-course" title="Hadoop基础" target="_blank">Hadoop基础</a></dd>
                         	<dd><a href="http://www.codingke.com/v/433-chapter-239-course" title="HDFS" target="_blank">HDFS</a></dd>
                            <dd><a href="http://www.codingke.com/v/438-chapter-239-course" title="MapReduce入门" target="_blank">MapReduce入门</a></dd>
                          	<dd><a href="http://www.codingke.com/v/445-chapter-239-course" title="MapReduce实战应用" target="_blank">MapReduce实战应用</a></dd>
                       	</dl>           
                    </div>
                </li>
            </ul>
        </div>
        <ul class="navi2">
            <li><a class="sub" href="http://www.codingke.com/" title="首页">首页</a></li>
			<li><a class="sub" href="http://www.codingke.com/screening" title="学习路线">学习路线</a></li>
			<li><a class="sub" href="http://www.codingke.com/code/code_ios" title="代码片段" target="_blank">代码片段</a></li>
			<li><a class="sub" href="http://www.codingke.com/article" title="新闻资讯" target="_blank">新闻资讯</a></li>
			<li><a class="sub" href="http://www.codingke.com/questions" title="交流社区" target="_blank">交流社区</a></li>
        </ul>
        <div class="navi_tel js_speaker">
            <div class="bd">
                <div class="tempWrap" style="overflow:hidden; position:relative; height:20px">
                    <ul class="" style="height: 60px; position: relative; padding: 0px; margin: 0px; top: -24.18px;">
                        <li style="height: 20px;"><a href="javascript:;"> 免费服务热线：400-654-7778</a></li>
                        <li style="height: 20px;"><a href="javascript:;"> 免费服务热线：400-654-7778</a></li>
                        <li style="height: 20px;"><a href="javascript:;"> 免费服务热线：400-654-7778</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- banner  功能块 : 重要 -->
    <div class="banner clear">
        <div class="banner_box" id="banner">
            <div class="banner_list" id="banner_list">
                <a href="https://ke.qq.com/course/172390" target="_blank" style="z-index: 10; opacity: 0; display: none;"><img src="./index_kd_files/uinianxin30W.jpg" alt=""></a>
                <a href="http://www.codingke.com/activity/wx/weixin.html" target="_blank" style="z-index: 9; display: block; opacity: 1;"><img src="./index_kd_files/weixinxiaochengxubanner.jpg" alt=""></a>
                <a href="http://www.codingke.com/php7.x" style="z-index: 8; opacity: 0; display: none;"><img src="./index_kd_files/banner2.jpg" alt=""></a>
                <a href="http://www.codingke.com/screening" style="z-index: 7; opacity: 0; display: none;"><img src="./index_kd_files/banner1.jpg" alt=""></a>
            </div>
            <div class="banner_control" id="banner_btn">
            	<!--<a href="javascript:void(0);" class=""></a><a href="javascript:void(0);" class="active"></a><a href="javascript:void(0);" class=""></a><a href="javascript:void(0);" class=""></a>-->
            </div>
        </div>
    </div>

    
	<!-- 公开课 -->
	<div class="wrap gkk js_gkk" rel="nofollow">
		<h2>最新闲置</h2>
		<a class="prev" href="javascript:void(0)"></a>
		<a class="next" href="javascript:void(0)"></a>
		<div class="bd">
			<div class="tempWrap" style="overflow:hidden; position:relative; width:1052px">
            	<ul class="gkk_ul" style="width: 3945px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: -1315px;">
                	<li class="listNew" rel="nofollow" onclick="window.open()" style="float: left; width: 248px;">
						<a class="gkk_imgbox" href="">
                            <img src="images/not_pic.jpg" alt="" widht="248" height="150">
                            <div class="tit">
                                <p class="time">12月20日开课 <span>UI</span></p>
                                <b></b>
                            </div>
						</a>
						<!-- <p class="name">挑战年薪30万-移动UI设计师之路</p> -->
						<p class="num">已有<span class="red">717</span>人报名 <a href="http://www.codingke.com/">立即报名</a></p>
					</li>
                    <li class="listNew" rel="nofollow" onclick="window.open()" style="float: left; width: 248px;">
						<a class="gkk_imgbox" href="http://www.codingke.com/#">
                            <img src="./index_kd_files/gkk10.jpg" alt="" widht="248" height="150">
                            <div class="tit">
                                <p class="time">12月20日开课 <span>UI</span></p>
                                <b></b>
                            </div>
						</a>
						<p class="name">挑战年薪30万-移动UI设计师之路</p>
						<p class="num">已有<span class="red">717</span>人报名 <a href="http://www.codingke.com/">立即报名</a></p>
					</li>
                   	<li rel="nofollow" onclick="" style="float: left; width: 248px;">
						<a class="gkk_imgbox" href="http://www.codingke.com/#">
                            <img src="./index_kd_files/gkk10.jpg" alt="" widht="248" height="150">
                            <div class="tit">
                                <p class="time">12月20日开课 <span>UI</span></p>
                                <b></b>
                            </div>
						</a>
						<p class="name">挑战年薪30万-移动UI设计师之路</p>
						<p class="num">已有<span class="red">717</span>人报名 <a href="http://www.codingke.com/">立即报名</a></p>
					</li>
                    <li rel="nofollow" onclick="window.open(&#39;https://ke.qq.com/course/172390&#39;,&#39;_blank&#39;)" style="float: left; width: 248px;">
						<a class="gkk_imgbox" href="http://www.codingke.com/#">
                            <img src="./index_kd_files/gkk10.jpg" alt="" widht="248" height="150">
                            <div class="tit">
                                <p class="time">12月20日开课 <span>UI</span></p>
                                <b></b>
                            </div>
						</a>
						<p class="name">挑战年薪30万-移动UI设计师之路</p>
						<p class="num">已有<span class="red">717</span>人报名 <a href="http://www.codingke.com/">立即报名</a></p>
					</li>
                </ul>
            </div>
		</div>
	</div>

	<div class="bgfff">
		<!-- 课程试学 -->
		<div class="wrap kcsx clear ">
			<h2>课程试学</h2>
			<div class="clear">
				<!-- <img class="fl" src="/themes/codingnew-1/img/index/shixue.jpg" alt="课程试学" width="264" height="526" > -->
				<ul class="kcsx_list">
					<li class="highlight">
						<a href="http://www.codingke.com/v/29-career-29-career" title="HTML5+CSS3界面开发" target="_blank">
							<!-- <span class="lab">随堂</span> -->
							<img src="./index_kd_files/1.jpg" width="336" height="191" alt="">
							<div class="list_info">
								<p>在线:<b>免费</b> <span>线下:<em>1499元</em></span></p>
								<p>难度:初级入门 </p>
							</div>
						</a>
					</li>
					<li class="highlight">
						<a href="http://www.codingke.com/v/29-career-29-career" title="HTML5+CSS3界面开发" target="_blank">
							<!-- <span class="lab">随堂</span> -->
							<img src="./index_kd_files/1.jpg" width="336" height="191" alt="">
							<div class="list_info">
								<p>在线:<b>免费</b> <span>线下:<em>1499元</em></span></p>
								<p>难度:初级入门 </p>
							</div>
						</a>
					</li>
					<li class="highlight">
						<a href="http://www.codingke.com/v/29-career-29-career" title="HTML5+CSS3界面开发" target="_blank">
							<!-- <span class="lab">随堂</span> -->
							<img src="./index_kd_files/1.jpg" width="336" height="191" alt="">
							<div class="list_info">
								<p>在线:<b>免费</b> <span>线下:<em>1499元</em></span></p>
								<p>难度:初级入门 </p>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<ul class="navi3 clear" id="kcsx_menu">
				<li class="active"><a href="javascript:;">热门推荐</a></li>
				<li><a href="javascript:;">HTML5</a></li>
				<li><a href="javascript:;">UI</a></li>
				<li><a href="javascript:;">iOS</a></li>
				<li><a href="javascript:;">Android</a></li>
				<li><a href="javascript:;">PHP</a></li>
			</ul>

			<div class="kcbox clear">
				<!-- 热门推荐 begin-->
				<div class="kcbox_list clear active">
					<ul class="kclist js_kclist">
						<li>
							<a href="http://www.codingke.com/v/41-career" title="微信小程序开发" target="_blank">
								<img src="./index_kd_files/wxxcx.jpg" alt="" width="240" height="169">
								<p class="tit">微信小程序开发</p>
								<p class="info">先人一步,本系列课程旨在第一时间为大家提供全面系统的微信小程序相关的开发知识,快速搭建环境学习知识避免走弯路浪费宝贵的学习时间,在学习完本套课程之后能够基本掌握小程序开发中用到的必备技能,可以独立完成小程序应用开发.
								</p>
								<p class="num_total"><i>3454</i>人学习 <span>共<i>12</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/41-career" title="微信小程序开发" target="_blank">
								<img src="./index_kd_files/wxxcx.jpg" alt="" width="240" height="169">
								<p class="tit">微信小程序开发</p>
								<p class="info">先人一步,本系列课程旨在第一时间为大家提供全面系统的微信小程序相关的开发知识,快速搭建环境学习知识避免走弯路浪费宝贵的学习时间,在学习完本套课程之后能够基本掌握小程序开发中用到的必备技能,可以独立完成小程序应用开发.
								</p>
								<p class="num_total"><i>3454</i>人学习 <span>共<i>12</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/41-career" title="微信小程序开发" target="_blank">
								<img src="./index_kd_files/wxxcx.jpg" alt="" width="240" height="169">
								<p class="tit">微信小程序开发</p>
								<p class="info">先人一步,本系列课程旨在第一时间为大家提供全面系统的微信小程序相关的开发知识,快速搭建环境学习知识避免走弯路浪费宝贵的学习时间,在学习完本套课程之后能够基本掌握小程序开发中用到的必备技能,可以独立完成小程序应用开发.
								</p>
								<p class="num_total"><i>3454</i>人学习 <span>共<i>12</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/41-career" title="微信小程序开发" target="_blank">
								<img src="./index_kd_files/wxxcx.jpg" alt="" width="240" height="169">
								<p class="tit">微信小程序开发</p>
								<p class="info">先人一步,本系列课程旨在第一时间为大家提供全面系统的微信小程序相关的开发知识,快速搭建环境学习知识避免走弯路浪费宝贵的学习时间,在学习完本套课程之后能够基本掌握小程序开发中用到的必备技能,可以独立完成小程序应用开发.
								</p>
								<p class="num_total"><i>3454</i>人学习 <span>共<i>12</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/41-career" title="微信小程序开发" target="_blank">
								<img src="./index_kd_files/wxxcx.jpg" alt="" width="240" height="169">
								<p class="tit">微信小程序开发</p>
								<p class="info">先人一步,本系列课程旨在第一时间为大家提供全面系统的微信小程序相关的开发知识,快速搭建环境学习知识避免走弯路浪费宝贵的学习时间,在学习完本套课程之后能够基本掌握小程序开发中用到的必备技能,可以独立完成小程序应用开发.
								</p>
								<p class="num_total"><i>3454</i>人学习 <span>共<i>12</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/41-career" title="微信小程序开发" target="_blank">
								<img src="./index_kd_files/wxxcx.jpg" alt="" width="240" height="169">
								<p class="tit">微信小程序开发</p>
								<p class="info">先人一步,本系列课程旨在第一时间为大家提供全面系统的微信小程序相关的开发知识,快速搭建环境学习知识避免走弯路浪费宝贵的学习时间,在学习完本套课程之后能够基本掌握小程序开发中用到的必备技能,可以独立完成小程序应用开发.
								</p>
								<p class="num_total"><i>3454</i>人学习 <span>共<i>12</i>课</span></p>
							</a>
						</li>
					</ul>
					<div class="kcinfo">
						<h2>快讯</h2>
						<ul>
							<li>
                            	<i class="green"></i>
                                <a href="http://www.codingke.com/article/1281">谷歌Pixel XL外观被曝光<img src="./index_kd_files/110934e66dd0072694.jpg" width="192" height="110" alt=""></a>
                            </li>
							<li>
                            	<i class="green"></i><a href="http://www.codingke.com/article/1280">苹果iOS10正式版推送前瞻：<img src="./index_kd_files/100010aedf97266958.jpg" width="192" height="110" alt=""></a>
                            </li>																									 							<li>
                            	<i></i><a href="http://www.codingke.com/article/1279">苹果发布iPhone7和iPh</a>
                            </li>																							  	 							   							<li>
                            	<i></i><a href="http://www.codingke.com/article/1278">扣丁学堂web前端开发培训：解</a>
                            </li>
							<li>
                            	<i></i><a href="http://www.codingke.com/article/1277">浅谈关于php开发框架的九个优</a>
                            </li>												</ul>
					</div>
				</div>
				<!-- 热门推荐 end-->
				<!-- H5 begin-->
				<div class="kcbox_list clear">
					<ul class="kclist js_kclist">
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS布局实战" target="_blank">
								<img src="./index_kd_files/bjsz.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS布局实战</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>3355</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS布局实战" target="_blank">
								<img src="./index_kd_files/bjsz.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS布局实战</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>3355</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS布局实战" target="_blank">
								<img src="./index_kd_files/bjsz.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS布局实战</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>3355</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS布局实战" target="_blank">
								<img src="./index_kd_files/bjsz.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS布局实战</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>3355</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS布局实战" target="_blank">
								<img src="./index_kd_files/bjsz.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS布局实战</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>3355</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS布局实战" target="_blank">
								<img src="./index_kd_files/bjsz.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS布局实战</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>3355</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
					</ul>
					<div class="kcinfo">
						<h2>快讯</h2>
						<ul>
							<li>
                            	<i class="green"></i><a href="http://www.codingke.com/article/1278">扣丁学堂web前端开发培训：解<img src="./index_kd_files/1439186dae95385594.jpg" width="192" height="110" alt=""></a>
                            </li>																						 		 							 							<li>
                            	<i class="green"></i><a href="http://www.codingke.com/article/1271">浅谈为什么选择学习HTML5开<img src="./index_kd_files/1514273c6ea5119949.jpg" width="192" height="110" alt=""></a>
                            </li>																						   							 							<li>
                            	<i></i><a href="http://www.codingke.com/article/1260">浅谈关于HTML5开发未来的发</a>
                            </li>
							<li>
                            	<i></i><a href="http://www.codingke.com/article/1255">从零开始学html5 html</a>
                            </li>																								  	                 			<li>
                            	<i></i><a href="http://www.codingke.com/article/1249">扣丁学堂Web前端开发之HTM</a>
                            </li>
						</ul>
					</div>
				</div>
				<!-- H5 end-->
				<!-- UI begin-->
				<div class="kcbox_list clear">
					<ul class="kclist js_kclist">
						<li>
							<a href="http://www.codingke.com/v/1676-lesson-28-career" title="色彩基础" target="_blank">
								<img src="./index_kd_files/scjc.jpg" alt="" width="240" height="169">
								<p class="tit">色彩基础</p>
								<p class="info">在色彩设计应用中，我们对颜色不同程度的理解，影响到设计页面的表现，熟练地运用色彩搭配，设计时岂不事半功倍</p>
								<p class="num_total"><i>7578</i>人学习 <span>共<i>16</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/1676-lesson-28-career" title="色彩基础" target="_blank">
								<img src="./index_kd_files/scjc.jpg" alt="" width="240" height="169">
								<p class="tit">色彩基础</p>
								<p class="info">在色彩设计应用中，我们对颜色不同程度的理解，影响到设计页面的表现，熟练地运用色彩搭配，设计时岂不事半功倍</p>
								<p class="num_total"><i>7578</i>人学习 <span>共<i>16</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/1676-lesson-28-career" title="色彩基础" target="_blank">
								<img src="./index_kd_files/scjc.jpg" alt="" width="240" height="169">
								<p class="tit">色彩基础</p>
								<p class="info">在色彩设计应用中，我们对颜色不同程度的理解，影响到设计页面的表现，熟练地运用色彩搭配，设计时岂不事半功倍</p>
								<p class="num_total"><i>7578</i>人学习 <span>共<i>16</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/1676-lesson-28-career" title="色彩基础" target="_blank">
								<img src="./index_kd_files/scjc.jpg" alt="" width="240" height="169">
								<p class="tit">色彩基础</p>
								<p class="info">在色彩设计应用中，我们对颜色不同程度的理解，影响到设计页面的表现，熟练地运用色彩搭配，设计时岂不事半功倍</p>
								<p class="num_total"><i>7578</i>人学习 <span>共<i>16</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/1676-lesson-28-career" title="色彩基础" target="_blank">
								<img src="./index_kd_files/scjc.jpg" alt="" width="240" height="169">
								<p class="tit">色彩基础</p>
								<p class="info">在色彩设计应用中，我们对颜色不同程度的理解，影响到设计页面的表现，熟练地运用色彩搭配，设计时岂不事半功倍</p>
								<p class="num_total"><i>7578</i>人学习 <span>共<i>16</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/1676-lesson-28-career" title="色彩基础" target="_blank">
								<img src="./index_kd_files/scjc.jpg" alt="" width="240" height="169">
								<p class="tit">色彩基础</p>
								<p class="info">在色彩设计应用中，我们对颜色不同程度的理解，影响到设计页面的表现，熟练地运用色彩搭配，设计时岂不事半功倍</p>
								<p class="num_total"><i>7578</i>人学习 <span>共<i>16</i>课</span></p>
							</a>
						</li>
					</ul>
					<div class="kcinfo">
						<h2>快讯</h2>
						<ul>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1269">扣丁学堂ui视频教程始终以企业<img src="./index_kd_files/143507bb875f440495.jpg" width="192" height="110" alt=""></a></li>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1258">盘点2016年最火的行业之ui<img src="./index_kd_files/134901df138b751415.jpg" width="192" height="110" alt=""></a></li>																																	 							<li><i></i><a href="http://www.codingke.com/article/1253">盘点2016年UI设计师发展前</a></li>																																 							<li><i></i><a href="http://www.codingke.com/article/1250">coding学堂讲解ui设计师</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1245">扣丁学堂2016全新起航ui设</a></li>
						</ul>
					</div>
				</div>
				<!-- UI end-->
				<!-- IOS begin-->
				<div class="kcbox_list clear">
					<ul class="kclist js_kclist">
						<li>
							<a href="http://www.codingke.com/v/371-chapter-371-chapter" title="微博布局实现" target="_blank">
								<img src="./index_kd_files/wbbjsx.jpg" alt="" width="240" height="169">
								<p class="tit">微博布局实现</p>
								<p class="info">通过实际上线项目分析,完成具体实现步骤的分析,通过MVC设计模式使得代码的可维护性更强</p>
								<p class="num_total"><i>4857</i>人学习 <span>共<i>3</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/371-chapter-371-chapter" title="微博布局实现" target="_blank">
								<img src="./index_kd_files/wbbjsx.jpg" alt="" width="240" height="169">
								<p class="tit">微博布局实现</p>
								<p class="info">通过实际上线项目分析,完成具体实现步骤的分析,通过MVC设计模式使得代码的可维护性更强</p>
								<p class="num_total"><i>4857</i>人学习 <span>共<i>3</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/371-chapter-371-chapter" title="微博布局实现" target="_blank">
								<img src="./index_kd_files/wbbjsx.jpg" alt="" width="240" height="169">
								<p class="tit">微博布局实现</p>
								<p class="info">通过实际上线项目分析,完成具体实现步骤的分析,通过MVC设计模式使得代码的可维护性更强</p>
								<p class="num_total"><i>4857</i>人学习 <span>共<i>3</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/371-chapter-371-chapter" title="微博布局实现" target="_blank">
								<img src="./index_kd_files/wbbjsx.jpg" alt="" width="240" height="169">
								<p class="tit">微博布局实现</p>
								<p class="info">通过实际上线项目分析,完成具体实现步骤的分析,通过MVC设计模式使得代码的可维护性更强</p>
								<p class="num_total"><i>4857</i>人学习 <span>共<i>3</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/371-chapter-371-chapter" title="微博布局实现" target="_blank">
								<img src="./index_kd_files/wbbjsx.jpg" alt="" width="240" height="169">
								<p class="tit">微博布局实现</p>
								<p class="info">通过实际上线项目分析,完成具体实现步骤的分析,通过MVC设计模式使得代码的可维护性更强</p>
								<p class="num_total"><i>4857</i>人学习 <span>共<i>3</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/371-chapter-371-chapter" title="微博布局实现" target="_blank">
								<img src="./index_kd_files/wbbjsx.jpg" alt="" width="240" height="169">
								<p class="tit">微博布局实现</p>
								<p class="info">通过实际上线项目分析,完成具体实现步骤的分析,通过MVC设计模式使得代码的可维护性更强</p>
								<p class="num_total"><i>4857</i>人学习 <span>共<i>3</i>课</span></p>
							</a>
						</li>
					</ul>
					<div class="kcinfo">
						<h2>快讯</h2>
						<ul>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1280">苹果iOS10正式版推送前瞻：<img src="./index_kd_files/100010aedf97266958.jpg" width="192" height="110" alt=""></a></li>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1279">苹果发布iPhone7和iPh<img src="./index_kd_files/101504897ab3208771.jpg" width="192" height="110" alt=""></a></li>
							<li><i></i><a href="http://www.codingke.com/article/1275">探究苹果iOS9操作系统安装率</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1274">iPhone7发布会时间确定及</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1272">苹果不止iOS9有漏洞，连开发</a></li>
						</ul>
					</div>
				</div>
				<!-- IOS end-->
				<!-- Android begin-->
				<div class="kcbox_list clear">
					<ul class="kclist js_kclist">
						<li>
							<a href="http://www.codingke.com/v/308-chapter-4-career" title="Java基础语法" target="_blank">
								<img src="./index_kd_files/javajichuyufa.jpg" alt="" width="240" height="169">
								<p class="tit">Java基础语法</p>
								<p class="info">对于初学者来说掌握技术不一定要快深,一定要从最简单的基础入门,提高兴趣,牢牢掌握基础知识点,本章课程从最基本的语法开始讲解,适合0基础的学生学习</p>
								<p class="num_total"><i>5542</i>人学习 <span>共<i>6</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/308-chapter-4-career" title="Java基础语法" target="_blank">
								<img src="./index_kd_files/javajichuyufa.jpg" alt="" width="240" height="169">
								<p class="tit">Java基础语法</p>
								<p class="info">对于初学者来说掌握技术不一定要快深,一定要从最简单的基础入门,提高兴趣,牢牢掌握基础知识点,本章课程从最基本的语法开始讲解,适合0基础的学生学习</p>
								<p class="num_total"><i>5542</i>人学习 <span>共<i>6</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/308-chapter-4-career" title="Java基础语法" target="_blank">
								<img src="./index_kd_files/javajichuyufa.jpg" alt="" width="240" height="169">
								<p class="tit">Java基础语法</p>
								<p class="info">对于初学者来说掌握技术不一定要快深,一定要从最简单的基础入门,提高兴趣,牢牢掌握基础知识点,本章课程从最基本的语法开始讲解,适合0基础的学生学习</p>
								<p class="num_total"><i>5542</i>人学习 <span>共<i>6</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/308-chapter-4-career" title="Java基础语法" target="_blank">
								<img src="./index_kd_files/javajichuyufa.jpg" alt="" width="240" height="169">
								<p class="tit">Java基础语法</p>
								<p class="info">对于初学者来说掌握技术不一定要快深,一定要从最简单的基础入门,提高兴趣,牢牢掌握基础知识点,本章课程从最基本的语法开始讲解,适合0基础的学生学习</p>
								<p class="num_total"><i>5542</i>人学习 <span>共<i>6</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/308-chapter-4-career" title="Java基础语法" target="_blank">
								<img src="./index_kd_files/javajichuyufa.jpg" alt="" width="240" height="169">
								<p class="tit">Java基础语法</p>
								<p class="info">对于初学者来说掌握技术不一定要快深,一定要从最简单的基础入门,提高兴趣,牢牢掌握基础知识点,本章课程从最基本的语法开始讲解,适合0基础的学生学习</p>
								<p class="num_total"><i>5542</i>人学习 <span>共<i>6</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/308-chapter-4-career" title="Java基础语法" target="_blank">
								<img src="./index_kd_files/javajichuyufa.jpg" alt="" width="240" height="169">
								<p class="tit">Java基础语法</p>
								<p class="info">对于初学者来说掌握技术不一定要快深,一定要从最简单的基础入门,提高兴趣,牢牢掌握基础知识点,本章课程从最基本的语法开始讲解,适合0基础的学生学习</p>
								<p class="num_total"><i>5542</i>人学习 <span>共<i>6</i>课</span></p>
							</a>
						</li>
					</ul>
					<div class="kcinfo">
						<h2>快讯</h2>
						<ul>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1281">谷歌Pixel XL外观被曝光<img src="./index_kd_files/110934e66dd0072694.jpg" width="192" height="110" alt=""></a></li>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1276">浅谈关于Android 7.0<img src="http://www.codingke.com/" width="192" height="110" alt=""></a></li>
 							<li><i></i><a href="http://www.codingke.com/article/1273">扣丁学堂android视频教程</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1266">2016年国内Android开</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1264">扣丁学堂android开发公开</a></li>
						</ul>
					</div>
				</div>
				<!-- Android end-->
				<!-- PHP begin-->
				<div class="kcbox_list clear">
					<ul class="kclist js_kclist">
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS 商城布局" target="_blank">
								<img src="./index_kd_files/divcssshopbuju.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS 商城布局</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>6332</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS 商城布局" target="_blank">
								<img src="./index_kd_files/divcssshopbuju.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS 商城布局</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>6332</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS 商城布局" target="_blank">
								<img src="./index_kd_files/divcssshopbuju.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS 商城布局</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>6332</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS 商城布局" target="_blank">
								<img src="./index_kd_files/divcssshopbuju.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS 商城布局</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>6332</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS 商城布局" target="_blank">
								<img src="./index_kd_files/divcssshopbuju.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS 商城布局</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>6332</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
						<li>
							<a href="http://www.codingke.com/v/401-chapter-401-chapter" title="DIV+CSS 商城布局" target="_blank">
								<img src="./index_kd_files/divcssshopbuju.jpg" alt="" width="240" height="169">
								<p class="tit">DIV+CSS 商城布局</p>
								<p class="info">通过实战布局演练将,HTML于CSS知识结合到实战应用中,快速掌握Web静态页面布局技术</p>
								<p class="num_total"><i>6332</i>人学习 <span>共<i>7</i>课</span></p>
							</a>
						</li>
					</ul>
					<div class="kcinfo">
						<h2>快讯</h2>
						<ul>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1277">浅谈关于php开发框架的九个优<img src="http://www.codingke.com/" width="192" height="110" alt=""></a></li>
							<li><i class="green"></i><a href="http://www.codingke.com/article/1270">扣丁学堂php培训视频之php<img src="./index_kd_files/145557ddff5c632068.jpg" width="192" height="110" alt=""></a></li>
							<li><i></i><a href="http://www.codingke.com/article/1268">扣丁学堂php在线视频教程带你</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1267">扣丁学堂php软件工程师视频教</a></li>
							<li><i></i><a href="http://www.codingke.com/article/1263">扣丁学堂php公开课在腾讯课堂</a></li>
						</ul>
					</div>
				</div>
				<!-- 公开课 end-->
			</div>
		</div>

		<!-- 职业路径 -->
		<!--<div class="wrap zylj clear">
			<h2>学习路线</h2>
			<ul class="list_zy clear">
				<li>
					<div class="clear">
						<img class="fl" src="./index_kd_files/zylj1.jpg" width="70px" height="70px" alt="">
						<div class="zy_info">
							<p class="gz">月薪5K-30K</p>
							<p class="">企业必争的人才资源</p>
						</div>
					</div>
					<a class="btn" href="http://www.codingke.com/ios" title="iOS开发工程师" target="_blank">iOS开发工程师</a>
				</li>
				<li>
					<div class="clear">
						<img class="fl" src="./index_kd_files/zylj2.jpg" width="70px" height="70px" alt="">
						<div class="zy_info">
							<p class="gz">月薪5K-25K</p>
							<p class="">体系课程逐步更新</p>
						</div>
					</div>
					<a class="btn" href="http://www.codingke.com/android" title="Android开发工程师" target="_blank">Android开发工程师</a>
				</li>
				<li>
					<div class="clear">
						<img class="fl" src="./index_kd_files/zylj3.jpg" width="70px" height="70px" alt="">
						<div class="zy_info">
							<p class="gz">月薪5K-30K</p>
							<p class="">WEB开发的未来趋势</p>
						</div>
					</div>
					<a class="btn" href="http://www.codingke.com/html5" title="H5开发工程师" target="_blank">H5开发工程师</a>
				</li>
				<li>
					<div class="clear">
						<img class="fl" src="./index_kd_files/zylj4.jpg" width="70px" height="70px" alt="">
						<div class="zy_info">
							<p class="gz">月薪5K-25K</p>
							<p class="">体系课程逐步更新</p>
						</div>
					</div>
					<a class="btn" href="http://www.codingke.com/ui" title="UI开发工程师" target="_blank">UI开发工程师</a>
				</li>
			</ul>
		</div>-->


		<!-- 精品课程 -->
		<div class="wrap jpkc clear">
			<h2>精品课程</h2>
			<ul class="kclist jpkclist js_kclist">
				<li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
				<li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
				<li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
				<li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
				<li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
				<li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
                <li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
                <li>
					<a href="http://www.codingke.com/v/227-course">
						<!-- <span class="lab2">随堂</span> -->
						<img src="./index_kd_files/16370841c32d344212.jpg" alt="" width="240" height="169">
						<p class="tit">HTML+CSS</p>
						<p class="info">学习Web前端开发需要的编程语言HTML, CSS,HTML和CSS用于Web静态内容的展示,网站的整个结构布局</p>
						<p class="num_total"><i>6225</i>人学习 <span>共<i>26</i>课时</span></p>
					</a>
				</li>
			</ul>
		</div>

		<!-- 经典教学案例 -->
		<!-- <div class="wrap case clear">
			<h2>经典教学案例</h2>
			<ul>
				<li><img src="/themes/codingnew-1/img/index/xyzp1.jpg" alt="" width="253" height="449"></li>
				<li><img src="/themes/codingnew-1/img/index/xyzp2.jpg" alt="" width="253" height="449"></li>
				<li><img src="/themes/codingnew-1/img/index/xyzp3.jpg" alt="" width="253" height="449"></li>
				<li><img src="/themes/codingnew-1/img/index/xyzp4.jpg" alt="" width="253" height="449"></li>
			</ul>
		</div> -->
	</div><!-- 公用尾部 begin-->
<div class="footer clear">
    <div class="wrap clear">
        <div class="link">
            <dl>
                <dt>我们</dt>
                <dd><a href="http://www.codingke.com/about">关于我们</a></dd>
                <dd><a href="http://www.codingke.com/about">招贤纳士</a></dd>
                <dd><a href="http://www.codingke.com/about">课程特点</a></dd>
                <dd><a href="http://www.codingke.com/about">网站地图</a></dd>
            </dl>
            <dl>
                <dt>帮助</dt>
                <dd><a href="http://www.codingke.com/about">新手帮助</a></dd>
                <dd><a href="http://www.codingke.com/about">学习流程</a></dd>
            </dl>
            <dl>
                <dt>资源</dt>
                <dd><a href="http://www.codingke.com/#">优秀讲师</a></dd>
                <dd><a href="http://www.codingke.com/article">扣丁资讯</a></dd>
                <dd><a href="http://www.codingke.com/">全部课程</a></dd>
                <dd><a href="http://www.codingke.com/">新闻咨询</a></dd>
                <dd><a href="http://weibo.com/u/5599614154" ref="nofollow">扣丁博客</a></dd>
            </dl>
        </div>
        <div class="code">
				<span class="weibo">
					<img width="100" height="100" src="./index_kd_files/coding-weibo.jpg" alt="扣丁微博"><br>扣丁微博
				</span>
				<span>
					<img width="100" height="100" src="./index_kd_files/coding-weixin.jpg" alt="扣丁微信"><br>扣丁微信
				</span>
        </div>
        <div class="contact">
            全国免费咨询热线<br>
            <p class="tel">400-654-7778</p>
            地址：北京市海淀区黑泉路8号宝盛广场B座5层<br>
            邮箱： codingke@1000phone.com<br>
            群号：148715490
        </div>
    </div>
</div>
<!-- 公用尾部 end--><!-- 右侧边栏  begin-->
    <div class="fixed_box">
       <!--  <a class="zixun" href="javascript:;" title="咨询老师">
            <img src="/themes/codingnew-1/img/common/zixun.png" alt="">
            <b>咨询老师</b>
        </a> -->
        <a href="javascript:;" id="gotop" class="qk_totop" title="返回顶部">
            <em><img src="./index_kd_files/gotop.png"></em>
            <strong>返回顶部</strong>
        </a>
    </div>
    <!-- 右侧边栏  end-->    
	<script src="defaultjs/hm.js"></script>
	<script src="defaultjs/jquery.js"></script>
    <script src="defaultjs/jquery.superslide.js"></script>
    <script src="defaultjs/common.js"></script>
    <script>
		$(function(){
			$(document).indexFn();
		})
	</script>

<div class="hide">
    <script>
        var _hmt = _hmt || [];
        (function() {
            //echo tixializh
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?9f92046de4640f3c08cf26535ffdd93c";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>

    <script type="text/javascript">
        var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1256018185'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1256018185' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <span id="cnzz_stat_icon_1256018185"><a href="http://www.cnzz.com/stat/website.php?web_id=1256018185" target="_blank" title="站长统计">站长统计</a></span>
    <script src="defaultjs/z_stat.php" type="text/javascript"></script>
    <script src="defaultjs/core.php" charset="utf-8" type="text/javascript"></script>

</div>

    <div class="yqlink">
        <div class="wrap">
                         <a href="http://www.fangzhouke.com/">方舟客</a>
                <a href="http://www.h5edu.cn/" target="_blank">HTML5培训</a>
                <a href="http://www.liangshanzhou.com/" target="_blank">凉山州网</a>
                <a href="http://jiaoyu.jiameng.com/" target="_blank">教育培训加盟</a>
                <a href="http://sz.jiajiao114.com/" target="_blank">深圳家教网</a>
                <a href="http://www.cqzikao.com/" target="_blank">重庆自考网</a>
                <a href="http://www.fadaren.com/" target="_blank">法学在职研究生</a>
                <a href="http://www.xjktarena.com/" target="_blank">南京软件培训</a>
                <a href="http://www.kaoyanbashi.com/" target="_blank">考研报名</a>
                <a href="http://bj.jiaoyubao.cn/" target="_blank">北京培训学校</a>
                <a href="http://e.kaoyan365.cn/" target="_blank">考研网课</a>
                <a href="http://www.naicha.org.cn/" target="_blank">甜品培训</a>
                <a href="http://www.5goto.com/" target="_blank">技校网</a>
                <a href="http://www.gaokaoq.com/" target="_blank">高考志愿</a>
                <a href="http://fj.zgjsks.com/" target="_blank">福建教育信息网</a>
                <a href="http://www.newbieol.com/" target="_blank">HTML5教程培训</a>
                <a href="http://www.zgzzyjs.com/" target="_blank">在职研究生信息网</a>
                <a href="http://www.bllsw.com/" target="_blank">律师在线咨询</a>
                <a href="http://www.goodprogrammer.org/" target="_blank">Android培训</a>
                <a href="http://www.shanghaicaijing.com/" target="_blank">上海财经大学考研网</a>
                <a href="http://www.nlypx.com/" target="_blank">企业管理培训</a>
                <a href="http://www.mbaschool.com.cn/" target="_blank">MBA备考</a>
                <a href="http://www.hbcjw.com/" target="_blank">湖北成人高考网</a>
                <a href="http://shanghai.101jiajiao.com/" target="_blank">上海家教</a>
                <a href="http://www.chengyugushi.net/" target="_blank">成语典故</a>
                <a href="http://www.examw.com/jsj/" target="_blank">职称计算机</a>
                <a href="http://toefl.liuxue86.com/" target="_blank">托福</a>
            

        </div>
    </div>
    
    
    
    
</body>
</html>
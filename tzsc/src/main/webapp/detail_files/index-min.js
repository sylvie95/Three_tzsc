KISSY.add("widget/header5/header5-tpl",function(){return{html:'<div class="idle-header-wrap">\n  <div class="idle-header" id="J_IdleHeader">\n    <h1 class="idle-logo"><a href="//2.{host}"><img src="//img.alicdn.com/tps/i3/TB1ys1sHVXXXXcrXVXXL_ZfHFXX-208-46.png" alt="\u95f2\u9c7c" width="208" height="46" /></a></h1>\n\n    <div class="idle-nav">\n      <div class="idle-menu">\n        <ul>\n          <li class="active"><a href="/">\u9996\u9875</a></li>\n          <li><a href="/guang/?">\u901b.\u4e8c\u624b</a></li>\n          <li><a href="/app/index">\u624b\u673a\u4e8c\u624b</a></li>\n          <li><a href="//www.{host}/market/car/usedcar.php">\u4e8c\u624b\u8f66\u4f30\u4ef7</a></li>\n          <li><a href="/auction/list">\u964d\u964d\u964d</a></li>\n        </ul>\n      </div>\n\n      <div class="idle-manage">\n        <span class="idle-manage-sp">|</span>\n        <ul>\n          <li><a href="//sell.2.{host}/publish/publish.htm">\u53d1\u5e03\u95f2\u7f6e</a></li>\n          <li id="J_IdleLi" class="my-idle-li">\n            <a class="my-idle-link" id="J_IdleLink" href="#nogo">\u6211\u7684\u95f2\u7f6e<i class="iconfont icon-down">&#xe601;</i><i class="iconfont icon-up">&#xe600;</i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="idle-search">\n      <form method="get" action="//s.2.{host}/list/list.htm" name="search" target="_top">\n        <input class="input-search" id="J_HeaderSearchQuery" name="q" type="text" value="" placeholder="\u641c\u95f2\u9c7c" />\n        <input type="hidden" name="search_type" value="item" autocomplete="off" />\n        <input type="hidden" name="app" value="shopsearch" autocomplete="off" />\n        <button class="btn-search" type="submit"><i class="iconfont">&#xe602;</i><img class="search-img" src="//img.alicdn.com/tps/i2/TB1VqSxHVXXXXb.XVXXqw4SJXXX-79-60.png"></button>\n      </form>\n    </div>\n  </div>\n</div>\n'}}),KISSY.add("widget/header5/my-idle-tpl",function(){return{html:'<div class="my-idle" id="J_MyIdle">\n<a href="//trade.2.{host}">\u51fa\u552e\u4e2d\uff1a<em>{itemCnt}</em></a>\n<a href="//trade.2.{host}/order_list.htm">\u4ea4\u6613\u4e2d\uff1a<em>{orderCnt}</em></a>\n<a href="//trade.2.{host}/received_comments.htm">\u65b0\u7559\u8a00\uff1a<em>{commentCnt}</em></a>\n<a href="//trade.2.{host}/dialogList.htm">\u65b0\u4f1a\u8bdd\uff1a<em>{dialogCnt}</em></a>\n</div>\n'}}),KISSY.add("widget/header5/mods/suggest",function(a){var b=(a.DOM,a.Event,"[suggest] ");return{init:function(){KISSY.use("suggest",function(a,c){var d="http://suggest.taobao.com/sug?area=auction&code=utf-8&extras=1";new c("#J_HeaderSearchQuery",d,{resultFormat:"",offset:0,dataType:1});a.log(b+"started.")})}}},{requires:[]}),KISSY.add("widget/header5/mods/pub-overlay-tpl",function(){return{html:'<div class="pub-overlay">\n  <div class="pub-overlay-header">\n    <div>\u7535\u8111\u7aef\u8be5\u529f\u80fd\u5df2\u6253\u70ca\uff0c\u8bf7\u4e0b\u8f7d\u95f2\u9c7cApp\u8fdb\u884c\u64cd\u4f5c</div>\n    <img src="//gw.alicdn.com/tps/i2/TB1z82DLVXXXXbaaXXXaSyjGpXX-156-65.png"/>\n  </div>\n  <div class="pub-overlay-content idle-clear">\n    <div class="idle-left">\n      <img src="//gw.alicdn.com/tps/i1/TB1.PKNLVXXXXamXFXXPjN_3XXX-191-394.png"/>\n    </div>\n    <div class="idle-left pub-overlay-title">\n      <img src="//gw.alicdn.com/tps/i2/TB1xiuULVXXXXXTXpXXyBK2TXXX-458-30.png"/>\n      <p>\u5e73\u5747\u6bcf\u5929\u7ea6\u670910W\u4ef6\u4ee5\u4e0a\u95f2\u7f6e\u7269\u54c1\u88ab\u5356\u51fa</p>\n      <p>\u5e73\u5747\u6bcf\u4eba\u6bcf\u6708\u6536\u5165700\u5143\u4ee5\u4e0a</p>\n    </div>\n    <div class="pub-overlay-action idle-clear">\n      <div class="idle-left pub-overlay-sms">\n      </div>\n      <div class="idle-right pub-overlay-erwei">\n        <h3>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d</h3>\n        <img class="pub-overlay-erweiimg" src="//gw.alicdn.com/tps/i1/TB1xvOwLVXXXXc6aXXX4_MlUFXX-280-280.png">\n      </div>\n    </div>\n  </div>\n</div>'}}),KISSY.add("widget/header5/mods/sms-download-tpl",function(){return{html:'<div class="xy-mobile">\n  <h3>\u514d\u8d39\u77ed\u4fe1\u4e0b\u8f7d</h3>\n  <div class="xy-mobile-box">\n    <input type=\'text\' name="mobile" class="xy-mobile xy-input" placeholder="\u8f93\u5165\u624b\u673a\u53f7\u7801" id="J_sms_mobile">\n  </div>\n  <div class="xy-code">\n    <div class="xy-code-img xy-inline J_code_img"></div>\n    <div class="xy-code-text xy-inline">\n      <input type=\'text\' name="code" class="xy-code-input xy-input" placeholder="\u8f93\u5165\u9a8c\u8bc1\u7801" id="J_sms_code">\n    </div>\n    <div class="xy-inline xy-code-info" id="J_code_info"></div>\n  </div>\n  <div class="xy-send-btn" id="J_sms_send">\u53d1\u9001\u4e0b\u8f7d\u94fe\u63a5</div>\n  <input type="hidden" class="J_sms_encypt"/>\n  <input type="hidden" class="J_sms_token"/>\n</div>'}}),KISSY.add("utils/placeholder/placeholder",function(a){function b(c,d){if(!f){var e=this,g={wrap:!0};if(!(e instanceof b))return new b(c,d);var h=a.merge(g,d);e._init(c,h)}}var c=a.all,d='<div class="placeholder" style="position: relative;"></div>',e='<label style="display: none;position:absolute;left:10px;top:0;">{tip}</label>',f="placeholder"in document.createElement("input");return a.augment(b,{_init:function(b,f){function g(){var f=a.substitute(e,{tip:i}),g=h.triggerLabel=c(f);g.css("width",b.css("width")),b.attr("id")?g.attr("for",b.attr("id")):g.on("click",function(){b[0].focus()});var j=c(d);j.appendTo(b.parent()).append(b),g.insertBefore(b),a.later(function(){b.val()||g.show()},100)}var h=this;if(!b)return void a.log("[placeholder] has no target to decorate");b=c(b);var i=b.attr("placeholder");i&&(b.on("focus",function(a){h.triggerLabel.hide()}),b.on("blur",function(a){b.val()||h.triggerLabel.show()}),g())},text:function(a){this.triggerLabel.text(a)}}),b}),KISSY.add("widget/header5/mods/sms-download",function(a,b,c,d,e){var f=a.Node.all,g=a.IO;return{init:function(a,b){var f=this;a.html(new c(d.html).render()),e("#J_sms_mobile"),e("#J_sms_code"),f._bindAction(b)},_bindAction:function(a){function b(){g.jsonp(d,{_tb_token_:h},function(a){"success"==a.state?(f(".J_sms_encypt").val(a.encryptString),f(".J_sms_token").val(h),f(".J_code_img").html('<img src="'+a.checkCodeUrl+'" />')):alert("\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")})}var c="//2.taobao.com/phone/checkCodeMatch.htm",d="//2.taobao.com/phone/showCheckCode.htm",e="//2.taobao.com/phone/sendDownLoadUrlSms.htm";-1!==location.href.indexOf("daily.taobao.net")&&(c="//2.daily.taobao.net/phone/checkCodeMatch.htm",d="//2.daily.taobao.net/phone/showCheckCode.htm",e="//2.daily.taobao.net/phone/sendDownLoadUrlSms.htm");var h=a;f(".J_code_img").on("click",function(){b()}),b(),f("#J_sms_send").on("click",function(){return f(this).hasClass("sended")?void 0:/^1\d{10}$/.test(f("#J_sms_mobile").val())?void g.jsonp(e,{phone:f("#J_sms_mobile").val(),_tb_token_:h,checkCode:f("#J_sms_code").val(),encryptString:f(".J_sms_encypt").val()},function(a){if("success"===a.state){f("#J_sms_send").addClass("sended").attr("data-status","sended");var c=60;alert("\u77ed\u4fe1\u5df2\u53d1\u9001\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85");var d=function(){setTimeout(function(){f("#J_sms_send").addClass("sended").attr("data-status","sended").html("\u53d1\u9001\u4e0b\u8f7d\u94fe\u63a5\uff08"+c+"s\uff09"),c--,c>0?d():f("#J_sms_send").removeClass("sended").html("\u53d1\u9001\u4e0b\u8f7d\u94fe\u63a5").removeAttr("data-status")},1e3)};d()}else"sended"===a.state?alert("\u4eb2\uff0c\u5df2\u7ecf\u7ed9\u60a8\u53d1\u8fc7\u77ed\u4fe1\u4e86"):"invalid phone"===a.state?alert("\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"):"checkCode false"===a.state?alert("\u60a8\u8f93\u5165\u7684\u9a8c\u8bc1\u7801\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"):alert("\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");b()}):void alert("\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165")})}}},{requires:["overlay","xtemplate","./sms-download-tpl","utils/placeholder/placeholder"]}),KISSY.add("widget/header5/mods/pub-overlay",function(a,b,c,d,e){var f=a.all;a.DOM,a.Event;return{init:function(){var a=this;a.render()},render:function(){var a=this;f(".pub-overlay-btn").on("click",function(){var e=new c({content:new b(d.html).render(),elCls:"pub-overlay",width:810,height:670,align:{points:["cc","cc"]},zIndex:1e6,closable:!0,closeAction:"destroy",mask:{closeOnClick:!0}});e.render().show(),a.bindAction()})},bindAction:function(){e.init(f(".pub-overlay-sms"),f("#J_tb_Token").val())}}},{requires:["xtemplate","overlay","./pub-overlay-tpl","./sms-download"]}),KISSY.add("widget/header5/index",function(a,b,c,d,e,f,g,h,i){var j=location.hostname.indexOf("daily.taobao.net")>0,k=j?"daily.taobao.net":"taobao.com",l=function(a){return this instanceof l?(this.cfg=a=a||{},void this._init()):new l(a)};return a.augment(l,b.Target,{_init:function(){var a=document.body;window.screen.width>1024?a.className="w1190":a.className="w990",this._bind(),this._activeMenu(),h.init(),i.init()},_bind:function(){var b=this;a.all("#J_IdleLi").on("mouseover",function(c){a.one("#J_IdleLi").addClass("hover"),b.showMyIdle()}).on("mouseout",function(c){a.one("#J_IdleLi").removeClass("hover"),b.hideMyIdle()})},showMyIdle:function(){var b=this;return this.myIdle?void this.myIdle.show():void(this.AJAXING||(this.AJAXING=!0,a.IO({url:location.protocol+(j?"//trade.2.daily.taobao.net/messageCount.htm?isHover=true":"//trade.2.taobao.com/messageCount.htm?isHover=true"),type:"get",dataType:"jsonp",complete:function(c){b.AJAXING=!1,c&&(c&&"noLogin"===c.errCode,c.commentCnt=c.commentCnt||0,c.orderCnt=c.orderCnt||0,c.itemCnt=c.itemCnt||0,c.dialogCnt=c.dialogCnt||0,c.host=k,a.all("#J_IdleLi").append(a.substitute(f.html,c)),b.myIdle=a.one("#J_MyIdle"))}})))},hideMyIdle:function(){this.myIdle&&this.myIdle.hide()},_activeMenu:function(){switch(location.pathname){case"/":a.all(".m-home").addClass("active");break;case"/app":case"/app/":case"/app/index":a.all(".m-app").addClass("active");break;case"/guang":case"/guang/":case"/guang/index":a.all(".m-guang").addClass("active");break;case"/auction":case"/auction/":case"/auction/list":case"/auction/item":a.all(".m-auction").addClass("active")}}}),l()},{requires:["event","dom","node","./header5-tpl","./my-idle-tpl","ajax","./mods/suggest","./mods/pub-overlay"]});
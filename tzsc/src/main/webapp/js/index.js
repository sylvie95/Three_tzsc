//加载主分类的小分类
function indexMenu(menu){
	$.get("index/indexMenu?menu="+menu,function(data){
		for(var i=0;i<data.length;i++){
			//sousuo/souMenu=menu?&smname="+data[i].mname+"
			$("._tarblock li:nth-child("+menu+") dl").append("<dt id='ssm"+data[i].mid+"' name="+data[i].mid+"><a style='display:block' href='#'>"+data[i].mname+"</a></dt>");
			indexMinMenu(menu,data[i].mid);
		}
	},"json");
};
//细分分类
function indexMinMenu(number,id){
	$.get("index/indexMinMenu?SMmenu="+id,function(SMdata){
		for(var z=0;z<SMdata.length;z++){
			$("#ssm"+id+"").append("<dd name="+SMdata[z].mid+"><a href='sousuo/souMenu?souA="+number+"&souB="+id+"&smname="+SMdata[z].smname+"'>"+SMdata[z].smname+"</a></dd>");
		}
	},"json");
}
function newMenu(){
	for(var j=1;j<=6;j++){
		indexMenu(j);
	}
}
newMenu(1);
//跳转到show商品页
//function show(id){
//	window.location.href="show.jsp";
//// 	alert(id);
////	$.get("tzsc/show?cid="+id,function(data){
////		location.replace("show.jsp");
////	})
//}





//加载首页的热门试用
$.get("index/hotShop",function(data){
	for(var i=0;i<data.length;i++){
		if(data[i].cpic.split(";")!=null){
			$(".article1_3_1").append('<div style="overflow:hidden;text-align: center;width:23%;height:75%; margin:0px 1% 10px 0px;float:left;border:1px solid #CCCCCC;">'+
	            	'<form>'+
	            	'<div style="background:#CBCBCB;text-align: center;width:95%;height:185px;overflow:hidden;margin:0 auto;"><img style="vertical-align:middle;overflow:hidden;height:100%" src="upload/TB1WLyjNVXXXXclXXXXGYteFXXX_728x728.jpg"/></div>'+
	            	'<p style="height:33px;margin-left:10px;margin-top:5px;font-size:11.5px;color:#666666;">'+data[i].cname+'</p>'+
	            	'<div style="font-size:11px;"><span style="float:left;margin-left:10px;color:#999999;">66人查看</span><!-- <input class="_canyu" style="" type="button" value="立即参与"/> --></div>'+
	            	'</form></div>');
		}else{
			$(".article1_3_1").append('<div style="text-align: center;width:24%;height:235px;float:left; margin:0px 3px 3px 0px;;border:1px solid #CCCCCC;">'+
	            	'<form>'+
	            	'<img style="vertical-align:middle;overflow:hidden;height:180px;" src="upload/'+data[i].cpic+'"/>'+
	            	'<p style="height:33px;margin-left:10px;margin-top:5px;font-size:11.5px;color:#666666;">'+data[i].cname+'</p>'+
	            	'<div style="font-size:11px;"><span style="float:left;margin-left:10px;color:#999999;">66人查看</span><input class="_canyu" style="" type="button" value="立即参与"/></div>'+
	            	'</form></div>');
		}
	}
},"json");

$.get("index/newShop",function(data){
	for(var i=0;i<data.length;i++){
		if(data[i].cpic.split(";")!=null){
			$(".article1_3_2").append('<div style="overflow:hidden;text-align: center;width:23%;height:75%; margin:0px 1% 10px 0px;float:left;border:1px solid #CCCCCC;">'+
	            	'<form>'+
	            	'<div style="background:#CBCBCB;text-align: center;width:95%;height:185px;overflow:hidden;margin:0 auto;"><img style="vertical-align:middle;overflow:hidden;height:100%" src="upload/'+data[i].cpic.split(";")[0]+'"/></div>'+
	            	'<p style="height:33px;margin-left:10px;margin-top:5px;font-size:11.5px;color:#666666;">'+data[i].cname+'</p>'+
	            	'<div style="font-size:11px;"><span style="float:left;margin-left:10px;color:#999999;">66人查看</span><!-- <input class="_canyu" style="" type="button" value="立即参与"/> --></div>'+
	            	'</form></div>');
		}else{
			$(".article1_3_2").append('<div style="text-align: center;width:24%;height:235px;float:left; margin:0px 3px 3px 0px;;border:1px solid #CCCCCC;">'+
	            	'<form>'+
	            	'<img style="vertical-align:middle;overflow:hidden;height:180px;" src="upload/'+data[i].cpic+'"/>'+
	            	'<p style="height:33px;margin-left:10px;margin-top:5px;font-size:11.5px;color:#666666;">'+data[i].cname+'</p>'+
	            	'<div style="font-size:11px;"><span style="float:left;margin-left:10px;color:#999999;">66人查看</span><input class="_canyu" style="" type="button" value="立即参与"/></div>'+
	            	'</form></div>');
		}
	}
},"json");
/*
//加载首页的热门试用
$.get("index/hotShop",function(data){
	for(var i=0;i<data.length;i++){
		if(data[i].cpic.split(";")!=null){
			$(".article1_3_1").append('<div style="width:230px;height:230px; margin:20px 10px 0px;float:left;border:1px solid #F60;">'+
            	'<form>'+
            	'<img style="width:100%;height:155px;" src="upload/'+data[i].cpic.split(";")[0]+'"/>'+
            	'<p style="height:45px;margin-left:10px;font-size:14px;color:#F60;overflow: hidden;">'+data[i].cdescribe+'</p>'+
            	'<div style="font-size:11px;"><span style="margin-left:10px;color:#999999;">66</span>人查看<input class="_canyu" style="" type="button" value="立即参与"/></div>'+
            	'</form></div>');
		}else{
			$(".article1_3_1").append('<div style="width:230px;height:230px; margin:20px 10px 0px;float:left;border:1px solid #F60;">'+
	            	'<form>'+
	            	'<img style="width:100%;height:155px;" src="upload/'+data[i].cpic+'"/>'+
	            	'<p style="height:45px;margin-left:10px;font-size:14px;color:#F60;overflow: hidden;">'+data[i].cdescribe+'</p>'+
	            	'<div style="font-size:11px;"><span style="margin-left:10px;color:#999999;">66</span>人查看<input class="_canyu" style="" type="button" value="立即参与"/></div>'+
	            	'</form></div>');
		}
		
/*$.get("tzsc/hot?SMmenu="+id,function(SMdata){
	for(var z=0;z<SMdata.length;z++){
		$("#ssm"+id+"").append("<dd name="+SMdata[z].mid+"><a href='#'>"+SMdata[z].smname+"</a></dd>");
	}
},"json");*/


//加载首页的最新发布
/*$.get("index/newShop",function(data){
	for(var i=0;i<data.length;i++){
//		alert(data[i].cpic.split(";")[0]);
//		alert(data[i].cid);
		if(data[i].cpic.split(";")!=null){
			$(".article1_3_2").append('<div style="width:230px;height:230px; margin:20px 10px 0px;float:left;border:1px solid #F60;">'+
	            	'<form>'+
	            	'<img style="width:100%;height:155px;" src="upload/'+data[i].cpic.split(";")[0]+'"/>'+
	            	'<p style="height:45px;margin-left:10px;font-size:14px;color:#F60;overflow: hidden;">'+data[i].cdescribe+'</p>'+
	            	'<div style="font-size:11px;"><span style="margin-left:10px;color:#999999;">66</span>人查看<a href="show/showDetail?cid='+data[i].cid+'"><input class="_canyu" style="" type="button" value="立即参与"/></a></div>'+
	            	'<input type="hidden" value='+data[i].cid+'/></form></div>');
			
//			$(".article1_3_2").append("<li><a href='tzsc/show?cid="+data[i].cid+"'></li>");	
		}else{
			$(".article1_3_2").append('<div style="width:230px;height:230px; margin:20px 10px 0px;float:left;border:1px solid #F60;">'+
	            	'<form>'+
	            	'<img style="width:100%;height:155px;" src="upload/'+data[i].cpic+'"/>'+
	            	'<p style="height:45px;margin-left:10px;font-size:14px;color:#F60;overflow: hidden;">'+data[i].cdescribe+'</p>'+
	            	'<div style="font-size:11px;"><span style="margin-left:10px;color:#999999;">66</span>人查看<a href="show/showDetail?cid='+data[i].cid+'"><input class="_canyu" style="" type="button" value="立即参与"/></div>'+
	            	'</form></div>');
		}
		
	}
},"json");
*/
//加载首页的热门交易































// JavaScript Document
var total=5;
var index=2;//当前图片编号
//



/*//定义函数: function 函数名(形参列表){//函数体}
function changePic(){
	//alert("哈哈哈");
	index+=2;
	if(index==total){
		index=2;
	}
	//改变img标签中的src属性的值
	document.getElementById("chaPic").src="images/banner"+index+".jpg";
}
	
//函数的调用: 函数名(实参列表)
//changePic();
//定时器window.setInterval("调用函数",设置时间（毫秒）);
window.setInterval("changePic()",2000);  //每个一秒调用一次changePic()*/

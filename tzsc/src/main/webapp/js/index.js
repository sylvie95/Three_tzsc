//加载主分类的小分类
function indexMenu(menu){
	$.get("index/indexMenu?menu="+menu,function(data){
		for(var i=0;i<data.length;i++){
//				alert(data[i].mname);
//			$("._tarblock li:nth-child("+menu+") dl").append("<dt id='ssm"+data[i].mid+"' name="+data[i].mid+"><a href='#'>"+data[i].mname+"</a></dt>");
			$("._tarblock li:nth-child("+menu+") dl").append("<dt id='ssm"+data[i].mid+"' name="+data[i].mid+"><a style='display:block' href='#'>"+data[i].mname+"</a></dt>");
			indexMinMenu(data[i].mid);
		}
	},"json");
};
//细分分类
function indexMinMenu(id){
	$.get("index/indexMinMenu?SMmenu="+id,function(SMdata){
		for(var z=0;z<SMdata.length;z++){
			$("#ssm"+id+"").append("<dd name="+SMdata[z].mid+"><a href='#'>"+SMdata[z].smname+"</a></dd>");
		}
	},"json");
}
function newMenu(){
	for(var j=1;j<=6;j++){
		indexMenu(j);
	}
}
newMenu(1);

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
		
	}
},"json");



//加载首页的最新上市
$.get("index/newShop",function(data){
	for(var i=0;i<data.length;i++){
		if(data[i].cpic.split(";")!=null){
			$(".article1_3_2").append('<div style="width:230px;height:230px; margin:20px 10px 0px;float:left;border:1px solid #F60;">'+
	            	'<form>'+
	            	'<img style="width:100%;height:155px;" src="upload/'+data[i].cpic.split(";")[0]+'"/>'+
	            	'<p style="height:45px;margin-left:10px;font-size:14px;color:#F60;overflow: hidden;">'+data[i].cdescribe+'</p>'+
	            	'<div style="font-size:11px;"><span style="font-size:12px;font-weight:bold;margin-left:10px;color:#999999;">￥'+data[i].cprice+'</span><input class="_canyu" style="" type="button" value="立即参与"/></div>'+
	            	'</form></div>');
		}else{
			$(".article1_3_2").append('<div style="width:230px;height:230px; margin:20px 10px 0px;float:left;border:1px solid #F60;">'+
	            	'<form>'+
	            	'<img style="width:100%;height:155px;" src="upload/'+data[i].cpic+'"/>'+
	            	'<p style="height:45px;margin-left:10px;font-size:14px;color:#F60;overflow: hidden;">'+data[i].cdescribe+'</p>'+
	            	'<div style="font-size:11px;"><span style="font-size:12px;font-weight:bold;margin-left:10px;color:#999999;">￥'+data[i].cprice+'</span><input class="_canyu" style="" type="button" value="立即参与"/></div>'+
	            	'</form></div>');
		}
		
	}
},"json");

//加载首页的热门交易






























/*
// JavaScript Document
var total=5;
var index=1;//当前图片编号
//



//定义函数: function 函数名(形参列表){//函数体}
function changePic(){
	//alert("哈哈哈");
	index+=1;
	if(index==total){
		index=1;
	}
	//改变img标签中的src属性的值
	document.getElementById("chaPic").src="images/banner"+index+".jpg";
}
	
//函数的调用: 函数名(实参列表)
//changePic();
//定时器window.setInterval("调用函数",设置时间（毫秒）);
window.setInterval("changePic()",2000);  //每个一秒调用一次changePic()*/
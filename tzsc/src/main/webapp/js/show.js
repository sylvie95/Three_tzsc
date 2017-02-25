 var nidParam = location.href.substring(location.href.indexOf("=")+1); //cid=49
 
//获取商品详细信息
 $.get("show/showDetail?cid="+nidParam,function(data){
	 var picMap = data.cpic.split(";")
	 $(".showPic").empty();
	 for(var i = 0; i < picMap.length ;i++){
//		 alert(picMap[i]);
		 $(".article_2_1_1").empty();
		 $(".showPic").append('<li ><img onclick="showPic(this)" class="pic'+i+'" style="display:block;width:100%;height:100%;" src="upload/'+picMap[i]+'"/></li>');
		 $(".article_2_1_1").append('<img id="iPic" style="height:100%;vertical-align:middle" src="upload/'+picMap[0]+'"/>');
	 }
	 if(data.cprice == null){
		 data.uqq =0;
	 }
	 if(data.uqq == null){
		 data.uqq ="无";
	 }
 	$(".article_2_2").empty();
 	$(".article_2_2").append('<ul>'+
         	'<li style="background:#2470d5;background:#06C;color:#FFF;font-weight:bold;font-size:22px;">'+data.cname+'</li>'+
         	'<li>类型: <label>'+data.ctname+'</label></li>'+
         	'<li>描述: <label>'+data.cdescribe+'</label></li>'+
         	'<li>价格: <label style="color:#36C;font-size:20px;font-weight:bold;">￥<i>'+data.cprice+'</i></label></li>'+
         	/*'<% name = null;if((name = session.getAttribute("loginUserName")) == null){ %>'+*/
         	/*'<li>电话: <label>登录后即可查看</label></li>'+
         	'<li>Q&nbsp;Q: <label>登录后即可查看</label></li>'+
         	'<% }else{ %>'+*/
         	'<li>电话: <label>'+data.cphone+'</label></li>'+
         	'<li>Q&nbsp;Q: <label>'+data.uqq+'</label></li>'+
         	/*'<% } %>'+*/
         	'<li>发布用户: <label>'+data.cusername+'</label></li></ul>');
 },"json");
 		
 //显示最大图片
function showPic(obj){
	var srcPic = $(obj).attr("src");
	$("#iPic").attr("src", srcPic);
}
 
////取到当前商品的评论信息
		$.get("comment/listComments?comcid="+nidParam,function(data){
//		 	 alert(nidParam);
		 	 for(var i=0;i<data.length;i++){
		 		 alert(data[i].comdate);
		 		if(data.length != 0 ){
		 			var date = new Date(data[i].comdate );
   	 		    	 $(".cmt-list").append(' <div class="cmt-item clearfix"  data-nick="'+data[i].comusername+'" data-userid="0">'+
	 		        '<div class="cmt-cont-wrap">'+
	 		            '<p class="cmt-cont">'+
	  		               ' <span class="cmt-cont-text">'+data[i].comusername+':'+data[i].comcontent+' </span>'+
	 		           ' </p> '+
	 		            '<p class="cmt-date">'+ date+'</p>'+
	 		        '</div>'+
	 		    '</div>');
			  }
		 	 }
 		      
		},"json");
 
 
////取到当前商品的评论信息
//$.get("comment/listComments?comcid="+nidParam,function(data){
// 	 for(var i=0;i<data.length;i++){
// 		 alert(data[i].comdate);
// 		if(data.length != 0 ){
// 			var date = new Date(data[i].comdate );
//	    	 $(".cmt-list").append(' <div class="cmt-item clearfix"  data-nick="'+data[i].comusername+'" data-userid="0">'+
//	        '<div class="cmt-cont-wrap">'+
//	            '<p class="cmt-cont">'+
//	               ' <span class="cmt-cont-text">'+data[i].comusername+':'+data[i].comcontent+' </span>'+
//	           ' </p> '+
//	            '<p class="cmt-date">'+ date+'</p>'+
//	        '</div>'+
//	    '</div>');
//	  }
// 	 }
//      
//},"json");


		
		
		
  
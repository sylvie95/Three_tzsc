 var nidParam = location.href.substring(location.href.indexOf("=")+1); //cid=49

 function ChangeTimeToString(DateIn)
 {
     var Year=0;
     var Month=0;
     var Day=0;
     var Hour = 0;
     var Minute = 0;
     var CurrentDate="";

     //初始化时间
     Year      = DateIn.getYear();
     Month     = DateIn.getMonth()+1;
     Day       = DateIn.getDate();
     Hour      = DateIn.getHours();
     Minute    = DateIn.getMinutes();
    

     CurrentDate = Year + "-";
     if (Month >= 10 )
     {
         CurrentDate = CurrentDate + Month + "-";
     }
     else
     {
         CurrentDate = CurrentDate + "0" + Month + "-";
     }
     if (Day >= 10 )
     {
         CurrentDate = CurrentDate + Day ;
     }
     else
     {
         CurrentDate = CurrentDate + "0" + Day ;
     }
     
      if(Hour >=10)
     {
         CurrentDate = CurrentDate + " " + Hour ;
     }
     else
     {
         CurrentDate = CurrentDate + " 0" + Hour ;
     }
     if(Minute >=10)
     {
         CurrentDate = CurrentDate + ":" + Minute ;
     }
     else
     {
         CurrentDate = CurrentDate + ":0" + Minute ;
     }      
     return CurrentDate;
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
			  }else{
				  $(".cmt-list").append(' <div class="cmt-item clearfix"   data-userid="0">'+
			 		        '<div class="cmt-cont-wrap">'+
			 		            '<p class="cmt-cont">'+
			 		           ' <span class="cmt-cont-text"> 暂无评论，快来当沙发吧....</span>'+
 			 		           ' </p> '+
 			 		        '</div>'+
			 		    '</div>');
			  } 
		 	 }
 		      
		},"json");
 
		
		
		
		
		
		
  
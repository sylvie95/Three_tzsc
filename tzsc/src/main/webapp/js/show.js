 var nidParam = location.href.substring(location.href.indexOf("=")+1); //cid=49
 
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
 
		
		
		
		
		
		
  
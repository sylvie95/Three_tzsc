//获取最新闲置四条记录 , 显示
$.get("tzsc/indexNew",function(data){
	for(var i = 0; i<data.length(); i++){
		$(".listNew .name").append('<p class="name">'+data[i].cname+'</p>');
	}
},"json");
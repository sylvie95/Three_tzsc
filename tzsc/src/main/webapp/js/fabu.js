// JavaScript Document

$("#addImg").click(function(){
	$("#addPic").click();
});

function chgPic(obj){
	for(var i=0;i<5;i++){
//		alert($(".img"+ i +"").attr("src")+"1");
		if($(".img"+ i +"").attr("src") ==null){
			$(".img"+ i +"").attr("src", window.URL.createObjectURL(obj.files[0]));
			$(".img"+ i +"").attr("style","width:150px;height:150px;margin:0px 2px 0px");
			break;
		}else{
			$("#addImgli").attr("visibility","hidden");
		}
	}
}
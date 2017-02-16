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
window.setInterval("changePic()",2000);  //每个一秒调用一次changePic()
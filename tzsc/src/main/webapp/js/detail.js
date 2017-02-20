// JavaScript Document

var sou1;
var sou2;
var sou3;

//获取地址栏参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

//alert(GetQueryString("smnao"));


//sou1=GetQueryString("souA");
//sou2=GetQueryString("souB");
//sou3=decodeURI(GetQueryString("smname"));

function sou(sou1,sou2){
	sou1=GetQueryString("souA");
	sou2=GetQueryString("souB");
	sou3=decodeURI(GetQueryString("smname"));
	$.get("index/indexMenu?menu="+sou1,function(data){
		for(var i=0;i<data.length;i++){
//			alert(data[i].mname);
			$("._ul2").append('<li><a class="menuB'+data[i].mid+'" href="sousuo/souMenu?souA='+sou1+'&souB='+data[i].mid+'&smname='+0+'">'+data[i].mname+'</a></li>');
		}
		$.get("index/indexMinMenu?SMmenu="+GetQueryString("souB"),function(Sdata){
			for(var j=0;j<Sdata.length;j++){
				$("._ul3").append('<li><a class="menuC'+(j+1)+'" href="sousuo/souMenu?souA='+sou1+'&souB='+Sdata[j].mid+'&smname='+Sdata[j].smname+'">'+Sdata[j].smname+'</a></li>');
				if(decodeURI(escape(sou3)).trim()==Sdata[j].smname.trim()){
					selectMenu(sou1,sou2,(j+1));
					selectList(GetQueryString("souB"),encodeURI(encodeURI(Sdata[j].smname)));
				}
			}
		},"json");
	},"json");
}
sou(sou1,sou2);

//选中颜色
function selectMenu(sou1,sou2,sou3){
	$(".menuA"+sou1+"").attr("style","background:#F60;padding:5px;color:#FFF;");
	$(".menuB"+sou2+"").attr("style","background:#F60;padding:5px;color:#FFF;");
	$(".menuC"+sou3+"").attr("style","background:#F60;padding:5px;color:#FFF;");
};
function menuAClick(){
	sou(sou1,sou2);
}


//模糊搜索
function selectList(num,str){
	alert("str="+str);
//	str=encodeURI(str);
	alert("str="+str);
	$.get("sousuo/sousuoStr?strNo="+num+"&strName="+str,function(Sdata){
		alert("sousuo/sousuoStr?strNo="+num+"&strName="+str);
		for(var i=0;i<Sdata.length;i++){
			
		}
	},"json");
}




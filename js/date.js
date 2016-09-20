;(function($){
	$.fn.date=function(opt){
		//扩展参数
		var opt=$.extend({
			date:new Date(),
			size:3
		},opt)
		$(this).each(function(i,val){
			var main=$(this),
				y=opt.date.getFullYear(),//当前年份
				m=opt.date.getMonth()+1;//当前月份
				html="";
				console.log(main);
				for(var i=0;i<opt.size;i++){
					dateRili(main,y,m+i);	 	
				}
		})
	}
	function dateRili(main,y,m){
		var html="<div><header class='tit'><span class='last'></span>";
			html+="<p><i>"+y+"</i>年<b>"+addZero(m)+"</b>月</p><span class='next'></span></header>";
			html+="<ul class='week_ul'><li>周日</li><li>周一</li><li>周二</li><li>周三</li><li>周四</li><li>周五</li><li>周六</li></ul>";
			html+=createTable(y,m);
			html+="</div>";
			$(html).appendTo(main);
	}
	function createTable(y,m){
		var pDay=new Date(y,m-1,1).getDay(),//上个月显示的天数
			tDay=getDayS(y,m),//这个月的总的天数
			row=Math.ceil((pDay+tDay)/7),//行数
			pZday=getDayS(y,m-1),
			tDate=new Date().getDate(),
			tMonth=new Date().getMonth()+1,
			str="<table id='tab"+m+"'>";
			for(var i=0;i<row;i++){
				str+="<tr>";
				for(var j=1;j<=7;j++){
					d=j+i*7-pDay;
					if(d<=0){
						str+="<td class='pre'><small>"+(pZday+d)+"</small></td>";
					}else{
						if(d<=tDay){
							if(d<tDate && tMonth==m){
								str+="<td class='last'><small>"+d+"</small></td>";
							}else{
								str+="<td><small>"+d+"</small></td>";
							}
						}		
					}	
				}
				str+="</tr>";
			}
			str+="</table>";
			return str;
	}
	function getDayS(y,m){
		if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
			return 31;
		}else if(m==4 || m==6 || m==9 || m==11){
			return 30;
		}else{
			if(y%400==0 || (y%4==0 && y%100!=0)){
				return 29;
			}else{
				return 28;
			}
		}
	}
})(Zepto)
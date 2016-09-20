$(function(){
	var sec=new IScroll('#sec');
	window.onload=sec;
	var date=new Date(),
		date_year=date.getFullYear(),
		date_month=date.getMonth(),
		date_date=date.getDate(),
		m=date_month,
		y=date_year,
		htmls="",
		i=1;
		function dateRili(){
			$('#tit').find('i').text(date_year);
			$('#tit').find('b').text(addZero(date_month+1));
			htmls=createTable(date_year,date_month+1);
			var html=$(htmls);
			$('#date_div').html(html);
			sec.refresh();
		}
		dateRili();
		$('.next').on('click',function(){
			date_month=date_month+1;
			if(date_month>=(m+3)){
				alert('选择只能在三个月内');
			}else{
				dateRili();
			}
		})
		function createTable(y,m){
			var pDay=new Date(y,m-1,1).getDay(),//上个月显示的天数
				tDay=getDayS(y,m),//这个月的总的天数
				row=Math.ceil((pDay+tDay)/7),//行数
				pZday=getDayS(y,m-1),
				tDate=new Date().getDate(),
				tMonth=new Date().getMonth()+1,
				str="<table>";
				for(var i=0;i<row;i++){
					str+="<tr>";
					for(var j=1;j<=7;j++){
						d=j+i*7-pDay;
						if(d<=0){
							str+="<td class='pre'><small></small></td>";
						}else{
							if(d<=tDay){
								if(d<tDate && tMonth==m){
									str+="<td class='lasts'><small>"+d+"</small></td>";
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
		$('.last').on('click',function(){
			if((date_month-1)<m && y==date_year){
				alert('无法选择已经过去的日期');
			}else{
				date_month=date_month-1;
				dateRili();
			}
		})
		$('table td').live('click',function(){
			var td_name=$(this).attr('class'),
				date_txt=$(this).text(),
				month_txt=$(this).parents().find('#tit b').text().substr(1);
				if(td_name==null){
					$('#livedate_ul h4 i').text(month_txt);
					$('#livedate_ul h4 b').text(date_txt);
				}
				$(this).css('background','red').siblings().css('background','#fff');	
		})
		$('h5').on('click','.reduce',function(){
			i--;
			if(i<=1){
				i=1;
			}
			$('#num').text(i);
		})
		$('h5').on('click','.add',function(){
			if(i>=10){
				alert('最多能预订10天');
			}else{
				i++;
			}
			$('#num').text(i);
		})
		$('.return').on('click',function(){
			history.back();
		})
		$('.finish').on('click',function(){
			var liveMonth=$('#livedate_ul h4 i').text(),
				liveDate=$('#livedate_ul h4 b').text(),
				num=$('#num').text();
			history.back();
			localStorage.liveMonth=liveMonth;
			localStorage.liveDate=liveDate;
			localStorage.liveLong=num;
		})
})
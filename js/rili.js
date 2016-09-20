$(function(){
	init();
	function init(){
		var argument=getArgument();
		if(argument){
			var intimes=argument.date_in,
				outTime=argument.date_out;
		}else{
			var intimes=intime(),
				outTime=intime(2);
		}
		
		var numTime=getTimes(intimes),
			lastTime=getTimes(outTime);
			$('#intime span').text(intimes);
			$('#outtime span').text(outTime);
			$('#intime i').text(numTime);
			$('#outtime i').text(lastTime);
			gotoRili(intimes,outTime);
	}
	function intime(n){
		var n=n || 0,
			date=new Date(),
			newDate=new Date(date.getFullYear(),date.getMonth(),(date.getDate()+n));
			return newDate.getFullYear()+"-"+addZero(newDate.getMonth()+1)+"-"+addZero(newDate.getDate());
	}
	function getTimes(time){
		var arr=['日','一','二','三','四','五','六'],
			tody=new Date(),
			time=new Date(time),
			step=86400000,
			week=time.getDay(),
			arg=Math.abs(Math.ceil((time*1-tody*1)/step)),
			txt="";
			$('#outtime small').text(week);
			switch(arg){
				case 0:txt='今天';break;
				case 1:txt='明天';break;
				case 2:txt='后天';break;
				default:txt='星期'+arr[week]
			}
			return txt;
	}
	function gotoRili(intimes,outTime){
		$('.sec_div a').on('click',function(){
			var date_in=$('#intime span').text(),
				date_out=$('#outtime span').text(),
				url='date.html?date_in='+date_in+'&date_out='+date_out;
			$(this).attr('href',url);
		})
	}
})
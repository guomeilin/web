$(function(){
	var sec=new IScroll('#sec');
	window.onload=sec;
	var hotel_name=localStorage.hotel_name;
		hotel_text=localStorage.hotel_text;
		liveMonth=Number(localStorage.liveMonth),
		liveDate=Number(localStorage.liveDate),
		num=Number(localStorage.liveLong)+liveDate,
		time=getDayS(liveMonth);
	$('#deta_li i').text(liveMonth);
	if(num>time){
		var num=num-liveDate,
			liveMonth=liveMonth+1;
	}
	function getDayS(liveMonth){
		if(liveMonth==1 || liveMonth==3 || liveMonth==5 || liveMonth==7 || liveMonth==8 || liveMonth==10 || liveMonth==12){
			return 31;
		}else if(liveMonth==4 || liveMonth==6 || liveMonth==9 || liveMonth==11){
			return 30;
		}
	}
	$('#deta_li b').text(liveDate);
	$('#deta_li1 i').text(liveMonth);
	$('#deta_li1 b').text(num);
	$('#book_fir').text(hotel_name);
	$('#house').text(hotel_text);
	$('header').on('click','span',function(){
		history.back();
	})
	$('footer').on('click','a',function(){
		var hotel_num=$('#indent_home input').val();
		localStorage.hotel_num=hotel_num;
	})

})
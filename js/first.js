$(function(){
	var ff=localStorage.city,
		liveMonth=localStorage.liveMonth,
		liveDate=localStorage.liveDate,
		liveLong=localStorage.liveLong,
		time=getDayS(liveMonth);
		if(liveMonth==undefined)
		{
			var date=new Date();
			liveMonth=date.getMonth()+1;
		}
		$('#liveTime i').text(liveMonth);
		function getDayS(liveMonth){
			if(liveMonth==1 || liveMonth==3 || liveMonth==5 || liveMonth==7 || liveMonth==8 || liveMonth==10 || liveMonth==12){
				return 31;
			}else if(liveMonth==4 || liveMonth==6 || liveMonth==9 || liveMonth==11){
				return 30;
			}
		}
		if(ff==undefined){
			ff='北京';
		}
		if(liveDate==undefined)
		{
			var date=new Date();
			liveDate=date.getDate();
		}
		if(liveLong==undefined)
		{
			liveLong=1;
		}
		num=Number(liveLong)+Number(liveDate);
		if((Number(liveLong)+Number(liveDate))>time){
				num=Number(liveLong)+Number(liveDate)-time,
				liveMonth=Number(liveMonth)+1;
		}
	$('#first_city').html(ff);
	$('#liveTime b').text(Number(liveDate));
	$('#liveLong em').text(liveLong);
	$('#liveLong i').text(Number(liveMonth));
	$('#liveLong b').text(num);
	$('#search').on('click',function(){
		var hotel=$('#hotel').val();
		localStorage.hotelName=hotel;
		$(this).attr('href','hotel.html');
		$('#hotel').val('');
	})
})
$(function(){
	var sec=new IScroll('#sec');
	window.onload=sec;
	var hotel_name=localStorage.hotel_name,
		liveMonth=localStorage.liveMonth,
		hotel_text=localStorage.hotel_text,
		liveDate=Number(localStorage.liveDate),
		hotel_num=localStorage.hotel_num;
	$('#deta_li i').text(liveMonth);
	$('#deta_li b').text(liveDate);
	$('#book_fir').text(hotel_name);
	$('#deta_li em').text(hotel_num);
	$('#deta_li a').text(hotel_text);
	$('header').on('click','span',function(){
		history.back();
	})
	
})
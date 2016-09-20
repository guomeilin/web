$(function(){
	var sec=new IScroll('#sec');
	window.onload=sec;
	var hotel_name=localStorage.hotel_name,
		hotel_text=localStorage.hotel_text;
	$('#book_fir').text(hotel_name);
	$('#house').text(hotel_text);
	$('header').on('click','span',function(){
		history.back();
	})
	
})
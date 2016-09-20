$(function(){
	var sec=new IScroll('#sec');
	window.onload=sec;
	var hotel_name=localStorage.hotel_name,
		hotel_star=localStorage.hotel_star,
		hotel_brand=localStorage.hotel_brand,
		hotelName=localStorage.hotelName,
		liveMonth=Number(localStorage.liveMonth),
		liveDate=Number(localStorage.liveDate),
		num=Number(localStorage.liveLong)+liveDate,
		time=getDayS(liveMonth);
	$('#deta_li i').text(liveMonth);
	if(num>time){
		var num=num-liveDate,
			liveMonth=liveMonth+1;
	}
	//console.log(num);
	function getDayS(liveMonth){
		if(liveMonth==1 || liveMonth==3 || liveMonth==5 || liveMonth==7 || liveMonth==8 || liveMonth==10 || liveMonth==12){
			return 31;
		}else if(liveMonth==4 || liveMonth==6 || liveMonth==9 || liveMonth==11){
			return 30;
		}
	}
	$('#deta_ul1 .deta_li').text(hotel_name);
	$('#deta_ul1 span').text(hotel_star);
	$('#deta_ul1 .deta_brand').text(hotel_brand);
	$('#deta_li b').text(liveDate);
	$('#deta_li1 i').text(liveMonth);
	$('#deta_li1 b').text(num);
	$.ajax({
		url:'data/hotelDetail.json',
		dataType:'json',
		async:false,
		success:function(e){
			var date=e.result.room_types,
				str="";

			for(var i in date){
				str+="<li>"
					+"<p class='deta_style'><em>"+date[i].name+"</em><br><span>"+date[i].bed_type+" 无早</span></p>"
					+"<p class='deta_price'><i>¥"+date[i].goods[0].price[0]+"</i><span>担保</span></p>";
					if(date[i].goods[1].room_state==1){
						str+="<p class='deta_book'>预订</p>";
					}else{
						str+="<p class='deta_full'>满房</p>"
					}
				str+="</li>";
			}
			$('#deta_ul3').html(str);
			sec.refresh();
		},
		error:function(){
			alert('请求失败');
		}
	})
	var hei=$('#deta_ul3 li:eq(0)').height();
	$('#deta_ul3').css({
		'height':'4.5rem',
		'overflow':'hidden'
	})
	$('#deta_surplus1').on('click',function(){
		var deta_hei=$('#deta_ul3').height(),
			txt=$(this).text();
		console.log(txt);
		if(txt=='展开剩余全部'){
			$('#deta_ul3').css('height','100%');
			$(this).text('收起');
			sec.refresh();
		}else{
			$('#deta_ul3').css('height','4.5rem');
			$(this).text('展开剩余全部');
			sec.refresh();
		}
	})
	$.ajax({
		url:'data/hotel.json',
		dataType:'json',
		async:false,
		success:function(e){
			var name=e.result.hotel_list,
				str="";
			for(var i in name){
				if(i<10){
					str+="<a href='javascript:;'>"
						+"<dl>"
							+"<dt>"
								+"<img src='"+name[i].image+"'>"
							+"</dt>"
							+"<dd>"
								+"<h3>"+name[i].name+"</h3>"
								+"<h4>"
									+"<span>"+name[i].stars+"</span>"
									+"<p class='boon'>礼</p>"
									+"<p class='money'>¥"+name[i].low_price+" <i>起</i></p>"
								+"</h4>"
								+"<h5>"
									+"<p>经济型</p>"
									+"<span class='fa fa-fw fa-rss'></span>"
									+"<span>P</span>"
								+"</h5>"
								+"<h6>"
									+"<p>"+name[i].addr+"</p>"
									+"<span>0.8km</span>"
								+"</h6>"
							+"</dd>"
						+"</dl>"
					+"</a>";
				}
			}
			$('#deta_hotel1').html(str);
			$('#deta_hotel2').html(str);
			sec.refresh();			
		},
		error:function(){
			alert('请求失败');
		}
	})
	$('#deta_surplus2').on('click',function(){
		var deta_hei=$('#deta_hotel1').height(),
			txt=$(this).text();
			console.log(deta_hei);
		if(txt=='展开剩余全部'){
			$('#deta_hotel1').css('height','100%');
			$(this).text('收起');
			sec.refresh();
		}else{
			$('#deta_hotel1').css({
				'height':'6rem',
				'overflow':'hidden'
			})
			$(this).text('展开剩余全部');
			sec.refresh();
		}
	})
	$('#deta_surplus3').on('click',function(){
		var deta_hei=$('#deta_hotel2').height(),
			txt=$(this).text();
			console.log(deta_hei);
		if(txt=='展开剩余全部'){
			$('#deta_hotel2').css('height','100%');
			$(this).text('收起');
			sec.refresh();
		}else{
			$('#deta_hotel2').css({
				'height':'6rem',
				'overflow':'hidden'
			})
			$(this).text('展开剩余全部');
			sec.refresh();
		} 
	})
	$('.deta_book').on('click',function(){
		$('#click_book').css({
			'-webkit-transform':'translateY(0%)'
		})
		var txt=$(this).parent().find('.deta_style em').text(),
			price=$(this).parent().find('.deta_price i').text();
		$('.book_cont .book_house i').text(txt);
		$('.book_cont .book_price').text(price);
		localStorage.hotel_text=txt;
	})
	$('.close').on('click',function(){
		$('#click_book').css({
			'-webkit-transform':'translateY(100%)'
		})
	})
	$('#deta_phone').on('click',function(){
		$('#shout').css({
			'-webkit-transform':'translateY(0%)'
		})
	})
	$('#quxiao').on('click',function(){
		$('#shout').css({
			'-webkit-transform':'translateY(100%)'
		})
	})
	$('header span').on('click',function(){
		history.back();
	})
})
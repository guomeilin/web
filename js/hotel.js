$(function(){
	var sec=new IScroll('#sec');
	window.onload=sec;
	var hotelName=localStorage.hotelName,
		liveMonth=Number(localStorage.liveMonth),
		liveDate=Number(localStorage.liveDate),
		liveLong=Number(localStorage.liveLong),
		num=liveLong+liveDate,
		time=getDayS(liveMonth);
		$('#live i').text(liveMonth);
		if(num>time){
			var num=num-liveDate,
				liveMonth=liveMonth+1;
		}
		console.log(num);
		function getDayS(liveMonth){
			if(liveMonth==1 || liveMonth==3 || liveMonth==5 || liveMonth==7 || liveMonth==8 || liveMonth==10 || liveMonth==12){
				return 31;
			}else if(liveMonth==4 || liveMonth==6 || liveMonth==9 || liveMonth==11){
				return 30;
			}
		}
	$('#live b').text(liveDate);
	$('#leave i').text(liveMonth);
	$('#leave b').text(num);
	$.ajax({
		url:'data/hotel.json',
		dataType:'json',
		async:false,
		success:function(e){
			var name=e.result.hotel_list,
				str="";
			for(var i in name){
				if(name[i].name.indexOf(hotelName)!=-1){
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
			if(str==""){
				$('#cont').html('<p id="none">搜索不到内容...</p>');
			}else{
				$('#cont').html(str);
			}
			sec.refresh();
		},
		error:function(){
			alert('请求失败');
		}
	})
	var le=$('#cont a').length;
	$('header p i').text(le);
	$('header').on('click','span',function(){
		history.back();
	})
	$('footer').on('click','li',function(){
		var ind=$(this).index();
		$('#option').css('display','block');
		$('#option div').eq(ind).css('display','block').siblings().css('display','none');
	})
	$('#option input').on('click',function(){
		var txt=$('#option input:checked').parent().find('p').text();
		if($('#option input:checked')){
			$(this).parents('#option').css('display','none');
		}
	})
	$('#cont a').on('click',function(){
		var txt=$(this).find('h3').text(),
			txt_star=$(this).find('h4 span').text(),
			txt_brand=$(this).find('h6 p').text();
			localStorage.hotel_name=txt;
			localStorage.hotel_star=txt_star;
			localStorage.hotel_brand=txt_brand;
		$(this).attr('href','hoteldetails.html');
	})
})
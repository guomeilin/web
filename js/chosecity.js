var sec=new IScroll('#sec');
window.onload=sec;
$(function(){
	$('header').on('click','span',function(){
		history.back();
	})
	function init()
	{
		var arr=[];//获取每个城市距离顶部的距离
		//热门城市渲染
		$.ajax({
			url:'data/hotcity.json',
			dataType:'json',
			async:false,
			success:function(e){
				var str="";
				for(var i in e){
					str+="<li><a href='javascript:;'>"+e[i]+"</a></li>";
				}
				$('#hot_ul').html(str);
				sec.refresh();
			},
			error:function(){
				alert('请求失败');
			}
		})
		//点击更多
		$('#hot_more').on('click',function(){
			var hei=$('#hot_ul').css('height');
			if(hei=='100%'){
				$('#hot_ul').css('height','2.23rem');
			}else{
				$('#hot_ul').css('height','100%');
			}
		})
		//字母渲染 城市渲染
		$.ajax({
			url:'data/data1.json',
			dataType:'json',
			async:false,
			success:function(e){
				var data=e.data.citylist,
					str="",
					str1="";
				for(var i in data){
					str+="<h3>"+i+"</h3><ul>";
					str1+="<li>"+i+"</li>";
					for(var j in data[i])
					{
						for(var z in data[i][j])
						{
							str+="<li><a href='javascript:;'>"+data[i][j][z].name+"</a></li>";	
						}
					}	
					str+="</ul>";					
				}
				$('#city_ul').html(str);
				$('#letter_ul').html(str1);
				sec.refresh();
			},
			error:function(){
				alert('请求失败');
			}
		})
		//查找城市
		$('#city_ul h3').each(function(i,val){
			arr.push($(this).offset().top);
		})
		//事件目标
		$('#letter_ul').on('click','li',function(){
			var ind=$(this).index();
			sec.y=-(arr[ind]-50);
		})
		//获取点击对象
		$('#hot_ul,#city_ul').on('click','li',function(){
			var txt=$(this).text();
			$('#first_ul li span').html(txt);
			location.href='first.html';
			localStorage.city=txt;
		})
	}	
	window.onload=init;
})
;(function($){
	init();
	function init(){
		var argObj=getArgument();
			argI=argObj.date_in.split('-'),
			argO=argObj.date_out.split('-'),
			argI_y=argI[0],
			argI_m=removeZero(argI[1]),
			argI_d=removeZero(argI[2]),
			argO_y=argO[0],
			argO_m=removeZero(argO[1]),
			argO_d=removeZero(argO[2]);
		$('.cont').date();
		argIn();
		argRin();
		
	}
	function argIn(){
		if(argO_m==argI_m){
			var tdI=$('#tab'+argI_m).find('td').not('.pre,.last');
			/*for(var i=0;i<tdI.length;i++){
				var txt=tdI.eq(i).find('small').text()*1;
				if(txt>=argI_d && txt<=argO_d){
					tdI.eq(i).addClass('rz');
				}
			}*/
			tdI.filter(function(){
				var txt=$(this).find('small').text()*1;
				if(txt>=argI_d && txt<=argO_d){
					return $(this);
				}
			}).addClass('rz');
		}else{
			var tdI=$('#tab'+argI_m).find('td').not('.pre,.last'),
				tdO=$('#tab'+argO_m).find('td').not('.pre');
			tdI.filter(function(){
				var txt=$(this).find('small').text()*1;
				if(txt>=argI_d){
					return $(this);
				}
			}).addClass('rz');
			tdO.filter(function(){
				var txt=$(this).find('small').text()*1;
				if(txt<=argO_d){
					return $(this);
				}
			}).addClass('rz');
		}
		$('.rz').first().append('<span>入住</span>');
		$('.rz').last().append('<b>离店</b>');
	}
	function argRin(){
		var check=false;
		$('.cont').on('tap','td',function(){
			if($(this).is('.pre,.last')) return false;
			if(!check){
				$('.rz').find('b,span').remove();
				$('.rz').removeClass('rz');
				$(this).addClass('rz').append('<b>入住</b>');
				check=true;
			}else{
					$(this).addClass('rz').append('<b>离店</b>');
					check=false;
					var reg=/[\u4e00-\u9fa5]/g,
						first=$('.rz').first(),
						first_in=first.find('small').text(),
						first_par=first.parents().find('h2').text().replace(reg,'-')+addZero(first_in),
						last=$('.rz').last(),
						last_in=last.find('small').text(),
						last_par=last.parents().find('h2').text().replace(reg,'-')+addZero(last_in),
						sub=(new Date(last_par)*1-new Date(first_par)*1)/86400000;
						if(sub>15){
							alert('只允许预订15天');
							return false;
						}
						location.href='rikao.html?date_in='+first_par+'&date_out='+last_par;
			}
		})
	}
})(Zepto)
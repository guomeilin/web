function addZero(m){
	if(m<10){
		return '0'+m;
	}else{
		return m;
	}
}

function removeZero(m){
	return m*1;
}

function getArgument(){
	var obj={},
		href=location.search;
		if(!href) return false;
		var href=location.search.substr(1);
		arr=href.split('&');
		arr.forEach(function(ele,i){
			var rs=ele.split('=');
			obj[rs[0]]=rs[1];
		})
		return obj;  
}
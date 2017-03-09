$(function(){
	//ali和aDiv都是自定义的变量名
	var ali = $('.tabTitle ul li');
	var aDiv = $('.tabContent div');
	//click点击切换 mouseover放上去切换
	ali.mouseover(function(){
//		alert($);
		//$(this)就是当前元素
		$(this).addClass('current').siblings().removeClass('current');
		//如果想用一组元素控制另一组元素的显示或者隐藏，需要用到索引
		var index = $(this).index();
//		alert(index)返回数字 从第0个开始
		//eq意思：在匹配的集合选择索引值为index的元素
		aDiv.eq(index).show().siblings().hide();
	});
});

//用来扩充jQuery对象
$.fn.extend({
	bg:bg
});
function bg(){
	//prop：获取在匹配的元素集合中的第一个元素的属性值
	var cName = '.'+$(this).prop('class');//获取到li
	$(cName).click(function(){
		//index：搜索匹配的元素，并返回相应元素的索引值，从0开始计数。
		var $nowIndex = $(this).index();
		var $h = Math.floor(-$(this).height()-6);
		var $hNum = $nowIndex*$h+'px';
		var $w = Math.floor(-$(this).width()-6);
		var $wNum=$nowIndex*$w+'px';
		var $color = $(this).children('a').css('background-color');
		$(".lin").css('background-color',$color);
		$("h2").css('background-color',$color);
		var $bgimg = $(this).children('a');
		$bgimg.css('background-position',$hNum+' -15px');
		//siblings：找到每个div的所有同辈元素。
		$(this).siblings('li').children('a').css('background-position','100px 0');//不能小于100px
	})
}

$(function(){
	var Btn = $('.san ol li');
	var oDiv = $('.san .sansan p');
	Btn.click(function(){
		$(this).addClass('qqq').siblings().removeClass('qqq');
		var _index = $(this).index();
		oDiv.hide().eq(_index).show();
	})
});

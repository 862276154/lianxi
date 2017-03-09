//$(function(){
//	var Btn = $('.gundong>h5>ul>li');
//	var oDiv = $('.pinpai');
//	Btn.click(function(){
//		$(this).addClass('bianse').siblings().removeClass('bianse');
//		var _index = $(this).index();
//		oDiv.hide().eq(_index).show();
//	});
//});
$(function(){
	var Btn = $('.gundong h5 ul li');
	var oDiv = $('.pinpai');
	Btn.click(function(){
		$(this).addClass('bianse').siblings().removeClass('bianse');
		var index = $(this).index();
		oDiv.hide().eq(index).show();
		
	})
});

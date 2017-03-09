$(function(){
	var Danjia = $('.cuxiao>span').html();
	var Geshu = $('.shuliang>#shuru');
	$('.shuliang>select').change(function(){
//		alert(12312)
		var shu = $('.shuliang>select :selected').val();
		lll=Danjia*shu;
		$('.zongji>span3').html(Danjia*shu);
	})
//	$('.zongji>span3').html()
})

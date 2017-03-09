$(function(){
	var oul = $('.lunbo .tupian');
	var oli = $('.lunbo .tupian li');
	var Btn = $('.lunbo .di li');
	var imgWidth = $(oli).eq(0).width();
	var timer;
	var num = 0;
//	console.log(imgWidth)
	Btn.click(function(){
		$(this).addClass('one').siblings().removeClass('one');
		var _index = $(this).index();
		_index = num;
		var offset = imgWidth*_index;
		oul.animate({
			'left':-offset
		});
	});
	timer = setInterval(lunbo,1000);
	function lunbo(){
		num++;
//		Btn.click(function(){			
		if(num == Btn.length){
			num = 0;
			}
			Btn.eq(num).addClass('one').siblings().removeClass('one');
			var lun = imgWidth*num;
			oul.animate({
				'left':-lun
			})
//		})
	}
	$('.lunbo').mousemove(function(){
		clearInterval(timer);
	})
	$('.lunbo').mouseout(function(){
		timer = setInterval(lunbo,1000);
	})
});
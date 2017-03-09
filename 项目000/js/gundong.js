$(function(){
	var timer;
//	var num = 0;
//	var oUl = $('.zuosi ul');
//	var oLi = $('.zuosi ul li');
	$('.zuosi ul li').hover(function(){
//		$(this).mouseout(function(){
			clearInterval(timer);
//		})
	},function(){
		timer = setInterval(function(){
			$('.zuosi ul li:first').animate({
				'height':'0'
			},'slow',function(){
				$(this).removeAttr('style').insertAfter($('.zuosi ul li:last'));
			})
		},1500);
	});
});

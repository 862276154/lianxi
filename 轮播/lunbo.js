$(function(){
	var oul = $('.wrap ul');
	var ali = $('.wrap ul li');
	var numLi = $('.wrap ol li');
//	console.log(numLi )
	var aliWidth = $('.wrap ul li').eq(0).width();
	var _now = 0; //这个是控制数字样式的计数器
	var _now2 = 0; //这个是控制图片运动距离的计数器
//	var timeId = null;
	var timeId;//同上
	var aimg = $('.wrap ul img');
	var op = $('.wrap p');
	
	numLi.click(function(){
		var index = $(this).index();
		//让——now和index同步
		_now = index;
		_now2 = index;
		
		var imgAlt = aimg.eq(_now).attr('alt');
		op.html(imgAlt);
		$(this).addClass('moren').siblings().removeClass();
		oul.animate({'left':-aliWidth*index},500);
	});
	
	//图片运动的函数。无返回值
	function slider(){
		if(_now == numLi.length-1){
			ali.eq(0).css({
				'position':'relative',
				'left':oul.width()
			});
			_now = 0;
		}else{
			_now++; 
		}
		_now2++;
		numLi.eq(_now).addClass('moren').siblings().removeClass();
		var imgAlt = aimg.eq(_now).attr('alt');
		op.html(imgAlt);
		
		oul.animate({'left':-aliWidth*_now2},500,function(){
			if(_now == 0){
			ali.eq(0).css('position','static');
			oul.css('left',0); 
			_now2 = 0;
			}
		});
		
		
	}
		
	timeId = setInterval(slider,1500);
	
//	$('.wrap').mouseover(function(){
//		clearInterval(timeId);
//	});
//	
//	$('.wrap').mouseout(function(){
//		timeId = setInterval(slider,1500);
//	});
	$('.wrap').hover(function(){
		clearInterval(timeId);
	},function(){
		timeId = setInterval(slider,1500);
	})
});
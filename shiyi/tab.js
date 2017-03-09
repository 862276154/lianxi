$.fn.extend({
	tab:tab
});
function tab(){
	var cName = '#'+this.prop('id');
	$(cName+' input').click(function(){
//		console.log(cName);
		$(cName+'>div').hide().eq($(this).index()).show();
		$(this).css('background','red').siblings('input').css('background','');
		})
}
//$(function(){
//		$('.bg2').click(function(){
//			$('.box2>div').hide().eq($(this).index()).show();
//			$(this).css('background','purple').siblings('input').css('background','');
//		})
//	})
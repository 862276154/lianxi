$(function(){
	$('.xingxing li').click(function(){
		if($(this).index()<2){
			$(this).parent().css('background-position','0-'+16*($(this).index()+1)+'px');
		}else{
			$(this).parent().css('background-position','0-'+(16*($(this).index()+1)+80)+'px');
		}
		alert('您给此商品的评分是'+($(this).index()+1)+'分');
	})
	$('.bg').bg();
})
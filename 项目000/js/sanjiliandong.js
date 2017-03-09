$(function(){
	function getAjax(){
		$.ajax({
			type:"get",
			url:"json/a.txt",
			async:true,
			data:{},
			dataType:'json',
			success:function(data){
				$province = data.p;
				$city = data.c;
				$area = data.a;
				$.each($province, function(i,val) {
					var str = "<option>"+val+"</option>";
					$('#q').append(str);
				});
			}
		});
	}
	getAjax();
	$('#q').change(function(){
		$('#w').html("<option value=''>请选择市</option>");
		$('#e').html("<option value=''>请选择区/县</option>");
		var town = $('#q').val();
		$.each($city[town], function(ii,val2) {
			var str2 = "<option>"+val2+"</option>";
			$('#w').append(str2);
		});
	});
	$('#w').change(function(){
		$('#e').html("<option value=''>请选择区/县</option>");
		var worth = $('#q').val()+'-'+$('#w').val();
		$.each($area[worth], function(iii,val3) {
			var str3 = "<option>"+val3+"</option>";
			$('#e').append(str3);
		});
	});
});
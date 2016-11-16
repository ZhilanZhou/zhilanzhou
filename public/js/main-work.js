$(function(){
	$('.nav li').click(function(){
		$('.nav li').removeClass('active');
		$(this).addClass('active');
		var tabName = $(this).attr('id');
		$('.content').hide();
		$('.'+tabName).show();
	});

	$('.content h3').click(function(){
		$(this).nextAll('p').show();
	});
});
$(function(){
	$('.enter-en').click(function(e){
		e.preventDefault();
		$('#z').animate(
		{
			width: '200%',
			height: '200%',
			opacity: '.1'
		},
		'fast', 
		function() {
			/* stuff to do after animation is complete */
			window.location.href = './main.html';
		});

	});
});
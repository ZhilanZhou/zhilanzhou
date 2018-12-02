$(function(){
	$('.enter-en').click(function(e){
		e.preventDefault();
		$('#z').animate(
		{
			width: '1090px',
			height: '800px',
			opacity: '.01'
		},
		'normal', 
		function() {
			/* stuff to do after animation is complete */
			window.location.href = './views/main.html';
		});

	});
});
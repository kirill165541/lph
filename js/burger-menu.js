$(document).ready(function() {
	$('.header-burger-menu').click(function() {
		$('.header-burger-menu').toggleClass('open-menu');
		$('.toggle-burger-menu').toggleClass('open-menu');
		$('.main').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
	});

	$('#popup-basket').click(function() {
		$('body').toggleClass('fixed-page');
	});

	$('.close').click(function() {
		$('body').toggleClass('fixed-page');
	});
});
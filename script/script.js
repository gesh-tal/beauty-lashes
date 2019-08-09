
$(document).ready(function(){

	$('.mobile_menu_icon').on('click', () => {
		$('.nav_menu_mobile').css('display', 'flex');
	});

	$('#mobile_menu_icon').click(function(){
	    $('.nav_menu_mobile').animate({
	        height: 'toggle',
	        opacity: 'toggle'
	    });
	});

	$(() => {
		$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();

		const ref = $(this).attr("href"),
		      pos = $(ref).offset().top;

		$('html, body').animate({scrollTop: pos}, 1000);
		});
	});

	$('.nav_link').on('click', () => {
		$('.nav_menu_mobile').fadeOut(1000);
	})

  	$("#works").owlCarousel({
  		items: 4,
  		autoPlay: 3500,
  		pagination: false,
  	});
  	$("#technology").owlCarousel({
  		items: 4,
  		autoPlay: 3500,
  		pagination: false,
  	});

});
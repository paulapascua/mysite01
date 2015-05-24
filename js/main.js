// To make the menu scroll down

var hamburger = $('#hamburger');

$('#hamburger').click(function() {
	$('nav').toggleClass('open');
});


// To make the nav smaller on scroll

$(window).scroll(function() {
	var offsetTop = $('nav').scrollTop();

	var scrollTop = $(window).scrollTop(),
	    navOffset = $('nav').offset().top,
		iconsOffset = $('#sm_icons').offset().top,
	    containerOffset = $('.mywork').offset().top,
	    distanceNav = (navOffset - scrollTop);
	    distanceicons = (iconsOffset - scrollTop),
		distanceContainer = (containerOffset - scrollTop);

		// logo = $('#logo');
			// console.log(distanceNav)
	
		if (distanceNav <= 0) {
			$('nav').addClass('scroll');
			$('#sm_icons').addClass('right');
		} 

		if (distanceContainer >= 350) {
			$('nav').removeClass('scroll');
			$('#sm_icons').removeClass('right');
		}

		// To prevent the nav changing in mobile
		
		if ($(window).width() < 680) { 
			$('nav').removeClass('scroll');
			$('#sm_icons').removeClass('right')
		}
});



// window.innerWidth
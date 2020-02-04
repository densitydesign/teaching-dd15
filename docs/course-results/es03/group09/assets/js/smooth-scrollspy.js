$(document).ready(function() {
	$(".nav-link,.dropdown-item").click(function() {
		var t = $(this).attr("href");
		$('.active').removeClass('active');
		$("html, body").animate({
			scrollTop: $(t).offset().top 
		}, {
			duration: 1e3,
		});

		$('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
		$(this).parent().addClass('active');

		return false;
	});
});


$('body').scrollspy({ target: '.navbar',offset: 0 });
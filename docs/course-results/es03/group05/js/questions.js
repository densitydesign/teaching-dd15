$(function() {
 $.jInvertScroll([ '.scroll' ]);
});


$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        setTimeout(function(){ location.replace("gridimages.html"); }, 2000);  
	}
});
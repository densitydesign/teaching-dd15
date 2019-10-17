// JavaScript Document

$(document).ready(function(){	
	
	// navbar background color change on scroll
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll < 2000) {
			$('.title-bar').css('background','#e6b4a1');
		}
		
		else if (scroll > 2000 && scroll < 4700){
			$('.title-bar').css('background','#f2ebda');
		}
		
		else {
			$('.title-bar').css('background','#3c6376');
		}
	})
	
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll < 2000) {
			$('.title-bar').css('color','#000');
		}
		
		else if (scroll > 2000 && scroll < 4700){
			$('.title-bar').css('color','#000');
		}
		
		else {
			$('.title-bar').css('color','#fff');
		}
	})
})





$(document).ready(function() {
	$("#teal01, #teal02, #teal03, #teal04, #teal05, #teal06, #teal07, #teal08, #teal09, #teal10, #gold01, #gold02, #gold03, #gold04, #gold05, #gold06, #gold07, #gold08, #gold09, #gold10").hover(function() {
		$("#graph >").not(this).css("opacity", 0.2);
		$(this).find(".sqstr").css("stroke-width", 2);
	}, function() {
		$("#graph >").not(this).css("opacity", 1);
		$(this).find(".sqstr").css("stroke-width", 0.5);
	});
});
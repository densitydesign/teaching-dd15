$(document).ready(function() {
	var url_zoosk = $("#vimeo_zoosk").attr('src');
	$("#zoosk").on('hide.bs.modal', function() {
			$("#vimeo_zoosk").attr('src', '');
	});
	$("#zoosk").on('show.bs.modal', function() {
			$("#vimeo_zoosk").attr('src', url_zoosk);
	});

	var url_mamba = $("#vimeo_mamba").attr('src');
	$("#mamba").on('hide.bs.modal', function() {
			$("#vimeo_mamba").attr('src', '');
	});
	$("#mamba").on('show.bs.modal', function() {
			$("#vimeo_mamba").attr('src', url_mamba);
	});

	var url_grindr = $("#vimeo_grindr").attr('src');
	$("#grindr").on('hide.bs.modal', function() {
			$("#vimeo_grindr").attr('src', '');
	});
	$("#grindr").on('show.bs.modal', function() {
			$("#vimeo_grindr").attr('src', url_grindr);
	});

	var url_badoo = $("#vimeo_badoo").attr('src');
	$("#badoo").on('hide.bs.modal', function() {
			$("#vimeo_badoo").attr('src', '');
	});
	$("#badoo").on('show.bs.modal', function() {
			$("#vimeo_badoo").attr('src', url_badoo);
	});

	var url_happn = $("#vimeo_happn").attr('src');
	$("#happn").on('hide.bs.modal', function() {
			$("#vimeo_happn").attr('src', '');
	});
	$("#happn").on('show.bs.modal', function() {
			$("#vimeo_happn").attr('src', url_happn);
	});
});
$(document).ready(function() {
	let ar = jp = zh = en = fr = 0;

	$("#ar").click(function() {
		jp = zh = en = fr = 0;
		if (ar === 0) {
			ar = 1;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/ar.png");
		} else {
			ar = 0;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/overview.png");
		}
	});

	$("#jp").click(function() {
		ar = zh = en = fr = 0;
		if (jp === 0) {
			jp = 1;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/jp.png");
		} else {
			jp = 0;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/overview.png");
		}
	});

	$("#zh").click(function() {
		ar = jp = en = fr = 0;
		if (zh === 0) {
			zh = 1;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/zh.png");
		} else {
			zh = 0;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/overview.png");
		}
	});

	$("#en").click(function() {
		ar = jp = zh = fr = 0;
		if (en === 0) {
			en = 1;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/en.png");
		} else {
			en = 0;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/overview.png");
		}
	});

	$("#fr").click(function() {
		ar = jp = zh = en = 0;
		if (fr === 0) {
			fr = 1;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/fr.png");
		} else {
			fr = 0;
			$("#viz02 img").attr("src","/teaching-dd15/course-results/es02/group09/assets/images/viz02/overview.png");
		}
	});
})
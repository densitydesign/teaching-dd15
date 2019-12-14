$(document).ready(function() {
  $("#id-badoo, #id-bumble, #id-grindr, #id-happn, #id-jaumo, #id-mamba, #id-pof, #id-tantan, #id-tinder, #id-zoosk").css("opacity", 0.2);
	$(".app-node").css("opacity",0);

	$("#id-badoo circle, #id-badoo text").hover(function() {
		$("#id-badoo").css("opacity", 1);
		$("#extra-nodes circle:not(.badoo)").css("opacity", 0.20);
		$("#extra-nodes text:not(.badoo)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".badoo .edge").css("stroke-width", 4);
		$(".badoo circle").css("opacity", 1);
		$(".badoo text").css("opacity", 1);
	}, function() {
		$("#id-badoo").css("opacity", 0.2);
		$("#extra-nodes circle:not(.badoo)").css("opacity", 1);
		$("#extra-nodes text:not(.badoo)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-bumble circle, #id-bumble text").hover(function() {
		$("#id-bumble").css("opacity", 1);
		$("#extra-nodes circle:not(.bumble)").css("opacity", 0.20);
		$("#extra-nodes text:not(.bumble)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".bumble .edge").css("stroke-width", 4);
		$(".bumble circle").css("opacity", 1);
		$(".bumble text").css("opacity", 1);
	}, function() {
		$("#id-bumble").css("opacity", 0.2);
		$("#extra-nodes circle:not(.bumble)").css("opacity", 1);
		$("#extra-nodes text:not(.bumble)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-grindr circle, #id-grindr text").hover(function() {
		$("#id-grindr").css("opacity", 1);
		$("#extra-nodes circle:not(.grindr)").css("opacity", 0.20);
		$("#extra-nodes text:not(.grindr)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".grindr .edge").css("stroke-width", 4);
		$(".grindr circle").css("opacity", 1);
		$(".grindr text").css("opacity", 1);
	}, function() {
		$("#id-grindr").css("opacity", 0.2);
		$("#extra-nodes circle:not(.grindr)").css("opacity", 1);
		$("#extra-nodes text:not(.grindr)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-happn circle, #id-happn text").hover(function() {
		$("#id-happn").css("opacity", 1);
		$("#extra-nodes circle:not(.happn)").css("opacity", 0.20);
		$("#extra-nodes text:not(.happn)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".happn .edge").css("stroke-width", 4);
		$(".happn circle").css("opacity", 1);
		$(".happn text").css("opacity", 1);
	}, function() {
		$("#id-happn").css("opacity", 0.2);
		$("#extra-nodes circle:not(.happn)").css("opacity", 1);
		$("#extra-nodes text:not(.happn)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-jaumo circle, #id-jaumo text").hover(function() {
		$("#id-jaumo").css("opacity", 1);
		$("#extra-nodes circle:not(.jaumo)").css("opacity", 0.20);
		$("#extra-nodes text:not(.jaumo)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".jaumo .edge").css("stroke-width", 4);
		$(".jaumo circle").css("opacity", 1);
		$(".jaumo text").css("opacity", 1);
	}, function() {
		$("#id-jaumo").css("opacity", 0.2);
		$("#extra-nodes circle:not(.jaumo)").css("opacity", 1);
		$("#extra-nodes text:not(.jaumo)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-mamba circle, #id-mamba text").hover(function() {
		$("#id-mamba").css("opacity", 1);
		$("#extra-nodes circle:not(.mamba)").css("opacity", 0.20);
		$("#extra-nodes text:not(.mamba)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".mamba .edge").css("stroke-width", 4);
		$(".mamba circle").css("opacity", 1);
		$(".mamba text").css("opacity", 1);
	}, function() {
		$("#id-mamba").css("opacity", 0.2);
		$("#network circle").css("opacity", 1);
		$("#extra-nodes circle:not(.mamba)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#extra-nodes text:not(.mamba)").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-pof circle, #id-pof text").hover(function() {
		$("#id-pof").css("opacity", 1);
		$("#extra-nodes circle:not(.pof)").css("opacity", 0.20);
		$("#extra-nodes text:not(.pof)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".pof .edge").css("stroke-width", 4);
		$(".pof circle").css("opacity", 1);
		$(".pof text").css("opacity", 1);
	}, function() {
		$("#id-pof").css("opacity", 0.2);
		$("#extra-nodes circle:not(.pof)").css("opacity", 1);
		$("#extra-nodes text:not(.pof)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-tantan circle, #id-tantan text").hover(function() {
		$("#id-tantan").css("opacity", 1);
		$("#extra-nodes circle:not(.tantan)").css("opacity", 0.20);
		$("#extra-nodes text:not(.tantan)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".tantan .edge").css("stroke-width", 4);
		$(".tantan circle").css("opacity", 1);
		$(".tantan text").css("opacity", 1);
	}, function() {
		$("#id-tantan").css("opacity", 0.2);
		$("#extra-nodes circle:not(.tantan)").css("opacity", 1);
		$("#extra-nodes text:not(.tantan)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-tinder circle, #id-tinder text").hover(function() {
		$("#id-tinder").css("opacity", 1);
		$("#extra-nodes circle:not(.tinder)").css("opacity", 0.20);
		$("#extra-nodes text:not(.tinder)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".tinder .edge").css("stroke-width", 4);
		$(".tinder circle").css("opacity", 1);
		$(".tinder text").css("opacity", 1);
	}, function() {
		$("#id-tinder").css("opacity", 0.2);
		$("#extra-nodes circle:not(.tinder)").css("opacity", 1);
		$("#extra-nodes text:not(.tinder)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

	$("#id-zoosk circle, #id-zoosk text").hover(function() {
		$("#id-zoosk").css("opacity", 1);
		$("#extra-nodes circle:not(.zoosk)").css("opacity", 0.20);
		$("#extra-nodes text:not(.zoosk)").css("opacity", 0.20);
		$("#network circle").css("opacity", 0.2);
		$("#network text").css("opacity", 0.2);
		$(".zoosk .edge").css("stroke-width", 4);
		$(".zoosk circle").css("opacity", 1);
		$(".zoosk text").css("opacity", 1);
	}, function() {
		$("#id-zoosk").css("opacity", 0.2);
		$("#extra-nodes circle:not(.zoosk)").css("opacity", 1);
		$("#extra-nodes text:not(.zoosk)").css("opacity", 1);
		$("#network .edge").css("stroke-width", 3);
		$("#network circle").css("opacity", 1);
		$("#network text").css("opacity", 1);
	});

// .about
// .age
// .age_range
// .ambition
// .body_type
// .car
// .children
// .city_cur
// .city_nat
// .color
// .company
// .convo
// .cooking
// .date_fat
// .date_smoker
// .diet
// .drinking
// .drugs
// .edu_cur
// .edu_lvl
// .education
// .ethnicity
// .exercise
// .family
// .gender
// .goal
// .greeting
// .height
// .hiv
// .income
// .interests
// .job
// .lang
// .living
// .longes
// .meet_at
// .music
// .nsfw
// .perfect
// .pers_desc
// .pets
// .phone
// .questions
// .photo
// .photo_more
// .politics
// .prompt
// .pronouns
// .rel_status
// .religion
// .sex_pos
// .sex_pref
// .sexuality
// .show
// .show_wm
// .smoking
// .social
// .tattoos
// .tribes
// .weight
// .zip
// .zodiac
});
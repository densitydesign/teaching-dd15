$(document).ready(function() {


/*************************GESTIONE CATEGORIE*********************************************/


var linguetta = document.getElementById("page_1");
		var linguettaALL = document.getElementById("linguette");
var background = document.getElementById("space_back_top");


if($(document).width() < 568)
	{
		$(".onglet").addClass("onglet_inactive");
		$(".onglet").removeClass("onglet_active");
		
		$(".first_category").css("display","none");
		$(".second_category").css("display","none");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","none");
	}
	else
	{
		$(".white_gap").css("display","none");

		$(".first_category").css("display","block");
		


		$(".second_category").css("display","none");
		$(".third_category").css("display","none");
		$(".forth_category").css("display","none");
		$(".fifth_category").css("display","none");
		$(".sixth_category").css("display","none");
			
		
					
		background.classList.add("white_back_one_open");
		background.classList.remove("white_back_all_closed");	
	}




$(".first").click(function(){
	
	   var element = document.getElementById("page_1");
		
	   // if(element.classList.contains("onglet_active"))
	   // {
		    // element.classList.remove("onglet_active");
			// element.classList.add("onglet_inactive");
		   
			// background.classList.remove("white_back_one_open");
			// background.classList.add("white_back_all_closed");		
			
			 // // background.classList.remove("white_background_top");
			// // background.classList.add("white_background_down");			
			
			// $(".first_category").css("display","none");
			// $(".second_category").css("display","none");
			// $(".third_category").css("display","none");
			// $(".forth_category").css("display","none");
			// $(".fifth_category").css("display","none");
			// $(".sixth_category").css("display","none");
			// $(".white_gap").css("display","none");
			
	   // }
	   // else
	   // {	
   
			background.classList.add("white_back_one_open");
			background.classList.remove("white_back_all_closed");		
   
			$(".first_category").css("display","block");
			$(".white_gap").css("display","block");
			
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
		   
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
			
			// document.getElementsByClassName('first_category')[0].style.visibility = 'visible';
	   // }
});	

$(".second").click(function(){
	
	   var element = document.getElementById("page_2");
		   
	   // if(element.classList.contains("onglet_active"))
	   // {
			// element.classList.remove("onglet_active");
			// element.classList.add("onglet_inactive");
			
			// background.classList.remove("white_back_one_open");
			// background.classList.add("white_back_all_closed");		

			// $(".first_category").css("display","none");
			// $(".second_category").css("display","none");
			// $(".third_category").css("display","none");
			// $(".forth_category").css("display","none");
			// $(".fifth_category").css("display","none");
			// $(".sixth_category").css("display","none");			
			// $(".white_gap").css("display","none");
	   // }
	   // else
	   // {
		   background.classList.add("white_back_one_open");
			background.classList.remove("white_back_all_closed");
		   
			$(".white_gap").css("display","block");
			$(".first_category").css("display","none");
			$(".second_category").css("display","block");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
		   
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   // }
});	

$(".third").click(function(){
	
	   var element = document.getElementById("page_3");
		   
	   // if(element.classList.contains("onglet_active"))
	   // {
			// element.classList.remove("onglet_active");
			// element.classList.add("onglet_inactive");
			
			// background.classList.remove("white_back_one_open");
			// background.classList.add("white_back_all_closed");		

			// $(".first_category").css("display","none");
			// $(".second_category").css("display","none");
			// $(".third_category").css("display","none");
			// $(".forth_category").css("display","none");
			// $(".fifth_category").css("display","none");
			// $(".sixth_category").css("display","none");
			// $(".white_gap").css("display","none");
	   // }
	   // else
	   // { 
			background.classList.add("white_back_one_open");
			background.classList.remove("white_back_all_closed");
		   
		   $(".white_gap").css("display","block");
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","block");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
			
			
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   // }
});	

$(".fourth").click(function(){
	
	   var element = document.getElementById("page_4");
		   
	   // if(element.classList.contains("onglet_active"))
	   // {
			// element.classList.remove("onglet_active");
			// element.classList.add("onglet_inactive");
			
			// background.classList.remove("white_back_one_open");
			// background.classList.add("white_back_all_closed");		;	

			// $(".first_category").css("display","none");
			// $(".second_category").css("display","none");
			// $(".third_category").css("display","none");
			// $(".forth_category").css("display","none");
			// $(".fifth_category").css("display","none");
			// $(".sixth_category").css("display","none");
			// $(".white_gap").css("display","none");
	   // }
	   // else
	   // {
		   background.classList.add("white_back_one_open");
			background.classList.remove("white_back_all_closed");
		   
		   $(".white_gap").css("display","block");
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","block");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","none");
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   // }
});	

$(".fifth").click(function(){
	
	   var element = document.getElementById("page_5");
		   
	   // if(element.classList.contains("onglet_active"))
	   // {
			// element.classList.remove("onglet_active");
			// element.classList.add("onglet_inactive");
			
			// background.classList.remove("white_back_one_open");
			// background.classList.add("white_back_all_closed");					
			
			// $(".first_category").css("display","none");
			// $(".second_category").css("display","none");
			// $(".third_category").css("display","none");
			// $(".forth_category").css("display","none");
			// $(".fifth_category").css("display","none");
			// $(".sixth_category").css("display","none");
			// $(".white_gap").css("display","none");
	   // }
	   // else
	   // {
				background.classList.add("white_back_one_open");
			background.classList.remove("white_back_all_closed");
			
		   $(".white_gap").css("display","block");	   
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","block");
			$(".sixth_category").css("display","none");
		   
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			background.classList.remove("white_background_down");
			background.classList.add("white_background_top");
	   // }
});	

$(".sixth").click(function(){
	
	   var element = document.getElementById("page_6");
		   
	   // if(element.classList.contains("onglet_active"))
	   // {
			// element.classList.remove("onglet_active");
			// element.classList.add("onglet_inactive");
			
			// background.classList.remove("white_back_one_open");
			// background.classList.add("white_back_all_closed");				
			
			// $(".first_category").css("display","none");
			// $(".second_category").css("display","none");
			// $(".third_category").css("display","none");
			// $(".forth_category").css("display","none");
			// $(".fifth_category").css("display","none");
			// $(".sixth_category").css("display","none");
			// $(".white_gap").css("display","none");
	   // }
	   // else
	   // {
		   background.classList.add("white_back_one_open");
			background.classList.remove("white_back_all_closed");
		   
		   $(".white_gap").css("display","block");
			$(".first_category").css("display","none");
			$(".second_category").css("display","none");
			$(".third_category").css("display","none");
			$(".forth_category").css("display","none");
			$(".fifth_category").css("display","none");
			$(".sixth_category").css("display","block");
			
			$(".onglet").addClass("onglet_inactive");
			$(".onglet").removeClass("onglet_active");
		   
			element.classList.remove("onglet_inactive");
			element.classList.add("onglet_active");
			
			// background.classList.remove("white_background_down");
			// background.classList.add("white_background_top");
	   // }
});	


/************************* FILTRO *********************************************/

$(".claim").show();
$(".review").hide();


$("#bottone_review").on("click", function() {
   $(".claim").hide();
   $(".review").show();
});

$("#bottone_claim").on("click", function() {
   $(".review").hide();
   $(".claim").show();
});

$("#btn_data_type").on("click", function() {
   $(".review").hide();
   $(".claim").show();
   
});

var flag= false; 

// $("#switcher-1").click(function() {
	
	// $(".review").hide();
   // $(".claim").show();
	
    // // $(this).attr("disabled", "disabled");
    // // $(this).val("X");
// });


$("#switcher-1").click(function() {
	
	if(flag == false){
		$(".review").show();
		$(".claim").hide();
		flag = true;
	}
	else
	{
		$(".review").hide();
		$(".claim").show();
		flag = false;
	}
});


/************************************************************************************/



});
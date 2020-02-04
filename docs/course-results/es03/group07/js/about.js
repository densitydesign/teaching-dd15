$(document).ready(function() {
	
	
$("#datagathering, #analysis").hide();
$("#a_x5F_acceso, #d_x5F_acceso").hide();
$("#p_x5F_spento").hide();
    
$("#d_x5F_spento").click(function(){
    $("#p_x5F_acceso, #a_x5F_acceso, #d_x5F_spento, #project, #analysis").hide();
    $(" #d_x5F_acceso, #datagathering, #a_x5F_spento, #p_x5F_spento").show();
    $("#other_x5F_scheme, #a_x5F_scheme").css("opacity",0.15);
    $("#d_x5F_scheme").css("opacity",1);
    
})

$("#a_x5F_spento").click(function(){
    $("#p_x5F_acceso, #a_x5F_spento, #d_x5F_acceso, #project, #datagathering").hide();
    $("#d_x5F_spento, #a_x5F_acceso, #analysis, #p_x5F_spento").show();
    $("#other_x5F_scheme, #d_x5F_scheme").css("opacity",0.15);
    $("#a_x5F_scheme").css("opacity",1);
})

$("#p_x5F_spento").click(function(){
    $("#p_x5F_spento, #a_x5F_acceso, #d_x5F_acceso, #analysis, #datagathering").hide();
    $("#a_x5F_spento, #d_x5F_spento, #project, #p_x5F_acceso").show();
    $("#other_x5F_scheme, #d_x5F_scheme, #a_x5F_scheme").css("opacity",1);
})
	
});
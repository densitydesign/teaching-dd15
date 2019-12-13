$(document).ready(function() {
    
    
    
    // PROTOCOL O2
    
    	
	$(document).ready(function() {
		$("#ANuno, #ANdue, #ANtre, #ANquattro, #ANcinque, #ANsei, #ANsette, #ANotto, #Auno, #Adue, #Atre, #Aquattro, #Acinque, #Asei, #Asette, #Aotto, #Anove, #Adieci, #Aundici, #Adodici, #Atredici, #Aquattordici, #Aquindici, #Asedici, #Adiciasette, #Adiciotto, #Adiciannove, #Aventi, #Aventuno, #Aventidue, #Aventitre, #Aventiquattro, #Aventicinque, #Aventisei, #Aventisette, #Aventotto, #Aventinove, #Atrenta, #Atrentuno, #Atrentadue, #Atrentatre, #Atrentaquattro, #Atrentacinque, #Atrentasei, #Funo, #Fdue, #Ftre, #Fquattro, #Fcinque, #Fsei, #Fsette, #Fotto, #Fnove, #Fdieci, #Fundici, #Fdodici, #Ftredici, #Fquattordici, #Fquindici, #Fsedici, #Fdiciasette, #Fdiciotto, #Fdiciannove, #Fventi, #Fventuno, #Fventidue, #Fventitre, #Fventiquattro, #Fventicinque, #Fventisei, #Fventisette, #Fventotto, #Fventinove, #Ftrenta, #Ftrentuno, #Ftrentadue, #Iuno, #Idue, #Itre, #Iquattro, #Icinque, #Isei, #Isette, #Iotto, #Inove, #Idieci, #Iundici, #Idodici, #Itredici, #Iquattordici, #Iquindici, #Isedici, #Idiciasette, #Idiciotto, #Idiciannove, #Iventi, #Iventuno, #Iventidue, #Iventitre, #Iventiquattro, #Iventicinque, #Iventisei, #Iventisette, #Iventotto, #Iventinove, #Itrenta, #Itrentuno, #Itrentadue, #Itrentatre, #Itrentaquattro, #Itrentacinque, #Itrentasei, #Itrentasette, #Itrentotto, #Itrentanove, #Iquaranta, #ANuno, #ANdue, #ANtre, #ANquattro, #ANcinque, #ANsei, #ANsette, #ANotto").hide(); 
		
		$(".A3, .A4, .A7, .F2, .F3, .F15, .F18, .F23, .F25, .I1, .I2, .I3, .I6, .I7, .I9, .I10, .I11, .I15, .I16, .I18, .I20, .I21, .I24, .I25, .I26, .I27, .I28, .I29, .I31, .I32, .I35, .I38, .I40 ").hide(); 
	
		
//ANNOYED//		
		
$("#AN1").hover(function(){
         //.mostra
         $("#ANuno").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN2, #AN3, #AN8, #AN4, #AN5, #AN6, #AN7").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANuno").hide(); 			
	$("#AN2, #AN3, #AN8, #AN4, #AN5, #AN6, #AN7").css("opacity",1);
});  
 
$("#AN2").hover(function(){
         //.mostra
         $("#ANdue").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN3, #AN8, #AN4, #AN5, #AN6, #AN7").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANdue").hide(); 			
	$("#AN1, #AN3, #AN8, #AN4, #AN5, #AN6, #AN7").css("opacity",1);
});  
 		
 

$("#AN3").hover(function(){
         //.mostra
         $("#ANtre").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN2, #AN8, #AN4, #AN5, #AN6, #AN7").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANtre").hide(); 			
	$("#AN1, #AN2, #AN8, #AN4, #AN5, #AN6, #AN7").css("opacity",1);
});  
 		
			

$("#AN4").hover(function(){
         //.mostra
         $("#ANquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN2, #AN3, #AN5, #AN6, #AN7, #AN8").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANquattro").hide(); 			
	$("#AN1, #AN3, #AN8, #AN2, #AN5, #AN6, #AN7").css("opacity",1);
});  
		
$("#AN5").hover(function(){
         //.mostra
         $("#ANcinque").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN3, #AN8, #AN4, #AN2, #AN6, #AN7").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANcinque").hide(); 			
	$("#AN1, #AN3, #AN8, #AN4, #AN2, #AN6, #AN7").css("opacity",1);
});  
		
		
$("#AN6").hover(function(){
         //.mostra
         $("#ANsei").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN3, #AN8, #AN4, #AN5, #AN2, #AN7").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANsei").hide(); 			
	$("#AN1, #AN3, #AN8, #AN4, #AN5, #AN2, #AN7").css("opacity",1);
});  
		
$("#AN7").hover(function(){
         //.mostra
         $("#ANsette").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN3, #AN8, #AN4, #AN5, #AN6, #AN2").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANsette").hide(); 			
	$("#AN1, #AN3, #AN8, #AN4, #AN5, #AN6, #AN2").css("opacity",1);
});  
		
$("#AN8").hover(function(){
         //.mostra
         $("#ANotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#AN1, #AN3, #AN7, #AN4, #AN5, #AN6, #AN2").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#ANotto").hide(); 			
	$("#AN1, #AN3, #AN7, #AN4, #AN5, #AN6, #AN2").css("opacity",1);
});  


//AGAINST//		
	
$("#A1").hover(function(){
         //.mostra
         $("#Auno").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Auno").hide(); 			
	$("#A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});  
 
$("#A2").hover(function(){
         //.mostra
         $("#Adue").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Adue").hide(); 			
	$("#A1, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});  
 

$("#A3").hover(function(){
         //.mostra
         $("#Atre").toggle();
		 $("#TESTO_BASE").hide();
			$(".A3").toggle(); 
$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	$("#Atre").hide(); 	
	$(".A3").hide(); 
	$("#A1, #A2, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
	$("#TESTO_BASE").toggle();	
});  
			

$("#A4").hover(function(){
         //.mostra
         $("#Aquattro").toggle();
		 $("#TESTO_BASE").hide();
		 $(".A4").toggle(); 
$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
			$(".A4").hide();
	 $("#TESTO_BASE").toggle();	
	$("#Aquattro").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});  
		
$("#A5").hover(function(){
         //.mostra
         $("#Acinque").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Acinque").hide(); 			
	$("#A1, #A2, #A3, #A4, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});  
	
		
$("#A6").hover(function(){
         //.mostra
         $("#Asei").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A5, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Asei").hide(); 			
	$("#A1, #A2, #A3, #Aa, #A5, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});  
	
		
$("#A7").hover(function(){
         //.mostra
         $("#Asette").toggle();
		 $("#TESTO_BASE").hide();
		 $(".A7").toggle(); 
$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	$(".A7").hide();
	 $("#TESTO_BASE").toggle();	
	$("#Asette").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});  
			
		
$("#A8").hover(function(){
         //.mostra
         $("#Aotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A11, #A9, #A10, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aotto").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A11, #A9, #A10, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});			   
			   
	
$("#A9").hover(function(){
         //.mostra
         $("#Anove").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Anove").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});		   
	
$("#A10").hover(function(){
         //.mostra
         $("#Adieci").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Adieci").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});			
		
	
$("#A11").hover(function(){
         //.mostra
         $("#Aundici").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aundici").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});					
 
$("#A12").hover(function(){
         //.mostra
         $("#Adodici").toggle();
		 $("#TESTO_BASE").hide();
		$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Adodici").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});				
			
 

$("#A13").hover(function(){
         //.mostra
         $("#Atredici").toggle();
		 $("#TESTO_BASE").hide();
		$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A12, #A11, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atredici").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});				
			

$("#A14").hover(function(){
         //.mostra
         $("#Aquattordici").toggle();
		 $("#TESTO_BASE").hide();
		$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aquattordici").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});				
		
$("#A15").hover(function(){
         //.mostra
         $("#Aquindici").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aquindici").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});				
		
$("#A16").hover(function(){
         //.mostra
         $("#Asedici").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Asedici").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});				
		
$("#A17").hover(function(){
         //.mostra
         $("#Adiciasette").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Adiciasette").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});				
		
$("#A18").hover(function(){
         //.mostra
         $("#Adiciotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Adiciotto").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});		
	
$("#A19").hover(function(){
         //.mostra
         $("#Adiciannove").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Adiciannove").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
	
$("#A20").hover(function(){
         //.mostra
         $("#Aventi").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventi").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A21").hover(function(){
         //.mostra
         $("#Aventuno").toggle();
		 $("#TESTO_BASE").hide(); 
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventuno").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
	
$("#A22").hover(function(){
         //.mostra
         $("#Aventidue").toggle();
		 $("#TESTO_BASE").hide(); 
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventidue").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
 
$("#A23").hover(function(){
         //.mostra
         $("#Aventitre").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventitre").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
 

$("#A24").hover(function(){
         //.mostra
         $("#Aventiquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventiquattro").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
			

$("#A25").hover(function(){
         //.mostra
         $("#Aventicinque").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventicinque").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A26").hover(function(){
         //.mostra
         $("#Aventisei").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventisei").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A27").hover(function(){
         //.mostra
         $("#Aventisette").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventisette").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A28").hover(function(){
         //.mostra
         $("#Aventotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventotto").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A29, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A29").hover(function(){
         //.mostra
         $("#Aventinove").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Aventinove").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A30, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
	
$("#A30").hover(function(){
         //.mostra
         $("#Atrenta").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A39, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrenta").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A31, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
	
$("#A31").hover(function(){
         //.mostra
         $("#Atrentuno").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A32, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrentuno").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A32, #A33, #A34, #A35, #A36").css("opacity",1);
});
	

$("#A32").hover(function(){
         //.mostra
         $("#Atrentadue").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A33, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrentadue").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A33, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A33").hover(function(){
         //.mostra
         $("#Atrentatre").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A34, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrentatre").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A34, #A35, #A36").css("opacity",1);
});
		
$("#A34").hover(function(){
         //.mostra
         $("#Atrentaquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A35, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrentaquattro").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A35, #A36").css("opacity",1);
});
		
$("#A35").hover(function(){
         //.mostra
         $("#Atrentacinque").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A36").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrentacinque").hide(); 			
	$("#A1, #A2, #A3, #A5, #A6, #A4, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A36").css("opacity",1);
});
	
$("#A36").hover(function(){
         //.mostra
         $("#Atrentasei").toggle();
		 $("#TESTO_BASE").hide();
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35").css("opacity",0.3);	
}, 
				
	function() { $("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Atrentasei").hide(); 			
	$("#A1, #A2, #A3, #A4, #A5, #A6, #A7, #A8, #A9, #A10, #A11, #A12, #A13, #A14, #A15, #A16, #A17, #A18, #A19, #A20, #A21, #A22, #A23, #A24, #A25, #A26, #A27, #A28, #A29, #A30, #A31, #A32, #A33, #A34, #A35").css("opacity",1);
});
		
// IN FAVOR CATEGORY // 
		
$("#F1").hover(function(){
         //.mostra
         $("#Funo").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Funo").hide(); 			
	$("#F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});  
 
$("#F2").hover(function(){
         //.mostra
         $("#Fdue").toggle();
		 $("#TESTO_BASE").hide();
		 $(".F2").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fdue").hide(); 	
	$(".F2").hide();			
	$("#F1, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
 

$("#F3").hover(function(){
         //.mostra
         $("#Ftre").toggle();
		 $("#TESTO_BASE").hide();
		 $(".F3").toggle();  
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Ftre").hide();
	$(".F3").hide(); 			
	$("#F1, #F2, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
			

$("#F4").hover(function(){
         //.mostra
         $("#Fquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fquattro").hide(); 			
	$("#F1, #F2, #F3, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});  
		
$("#F5").hover(function(){
         //.mostra
         $("#Fcinque").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fcinque").hide(); 			
	$("#F1, #F2, #F3, #F4, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});  
		
$("#F6").hover(function(){
         //.mostra
         $("#Fsei").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fsei").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F7").hover(function(){
         //.mostra
         $("#Fsette").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fsette").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F8").hover(function(){
         //.mostra
         $("#Fotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fotto").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F9").hover(function(){
         //.mostra
         $("#Fnove").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fnove").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F10").hover(function(){
         //.mostra
         $("#Fdieci").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fdieci").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F11").hover(function(){
         //.mostra
         $("#Fundici").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fundici").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
 
$("#F12").hover(function(){
         //.mostra
         $("#Fdodici").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fdodici").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
 

$("#F13").hover(function(){
         //.mostra
         $("#Ftredici").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Ftredici").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
			

$("#F14").hover(function(){
         //.mostra
         $("#Fquattordici").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Fquattordici").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F15").hover(function(){
         //.mostra
         $("#Fquindici").toggle();
		 $("#TESTO_BASE").hide();
		 $(".F15").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$(".F15").hide(); 			
	$("#Fquindici").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F16").hover(function(){
         //.mostra
         $("#Fsedici").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fsedici").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F17").hover(function(){
         //.mostra
         $("#Fdiciasette").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fdiciasette").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F18").hover(function(){
         //.mostra
         $("#Fdiciotto").toggle();
		 $("#TESTO_BASE").hide();
		 $(".F18").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fdiciotto").hide(); 
	$(".F18").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F19").hover(function(){
         //.mostra
         $("#Fdiciannove").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fdiciannove").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F20").hover(function(){
         //.mostra
         $("#Fventi").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fventi").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F21").hover(function(){
         //.mostra
         $("#Fventuno").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fventuno").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F22").hover(function(){
         //.mostra
         $("#Fventidue").toggle();
		 $("#TESTO_BASE").hide();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fventidue").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
 
$("#F23").hover(function(){
         //.mostra
         $("#Fventitre").toggle();
		 $("#TESTO_BASE").hide();
		 $(".F23").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$(".F23").toggle();
	$("#Fventitre").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
 

$("#F24").hover(function(){
         //.mostra
         $("#Fventiquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Fventiquattro").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F25, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
			

$("#F25").hover(function(){
         //.mostra
         $("#Fventicinque").toggle();
		 $("#TESTO_BASE").hide();
		 $(".F25").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$(".F25").hide(); 			
	$("#Fventicinque").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F26, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F26").hover(function(){
         //.mostra
         $("#Fventisei").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Fventisei").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F27, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F27").hover(function(){
         //.mostra
         $("#Fventisette").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F28, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Fventisette").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F28, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F28").hover(function(){
         //.mostra
         $("#Fventotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F29, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Fventotto").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F29, #F30, #F31, #F32").css("opacity",1);
});
		
$("#F29").hover(function(){
         //.mostra
         $("#Fventinove").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F30, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Fventinove").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F30, #F31, #F32").css("opacity",1);
});
	
$("#F30").hover(function(){
         //.mostra
         $("#Ftrenta").toggle();
		 $("#TESTO_BASE").hide();
			$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F31, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Ftrenta").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F31, #F32").css("opacity",1);
});
	
$("#F31").hover(function(){
         //.mostra
         $("#Ftrentuno").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F32").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Ftrentuno").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F30, #F32").css("opacity",1);
});

$("#F32").hover(function(){
         //.mostra
         $("#Ftrentadue").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#IRONIC").css("opacity",0.3);	
		$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F31, #F30").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#IRONIC").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Ftrentadue").hide(); 			
	$("#F1, #F2, #F3, #F4, #F5, #F6, #F7, #F8, #F9, #F10, #F11, #F12, #F13, #F14, #F15, #F16, #F17, #F18, #F19, #F20, #F21, #F22, #F23, #F24, #F25, #F26, #F27, #F28, #F29, #F31, #F30").css("opacity",1);
});
	
// IRONIC // 
		
$("#I1").hover(function(){
         //.mostra
         $("#Iuno").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I1").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();
	 $(".I1").hide(); 			
	$("#Iuno").hide(); 			
	$("#I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
 
$("#I2").hover(function(){
         //.mostra
         $("#Idue").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I2").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I31, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();
	 $(".I2").hide(); 			
	$("#Idue").hide(); 			
	$("#I1, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
 

$("#I3").hover(function(){
         //.mostra
         $("#Itre").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I3").toggle(); 
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();
	 $(".I3").hide(); 			
	$("#Itre").hide(); 			
	$("#I1, #I2, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
			

$("#I4").hover(function(){
         //.mostra
         $("#Iquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Iquattro").hide(); 			
	$("#I1, #I2, #I3, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I5").hover(function(){
         //.mostra
         $("#Icinque").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Icinque").hide(); 			
	$("#I1, #I2, #I3, #I4, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I6").hover(function(){
         //.mostra
         $("#Isei").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I6").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	 $(".I6").hide();			
	$("#Isei").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I7").hover(function(){
         //.mostra
         $("#Isette").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I7").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	 $(".I7").hide();			
	$("#Isette").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I8").hover(function(){
         //.mostra
         $("#Iotto").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();				
	$("#Iotto").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I9").hover(function(){
         //.mostra
         $("#Inove").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I9").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();
	 $(".I9").hide();			
	$("#Inove").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I10").hover(function(){
         //.mostra
         $("#Idieci").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I10").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I31, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();
	 $(".I10").hide();			
	$("#Idieci").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I11").hover(function(){
         //.mostra
         $("#Iundici").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I11").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();
	 $(".I11").hide();			
	$("#Iundici").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
 
$("#I12").hover(function(){
         //.mostra
         $("#Idodici").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Idodici").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
 

$("#I13").hover(function(){
         //.mostra
         $("#Itredici").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Itredici").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
			

$("#I14").hover(function(){
         //.mostra
         $("#Iquattordici").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Iquattordici").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I15").hover(function(){
         //.mostra
         $("#Iquindici").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I15").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$(".I15").hide();
	$("#Iquindici").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I16").hover(function(){
         //.mostra
         $("#Isedici").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I16").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$(".I16").hide();
	$("#Isedici").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I17").hover(function(){
         //.mostra
         $("#Idiciasette").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$("#Idiciasette").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I18").hover(function(){
         //.mostra
         $("#Idiciotto").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I18").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
	$(".I18").hide();			
	$("#Idiciotto").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I19").hover(function(){
         //.mostra
         $("#Idiciannove").toggle();
		 $("#TESTO_BASE").hide()
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();		
	$("#Idiciannove").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I20").hover(function(){
         //.mostra
         $("#Iventi").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I20").toggle();
	$("#AGAINST").css("opacity",0.3);
	$("#ANNOYED").css("opacity",0.3);
	$("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	 $("#TESTO_BASE").toggle();	
				 $(".I20").hide();
	$("#Iventi").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I21").hover(function(){
         //.mostra
         $("#Iventuno").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I21").toggle();
	 $("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	$(".I21").hide();
	$("#Iventuno").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I22").hover(function(){
         //.mostra
         $("#Iventidue").toggle();
		 $("#TESTO_BASE").hide();
	 $("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	$("#Iventidue").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
 
$("#I23").hover(function(){
         //.mostra
         $("#Iventitre").toggle();
		 $("#TESTO_BASE").hide();
	 $("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	$("#Iventitre").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
 

$("#I24").hover(function(){
         //.mostra
         $("#Iventiquattro").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I24").toggle();
	 $("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I24").hide();			
	$("#Iventiquattro").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
			

$("#I25").hover(function(){
         //.mostra
         $("#Iventicinque").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I25").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I25").hide();			
	$("#Iventicinque").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I26").hover(function(){
         //.mostra
         $("#Iventisei").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I26").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I26").hide();			
	$("#Iventisei").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I27, #I28, #I29, #I31, #I30, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I27").hover(function(){
         //.mostra
         $("#Iventisette").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I27").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I28, #I29, #I31, #I30, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I27").hide();			
	$("#Iventisette").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I28, #I29, #I31, #I30,#I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I28").hover(function(){
         //.mostra
         $("#Iventotto").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I28").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I28").hide();			
	$("#Iventotto").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I29").hover(function(){
         //.mostra
         $("#Iventinove").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I29").toggle();
		$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I29").hide();			
	$("#Iventinove").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I30").hover(function(){
         //.mostra
         $("#Itrenta").toggle();
		 $("#TESTO_BASE").hide();
		$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I31, #I29, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();				
	$("#Itrenta").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I31").hover(function(){
         //.mostra
         $("#Itrentuno").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I31").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I30, #I29, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();
				$(".I31").hide();
	$("#Itrentuno").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});

$("#I32").hover(function(){
         //.mostra
         $("#Itrentadue").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I32").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I31, #I29, #I30, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();
				$(".I32").hide();
	$("#Itrentadue").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I31, #I30, #I33, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I33").hover(function(){
         //.mostra
         $("#Itrentatre").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();
	$("#Itrentatre").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I34, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I34").hover(function(){
         //.mostra
         $("#Itrentaquattro").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();
	$("#Itrentaquattro").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I35, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I35").hover(function(){
         //.mostra
         $("#Itrentacinque").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I35").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I36, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();
	 $(".I35").hide();			
	$("#Itrentacinque").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I36, #I37, #I38, #I39, #I40").css("opacity",1);
});
	
$("#I36").hover(function(){
         //.mostra
         $("#Itrentasei").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I37, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();		
	$("#Itrentasei").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I37, #I38, #I39, #I40").css("opacity",1);
});

$("#I37").hover(function(){
         //.mostra
         $("#Itrentasette").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I38, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();		
	$("#Itrentasette").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I38, #I39, #I40").css("opacity",1);
});
		
$("#I38").hover(function(){
         //.mostra
         $("#Itrentotto").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I38").toggle();
	 $("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I39, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();
	$(".I38").hide();			
	$("#Itrentotto").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I39, #I40").css("opacity",1);
});
		
$("#I39").hover(function(){
         //.mostra
         $("#Itrentanove").toggle();
		 $("#TESTO_BASE").hide();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I40").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();		
	$("#Itrentanove").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I40").css("opacity",1);
});
	
$("#I40").hover(function(){
         //.mostra
         $("#Iquaranta").toggle();
		 $("#TESTO_BASE").hide();
		 $(".I40").toggle();
	$("#AGAINST").css("opacity",0.3);
	 $("#ANNOYED").css("opacity",0.3);
	 $("#FAVOR").css("opacity",0.3);	
		$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39").css("opacity",0.3);	
}, 
				
	function() { $("#AGAINST").css("opacity",1);
	$("#ANNOYED").css("opacity",1);
	$("#FAVOR").css("opacity",1);
	$("#TESTO_BASE").toggle();	
	 $(".I40").hide();			
	$("#Iquaranta").hide(); 			
	$("#I1, #I2, #I3, #I4, #I5, #I6, #I7, #I8, #I9, #I10, #I11, #I12, #I13, #I14, #I15, #I16, #I17, #I18, #I19, #I20, #I21, #I22, #I23, #I24, #I25, #I26, #I27, #I28, #I29, #I30, #I31, #I32, #I33, #I34, #I35, #I36, #I37, #I38, #I39").css("opacity",1);
});
		
	
	});			
	




		
	





    
  // PROTOCOL O4
    
    $(document).ready(function(){
	
	console.log("Hello!");
    $("#big_1, #big_2, #big_3, #big_4, #big_5, #big_6, #big_7, #big_8, #big_9, #big_10, #big_11, #big_12, #big_13, #big_14, #big_15, #big_16, #big_17, #big_18, #big_19, #big_20, #big_21, #big_22, #big_23, #big_24, #big_25, #big_26, #big_27, #big_28, #big_29, #big_30, #big_31, #big_32, #big_33, #big_34, #big_35, #big_36, #big_37, #big_38, #big_39, #big_40, #big_41, #big_42, #big_43, #big_44, #big_45, #big_46, #big_47, #big_48, #big_49, #big_50, #big_51, #big_52, #big_53, #big_54, #big_54, #big_55, #big_56, #big_57, #big_58, #big_59, #big_60, #big_61, #big_62, #big_63, #big_64, #big_65, #big_66, #big_67, #big_68, #big_69, #big_70, #big_71, #big_72, #big_73, #big_74, #big_75, #big_76, #big_77, #big_78,#big_79,#big_80,#big_81,#big_82,#big_83,#big_84,#big_85,#big_86,#big_87,#big_88,#big_89,#big_90,#big_91,#big_92,#big_93,#big_94,#big_95,#big_96,#big_97,#big_98,#big_99,#big_100,#big_101,#big_102,#big_103,#big_104,#big_105,#big_106,#big_107,#big_108,#big_109,#big_110,#big_111,#big_112,#big_113,#big_114,#big_115,#big_116,       #big_117,#big_118,#big_119,#big_120, #big_121, #big_122, #big_123, #big_124, #big_125, #big_126, #big_127, #big_128, #big_129, #big_130, #big_131, #big_132, #big_133, #big_134, #big_135, #big_136, #big_137, #big_138, #big_139, #big_140, #big_141, #big_142, #big_143, #big_144, #big_145, #big_146, #big_147, #big_148, #big_149, #big_150, #big_151, #big_152, #big_153, #big_154, #big_154, #big_155, #big_156, #big_157, #big_158, #big_159, #big_160, #big_161, #big_162, #big_163, #big_164, #big_165, #big_166, #big_167, #big_168, #big_169, #big_170, #big_171, #big_172, #big_173, #big_174, #big_175, #big_176, #big_177, #big_178,#big_179,#big_180,#big_181,#big_182,#big_183,#big_184,#big_185,#big_186,#big_187,#big_188,#big_189,#big_190,#big_191,#big_192,#big_193,#big_194,#big_195,#big_196,#big_197,#big_198,#big_199,#big_200, #big_201, #big_202, #big_203, #big_204, #big_205, #big_206, #big_207, #big_208, #big_209, #big_210, #big_211, #big_212, #big_213, #big_214, #big_215, #big_216, #big_217, #big_218, #big_219, #big_220, #big_221, #big_222, #big_223, #big_224, #big_225, #big_226, #big_227, #big_228, #big_229, #big_230, #big_231, #big_232, #big_233, #big_234, #big_235, #big_236, #big_237, #big_238, #big_239 ").hide();
    

	$("#1").hover(function(){$("#big_1").show();},
    function(){$("#big_1").hide();});
    
    $("#2").hover(function(){$("#big_2").show();}, function(){$("#big_2").hide();});
    
    $("#3").hover(function(){$("#big_3").show();}, function(){$("#big_3").hide();});
    
    $("#4").hover(function(){$("#big_4").show();}, function(){$("#big_4").hide();});
    
    $("#5").hover(function(){$("#big_5").show();}, function(){$("#big_5").hide();});
    
    $("#6").hover(function(){$("#big_6").show();}, function(){$("#big_6").hide();});
    
    $("#7").hover(function(){$("#big_7").show();}, function(){$("#big_7").hide();});
     
    $("#8").hover(function(){$("#big_8").show();},function(){$("#big_8").hide();});
    
     $("#9").hover(function(){$("#big_9").show();},function(){$("#big_9").hide();});
    
     $("#10").hover(function(){$("#big_10").show();},function(){$("#big_10").hide();});
    
     $("#11").hover(function(){$("#big_11").show();},function(){$("#big_11").hide();});
    
     $("#12").hover(function(){$("#big_12").show();},function(){$("#big_12").hide();});
    
     $("#13").hover(function(){$("#big_13").show();},function(){$("#big_13").hide();});
    
     $("#14").hover(function(){$("#big_14").show();},function(){$("#big_14").hide();});
    
     $("#15").hover(function(){$("#big_15").show();},function(){$("#big_15").hide();});
    
     $("#16").hover(function(){$("#big_16").show();},function(){$("#big_16").hide();});
    
     $("#17").hover(function(){$("#big_17").show();},function(){$("#big_17").hide();});
    
     $("#18").hover(function(){$("#big_18").show();},function(){$("#big_18").hide();});
    
     $("#19").hover(function(){$("#big_19").show();},function(){$("#big_19").hide();});
    
     $("#20").hover(function(){$("#big_20").show();}, function(){$("#big_20").hide();});
    
    
     $("#21").hover(function(){$("#big_21").show();},function(){$("#big_21").hide();});
    
    
     $("#22").hover(function(){$("#big_22").show();},function(){$("#big_22").hide();});
    
    
     $("#23").hover(function(){$("#big_23").show();},function(){$("#big_23").hide();});
    
    
     $("#24").hover(function(){$("#big_24").show();},function(){$("#big_24").hide();});
    
     $("#25").hover(function(){$("#big_25").show();},function(){$("#big_25").hide();});
    
     $("#26").hover(function(){$("#big_26").show();},function(){$("#big_26").hide();});
    
     $("#27").hover(function(){$("#big_27").show();},function(){$("#big_27").hide();});
    
     $("#28").hover(function(){$("#big_28").show();},function(){$("#big_28").hide();});
    
     $("#30").hover(function(){$("#big_30").show();},function(){$("#big_30").hide();});
    
    $("#31").hover(function(){$("#big_31").show();},function(){$("#big_31").hide();});
    
    $("#32").hover(function(){$("#big_32").show();},function(){$("#big_32").hide();});
    
    $("#33").hover(function(){$("#big_33").show();},function(){$("#big_33").hide();});
    
    $("#34").hover(function(){$("#big_34").show();},function(){$("#big_34").hide();});
    
    $("#35").hover(function(){$("#big_35").show();},function(){$("#big_35").hide();});
    
    $("#36").hover(function(){$("#big_36").show();},function(){$("#big_36").hide();});
    
    
    $("#37").hover(function(){$("#big_37").show();},function(){$("#big_37").hide();});
    
    
    $("#38").hover(function(){$("#big_38").show();},function(){$("#big_38").hide();});
    
    $("#39").hover(function(){$("#big_39").show();},function(){$("#big_39").hide();});
    
    $("#40").hover(function(){$("#big_40").show();},function(){$("#big_40").hide();});
    
    
    $("#41").hover(function(){$("#big_41").show();},function(){$("#big_41").hide();});
    
    $("#42").hover(function(){$("#big_42").show();},function(){$("#big_42").hide();});
    
     $("#43").hover(function(){$("#big_43").show();},function(){$("#big_43").hide();});
    
    $("#44").hover(function(){$("#big_44").show();},function(){$("#big_44").hide();});
    
    $("#45").hover(function(){$("#big_45").show();},function(){$("#big_45").hide();});
    
    $("#46").hover(function(){$("#big_46").show();},function(){$("#big_46").hide();});
    
    $("#47").hover(function(){$("#big_47").show();},function(){$("#big_47").hide();});
    
    $("#48").hover(function(){$("#big_48").show();},function(){$("#big_48").hide();});
    
    $("#49").hover(function(){$("#big_49").show();},function(){$("#big_49").hide();});
    
    
    $("#50").hover(function(){$("#big_50").show();},function(){$("#big_50").hide();});
    
    
    $("#51").hover(function(){$("#big_51").show();},function(){$("#big_51").hide();});
    
    $("#52").hover(function(){$("#big_52").show();},function(){$("#big_52").hide();});
    
    $("#53").hover(function(){$("#big_53").show();},function(){$("#big_53").hide();});
    
    
    $("#54").hover(function(){$("#big_54").show();},function(){$("#big_54").hide();});
    
    $("#55").hover(function(){$("#big_55").show();},function(){$("#big_55").hide();});
    
     $("#56").hover(function(){$("#big_56").show();},function(){$("#big_56").hide();});
    
    $("#57").hover(function(){$("#big_57").show();},function(){$("#big_57").hide();});
    
    $("#58").hover(function(){$("#big_58").show();},function(){$("#big_58").hide();});
    
    $("#59").hover(function(){$("#big_59").show();},function(){$("#big_59").hide();});
    
    $("#60").hover(function(){$("#big_60").show();},function(){$("#big_60").hide();});
    
    $("#61").hover(function(){$("#big_61").show();},function(){$("#big_61").hide();});
    
    $("#62").hover(function(){$("#big_62").show();},function(){$("#big_62").hide();});
    
    
    $("#63").hover(function(){$("#big_63").show();},function(){$("#big_63").hide();});
    
    
    $("#64").hover(function(){$("#big_64").show();},function(){$("#big_64").hide();});
    
    $("#65").hover(function(){$("#big_65").show();},function(){$("#big_65").hide();});
    
    $("#66").hover(function(){$("#big_66").show();},function(){$("#big_66").hide();});
    
    
    $("#67").hover(function(){$("#big_67").show();},function(){$("#big_67").hide();});
    
    $("#68").hover(function(){$("#big_68").show();},function(){$("#big_68").hide();});
    
     $("#69").hover(function(){$("#big_69").show();},function(){$("#big_69").hide();});
    
    $("#70").hover(function(){$("#big_70").show();},function(){$("#big_70").hide();});
    
    $("#71").hover(function(){$("#big_71").show();},function(){$("#big_71").hide();});
    
    $("#72").hover(function(){$("#big_72").show();},function(){$("#big_72").hide();});
    
    $("#73").hover(function(){$("#big_73").show();},function(){$("#big_73").hide();});
    
    $("#74").hover(function(){$("#big_74").show();},function(){$("#big_74").hide();});
    
    $("#75").hover(function(){$("#big_75").show();},function(){$("#big_75").hide();});
    
    
    $("#76").hover(function(){$("#big_76").show();},function(){$("#big_76").hide();});
    
    
    $("#77").hover(function(){$("#big_77").show();},function(){$("#big_77").hide();});
    
    $("#78").hover(function(){$("#big_78").show();},function(){$("#big_78").hide();});
    
    $("#79").hover(function(){$("#big_79").show();},function(){$("#big_79").hide();});
    
    
    $("#80").hover(function(){$("#big_80").show();},function(){$("#big_80").hide();});
    
    $("#81").hover(function(){$("#big_81").show();},function(){$("#big_81").hide();});
    

    
     $("#82").hover(function(){$("#big_82").show();},function(){$("#big_82").hide();});
    
    $("#83").hover(function(){$("#big_83").show();},function(){$("#big_83").hide();});
    
    $("#84").hover(function(){$("#big_84").show();},function(){$("#big_84").hide();});
    
    $("#85").hover(function(){$("#big_85").show();},function(){$("#big_85").hide();});
    
    $("#86").hover(function(){$("#big_86").show();},function(){$("#big_86").hide();});
    
    $("#87").hover(function(){$("#big_87").show();},function(){$("#big_87").hide();});
    
    $("#88").hover(function(){$("#big_88").show();},function(){$("#big_88").hide();});
    
    
    $("#89").hover(function(){$("#big_89").show();},function(){$("#big_89").hide();});
    
    
    $("#90").hover(function(){$("#big_90").show();},function(){$("#big_90").hide();});
    
    $("#91").hover(function(){$("#big_91").show();},function(){$("#big_91").hide();});
    
    $("#92").hover(function(){$("#big_92").show();},function(){$("#big_92").hide();});
    
    
    $("#93").hover(function(){$("#big_93").show();},function(){$("#big_93").hide();});
    
    $("#94").hover(function(){$("#big_94").show();},function(){$("#big_94").hide();});
    
    
     $("#95").hover(function(){$("#big_95").show();},function(){$("#big_95").hide();});
    
    $("#96").hover(function(){$("#big_96").show();},function(){$("#big_96").hide();});
    
    $("#97").hover(function(){$("#big_97").show();},function(){$("#big_97").hide();});
    
    $("#98").hover(function(){$("#big_98").show();},function(){$("#big_98").hide();});
    
    $("#99").hover(function(){$("#big_99").show();},function(){$("#big_99").hide();});
    
    $("#100").hover(function(){$("#big_100").show();},function(){$("#big_100").hide();});
    
    
    
    $("#101").hover(function(){$("#big_101").show();},function(){$("#big_101").hide();});
    $("#102").hover(function(){$("#big_102").show();},function(){$("#big_102").hide();});
    $("#103").hover(function(){$("#big_103").show();},function(){$("#big_103").hide();});
    $("#104").hover(function(){$("#big_104").show();},function(){$("#big_104").hide();});
    $("#105").hover(function(){$("#big_105").show();},function(){$("#big_105").hide();});
    $("#106").hover(function(){$("#big_106").show();},function(){$("#big_106").hide();});
    $("#107").hover(function(){$("#big_107").show();},function(){$("#big_107").hide();});
    $("#108").hover(function(){$("#big_108").show();},function(){$("#big_108").hide();});
    $("#109").hover(function(){$("#big_109").show();},function(){$("#big_109").hide();});
    $("#110").hover(function(){$("#big_110").show();},function(){$("#big_110").hide();});
    $("#111").hover(function(){$("#big_111").show();},function(){$("#big_111").hide();});
    $("#112").hover(function(){$("#big_112").show();},function(){$("#big_112").hide();});
    $("#113").hover(function(){$("#big_113").show();},function(){$("#big_113").hide();});
    $("#114").hover(function(){$("#big_114").show();},function(){$("#big_114").hide();});
    $("#115").hover(function(){$("#big_115").show();},function(){$("#big_115").hide();});
    
    
    
     $("#116").hover(function(){$("#big_116").show();},function(){$("#big_116").hide();});
    
     $("#117").hover(function(){$("#big_117").show();},function(){$("#big_117").hide();});
    
     $("#118").hover(function(){$("#big_118").show();},function(){$("#big_118").hide();});
    
     $("#119").hover(function(){$("#big_119").show();},function(){$("#big_119").hide();});
    
     $("#120").hover(function(){$("#big_120").show();}, function(){$("#big_120").hide();});
    
    
     $("#121").hover(function(){$("#big_121").show();},function(){$("#big_121").hide();});
    
    
     $("#122").hover(function(){$("#big_122").show();},function(){$("#big_122").hide();});
    
    
     $("#123").hover(function(){$("#big_123").show();},function(){$("#big_123").hide();});
    
    
     $("#124").hover(function(){$("#big_124").show();},function(){$("#big_124").hide();});
    
     $("#125").hover(function(){$("#big_125").show();},function(){$("#big_125").hide();});
    
     $("#126").hover(function(){$("#big_126").show();},function(){$("#big_126").hide();});
    
     $("#127").hover(function(){$("#big_127").show();},function(){$("#big_127").hide();});
    
     $("#128").hover(function(){$("#big_128").show();},function(){$("#big_128").hide();});
     $("#129").hover(function(){$("#big_129").show();},function(){$("#big_129").hide();});
    
     $("#130").hover(function(){$("#big_130").show();},function(){$("#big_130").hide();});
    
    $("#131").hover(function(){$("#big_131").show();},function(){$("#big_131").hide();});
    
    $("#132").hover(function(){$("#big_132").show();},function(){$("#big_132").hide();});
    
    $("#133").hover(function(){$("#big_133").show();},function(){$("#big_133").hide();});
    
    $("#134").hover(function(){$("#big_134").show();},function(){$("#big_134").hide();});
    
    $("#135").hover(function(){$("#big_135").show();},function(){$("#big_135").hide();});
    
    $("#136").hover(function(){$("#big_136").show();},function(){$("#big_136").hide();});
    
    
    $("#137").hover(function(){$("#big_137").show();},function(){$("#big_137").hide();});
    
    
    $("#138").hover(function(){$("#big_138").show();},function(){$("#big_138").hide();});
    
    $("#139").hover(function(){$("#big_139").show();},function(){$("#big_139").hide();});
    
    $("#140").hover(function(){$("#big_140").show();},function(){$("#big_140").hide();});
    
    
    $("#141").hover(function(){$("#big_141").show();},function(){$("#big_141").hide();});
    
    $("#142").hover(function(){$("#big_142").show();},function(){$("#big_142").hide();});
    
     $("#143").hover(function(){$("#big_143").show();},function(){$("#big_143").hide();});
    
    $("#144").hover(function(){$("#big_144").show();},function(){$("#big_144").hide();});
    
    $("#145").hover(function(){$("#big_145").show();},function(){$("#big_145").hide();});
    
    $("#146").hover(function(){$("#big_146").show();},function(){$("#big_146").hide();});
    
    $("#147").hover(function(){$("#big_147").show();},function(){$("#big_147").hide();});
    
    $("#148").hover(function(){$("#big_148").show();},function(){$("#big_148").hide();});
    
    $("#149").hover(function(){$("#big_149").show();},function(){$("#big_149").hide();});
    
    
    $("#150").hover(function(){$("#big_150").show();},function(){$("#big_150").hide();});
    
    
    $("#151").hover(function(){$("#big_151").show();},function(){$("#big_151").hide();});
    
    $("#152").hover(function(){$("#big_152").show();},function(){$("#big_152").hide();});
    
    $("#153").hover(function(){$("#big_153").show();},function(){$("#big_153").hide();});
    
    
    $("#154").hover(function(){$("#big_154").show();},function(){$("#big_154").hide();});
    
    $("#155").hover(function(){$("#big_155").show();},function(){$("#big_155").hide();});
    
     $("#156").hover(function(){$("#big_156").show();},function(){$("#big_156").hide();});
    
    $("#157").hover(function(){$("#big_157").show();},function(){$("#big_157").hide();});
    
    $("#158").hover(function(){$("#big_158").show();},function(){$("#big_158").hide();});
    
    $("#159").hover(function(){$("#big_159").show();},function(){$("#big_159").hide();});
    
    $("#160").hover(function(){$("#big_160").show();},function(){$("#big_160").hide();});
    
    $("#161").hover(function(){$("#big_161").show();},function(){$("#big_161").hide();});
    
    $("#162").hover(function(){$("#big_162").show();},function(){$("#big_162").hide();});
    
    
    $("#163").hover(function(){$("#big_163").show();},function(){$("#big_163").hide();});
    
    
    $("#164").hover(function(){$("#big_164").show();},function(){$("#big_164").hide();});
    
    $("#165").hover(function(){$("#big_165").show();},function(){$("#big_165").hide();});
    
    $("#166").hover(function(){$("#big_166").show();},function(){$("#big_166").hide();});
    
    
    $("#167").hover(function(){$("#big_167").show();},function(){$("#big_167").hide();});
    
    $("#168").hover(function(){$("#big_168").show();},function(){$("#big_168").hide();});
    
     $("#169").hover(function(){$("#big_169").show();},function(){$("#big_169").hide();});
    
    $("#170").hover(function(){$("#big_170").show();},function(){$("#big_170").hide();});
    
    $("#171").hover(function(){$("#big_171").show();},function(){$("#big_171").hide();});
    
    $("#172").hover(function(){$("#big_172").show();},function(){$("#big_172").hide();});
    
    $("#173").hover(function(){$("#big_173").show();},function(){$("#big_173").hide();});
    
    $("#174").hover(function(){$("#big_174").show();},function(){$("#big_174").hide();});
    
    $("#175").hover(function(){$("#big_175").show();},function(){$("#big_175").hide();});
    
    
    
   $("#176").hover(function(){$("#big_176").show();},function(){$("#big_176").hide();});
    
    
    $("#177").hover(function(){$("#big_177").show();},function(){$("#big_177").hide();});
    
    $("#178").hover(function(){$("#big_178").show();},function(){$("#big_178").hide();});
    
    $("#179").hover(function(){$("#big_179").show();},function(){$("#big_179").hide();});
    
    
    $("#180").hover(function(){$("#big_180").show();},function(){$("#big_180").hide();});
    
    $("#181").hover(function(){$("#big_181").show();},function(){$("#big_181").hide();});
    

    
     $("#182").hover(function(){$("#big_182").show();},function(){$("#big_182").hide();});
    
    $("#183").hover(function(){$("#big_183").show();},function(){$("#big_183").hide();});
    $("#184").hover(function(){$("#big_184").show();},function(){$("#big_184").hide();});
    
    
    
   $("#185").hover(function(){$("#big_185").show();},function(){$("#big_185").hide();});
    
    $("#186").hover(function(){$("#big_186").show();},function(){$("#big_186").hide();});
    
    $("#187").hover(function(){$("#big_187").show();},function(){$("#big_187").hide();});
    
    $("#188").hover(function(){$("#big_188").show();},function(){$("#big_188").hide();});
    
    
    $("#189").hover(function(){$("#big_189").show();},function(){$("#big_189").hide();});
    
    
    $("#190").hover(function(){$("#big_190").show();},function(){$("#big_190").hide();});
    
    $("#191").hover(function(){$("#big_191").show();},function(){$("#big_191").hide();});
    
    $("#192").hover(function(){$("#big_192").show();},function(){$("#big_192").hide();});
    
    
    $("#193").hover(function(){$("#big_193").show();},function(){$("#big_193").hide();});
    
    $("#194").hover(function(){$("#big_194").show();},function(){$("#big_194").hide();});
    $("#195").hover(function(){$("#big_195").show();},function(){$("#big_195").hide();});
    
    
     $("#196").hover(function(){$("#big_196").show();},function(){$("#big_196").hide();});
    
    $("#297").hover(function(){$("#big_197").show();},function(){$("#big_197").hide();});
    
    $("#197").hover(function(){$("#big_198").show();},function(){$("#big_198").hide();});
    
    $("#198").hover(function(){$("#big_199").show();},function(){$("#big_199").hide();});
    
    $("#199").hover(function(){$("#big_200").show();},function(){$("#big_200").hide();});
    $("#200").hover(function(){$("#big_201").show();},function(){$("#big_201").hide();});
    
    
    
    $("#201").hover(function(){$("#big_202").show();},function(){$("#big_202").hide();});
    $("#202").hover(function(){$("#big_203").show();},function(){$("#big_203").hide();});
    $("#203").hover(function(){$("#big_204").show();},function(){$("#big_204").hide();});
    $("#204").hover(function(){$("#big_205").show();},function(){$("#big_205").hide();});
    $("#205").hover(function(){$("#big_206").show();},function(){$("#big_206").hide();});
    $("#206").hover(function(){$("#big_207").show();},function(){$("#big_207").hide();});
    $("#207").hover(function(){$("#big_208").show();},function(){$("#big_208").hide();});
    $("#208").hover(function(){$("#big_209").show();},function(){$("#big_209").hide();});
    $("#209").hover(function(){$("#big_210").show();},function(){$("#big_210").hide();});
    $("#210").hover(function(){$("#big_211").show();},function(){$("#big_211").hide();});
    $("#211").hover(function(){$("#big_212").show();},function(){$("#big_212").hide();});
    $("#212").hover(function(){$("#big_213").show();},function(){$("#big_213").hide();});
    $("#213").hover(function(){$("#big_214").show();},function(){$("#big_214").hide();});
    $("#214").hover(function(){$("#big_215").show();},function(){$("#big_215").hide();});
    $("#215").hover(function(){$("#big_216").show();},function(){$("#big_216").hide();});
    
    
    
     $("#216").hover(function(){$("#big_217").show();},function(){$("#big_217").hide();});
    
     $("#217").hover(function(){$("#big_218").show();},function(){$("#big_218").hide();});
    
     $("#218").hover(function(){$("#big_219").show();},function(){$("#big_219").hide();});
    
     $("#219").hover(function(){$("#big_220").show();},function(){$("#big_220").hide();});
    
     $("#220").hover(function(){$("#big_221").show();}, function(){$("#big_221").hide();});
    
    
     $("#221").hover(function(){$("#big_222").show();},function(){$("#big_222").hide();});
    
    
     $("#222").hover(function(){$("#big_223").show();},function(){$("#big_223").hide();});
    
    
     $("#223").hover(function(){$("#big_224").show();},function(){$("#big_224").hide();});
    
    
     $("#224").hover(function(){$("#big_225").show();},function(){$("#big_225").hide();});
    
     $("#225").hover(function(){$("#big_226").show();},function(){$("#big_226").hide();});
    
     $("#226").hover(function(){$("#big_227").show();},function(){$("#big_227").hide();});
    
     $("#227").hover(function(){$("#big_228").show();},function(){$("#big_228").hide();});
    
     $("#228").hover(function(){$("#big_229").show();},function(){$("#big_229").hide();});
     $("#229").hover(function(){$("#big_230").show();},function(){$("#big_230").hide();});
    
     $("#230").hover(function(){$("#big_231").show();},function(){$("#big_231").hide();});
    
    $("#231").hover(function(){$("#big_232").show();},function(){$("#big_232").hide();});
    
    $("#232").hover(function(){$("#big_233").show();},function(){$("#big_233").hide();});
    
    $("#233").hover(function(){$("#big_234").show();},function(){$("#big_234").hide();});
    
    $("#234").hover(function(){$("#big_235").show();},function(){$("#big_235").hide();});
    
    $("#235").hover(function(){$("#big_236").show();},function(){$("#big_236").hide();});
    
    $("#236").hover(function(){$("#big_237").show();},function(){$("#big_237").hide();});
    
    
    $("#237").hover(function(){$("#big_238").show();},function(){$("#big_238").hide();});
    
    
    $("#238").hover(function(){$("#big_239").show();},function(){$("#big_239").hide();});
    
    $("#239").hover(function(){$("#big_239").show();},function(){$("#big_239").hide();});
    
   
})
    
  // PROTOCOL O3
    

    console.log("hello!");
    $("#Au, #Bu, #Cu, #Du, #Eu, #Fu, #Gu, #Hu").hide();
    $("#Ad, #Bd, #Cd, #Dd, #Ed, #Fd, #Gd, #Hd").hide();
    $(".gifdA, .gifdB, .gifdC, .gifdD, .gifdE, .gifdF, .gifdG, .gifdH").hide();
    $(".gifuA, .gifuB, .gifuC, .gifuD, .gifuE, .gifuF").hide();
    $("#arrotonda").hide();
    // .hover donna
     
    $("#E").hover(function() {
        $("#Ed").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdE").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Ed").hide();  
        $(".gifdE").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
        
    });
        
    $("#A").hover(function() {
        $("#Ad").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdA").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Ad").hide();
        $(".gifdA").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#B").hover(function() {
        $("#Bd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdB").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Bd").hide();
        $(".gifdB").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#C").hover(function() {
        $("#Cd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdC").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Cd").hide();
        $(".gifdC").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#D").hover(function() {
        $("#Dd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdD").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Dd").hide();
        $(".gifdD").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#F").hover(function() {
        $("#Fd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdF").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Fd").hide();
        $(".gifdF").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#G").hover(function() {
        $("#Gd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdG").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Gd").hide();
        $(".gifdG").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
        
    $("#H").hover(function() {
        $("#Hd").toggle();
        $("#MainD").css("opacity", 0.1);
        $(".gifdH").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainD").css("opacity", 1);
        $("#Hd").hide();
        $(".gifdH").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
        // .hover uomo
    
    $("#A_1_").hover(function() {
        $("#Au").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuA").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Au").hide();
        $(".gifuA").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#B_2_").hover(function() {
        $("#Bu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuB").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Bu").hide();
        $(".gifuB").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#C_2_").hover(function() {
        $("#Cu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuC").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Cu").hide();
        $(".gifuC").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#D_1_").hover(function() {
        $("#Du").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuD").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Du").hide();
        $(".gifuD").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#E_2_").hover(function() {
        $("#Eu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuE").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Eu").hide();
        $(".gifuE").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    $("#F_2_").hover(function() {
        $("#Fu").toggle();
        $("#MainU").css("opacity", 0.1);
        $(".gifuF").toggle();
        $("#riquadro").hide();
        $("#categorylabel").hide();
        $("#arrotonda").toggle();
        }, function() {
        $("#MainU").css("opacity", 1);
        $("#Fu").hide();
        $(".gifuF").hide();
        $("#riquadro").toggle();
        $("#categorylabel").toggle();
        $("#arrotonda").hide();
    });
    
    }); 




  // PROTOCOL O1

 $(document).ready(function() {
	console.log("ciao");
//.nascondere
    $("#snapchat").hide();
    $("#instagram").hide();
    $("#instapieno").hide();
    $("#snappieno").hide();
     
   
     
    $("#bottone_snap").click(function(){
         //.mostra
         $("#snapchat").toggle();
         $("#snappieno").toggle();
        //.nascondi
        $("#faceapp").hide();
         $("#instagram").hide();
        $("#instapieno").hide();
       $("#facepieno").hide();
        
     });
     
       $("#bottone_insta").click(function(){
         //.mostra
         $("#instagram").toggle();
         $("#instapieno").toggle();
        //.nascondi
        $("#faceapp").hide();
         $("#snapchat").hide();
        $("#snappieno").hide();
       $("#facepieno").hide();
        
     });
    
        $("#bottone_face").click(function(){
         //.mostra
         $("#faceapp").toggle();
         $("#facepieno").toggle();
        //.nascondi
        $("#instagram").hide();
         $("#snapchat").hide();
        $("#snappieno").hide();
       $("#instapieno").hide();
        
     });
     
   
  // PROTOCOL O5
     
     $(document).ready(function() {
    console.log("hello!");
    $("#photolabel, #healthlabel, #beautylabel, #videolabel, #personallabel").hide();
    $("#personal_x5F_off, #beauty_x5F_off, #video_x5F_off, #health_x5F_off, #photo_x5F_off").hide();
    
    
    //Photo Hover
        
    $("#photochart_2_, #photo_x5F_on").hover(function() {
        $("#health_x5F_on, #video_x5F_on, #personal_x5F_on, #beauty_x5F_on").hide();
        $("#beautychart_2_, #videochart_2_, #personalchart_2_, #healthchart_1_").css("opacity", 0.1);
        $("#photolabel").toggle();
        $("#health_x5F_off, #video_x5F_off, #personal_x5F_off, #beauty_x5F_off").toggle();
        //$("#Seeds_Label_1_").hide();
        }, function() {
        $("#health_x5F_on, #video_x5F_on, #personal_x5F_on, #beauty_x5F_on").toggle();
        $("#beautychart_2_, #videochart_2_, #personalchart_2_, #healthchart_1_").css("opacity", 1);
        $("#photolabel").hide();
        $("#health_x5F_off, #video_x5F_off, #personal_x5F_off, #beauty_x5F_off").hide();
        //$("#Seeds_Label_1_").toggle();
    });
    
    

    
    //Health Hover
    
        $("#healthchart_1_, #health_x5F_on").hover(function() {
        $("#photo_x5F_on, #video_x5F_on, #personal_x5F_on, #beauty_x5F_on").hide();
        $("#beautychart_2_, #videochart_2_, #personalchart_2_, #photochart_2_").css("opacity", 0.1);
        $("#healthlabel").toggle();
        $("#photo_x5F_off, #video_x5F_off, #personal_x5F_off, #beauty_x5F_off").toggle();
        }, function() {
        $("#photo_x5F_on, #video_x5F_on, #personal_x5F_on, #beauty_x5F_on").toggle();
        $("#beautychart_2_, #videochart_2_, #personalchart_2_, #photochart_2_").css("opacity", 1);
        $("#healthlabel").hide();
        $("#photo_x5F_off, #video_x5F_off, #personal_x5F_off, #beauty_x5F_off").hide();
    });
    
    
    
    
    //Beauty Hover
    
    $("#beautychart_2_, #beauty_x5F_on").hover(function() {
        $("#photo_x5F_on, #video_x5F_on, #personal_x5F_on, #health_x5F_on").hide();
        $("#healthchart_1_, #videochart_2_, #personalchart_2_, #photochart_2_").css("opacity", 0.1);
        $("#beautylabel").toggle();
        $("#Beauty_4_").hide();
        $("#photo_x5F_off, #video_x5F_off, #personal_x5F_off, #health_x5F_off").toggle();
        }, function() {
        $("#photo_x5F_on, #video_x5F_on, #personal_x5F_on, #health_x5F_on").toggle();
        $("#healthchart_1_, #videochart_2_, #personalchart_2_, #photochart_2_").css("opacity", 1);
        $("#beautylabel").hide();
        $("#Beauty_4_").toggle();
        $("#photo_x5F_off, #video_x5F_off, #personal_x5F_off, #health_x5F_off").hide();
    });
    
    
    
    
     //Video Player & Editor Hover
    
     $("#videochart_2_, #video_x5F_on").hover(function() {
        $("#photo_x5F_on, #beauty_x5F_on, #personal_x5F_on, #health_x5F_on").hide();
        $("#healthchart_1_, #beautychart_2_, #personalchart_2_, #photochart_2_").css("opacity", 0.1);
        $("#videolabel").toggle();
        $("#photo_x5F_off, #beauty_x5F_off, #personal_x5F_off, #health_x5F_off").toggle();
        }, function() {
        $("#photo_x5F_on, #beauty_x5F_on, #personal_x5F_on, #health_x5F_on").toggle();
        $("#beautychart_2_, #healthchart_1_, #personalchart_2_, #photochart_2_").css("opacity", 1);
        $("#videolabel").hide();
        $("#photo_x5F_off, #beauty_x5F_off, #personal_x5F_off, #health_x5F_off").hide();
    });
    
    
    
    
     //Personalization Hover
    
     $("#personalchart_2_, #personal_x5F_on").hover(function() {
        $("#photo_x5F_on, #beauty_x5F_on, #video_x5F_on, #health_x5F_on").hide();
        $("#healthchart_1_, #beautychart_2_, #videochart_2_, #photochart_2_").css("opacity", 0.1);
        $("#personallabel").toggle();
        $("#Health__x26__Fitness_4_").hide();
         $("#photo_x5F_off, #beauty_x5F_off, #video_x5F_off, #health_x5F_off").toggle();
        }, function() {
        $("#photo_x5F_on, #beauty_x5F_on, #video_x5F_on, #health_x5F_on").toggle();
        $("#beautychart_2_, #healthchart_1_, #videochart_2_, #photochart_2_").css("opacity", 1);
        $("#personallabel").hide();
        $("#Health__x26__Fitness_4_").toggle();
         $("#photo_x5F_off, #beauty_x5F_off, #video_x5F_off, #health_x5F_off").hide();
    });
    
    
});
    
     
});




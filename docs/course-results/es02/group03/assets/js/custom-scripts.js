
//PROTOCOL 01
$(document).ready(function() {
});  
    $("#flux g").hover(function(){
       $("#flux g").css("opacity", 0.05);
       $(this).css("opacity", 1);
    }, function() {
        $("#flux g").css("opacity", 1);
    });
    


//PROTOCOL 02
 $("#fasci g").hover(function(){
       $("#fasci g").css("opacity",0.6);
       $(this).css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });


//-----INIZIO SELETTORI PER CLICK SU FASCI  --------//
$(".singolo").click(function() {
   $(".fonte, .opinione").toggleClass("hover");
   $(this).removeClass("hover");
 });
  
 $(".fonte").click(function() {
   $(".singolo, .opinione").toggleClass("hover");
   $(this).removeClass("hover");
 });

 $("#glossarioartefatti").hover(function(){
       $("#fasci .opinione,#fasci .fonte").css("opacity",0.3);
       $(this).css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });
  

//-----INIZIO SELETTORI PER HOVER SU GLOSSARIO GENERICO  --------//
 $("#glossarioopinioni").hover(function(){
       $("#fasci .singolo,#fasci .fonte").css("opacity",0.3);
       $(this).css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });
  
 $("#glossariofonti").hover(function(){
       $("#fasci .singolo,#fasci .opinione").css("opacity",0.3);
       $(this).css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });
  

//-----INIZIO SELETTORI HOVER TITOLI GLOSSARIO------//
        //-----GLOSSARIO FONTI ------//
$("#glossariofonti .istitutional").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#ist1,#ist2,#ist3, #ist4, #ist5").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossariofonti .grassroots").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#grass1,#grass2,#grass3, #grass4, #grass5, #grass6").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossariofonti .newsroom").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#news1,#news2,#news3").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

//---GLOSSARIO OPINIONE-----//
$("#glossarioopinioni .danger").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#danger1,#danger2,#danger3").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioopinioni .opportunita").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#opportunità1,#opportunità2,#opportunità3").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioopinioni .neutral").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#neutral1,#neutral2,#neutral3").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioopinioni .enjoyment").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#enjoyment").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

        //---GLOSSARIO ARTEFATTI-----//
$("#glossarioartefatti .post").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#post1,#post2,#post3,#post4").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .merch").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#merch").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .wiki").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#wiki").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .podcast").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#podcast1, #podcast2, #podcast3, #podcast4").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .paper").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#paper1, #paper2").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .article").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#articoli1, #articoli2, #articoli3").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .video").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#video1, #video2").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });

$("#glossarioartefatti .book").hover(function(){
    $("#fasci g").css("opacity", 0.3);
    $("#book1, #book2").css("opacity", 1);
   }, function() {
        $("#fasci g").css("opacity", 1);
   });


////PROTOCOL 03
$(document).ready(function() {
   
});

    $("#cluster g").hover(function(){
       $("#cluster g").css("opacity", 0.1);
       $(this).css("opacity", 1);
    }, function() {
        $("#cluster g").css("opacity", 1);
    });
    
    
  
////PROTOCOL 05
$(document).ready(function() {
});

    $("#meme g").hover(function(){
       $("#meme g").css("opacity", 0.1);
       $(this).css("opacity", 1);
    }, function() {
        $("#meme g").css("opacity", 1);
    });
    

document.querySelectorAll('.st18').forEach(function(item){
    item.onmouseover = function () {
        var thisImage = this.dataset.img
        document.getElementById(thisImage).classList.add('visible');
    }
    item.onmouseout = function () {
        var thisImage = this.dataset.img
        document.getElementById(thisImage).classList.remove('visible');
    }
    
}) 



////PROTOCOL 06
$(document).ready(function() {
});  
    $("#post g").hover(function(){
       $("#post g").css("opacity", 0.05);
       $(this).css("opacity", 1);
    }, function() {
        $("#post g").css("opacity", 1);
    });
    
$("#Post1").hover(function(){
    $("#Labelle1").toggleClass("filter");
});

$("#Post2").hover(function(){
    $("#Labelle2").toggleClass("filter");
});

$("#Post3").hover(function(){
    $("#Labelle3").toggleClass("filter");
});

$("#Post4").hover(function(){
    $("#Labelle4").toggleClass("filter");
});

$("#Post5").hover(function(){
    $("#Labelle5").toggleClass("filter");
});

$("#Post6").hover(function(){
    $("#Labelle6").toggleClass("filter");
});

$("#Post7").hover(function(){
    $("#Labelle7").toggleClass("filter");
});

$("#Post8").hover(function(){
    $("#Labelle8").toggleClass("filter");
});

    



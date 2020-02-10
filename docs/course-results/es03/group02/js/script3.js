

$(document).ready(function() {
//autoplay

  //audio
   $("#videointroductorio").prop('muted', true);

     $("#videointroductorio").click( function (){
         $(this).prop('muted', !$(this).prop('muted'));
     });

     $("#audio").click( function (){
         $("#videointroductorio").prop('muted', !$("#videointroductorio").prop('muted'));
   });


   function changeImage() {

       if (document.getElementById("videointroductorio").src == "/images/audio.png")
       {
           document.getElementById("videointroductorio").src = "/images/audio2.png";
       }
       else
       {
           document.getElementById("videointroductorio").src = "/images/audio.png";
       }
   }

});

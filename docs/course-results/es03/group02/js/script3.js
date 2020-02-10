

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






});

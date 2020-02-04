
$(document).ready(function() {

    var videos1 = document.getElementById("videos1");
    var videos2 = document.getElementById("videos2");
    var videos3 = document.getElementById("videos3");
    var videos4 = document.getElementById("videos4");


      var conts1 = document.getElementById("videoContainers1");
      var conts2 = document.getElementById("videoContainers2");
      var conts3 = document.getElementById("videoContainers3");
      var conts4 = document.getElementById("videoContainers4");

  //video2
    $( "#myVideos4" ).click(function() {
      videos4.style.display = "block";
        videos4.play();

    });



    videos4.onended = function(e) {
        window.location.href = "../guide.html";

    }

    videos1.onended = function(e) {
      $("#preguntasuno").show();
      $( "#yess1" ).click(function() {
        conts1.style.display = "none";
        conts2.style.display = "block";
        videos2.play();

        $( "#preguntasuno" ).hide();
      });
      $( "#nos1" ).click(function() {
        window.location.href = "no3.html";
      });
    }

    // videos2.onended = function(e) {
    //   $("#preguntasdos").show();
    //   $( "#yess2" ).click(function() {
    //     conts2.style.display = "none";
    //     conts3.style.display = "block";
    //     videos3.play();
    //
    //     $( "#preguntasdos" ).hide();
    //   });
    //   $( "#nos2" ).click(function() {
    //     window.location.href = "no3.html";
    //   });
    // }



      videos2.onended = function(e) {
        $("#preguntastres").show();
        $( "#yess3" ).click(function() {

              window.location.href = "call3.html";
          $( "#preguntastres" ).hide();
        });
        $( "#nos3" ).click(function() {
          window.location.href = "no3.html";
        });
      }



});

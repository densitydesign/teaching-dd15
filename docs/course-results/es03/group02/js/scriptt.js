
$(document).ready(function() {

    var videot1 = document.getElementById("videot1");
    var videot2 = document.getElementById("videot2");
    var videot3 = document.getElementById("videot3");
    var videot4 = document.getElementById("videot4");


      var contt1 = document.getElementById("videoContainert1");
      var contt2 = document.getElementById("videoContainert2");
      var contt3 = document.getElementById("videoContainert3");
      var contt4 = document.getElementById("videoContainert4");

  //video2
    $( "#myVideot4" ).click(function() {
      videot4.style.display = "block";
        videot4.play();

    });



    videot4.onended = function(e) {
        window.location.href = "../guide.html";

    }

    videot1.onended = function(e) {
      $("#preguntatuno").show();
      $( "#yest1" ).click(function() {
        contt1.style.display = "none";
        contt2.style.display = "block";
        videot2.play();

        $( "#preguntatuno" ).hide();
      });
      $( "#not1" ).click(function() {
        window.location.href = "no5.html";
      });
    }

    // videot2.onended = function(e) {
    //   $("#preguntatdos").show();
    //   $( "#yest2" ).click(function() {
    //     contt2.style.display = "none";
    //     contt3.style.display = "block";
    //     videot3.play();
    //
    //     $( "#preguntatdos" ).hide();
    //   });
    //   $( "#not2" ).click(function() {
    //     window.location.href = "no5.html";
    //   });
    // }



      videot2.onended = function(e) {
        $("#preguntattres").show();
        $( "#yest3" ).click(function() {

              window.location.href = "call5.html";
          $( "#preguntattres" ).hide();
        });
        $( "#not3" ).click(function() {
          window.location.href = "no5.html";
        });
      }

//clicks
$("#home").click(function(){
            window.location.href = "/page.html";
        });
        $("#home2").click(function(){
                    window.location.href = "/page.html";
                });
                $("#home3").click(function(){
                            window.location.href = "/page.html";
                        });
//video6



$("#reload").click(function(){
            location.reload(true);
        });

                $("#reload2").click(function(){
                  videot2.play();
                  $("#preguntattres").hide();
                  videot2.controls = true;

                        });
//control bar
    videot1.addEventListener('ended', () => {
        videot1.removeAttribute('controls');
        });
    videot2.addEventListener('ended', () => {
        videot2.removeAttribute('controls');
        });
});

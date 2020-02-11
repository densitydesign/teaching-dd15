
$(document).ready(function() {

    var videod1 = document.getElementById("videod1");
    var videod2 = document.getElementById("videod2");
    var videod3 = document.getElementById("videod3");
    var videod4 = document.getElementById("videod4");


      var contd1 = document.getElementById("videoContainerd1");
      var contd2 = document.getElementById("videoContainerd2");
      var contd3 = document.getElementById("videoContainerd3");
      var contd4 = document.getElementById("videoContainerd4");

  //video2
    $( "#myVideod4" ).click(function() {
      videod4.style.display = "block";
        videod4.play();

    });



    videod4.onended = function(e) {
        window.location.href = "../guide.html";

    }

    videod1.onended = function(e) {
      $("#preguntaduno").show();
      $( "#yesd1" ).click(function() {
        contd1.style.display = "none";
        contd2.style.display = "block";
        videod2.play();

        $( "#preguntaduno" ).hide();
      });
      $( "#nod1" ).click(function() {
        window.location.href = "no2.html";
      });
    }

    // videod2.onended = function(e) {
    //   $("#preguntaddos").show();
    //   $( "#yesd2" ).click(function() {
    //     contd2.style.display = "none";
    //     contd3.style.display = "block";
    //     videod3.play();
    //
    //     $( "#preguntaddos" ).hide();
    //   });
    //   $( "#nod2" ).click(function() {
    //     window.location.href = "no2.html";
    //   });
    // }



      videod2.onended = function(e) {
        $("#preguntadtres").show();
        $( "#yesd3" ).click(function() {

              window.location.href = "call2.html";
          $( "#preguntadtres" ).hide();
        });
        $( "#nod3" ).click(function() {
          window.location.href = "no2.html";
        });
      }

//buttons
$("#home").click(function(){
            window.location.href = "../page.html";
        });
        $("#home2").click(function(){
                    window.location.href = "../page.html";
                });
                $("#home3").click(function(){
                            window.location.href = "../page.html";
                        });
//video6



$("#reload").click(function(){
            location.reload(true);
        });

                $("#reload2").click(function(){
                  videod2.play();
                  $("#preguntadtres").hide();
                  videod2.controls = true;

                        });
//controls

videod1.addEventListener('ended', () => {
      videod1.removeAttribute('controls');
    });
videod2.addEventListener('ended', () => {
      videod2.removeAttribute('controls');
    });


});


$(document).ready(function() {

    var videoo1 = document.getElementById("videoo1");
    var videoo2 = document.getElementById("videoo2");
    var videoo3 = document.getElementById("videoo3");
    var videoo4 = document.getElementById("videoo4");


      var conto1 = document.getElementById("videoContainero1");
      var conto2 = document.getElementById("videoContainero2");
      var conto3 = document.getElementById("videoContainero3");
      var conto4 = document.getElementById("videoContainero4");

  //video2
    $( "#myVideoo4" ).click(function() {
      videoo4.style.display = "block";
        videoo4.play();

    });



    videoo4.onended = function(e) {
        window.location.href = "../guide.html";

    }

    videoo1.onended = function(e) {
      $("#preguntaouno").show();
      $( "#yeso1" ).click(function() {
        conto1.style.display = "none";
        conto2.style.display = "block";
        videoo2.play();

        $( "#preguntaouno" ).hide();
      });
      $( "#noo1" ).click(function() {
        window.location.href = "no6.html";
      });
    }

    // videoo2.onended = function(e) {
    //   $("#preguntaodos").show();
    //   $( "#yeso2" ).click(function() {
    //     conto2.style.display = "none";
    //     conto3.style.display = "block";
    //     videoo3.play();
    //
    //     $( "#preguntaodos" ).hide();
    //   });
    //   $( "#noo2" ).click(function() {
    //     window.location.href = "no6.html";
    //   });
    // }



      videoo2.onended = function(e) {
        $("#preguntaotres").show();
        $( "#yeso3" ).click(function() {

              window.location.href = "call6.html";
          $( "#preguntaotres" ).hide();
        });
        $( "#noo3" ).click(function() {
          window.location.href = "no6.html";
        });
      }

//clicks

$("#home").click(function(){
            window.location.href = "../page.html";
        });
        $("#home2").click(function(){
                    window.location.href = "../page.html";
                });

//video6



$("#reload").click(function(){
            location.reload(true);
        });

                $("#reload2").click(function(){
                  videoo2.play();
                  $("#preguntaotres").hide();
                  videoo2.controls = true;

                        });


//controls


videoo1.addEventListener('ended', () => {
      videoo1.removeAttribute('controls');
    });
videoo2.addEventListener('ended', () => {
      videoo2.removeAttribute('controls');
    });

});


$(document).ready(function() {

    var videoa1 = document.getElementById("videoa1");
    var videoa2 = document.getElementById("videoa2");
    var videoa3 = document.getElementById("videoa3");
    var videoa4 = document.getElementById("videoa4");


      var conta1 = document.getElementById("videoContainera1");
      var conta2 = document.getElementById("videoContainera2");
      var conta3 = document.getElementById("videoContainera3");
      var conta4 = document.getElementById("videoContainera4");

  //video2
    $( "#myVideoa4" ).click(function() {
      videoa4.style.display = "block";
        videoa4.play();

    });



    videoa4.onended = function(e) {
        window.location.href = "../guide.html";

    }

    videoa1.onended = function(e) {
      $("#preguntaauno").show();
      $( "#yesa1" ).click(function() {
        conta1.style.display = "none";
        conta2.style.display = "block";
        videoa2.play();

        $( "#preguntaauno" ).hide();
      });
      $( "#noa1" ).click(function() {
        window.location.href = "no4.html";
      });
    }

    videoa2.onended = function(e) {
      $("#preguntaados").show();
      $( "#yesa2" ).click(function() {
        conta2.style.display = "none";
        conta3.style.display = "block";
        videoa3.play();

        $( "#preguntaados" ).hide();
      });
      $( "#noa2" ).click(function() {
        window.location.href = "no4.html";
      });
    }



      videoa3.onended = function(e) {
        $("#preguntaatres").show();
        $( "#yesa3" ).click(function() {

              window.location.href = "call3.html";
          $( "#preguntaatres" ).hide();
        });
        $( "#noa3" ).click(function() {
          window.location.href = "no4.html";
        });
      }

//cliskc
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
          videoa2.play();
          $("#preguntaados").hide();
          videoa2.controls = true;

                });

                $("#reload3").click(function(){
                  videoa3.play();
                  $("#preguntaatres").hide();
                  videoa3.controls = true;

                        });

//controls

videoa1.addEventListener('ended', () => {
      videoa1.removeAttribute('controls');
    });
videoa2.addEventListener('ended', () => {
      videoa2.removeAttribute('controls');
    });
videoa3.addEventListener('ended', () => {
      videoa3.removeAttribute('controls');
    });

});

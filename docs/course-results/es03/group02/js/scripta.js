
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



});

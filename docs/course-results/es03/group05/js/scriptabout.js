//Section 04

$(document).ready(function() {    
            $("#link041").hover(function() {
                $("#imginstagramaim").css("visibility", "visible");
            }, function() {
                $("#imginstagramaim").css("visibility", "hidden");
            });
});


$(document).ready(function() {    
            $("#link042").hover(function() {
                $("#imgnudityguidelines").css("visibility", "visible");
            }, function() {
                $("#imgnudityguidelines").css("visibility", "hidden");
            });
});


//Section 05

$(document).ready(function() {    
            $("#link051").hover(function() {
                $(".imgchescorre05").css("visibility", "visible");
            }, function() {
                $(".imgchescorre05").css("visibility", "hidden");
            });
});


//Section 07

//Photos

$(document).ready(function() {    
            $("#anto").click(function() {
                $(".rowanto").toggle();
                
            });
});

$(document).ready(function() {    
            $("#agne").click(function() {
                $(".rowagne").toggle();
                
            });
});

$(document).ready(function() {    
            $("#ele").click(function() {
                $(".rowele").toggle();
                
            });
});

$(document).ready(function() {    
            $("#matti").click(function() {
                $(".rowmatti").toggle();
                
            });
});

$(document).ready(function() {    
            $("#anna").click(function() {
                $(".rowanna").toggle();
                
            });
});

$(document).ready(function() {    
            $("#babu").click(function() {
                $(".rowbabu").toggle();
                
            });
});

//Music

$(document).ready(function() {
  var playing = false;

  $('#anto').click(function() {
     

      if (playing == false) {
          document.getElementById('kobra').play();
          playing = true;
          

      } else {
        document.getElementById('kobra').pause();
        playing = false;
       
      }

  });
});

$(document).ready(function() {
  var playing = false;

  $('#agne').click(function() {
     

      if (playing == false) {
          document.getElementById('thoiry').play();
          playing = true;
          

      } else {
        document.getElementById('thoiry').pause();
        playing = false;
       
      }

  });
});

$(document).ready(function() {
  var playing = false;

  $('#ele').click(function() {
     

      if (playing == false) {
          document.getElementById('tarzanjane').play();
          playing = true;
          

      } else {
        document.getElementById('tarzanjane').pause();
        playing = false;
       
      }

  });
});

$(document).ready(function() {
  var playing = false;

  $('#matti').click(function() {
     

      if (playing == false) {
          document.getElementById('horses').play();
          playing = true;
          

      } else {
        document.getElementById('horses').pause();
        playing = false;
       
      }

  });
});

$(document).ready(function() {
  var playing = false;

  $('#anna').click(function() {
     

      if (playing == false) {
          document.getElementById('fox').play();
          playing = true;
          

      } else {
        document.getElementById('fox').pause();
        playing = false;
       
      }

  });
});

$(document).ready(function() {
  var playing = false;

  $('#babu').click(function() {
     

      if (playing == false) {
          document.getElementById('tarzanboy').play();
          playing = true;
          

      } else {
        document.getElementById('tarzanboy').pause();
        playing = false;
       
      }

  });
});
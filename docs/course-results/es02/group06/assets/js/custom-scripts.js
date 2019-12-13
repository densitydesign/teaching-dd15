// protocol1
$(document).ready(function () {
  console.log("Page Ready!");

  // $("#title").hide();
  // $("#title").css("opacity",0.15);

  // .hover(callback,callback);
  $("#cc g").hover(function() {
    // console.log("Hover!");
    $("#cc text").hide();
    $("#cc g").css("opacity",0.15);
    $(this).children().show();
    $(this).css("opacity",1);
  },function(){
    $("#cc text").show();
    $("#cc g").css("opacity",1);
  });
});


// protocol2





// protocol3
// $(document).ready(function() {
//   console.log("Page ready!");
//   $("#labels #other--characters").hide();
//
//   // $("element").hover(mouseEntering, mouseLeaving)
//   $("#nodes g").hover(function() {
//     $("#nodes g").css("opacity", 0.2);
//     $(this).css("opacity", 1);
//   }, function() {
//     $("#nodes_1_ g").css("opacity", 1);
//   });
//
//   // $("element").click(runYourCode)
//   $("#show--characters").click(function() {
//     // .toggle() alternates between showing and hiding the selected elements
//     $("#labels #other--characters").toggle();
//   });
// });

$(document).ready(function () {
  console.log("Page Ready!");
    $("#Dots text").hide();
  // $("#title").hide();
  // $("#title").css("opacity",0.15);

  //.hover(callback,callback);
  $("#Dots g").hover(function() {
    // console.log("Hover!");

    $("#Dots g").css("opacity",0.15);
    $(this).css("opacity",1);
    $(this).children().show();
  },function(){
    $("#Dots text").hide();
    $("#Dots g").css("opacity",1);
  });



});












// protocol3

$(document).ready(function () {
  console.log("Page Ready!");
  // $("#flowchart text").hide();
  $("#flowchart g").hover(function () {
    $("#flowchart g:not()").css("opacity", 0.15);
    $(this).css("opacity", 1);

  }, function () {

    $("#flowchart g").css("opacity", 1);
  });

});


// protocol4
$(document).ready(function () {
  // console.log("Page Ready!");
  $("#movie text").hide();
  $("#movie image").css("width", 150);
  $("#movie circle").hide();

  $("#movie g").hover(function () {
    $("#movie image").css("width", 550);
    $("#movie image").hide();
    $(this).children().show();
    $("#movie circle").hide();
  }, function () {
    $("#movie image").css("width", 150);
    $("#movie text").hide();
    $("#movie image").fadeIn();
    $("#movie circle").hide();
  });
});





// protocol5
//
// $(document).ready(function () {
//   console.log("Page Ready!");
//
//
//   $("#word2vec g").hover(function() {
//
//     $("#word2vec text").hide();
//     $("#word2vec g").css("opacity",0.15);
//     $(this).children().show();
//     $(this).css("opacity",1);
//   },function(){
//     $("#word2vec text").show();
//     $("#word2vec g").css("opacity",1);
//   });
// });



$(document).ready(function () {
  console.log("Page Ready!");


  $("#word2vec g").hover(function() {
    $("#word2vec g").css("opacity",0.15);
    $(this).css("opacity",1);
  },function(){
    $("#word2vec g").css("opacity",1);
  });
});

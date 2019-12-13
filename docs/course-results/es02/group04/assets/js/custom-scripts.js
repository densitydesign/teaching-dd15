// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project

// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
$(document).ready(function () {

//$("#specchietto > g").hide();
$("#focus-recreating > g").hide();
$("#focus-posing > g").hide();
$("#focus-photo > g").hide();

$("#sfondo_3 #setjetting2").hide();
$("#sfondo_3 #seichijunrei2").hide();
$("#sfondo_3 #all2").hide();


//  // $("element").hover(mouseEntering, mouseLeaving)
//  $("#immagini #img1").hover(function() {
//    $("#specchietto #african_queen").show();
////    $(this).css("opacity", 1);
////  }, function() {
////    $("#specchietto #african_queen").css("opacity", 1);
//  });

//  $("#img1").click(runYourCode)
//  $("#img1").click(function() {
//    // .toggle() alternates between showing and hiding the selected elements
//    $("#african_queen").toggle();
//  });


// -----------------------------------------CLICK ON THE HASHTAGS

 // ---- setjetting
  $("#sfondo_3 #setjetting").click(function() {
    console.log("clicco");
  $("#sfondo_3 #setjetting").hide();
  $("#sfondo_3 #setjetting2").show();
  $("#sfondo_3 #seichijunrei").show();
  $("#sfondo_3 #seichijunrei2").hide();
  $("#sfondo_3 #all").show();
  $("#sfondo_3 #all2").hide();
  $("#immagini>").hide();
  $("#sfondo_3 .setj").show();
  // $("#Cick_here").hide();
  // $(this).css("opacity", 1);
  // $("#immagini >").css("opacity", 0.4);
  // $("#immagini .setjet").css("opacity", 1);
  // }, function() {
  //   $("#sfondo_3 #setjetting2").hide();
  //   $("#sfondo_3 #setjetting").show();

  // $("#focus-recreating #african_queen").hide();
  // $("#Cick_here").show();
  // $(this).css("opacity", 0);
  // $("#immagini >").css("opacity", 1);
  });

  // ---- seichijunrei
   $("#sfondo_3 #seichijunrei").click(function() {
     console.log("clicco");
     $("#sfondo_3 #seichijunrei").hide();
     $("#sfondo_3 #seichijunrei2").show();
     $("#sfondo_3 #setjetting").show();
     $("#sfondo_3 #setjetting2").hide();
     $("#sfondo_3 #all").show();
     $("#sfondo_3 #all2").hide();
     $("#immagini>").hide();
     $("#sfondo_3 .seichi").show();
   // $("#focus-recreating #african_queen").toggle();
   // $("#Cick_here").hide();
   // $(this).css("opacity", 1);
   // $("#immagini >").css("opacity", 0.4);
   // $("#immagini #img99_3_").css("opacity", 1);
   // }, function() {
   // $("#focus-recreating #african_queen").hide();
   // $("#Cick_here").show();
   // $(this).css("opacity", 0);
   // $("#immagini >").css("opacity", 1);
   });

   // ---- seichijunrei
    $("#sfondo_3 #all").click(function() {
      console.log("clicco");
      $("#sfondo_3 #all").hide();
      $("#sfondo_3 #all2").show();
      $("#sfondo_3 #setjetting").show();
      $("#sfondo_3 #setjetting2").hide();
      $("#sfondo_3 #seichijunrei").show();
      $("#sfondo_3 #seichijunrei2").hide();
      $("#immagini>").show();
    // $("#focus-recreating #african_queen").toggle();
    // $("#Cick_here").hide();
    // $(this).css("opacity", 1);
    // $("#immagini >").css("opacity", 0.4);
    // $("#immagini #img99_3_").css("opacity", 1);
    // }, function() {
    // $("#focus-recreating #african_queen").hide();
    // $("#Cick_here").show();
    // $(this).css("opacity", 0);
    // $("#immagini >").css("opacity", 1);
    });

// -----------------------------------------RECREATING THE SCENE

 // ---- AFRICAN QUEEN
  $("#immagini #img99_3_").hover(function() {
  $("#focus-recreating #african_queen").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img99_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #african_queen").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- Beach_Bum
  $("#immagini #img2_3_").hover(function() {
  $("#focus-recreating #Beach_Bum").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img2_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #Beach_Bum").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

 // ---- i_want_to_eat_your_pancreas
  $("#immagini #img3_3_").hover(function() {
  $("#focus-recreating #i_want_to_eat_your_pancreas").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img3_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #i_want_to_eat_your_pancreas").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- james_bond2
  $("#immagini #img4_3_").hover(function() {
  $("#focus-recreating #james_bond2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img4_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #james_bond2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- james_bond_1_
  $("#immagini #img5_3_").hover(function() {
  $("#focus-recreating #james_bond_1_").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img5_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #james_bond_1_").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- policeacademy
  $("#immagini #img6_3_").hover(function() {
  $("#focus-recreating #policeacademy").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img6_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #policeacademy").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- thelaundromat
  $("#immagini #img7_3_").hover(function() {
  $("#focus-recreating #thelaundromat").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img7_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #thelaundromat").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- lego
  $("#immagini #img8_3_").hover(function() {
  $("#focus-recreating #lego").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img8_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #lego").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- lego2
  $("#immagini #img9_3_").hover(function() {
  $("#focus-recreating #lego2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img9_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #lego2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- lego3
  $("#immagini #img10_3_").hover(function() {
  $("#focus-recreating #lego3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img10_3_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #lego3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- Free
  $("#immagini #img11_4_").hover(function() {
  $("#focus-recreating #Free").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img11_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #Free").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });


// ---- love_live
  $("#immagini #img12_4_").hover(function() {
  $("#focus-recreating #love_live").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img12_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #love_live").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- misskobashy
  $("#immagini #img13_4_").hover(function() {
  $("#focus-recreating #misskobashy").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img13_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #misskobashy").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- onepiece
  $("#immagini #img14_4_").hover(function() {
  $("#focus-recreating #onepiece").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img14_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #onepiece").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- natsume
  $("#immagini #img1").hover(function() {
  $("#focus-recreating #natsume").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img1").css("opacity", 1);
  }, function() {
  $("#focus-recreating #natsume").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- carnivalrow
  $("#immagini #img15_4_").hover(function() {
  $("#focus-recreating #carnivalrow").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img15_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #carnivalrow").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- kidsontheslope
  $("#immagini #img16_4_").hover(function() {
  $("#focus-recreating #kidsontheslope").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img16_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #kidsontheslope").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- yuri_on_ice
  $("#immagini #img17_7_").hover(function() {
  $("#focus-recreating #yuri_on_ice").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img17_7_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #yuri_on_ice").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- haven
  $("#immagini #img17_8_").hover(function() {
  $("#focus-recreating #haven").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img17_8_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #haven").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- haven_2
  $("#immagini #img18_4_").hover(function() {
  $("#focus-recreating #haven_2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img18_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #haven_2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- haven3
  $("#immagini #img19_4_").hover(function() {
  $("#focus-recreating #haven3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img19_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #haven3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- haven4
  $("#immagini #img20_4_").hover(function() {
  $("#focus-recreating #haven4").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img20_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #haven4").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- strangerthings
  $("#immagini #img22_4_").hover(function() {
  $("#focus-recreating #strangerthings").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img22_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #strangerthings").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- strangerthings2
  $("#immagini #img23_4_").hover(function() {
  $("#focus-recreating #strangerthings2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img23_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #strangerthings2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });


// ----strangerthings3
  $("#immagini #img24_4_").hover(function() {
  $("#focus-recreating #strangerthings3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img24_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #strangerthings3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ----strangerthings4
  $("#immagini #img25_4_").hover(function() {
  $("#focus-recreating #strangerthings4").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img25_4_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #strangerthings4").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });


// ----strangerthings5
  $("#immagini #img26_5_").hover(function() {
  $("#focus-recreating #strangerthings5").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img26_5_").css("opacity", 1);
  }, function() {
  $("#focus-recreating #strangerthings5").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });




// -----------------------------------------POSING

 // ----dracula
  $("#immagini #img27_3_").hover(function() {
  $("#focus-posing #dracula").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img27_3_").css("opacity", 1);
  }, function() {
  $("#focus-posing #dracula").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

  // ----friends_with_benefits
    $("#immagini #img28_3_").hover(function() {
    $("#focus-posing #friends_with_benefits").show();
    $("#Cick_here").hide();
    $(this).css("opacity", 1);
    $("#immagini >").css("opacity", 0.4);
    $("#immagini #img28_3_").css("opacity", 1);
    }, function() {
    $("#focus-posing #friends_with_benefits").hide();
    $("#Cick_here").show();
    $(this).css("opacity", 0);
    $("#immagini >").css("opacity", 1);
    });

  // ----gladiator
    $("#immagini #img29_3_").hover(function() {
    $("#focus-posing #gladiator").show();
    $("#Cick_here").hide();
    $(this).css("opacity", 1);
    $("#immagini >").css("opacity", 0.4);
    $("#immagini #img29_3_").css("opacity", 1);
    }, function() {
    $("#focus-posing #gladiator").hide();
    $("#Cick_here").show();
    $(this).css("opacity", 0);
    $("#immagini >").css("opacity", 1);
    });

  // ----harry_potter
    $("#immagini #img30_3_").hover(function() {
    $("#focus-posing #harry_potter").show();
    $("#Cick_here").hide();
    $(this).css("opacity", 1);
    $("#immagini >").css("opacity", 0.4);
    $("#immagini #img30_3_").css("opacity", 1);
    }, function() {
    $("#focus-posing #harry_potter").hide();
    $("#Cick_here").show();
    $(this).css("opacity", 0);
    $("#immagini >").css("opacity", 1);
    });

// ----mission_impossible
  $("#immagini #img31_3_").hover(function() {
  $("#focus-posing #mission_impossible").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img31_3_").css("opacity", 1);
  }, function() {
  $("#focus-posing #mission_impossible").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ----the_bourne_identity
$("#immagini #img32_3_").hover(function() {
$("#focus-posing #the_bourne_identity").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img32_3_").css("opacity", 1);
}, function() {
$("#focus-posing #the_bourne_identity").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----the_godfather
$("#immagini #img33_3_").hover(function() {
$("#focus-posing #the_godfather").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img33_3_").css("opacity", 1);
}, function() {
$("#focus-posing #the_godfather").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----the_godfather2
$("#immagini #img34_3_").hover(function() {
$("#focus-posing #the_godfather2").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img34_3_").css("opacity", 1);
}, function() {
$("#focus-posing #the_godfather2").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----the_goodthebad
$("#immagini #img35_3_").hover(function() {
$("#focus-posing #the_goodthebad").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img35_3_").css("opacity", 1);
}, function() {
$("#focus-posing #the_goodthebad").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----thegoodtehbad2
$("#immagini #img36_3_").hover(function() {
$("#focus-posing #thegoodtehbad2").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img36_3_").css("opacity", 1);
}, function() {
$("#focus-posing #thegoodtehbad2").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----gameofthrones
$("#immagini #img43_3_").hover(function() {
$("#focus-posing #gameofthrones").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img43_3_").css("opacity", 1);
}, function() {
$("#focus-posing #gameofthrones").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----neongenesis
$("#immagini #img37_3_").hover(function() {
$("#focus-posing #neongenesis").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img37_3_").css("opacity", 1);
}, function() {
$("#focus-posing #neongenesis").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----profondo_rosso
$("#immagini #img38_3_").hover(function() {
$("#focus-posing #profondo_rosso").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img38_3_").css("opacity", 1);
}, function() {
$("#focus-posing #profondo_rosso").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----weatheringwithyou
$("#immagini #img39_3_").hover(function() {
$("#focus-posing #weatheringwithyou").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img39_3_").css("opacity", 1);
}, function() {
$("#focus-posing #weatheringwithyou").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----weatheringwithyou_1_
$("#immagini #img40_3_").hover(function() {
$("#focus-posing #weatheringwithyou_1_").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img40_3_").css("opacity", 1);
}, function() {
$("#focus-posing #weatheringwithyou_1_").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ---- yourname NO- CORREGGERE CON PHOTO MOVIE SINGE
$("#immagini #img41_6_").hover(function() {
$("#focus-posing #yourname").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img41_6_").css("opacity", 1);
}, function() {
$("#focus-posing #yourname").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----bungostraydogs
$("#immagini #img41_5_").hover(function() {
$("#focus-posing #bungostraydogs").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img41_5_").css("opacity", 1);
}, function() {
$("#focus-posing #bungostraydogs").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});

// ----onepice2
$("#immagini #img42_3_").hover(function() {
$("#focus-posing #onepice2").show();
$("#Cick_here").hide();
$(this).css("opacity", 1);
$("#immagini >").css("opacity", 0.4);
$("#immagini #img42_3_").css("opacity", 1);
}, function() {
$("#focus-posing #onepice2").hide();
$("#Cick_here").show();
$(this).css("opacity", 0);
$("#immagini >").css("opacity", 1);
});


// -----------------------------------------PHOTO OF LOCATION


// ---- A MOST WANTED
  $("#immagini #img98_3_").hover(function() {
  $("#focus-photo #amostwanted").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img98_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #amostwanted").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

 //---- BACK TO THE FUTURE
  $("#immagini #img82_3_").hover(function() {
  $("#focus-photo #backtothefuture").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img82_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #backtothefuture").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- ET
  $("#immagini #img97_3_").hover(function() {
  $("#focus-photo #et").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img97_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #et").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

 // ---- INGLORIOUSBASTERDS
  $("#immagini #img96_3_").hover(function() {
  $("#focus-photo #ingloriousbast").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img96_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #ingloriousbast").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- INGLORIOUSBASTERDS2
  $("#immagini #img95_3_").hover(function() {
  $("#focus-photo #ingloriousbast2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img95_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #ingloriousbast2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- INGLORIOUSBASTERDS3
  $("#immagini #img94_3_").hover(function() {
  $("#focus-photo #ingloriousbast3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img94_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #ingloriousbast3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- missionimpossible2 non va
  $("#immagini #img80_3_").hover(function() {
  $("#focus-photo #missionimpossible2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img80_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #missionimpossible2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- missionimpossible3
  $("#immagini #img93_3_").hover(function() {
  $("#focus-photo #missionimp3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img93_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #missionimp3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- missionimpossible4 non va
  $("#immagini #img81_3_").hover(function() {
  $("#focus-photo #missionimp4").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img81_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #missionimp4").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- STAR WARS
  $("#immagini #img92_3_").hover(function() {
  $("#focus-photo #starwars").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img92_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #starwars").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- TEDDY BEAR
  $("#immagini #img91_3_").hover(function() {
  $("#focus-photo #teddybear").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img91_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #teddybear").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- TEDDY BEAR2
  $("#immagini #img90_3_").hover(function() {
  $("#focus-photo #teddybear2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img90_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #teddybear2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- THE BOURNE
  $("#immagini #img89_3_").hover(function() {
  $("#focus-photo #thebourne").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img89_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #thebourne").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- THE BOURNE2
  $("#immagini #img88_3_").hover(function() {
  $("#focus-photo #thebourne2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img88_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #thebourne2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- THE INTERNATIONAL
  $("#immagini #img86_3_").hover(function() {
  $("#focus-photo #theinternational").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img86_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #theinternational").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- thetalentedmrripley
  $("#immagini #img85_3_").hover(function() {
  $("#focus-photo #thetalentedmrripley").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img85_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #thetalentedmrripley").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- thetalentedmrripley2
  $("#immagini #img84_3_").hover(function() {
  $("#focus-photo #thetalentedmrripley2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img84_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #thetalentedmrripley2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- thetalentedmrripley3
  $("#immagini #img83_3_").hover(function() {
  $("#focus-photo #thetalentedmrripley3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img83_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #thetalentedmrripley3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });



// ---- conan
  $("#immagini #img74_1_").hover(function() {
  $("#focus-photo #conan").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img74_1_").css("opacity", 1);
  }, function() {
  $("#focus-photo #conan").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- conan2
  $("#immagini #img75_1_").hover(function() {
  $("#focus-photo #conan2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img75_1_").css("opacity", 1);
  }, function() {
  $("#focus-photo #conan2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- conan3
  $("#immagini #img76_1_").hover(function() {
  $("#focus-photo #conan3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img76_1_").css("opacity", 1);
  }, function() {
  $("#focus-photo #conan3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- morethanlife
  $("#immagini #img77_1_").hover(function() {
  $("#focus-photo #morethanlife").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img77_1_").css("opacity", 1);
  }, function() {
  $("#focus-photo #morethanlife").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- godzilla
  $("#immagini #img44_2_").hover(function() {
  $("#focus-photo #godzilla").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img44_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #godzilla").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- howl_x27_smovingcastle
  $("#immagini #img45_2_").hover(function() {
  $("#focus-photo #howl_x27_smovingcastle").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img45_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #howl_x27_smovingcastle").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sarazanmai__x0D_ NON TROVO
  $("#immagini #img48_2_").hover(function() {
  $("#focus-photo #sarazanmai3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img48_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sarazanmai3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sarazanmai2
  $("#immagini #img47_2_").hover(function() {
  $("#focus-photo #sarazanmai2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img47_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sarazanmai2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sarazanmai3
  $("#immagini #img46_2_").hover(function() {
  $("#focus-photo #sarazanmai__x0D_").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img46_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sarazanmai__x0D_").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- rascaldoesnot
  $("#immagini #img49_2_").hover(function() {
  $("#focus-photo #rascaldoesnot").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img49_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #rascaldoesnot").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sound
  $("#immagini #img53_2_").hover(function() {
  $("#focus-photo #sound4").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img53_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sound4").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sound2
  $("#immagini #img52_2_").hover(function() {
  $("#focus-photo #sound3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img52_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sound3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sound3 1
  $("#immagini #img50_2_").hover(function() {
  $("#focus-photo #sound").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img50_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sound").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- sound4 2
  $("#immagini #img51_2_").hover(function() {
  $("#focus-photo #sound2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img51_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #sound2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- weatheringwithyou2
  $("#immagini #img57_2_").hover(function() {
  $("#focus-photo #weatherignwith6").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img57_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #weatherignwith6").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- weatheringwith3 NON TROVO n5
  $("#immagini #img58_2_").hover(function() {
  $("#focus-photo #weatheringwith7").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img58_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #weatheringwith7").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- weateringwith5 corretta
  $("#immagini #img56_2_").hover(function() {
  $("#focus-photo #weateringwith5").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img56_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #weateringwith5").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- weatherignwith6 corretto
  $("#immagini #img55_2_").hover(function() {
  $("#focus-photo #weatheringwith3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img55_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #weatheringwith3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- weatheringwith7 corretta
  $("#immagini #img54_2_").hover(function() {
  $("#focus-photo #weatheringwithyou2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img54_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #weatheringwithyou2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- thegoodthebad
  $("#immagini #img59_2_").hover(function() {
  $("#focus-photo #thegoodthebad").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img59_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #thegoodthebad").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

  // ---- yourname2
    $("#immagini #img62_2_").hover(function() {
    $("#focus-photo #yourname6").show();
    $("#Cick_here").hide();
    $(this).css("opacity", 1);
    $("#immagini >").css("opacity", 0.4);
    $("#immagini #img62_2_").css("opacity", 1);
    }, function() {
    $("#focus-photo #yourname6").hide();
    $("#Cick_here").show();
    $(this).css("opacity", 0);
    $("#immagini >").css("opacity", 1);
    });

  // ---- yourname3 corretto
    $("#immagini #img61_2_").hover(function() {
    $("#focus-photo #yourname5").show();
    $("#Cick_here").hide();
    $(this).css("opacity", 1);
    $("#immagini >").css("opacity", 0.4);
    $("#immagini #img61_2_").css("opacity", 1);
    }, function() {
    $("#focus-photo #yourname5").hide();
    $("#Cick_here").show();
    $(this).css("opacity", 0);
    $("#immagini >").css("opacity", 1);
    });

// ---- yourname4 corretto
  $("#immagini #img60_2_").hover(function() {
  $("#focus-photo #yourname4").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img60_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #yourname4").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- yourname5 no
  $("#immagini #img78_3_").hover(function() {
  $("#focus-photo #yourname2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img78_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #yourname2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- yourname6 CORRETTO
  $("#immagini #img2").hover(function() {
  $("#focus-photo #yourname7").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img2").css("opacity", 1);
  }, function() {
  $("#focus-photo #yourname7").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- yourname7 corretto
  $("#immagini #img79_3_").hover(function() {
  $("#focus-photo #yourname3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img79_3_").css("opacity", 1);
  }, function() {
  $("#focus-photo #yourname3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- howheavy
  $("#immagini #img64_2_").hover(function() {
  $("#focus-photo #howheavy").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img64_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #howheavy").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- howheavy2
  $("#immagini #img65_2_").hover(function() {
  $("#focus-photo #howheavy2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img65_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #howheavy2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- FRIENDS
  $("#immagini #img66_2_").hover(function() {
  $("#focus-photo #friends").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img66_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #friends").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- LOVE LIVE 2
  $("#immagini #img67_2_").hover(function() {
  $("#focus-photo #lovelive2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img67_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #lovelive2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- LOVE LIVE 3
  $("#immagini #img68_2_").hover(function() {
  $("#focus-photo #lovelive3").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img68_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #lovelive3").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- LOVE LIVE 4
  $("#immagini #img69_2_").hover(function() {
  $("#focus-photo #lovelive4").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img69_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #lovelive4").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- MARIANNE
  $("#immagini #img100_2_").hover(function() {
  $("#focus-photo #marianne").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img100_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #marianne").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- OUTLANDER
  $("#immagini #img70_2_").hover(function() {
  $("#focus-photo #outlander").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img70_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #outlander").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- encouragmentofclimb
  $("#immagini #img71_2_").hover(function() {
  $("#focus-photo #encouragmentofclimb").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img71_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #encouragmentofclimb").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- encouragmentofclimb2
  $("#immagini #img72_2_").hover(function() {
  $("#focus-photo #encouragmentofclimb2").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img72_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #encouragmentofclimb2").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

// ---- tamakomarket
  $("#immagini #img73_2_").hover(function() {
  $("#focus-photo #tamakomarket").show();
  $("#Cick_here").hide();
  $(this).css("opacity", 1);
  $("#immagini >").css("opacity", 0.4);
  $("#immagini #img73_2_").css("opacity", 1);
  }, function() {
  $("#focus-photo #tamakomarket").hide();
  $("#Cick_here").show();
  $(this).css("opacity", 0);
  $("#immagini >").css("opacity", 1);
  });

});


// ------------------------------------------------------------------------------------------ VIZ05   
    
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
 
if (pos.y>img.y-350 && pos.y<=(img.height) && pos.x>img.x && pos.x<(img.width+img.x)) { glass.style.display="block" } else { glass.style.display="none"}

  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
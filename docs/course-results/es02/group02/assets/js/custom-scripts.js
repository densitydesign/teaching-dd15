// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
//1
$(document).ready(function(){


    $("#yellow, #morado, #pink, #green, #blue").hover(function() {
      $("#yellow, #morado, #pink, #green, #blue").css("opacity",0.1);

        $(this).css("opacity",1);


    }, function(){
        $("#yellow, #morado, #pink, #green, #blue").css("opacity",1);

    });

});

//2 bolas
//, #linea7,#linea8,#linea9,#linea10,#linea11,#linea12,#linea13,#linea14,#linea15,#linea16,#linea17,#linea18,#linea19,#linea20,#linea21,#linea22,#linea23,#linea24,##linea25,#linea26,#linea27,#linea28,#linea29,#linea30
$(document).ready(function(){

    //.hover(callback, callback);
$("#linea1, #linea2, #linea3,#linea4, #linea5, #linea6, #linea7, #linea8, #linea9, #linea10, #linea11, #linea12, #linea13, #linea14, #linea15, #linea16, #linea17, #linea18, #linea19, #linea20, #linea21, #linea22, #linea23, #linea24, #linea25, #linea26, #linea27, #linea28, #linea29, #linea30").hide()
    $("#texts g").hover(function() {

        $("#texts g").css("opacity",0.05);
        $(this).css("opacity",1);
        $("#linea1, #linea2,#linea3,#linea4, #linea5,#linea6, #linea7, #linea8, #linea9, #linea10, #linea11, #linea12, #linea13, #linea14, #linea15, #linea16, #linea17, #linea18, #linea19, #linea20, #linea21, #linea22, #linea23, #linea24, #linea25, #linea26, #linea27, #linea28, #linea29, #linea30").show();


    }, function(){
        $("#texts g").css("opacity",1);
        $("#linea1, #linea2,#linea3,#linea4, #linea5, #linea6, #linea7, #linea8, #linea9, #linea10, #linea11, #linea12, #linea13, #linea14, #linea15, #linea16, #linea17, #linea18, #linea19, #linea20, #linea21, #linea22, #linea23, #linea24, #linea25, #linea26, #linea27, #linea28, #linea29, #linea30").hide();

    });

});
//protocol 4
$(document).ready(function(){
  //$("#toys1").hide()
  $("#testos").hide()

    //.hover(callback, callback);
    $("#colores g").hover(function() {

        $("#colores g").css("opacity",0.1);
        $(this).css("opacity",1);
      //  $("#toys1").show();
      $("#testos").show();



    }, function(){
        $("#colores g").css("opacity",1);
      //  $("#toys1").hide();
      $("#testos").hide()

    });
    $("#boton").click(function(){
$("#testos").css("opacity",1);
$("#testos").toggle();
})

});

//5 collage

$(document).ready(function(){
  //$("#lineas g").show()
  $("#house, #app, #carrage, #bot, #others, #toy, #boxes, #lampi, #tissue, #phot, #boo, #plat, #pla").hide()

    //.hover(callback, callback);
    $("#todos g").hover(function() {

        $("#todos g").css("opacity",0.1);
        $(this).css("opacity",1);
      //  $("#toys1").show();
      $("#house, #app, #carrage, #bot, #others, #toy, #boxes, #lampi, #tissue, #phot, #boo, #plat, #pla").hide();
      $(this).find("#house, #app, #carrage, #bot, #others, #toy, #boxes, #lampi, #tissue, #phot, #boo, #plat, #pla").show();
//$("#lineas g").hide()


    }, function(){
        $("#todos g").css("opacity",1);
      //  $("#toys1").hide();
      $("#house, #app, #carrage, #bot, #others, #toy, #boxes, #lampi, #tissue, #phot, #boo, #plat, #pla").hide()
      //$("#lineas g").show()

    });

});

// protocol 3

$(document).ready(function(){

//COLOR STANDARD FOR ALL COUNTRIES
    $("#ColorUnknown, #Co_ColorUnknown, #It_ColorUnknown, #In_ColorUnknown, #Sp_ColorUnknown, #Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorCommercial, #Co_ColorCommercial, #It_ColorCommercial, #In_ColorCommercial, #Sp_ColorCommercial, #Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    $("#ColorIndustrial, #Co_ColorIndustrial, #It_ColorIndustrial, #In_ColorIndustrial, #Sp_ColorIndustrial, #Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential, #Co_ColorResidential, #It_ColorResidential, #In_ColorResidential, #Sp_ColorResidential, #Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers, #Co_ColorOthers, #It_ColorOthers, #In_ColorOthers, #Sp_ColorOthers, #Us_ColorOthers").css("fill",'4A154B').css("opacity", 0.75);
    $("#ColorCity, #Co_ColorCity, #It_ColorCity, #In_ColorCity, #Sp_ColorCity, #Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
//BUTTONS FOR ALL COUNTRIES - Changes opacity and fill of color Frames (fbr, fco, etc)
$("#ButtonUnknown").click(function(){
    $("#ColorUnknown, #Co_ColorUnknown, #It_ColorUnknown, #In_ColorUnknown, #Sp_ColorUnknown, #Us_ColorUnknown, #ButtonCommercial, #ButtonIndustrial, #ButtonResidential, #ButtonOthers, #ButtonCity").css("opacity", 0.1);
    $("#ButtonReset").show();
    $("#ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity,  #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity,  #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("opacity", 0.9).css("fill",'e5e5e5');
    },
);

$("#ButtonCommercial").click(function(){
   $("#ColorCommercial, #Co_ColorCommercial, #It_ColorCommercial, #In_ColorCommercial, #Sp_ColorCommercial, #Us_ColorCommercial, #ButtonUnknown, #ButtonIndustrial, #ButtonResidential, #ButtonOthers, #ButtonCity").css("opacity", 0.1);
    $("#ButtonReset").show();
    $(" #ColorUnknown, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity, #Co_ColorUnknown, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity,  #It_ColorUnknown, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity, #In_ColorUnknown, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity,  #Sp_ColorUnknown, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity, #Us_ColorUnknown, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("opacity", 0.9).css("fill",'e5e5e5');
    },
);
$("#ButtonCity").click(function(){
 $("#ColorCity, #Co_ColorCity, #It_ColorCity, #In_ColorCity, #Sp_ColorCity, #Us_ColorCity, #ButtonUnknown, #ButtonIndustrial, #ButtonResidential, #ButtonOthers, #ButtonCommercial").css("opacity", 0.1);
    $("#ButtonReset").show();
    $(" #ColorUnknown, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCommercial, #Co_ColorUnknown, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCommercial,  #It_ColorUnknown, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCommercial, #In_ColorUnknown, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCommercial,  #Sp_ColorUnknown, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCommercial, #Us_ColorUnknown, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCommercial").css("opacity", 0.9).css("fill",'e5e5e5');
    },
);

$("#ButtonResidential").click(function(){
 $("#ColorResidential, #Co_ColorResidential, #It_ColorResidential, #In_ColorResidential, #Sp_ColorResidential, #Us_ColorResidential, #ButtonUnknown, #ButtonIndustrial, #ButtonCity, #ButtonOthers, #ButtonCommercial").css("opacity", 0.1);
        $("#ButtonReset").show();
    $("#ColorUnknown, #ColorIndustrial, #ColorCity, #ColorOthers, #ColorCommercial, #Co_ColorUnknown, #Co_ColorIndustrial, #Co_ColorCity, #Co_ColorOthers, #Co_ColorCommercial,  #It_ColorUnknown, #It_ColorIndustrial, #It_ColorCity, #It_ColorOthers, #It_ColorCommercial, #In_ColorUnknown, #In_ColorIndustrial, #In_ColorCity, #In_ColorOthers, #In_ColorCommercial,  #Sp_ColorUnknown, #Sp_ColorIndustrial, #Sp_ColorCity, #Sp_ColorOthers, #Sp_ColorCommercial, #Us_ColorUnknown, #Us_ColorIndustrial, #Us_ColorCity, #Us_ColorOthers, #Us_ColorCommercial").css("opacity", 0.9).css("fill",'e5e5e5');
    },
);
$("#ButtonIndustrial").click(function(){
 $("#ColorIndustrial, #Co_ColorIndustrial, #It_ColorIndustrial, #In_ColorIndustrial, #Sp_ColorIndustrial, #Us_ColorIndustrial, #ButtonUnknown, #ButtonResidential, #ButtonCity, #ButtonOthers, #ButtonCommercial").css("opacity", 0.1);
    $("#ButtonReset").show();
    $("#ColorUnknown, #ColorResidential, #ColorCity, #ColorOthers, #ColorCommercial, #Co_ColorUnknown, #Co_ColorResidential, #Co_ColorCity, #Co_ColorOthers, #Co_ColorCommercial,  #It_ColorUnknown, #It_ColorResidential, #It_ColorCity, #It_ColorOthers, #It_ColorCommercial, #In_ColorUnknown, #In_ColorResidential, #In_ColorCity, #In_ColorOthers, #In_ColorCommercial,  #Sp_ColorUnknown, #Sp_ColorResidential, #Sp_ColorCity, #Sp_ColorOthers, #Sp_ColorCommercial, #Us_ColorUnknown, #Us_ColorResidential, #Us_ColorCity, #Us_ColorOthers, #Us_ColorCommercial").css("opacity", 0.9).css("fill",'e5e5e5');
    },
);

$("#ButtonOthers").click(function(){
 $("#ColorOthers, #Co_ColorOthers, #It_ColorOthers, #In_ColorOthers, #Sp_ColorOthers, #Us_ColorOthers, #ButtonUnknown, #ButtonResidential, #ButtonCity, #ButtonIndustrial, #ButtonCommercial").css("opacity", 0.1);
    $("#ButtonReset").show();
    $("#ColorUnknown, #ColorResidential, #ColorCity, #ColorIndustrial, #ColorCommercial, #Co_ColorUnknown, #Co_ColorResidential, #Co_ColorCity, #Co_ColorIndustrial, #Co_ColorCommercial,  #It_ColorUnknown, #It_ColorResidential, #It_ColorCity, #It_ColorIndustrial, #It_ColorCommercial, #In_ColorUnknown, #In_ColorResidential, #In_ColorCity, #In_ColorIndustrial, #In_ColorCommercial,  #Sp_ColorUnknown, #Sp_ColorResidential, #Sp_ColorCity, #Sp_ColorIndustrial, #Sp_ColorCommercial, #Us_ColorUnknown, #Us_ColorResidential, #Us_ColorCity, #Us_ColorIndustrial, #Us_ColorCommercial").css("opacity", 0.9).css("fill",'e5e5e5');
    },
);
//RESETS THE FILTER TO NORMAL
$("#ButtonReset").hide();
$("#ButtonReset").click(function(){
        $("#ButtonReset").hide();
    //ALL BUTTONS BACK TO STANDARD
    $("#ButtonUnknown, #ButtonCommercial, #ButtonIndustrial, #ButtonResidential, #ButtonOthers, #ButtonCity").css("opacity", 1);
    //ALL COLORS BACK TO STANDARD
    $("#ColorUnknown, #Co_ColorUnknown, #It_ColorUnknown, #In_ColorUnknown, #Sp_ColorUnknown, #Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorCommercial, #Co_ColorCommercial, #It_ColorCommercial, #In_ColorCommercial, #Sp_ColorCommercial, #Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    $("#ColorIndustrial, #Co_ColorIndustrial, #It_ColorIndustrial, #In_ColorIndustrial, #Sp_ColorIndustrial, #Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential, #Co_ColorResidential, #It_ColorResidential, #In_ColorResidential, #Sp_ColorResidential, #Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers, #Co_ColorOthers, #It_ColorOthers, #In_ColorOthers, #Sp_ColorOthers, #Us_ColorOthers").css("fill",'4A154B').css("opacity", 0.75);
    $("#ColorCity, #Co_ColorCity, #It_ColorCity, #In_ColorCity, #Sp_ColorCity, #Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    },
);

//CAMERA HOVER
// CAMERA HOVER BRASIL
$("#fbr01").hover(function(){
    $("this").css("opacity", 0.0);
        $("#3Dprinter").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#3Dprinter").css("fill", '777777');});
    $("#fbr01").hover(function(){$("#fbr01").toggle();})


$("#fbr02").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Road").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Road").css("fill", '777777');});
    $("#fbr02").hover(function(){$("#fbr02").toggle();})

$("#fbr03").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #Plant, #ParkedCar, #StreetNumber, #PropertyWall").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #Plant, #ParkedCar, #StreetNumber, #PropertyWall").css("fill", '777777');});
    $("#fbr03").hover(function(){$("#fbr03").toggle();})
$("#fbr04").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Warehouse, #Rack, #Box, #FireExtinguisher").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Warehouse, #Rack, #Box, #FireExtinguisher").css("fill", '777777');});
    $("#fbr04").hover(function(){$("#fbr04").toggle();})
$("#fbr05").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Gate, #Tree, #PedestrianAccess").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Gate, #Tree, #PedestrianAccess").css("fill", '777777');});
    $("#fbr05").hover(function(){$("#fbr05").toggle();})


$("#fbr06").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Cars, #Fence, #MovingCars, #Lamps").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Cars, #Fence, #MovingCars, #Lamps").css("fill", '777777');});
    $("#fbr06").hover(function(){$("#fbr06").toggle();})
$("#fbr07").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #LampPost, #ParkedCar, #PropertyGate, #Gate").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #LampPost, #ParkedCar, #PropertyGate, #Gate").css("fill", '777777');});
    $("#fbr07").hover(function(){$("#fbr07").toggle();})
$("#fbr08").hover(function(){
    $("this").css("opacity", 0.0);
        $("#GlassDoor").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#GlassDoor").css("fill", '777777');});
    $("#fbr08").hover(function(){$("#fbr08").toggle();})

$("#fbr09").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Store, #Beverage, #TrashBin, #BarbecueGrill, #Sidewalk, #Street, #ParkedCar").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Store, #Beverage, #TrashBin, #BarbecueGrill, #Sidewalk, #Street, #ParkedCar").css("fill", '777777');});
    $("#fbr09").hover(function(){$("#fbr09").toggle();})
$("#fbr10").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Clothes, #Shoes, #Mannequin, #Bench, #Plant, #StoreSign").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Clothes, #Shoes, #Mannequin, #Bench, #Plant, #StoreSign").css("fill", '777777');});
    $("#fbr10").hover(function(){$("#fbr10").toggle();})

$("#fbr11").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Plant, #ElectronicCircuit, #Wire, #Surface").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Plant, #ElectronicCircuit, #Wire, #Surface").css("fill", '777777');});
    $("#fbr11").hover(function(){$("#fbr11").toggle();})
$("#fbr12").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #Tree, #ParkedCar, #Awning, #PropertyWall, #BusinessSign").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #Tree, #ParkedCar, #Awning, #PropertyWall, #BusinessSign").css("fill", '777777');});
    $("#fbr12").hover(function(){$("#fbr12").toggle();})

$("#fbr13").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Table, #Bench, #Grass, #Wall").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Table, #Bench, #Grass, #Wall").css("fill", '777777');});
    $("#fbr13").hover(function(){$("#fbr13").toggle();})
$("#fbr14").hover(function(){
    $("this").css("opacity", 0.0);
        $("#FrontDesk, #Computer, #Display, #Fan, #Plant, #Drawer").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#FrontDesk, #Computer, #Display, #Fan, #Plant, #Drawer").css("fill", '777777');});
    $("#fbr14").hover(function(){$("#fbr14").toggle();})

$("#fbr15").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #ParkedCar, #Tree, #Plant, #Newsstand").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #ParkedCar, #Tree, #Plant, #Newsstand").css("fill", '777777');});
    $("#fbr15").hover(function(){$("#fbr15").toggle();})

$("#fbr16").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #ParkedCar, #BusinessFront, #LampPost").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #ParkedCar, #BusinessFront, #LampPost").css("fill", '777777');});
    $("#fbr16").hover(function(){$("#fbr16").toggle();})
$("#fbr17").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Wall, #PropertyWall, #Corridor, #Drain, #Window").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Wall, #PropertyWall, #Corridor, #Drain, #Window").css("fill", '777777');});
    $("#fbr17").hover(function(){$("#fbr17").toggle();})

$("#fbr18").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Grass, #Street, #ParkedCar, #ParkedMotorbike, #Tree, #Gate, #Plant").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Grass, #Street, #ParkedCar, #ParkedMotorbike, #Tree, #Gate, #Plant").css("fill", '777777');});
    $("#fbr18").hover(function(){$("#fbr18").toggle();})
$("#fbr19").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Starcase, #PlasticBench, #Microwave, #Fridge, #Laptop, #CardboardBox").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Starcase, #PlasticBench, #Microwave, #Fridge, #Laptop, #CardboardBox").css("fill", '777777');});
    $("#fbr19").hover(function(){$("#fbr19").toggle();})

$("#fbr20").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #PropertyWall, #Wire, #LampPost, #Gate, #ParkedCar, #Sidewalk, #Tree").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #PropertyWall, #Wire, #LampPost, #Gate, #ParkedCar, #Sidewalk, #Tree").css("fill", '777777');});
    $("#fbr20").hover(function(){$("#fbr20").toggle();})

$("#fbr21").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #Tree, #ParkedCar, #PropertyGate, #Driveway").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #Tree, #ParkedCar, #PropertyGate, #Driveway").css("fill", '777777');});
    $("#fbr21").hover(function(){$("#fbr21").toggle();})
$("#fbr22").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #ParkedCar, #Driveway, #Wall, #Plant").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #ParkedCar, #Driveway, #Wall, #Plant").css("fill", '777777');});
    $("#fbr22").hover(function(){$("#fbr22").toggle();})

$("#fbr23").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #Plant, #Driveway, #Tree").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #Plant, #Driveway, #Tree").css("fill", '777777');});
    $("#fbr23").hover(function(){$("#fbr23").toggle();})
$("#fbr24").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Road, #Wire, #LampPost, #RoadSign, #MovingCar, #Tree, #Overpass").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Road, #Wire, #LampPost, #RoadSign, #MovingCar, #Tree, #Overpass").css("fill", '777777');});
    $("#fbr24").hover(function(){$("#fbr24").toggle();})

$("#fbr25").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Street, #Sidewalk, #PropertyGate, #BusinessFront, #BusStop, #ParkedCar, #MovingCar").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Street, #Sidewalk, #PropertyGate, #BusinessFront, #BusStop, #ParkedCar, #MovingCar").css("fill", '777777');});
    $("#fbr25").hover(function(){$("#fbr25").toggle();})

// CAMERA HOVER COLOMBIA
    $("#fco01").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_SewingMachine, #Co_Products, #Co_Clothes, #Co_Supplies, #Co_Fabric").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_SewingMachine, #Co_Products, #Co_Clothes, #Co_Supplies, #Co_Fabric").css("fill", '777777');});
    $("#fco01").hover(function(){$("#fco01").toggle();})


$("#fco02").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Pet, #Co_ParkedCar, #Co_Rack, #Co_MovingCar, #Co_Street, #Co_House").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Pet, #Co_ParkedCar, #Co_Rack, #Co_MovingCar, #Co_Street, #Co_House").css("fill", '777777');});
    $("#fco02").hover(function(){$("#fco02").toggle();})

$("#fco03").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_PropertyGate, #Co_ParkedCar, #Co_Wall, #Co_Floor").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_PropertyGate, #Co_ParkedCar, #Co_Wall, #Co_Floor").css("fill", '777777');});
    $("#fco03").hover(function(){$("#fco03").toggle();})

$("#fco04").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_ParkingLot, #Co_Fence, #Co_House, #Co_Sky, #Co_PropertyWall").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_ParkingLot, #Co_Fence, #Co_House, #Co_Sky, #Co_PropertyWall").css("fill", '777777');});
    $("#fco04").hover(function(){$("#fco04").toggle();})

$("#fco05").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Window, #Co_ParkingLot, #Co_ParkedCar, #Co_Grass, #Co_Tree").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Window, #Co_ParkingLot, #Co_ParkedCar, #Co_Grass, #Co_Tree").css("fill", '777777');});
    $("#fco05").hover(function(){$("#fco05").toggle();})

$("#fco06").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Mirror, #Co_Table, #Co_Chair, #Co_Floor, #Co_Rack, #Co_PropertyWall, #Co_Plant").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Mirror, #Co_Table, #Co_Chair, #Co_Floor, #Co_Rack, #Co_PropertyWall, #Co_Plant").css("fill", '777777');});
    $("#fco06").hover(function(){$("#fco06").toggle();})

$("#fco07").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_#Co_ConstructionWork, #Co_Sky, #Co_ConstructionMaterials, #Co_Tree, #Co_Roof").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_#Co_ConstructionWork, #Co_Sky, #Co_ConstructionMaterials, #Co_Tree, #Co_Roof").css("fill", '777777');});
    $("#fco07").hover(function(){$("#fco07").toggle();})

$("#fco08").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Street, #Co_ParkedCar, #Co_Tree, #Co_House, #Co_Stairs, #Co_PropertyGate, #Co_Balcony").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Street, #Co_ParkedCar, #Co_Tree, #Co_House, #Co_Stairs, #Co_PropertyGate, #Co_Balcony").css("fill", '777777');});
    $("#fco08").hover(function(){$("#fco08").toggle();})

$("#fco09").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_School, #Co_Street, #Co_MovingCar, #Co_MovingBus, #Co_Park, #Co_IdentifiableHuman, #Co_Motorcycle, #Co_Bike, #Co_LampPost").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_School, #Co_Street, #Co_MovingCar, #Co_MovingBus, #Co_Park, #Co_IdentifiableHuman, #Co_Motorcycle, #Co_Bike, #Co_LampPost").css("fill", '777777');});
    $("#fco09").hover(function(){$("#fco09").toggle();})

$("#fco10").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Roof, #Co_PropertyGate, #Co_Sidewalk, #Co_Tree, #Co_Grass, #Co_Street").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Roof, #Co_PropertyGate, #Co_Sidewalk, #Co_Tree, #Co_Grass, #Co_Street").css("fill", '777777');});
    $("#fco10").hover(function(){$("#fco10").toggle();})

$("#fco11").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_PropertyGate, #Co_MovingCar, #Co_Street, #Co_Motorcycle, #Co_Human, #Co_ParkedCar").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_PropertyGate, #Co_MovingCar, #Co_Street, #Co_Motorcycle, #Co_Human, #Co_ParkedCar").css("fill", '777777');});
    $("#fco11").hover(function(){$("#fco11").toggle();})

$("#fco12").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_StackedBox, #Co_Backpack, #Co_Lamp, #Co_Wall").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_StackedBox, #Co_Backpack, #Co_Lamp, #Co_Wall").css("fill", '777777');});
    $("#fco12").hover(function(){$("#fco12").toggle();})

$("#fco13").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Table, #Co_Chair, #Co_Floor, #Co_Wall").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Table, #Co_Chair, #Co_Floor, #Co_Wall").css("fill", '777777');});
    $("#fco13").hover(function(){$("#fco13").toggle();})

$("#fco14").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Machinery, #Co_Grass, #Co_Tree, #Co_LampPost").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Machinery, #Co_Grass, #Co_Tree, #Co_LampPost").css("fill", '777777');});
    $("#fco14").hover(function(){$("#fco14").toggle();})

$("#fco15").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_UnidentifiableHuman, #Co_Machinery, #Co_Grass, #Co_Tree, #Co_Stairs").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_UnidentifiableHuman, #Co_Machinery, #Co_Grass, #Co_Tree, #Co_Stairs").css("fill", '777777');});
    $("#fco15").hover(function(){$("#fco15").toggle();})

$("#fco16").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Light").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Light").css("fill", '777777');});
    $("#fco16").hover(function(){$("#fco16").toggle();})

$("#fco17").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_#Co_MovingCar, #Co_PropertyGate, #Co_House, #Co_Tree, #Co_Grass").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_#Co_MovingCar, #Co_PropertyGate, #Co_House, #Co_Tree, #Co_Grass").css("fill", '777777');});
    $("#fco17").hover(function(){$("#fco17").toggle();})

$("#fco18").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Experiment, #Co_Window, #Co_Rack, #Co_Hall").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Experiment, #Co_Window, #Co_Rack, #Co_Hall").css("fill", '777777');});
    $("#fco18").hover(function(){$("#fco18").toggle();})

$("#fco19").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Trash, #Co_Roof, #Co_Street, #Co_Plant").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Trash, #Co_Roof, #Co_Street, #Co_Plant").css("fill", '777777');});
    $("#fco19").hover(function(){$("#fco19").toggle();})

$("#fco20").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_#Co_Groceries, #Co_Fan, #Co_UnidentifiableHuman").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Groceries, #Co_Fan, #Co_UnidentifiableHuman").css("fill", '777777');});
    $("#fco20").hover(function(){$("#fco20").toggle();})

$("#fco21").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Server, #Co_Wires, #Co_Rack").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Server, #Co_Wires, #Co_Rack").css("fill", '777777');});
    $("#fco21").hover(function(){$("#fco21").toggle();})

$("#fco22").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Street, #Co_PropertyGate, #Co_UnidentifiableHuman, #Co_Sidewalk").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Street, #Co_PropertyGate, #Co_UnidentifiableHuman, #Co_Sidewalk").css("fill", '777777');});
    $("#fco22").hover(function(){$("#fco22").toggle();})

$("#fco23").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_#Co_Chair, #Co_Window #Co_Booth, #Co_Rack, #Co_Street, #Co_Board").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_#Co_Chair, #Co_Window #Co_Booth, #Co_Rack, #Co_Street, #Co_Board").css("fill", '777777');});
    $("#fco23").hover(function(){$("#fco23").toggle();})

$("#fco24").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Hall, #Co_Door").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Hall, #Co_Door").css("fill", '777777');});
    $("#fco24").hover(function(){$("#fco24").toggle();})

$("#fco25").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Co_Tv, #Co_OfficeMaterial, #Co_Certificates, #Co_Wall, #Co_InternalRoof").css("fill", '000000');
    }, function() {
        $("this").css("opacity", 1);
    $("#Co_Tv, #Co_OfficeMaterial, #Co_Certificates, #Co_Wall, #Co_InternalRoof").css("fill", '777777');});
    $("#fco25").hover(function(){$("#fco25").toggle();})
// CAMERA HOVER INDIA

$("#fin01").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_FrontDesk, #In_Chair, #In_Receptionist, #In_Purse, #In_PersonalObjects, #In_Plant, #In_IdentifiableHuman").css("fill", '000000');
    }, function() {
        $("#fin01").css("opacity", 1);
    $("#In_FrontDesk, #In_Chair, #In_Receptionist, #In_Purse, #In_PersonalObjects, #In_Plant, #In_IdentifiableHuman").css("fill", '777777');});
    $("#fin01").hover(function(){$("#fin01").toggle();})


$("#fin02").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_ComputerScreen, #In_Chair, #In_Desk, #In_Drawer, #In_Door, #In_PersonalObjects, #In_Laptop, #In_Posters").css("fill", '000000');
    }, function() {
        $("#fin02").css("opacity", 1);
    $("#In_ComputerScreen, #In_Chair, #In_Desk, #In_Drawer, #In_Door, #In_PersonalObjects, #In_Laptop, #In_Posters").css("fill", '777777');});
    $("#fin02").hover(function(){$("#fin02").toggle();})


$("#fin03").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Door, #In_Stairs, #In_Rugs, #In_Floor, #In_Paper, #In_WaterBottle, #In_SittingPerson").css("fill", '000000');
    }, function() {
        $("#fin03").css("opacity", 1);
    $("#In_Door, #In_Stairs, #In_Rugs, #In_Floor, #In_Paper, #In_WaterBottle, #In_SittingPerson").css("fill", '777777');});
    $("#fin03").hover(function(){$("#fin03").toggle();})


$("#fin04").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Dog, #In_Chair, #In_WaitingArea, #In_WomanSitting, #In_Door, #In_Woman").css("fill", '000000');
    }, function() {
        $("#fin04").css("opacity", 1);
    $("#In_Dog, #In_Chair, #In_WaitingArea, #In_WomanSitting, #In_Door, #In_Woman").css("fill", '777777');});
    $("#fin04").hover(function(){$("#fin04").toggle();})


$("#fin05").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Printer, #In_Computer, #In_Paper, #In_Worker, #In_IdentifiableHuman, #In_Chair").css("fill", '000000');
    }, function() {
        $("#fin05").css("opacity", 1);
    $("#In_Printer, #In_Computer, #In_Paper, #In_Worker, #In_IdentifiableHuman, #In_Chair").css("fill", '777777');});
    $("#fin05").hover(function(){$("#fin05").toggle();})


$("#fin06").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Chair, #In_Desk, #In_Computer, #In_OfficeSpace, #In_Paper").css("fill", '000000');
    }, function() {
        $("#fin06").css("opacity", 1);
    $("#In_Chair, #In_Desk, #In_Computer, #In_OfficeSpace, #In_Paper").css("fill", '777777');});
    $("#fin06").hover(function(){$("#fin06").toggle();})


$("#fin07").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Watch, #In_BrandSign, #In_Display, #In_Worker, #In_IdentifiableHuman, #In_AdvertisingDisplay, #In_Drawer, #In_Suitcase, #In_ShoppingBag").css("fill", '000000');
    }, function() {
        $("#fin07").css("opacity", 1);
    $("#In_Watch, #In_BrandSign, #In_Display, #In_Worker, #In_IdentifiableHuman, #In_AdvertisingDisplay, #In_Drawer, #In_Suitcase, #In_ShoppingBag").css("fill", '777777');});
    $("#fin07").hover(function(){$("#fin07").toggle();})


$("#fin08").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Mattress, #In_Chair, #In_Window, #In_Sofa, #In_Products, #In_Box, #In_Staircase").css("fill", '000000');
    }, function() {
        $("#fin08").css("opacity", 1);
    $("#In_Mattress, #In_Chair, #In_Window, #In_Sofa, #In_Products, #In_Box, #In_Staircase").css("fill", '777777');});
    $("#fin08").hover(function(){$("#fin08").toggle();})


$("#fin09").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Chair, #In_Objects, #In_WorkingDesks, #In_Worker, #In_Lamp, #In_Shelves, #In_Window, #In_Door").css("fill", '000000');
    }, function() {
        $("#fin09").css("opacity", 1);
    $("#In_Chair, #In_Objects, #In_WorkingDesks, #In_Worker, #In_Lamp, #In_Shelves, #In_Window, #In_Door").css("fill", '777777');});
    $("#fin09").hover(function(){$("#fin09").toggle();})


$("#fin10").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Shed, #In_Sacks, #In_Window, #In_Pallet").css("fill", '000000');
    }, function() {
        $("#fin10").css("opacity", 1);
    $("#In_Shed, #In_Sacks, #In_Window, #In_Pallet").css("fill", '777777');});
    $("#fin10").hover(function(){$("#fin10").toggle();})


$("#fin11").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Shed, #In_Sacks, #In_Window, #In_Pallet, #In_Worker, #In_Machinery, #In_MovingBelt, #In_Door").css("fill", '000000');
    }, function() {
        $("#fin11").css("opacity", 1);
    $("#In_Shed, #In_Sacks, #In_Window, #In_Pallet, #In_Worker, #In_Machinery, #In_MovingBelt, #In_Door").css("fill", '777777');});
    $("#fin11").hover(function(){$("#fin11").toggle();})


$("#fin12").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Machinery, #In_LargeRoll, #In_Man").css("fill", '000000');
    }, function() {
        $("#fin12").css("opacity", 1);
    $("#In_Machinery, #In_LargeRoll, #In_Man").css("fill", '777777');});
    $("#fin12").hover(function(){$("#fin12").toggle();})


$("#fin13").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Machinery, #In_Worker, #In_Tubes, #In_Box, #In_IdentifiableHuman").css("fill", '000000');
    }, function() {
        $("#fin13").css("opacity", 1);
    $("#In_Machinery, #In_Worker, #In_Tubes, #In_Box, #In_IdentifiableHuman").css("fill", '777777');});
    $("#fin13").hover(function(){$("#fin13").toggle();})


$("#fin14").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Pipeline, #In_Tank, #In_Machinery, #In_Wall, #In_Tree, #In_Gallon").css("fill", '000000');
    }, function() {
        $("#fin14").css("opacity", 1);
    $("#In_Pipeline, #In_Tank, #In_Machinery, #In_Wall, #In_Tree, #In_Gallon").css("fill", '777777');});
    $("#fin14").hover(function(){$("#fin14").toggle();})


$("#fin15").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Wall, #In_FluorescentLight, #In_IdentifiableHuman, #In_Worker, #In_Box, #In_FloorCushion, #In_Object, #In_Calendar").css("fill", '000000');
    }, function() {
        $("#fin15").css("opacity", 1);
    $("#In_Wall, #In_FluorescentLight, #In_IdentifiableHuman, #In_Worker, #In_Box, #In_FloorCushion, #In_Object, #In_Calendar").css("fill", '777777');});
    $("#fin15").hover(function(){$("#fin15").toggle();})


$("#fin16").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Tube, #In_Shed, #In_Deposit, #In_People, #In_Window, #In_Machinery").css("fill", '000000');
    }, function() {
        $("#fin16").css("opacity", 1);
    $("#In_Tube, #In_Shed, #In_Deposit, #In_People, #In_Window, #In_Machinery").css("fill", '777777');});
    $("#fin16").hover(function(){$("#fin16").toggle();})

$("#fin17").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Balcony, #In_Seats, #In_Net, #In_Bench, #In_Garden, #In_Tree, #In_Grass, #In_TrashBin, #In_Table").css("fill", '000000');
    }, function() {
        $("#fin17").css("opacity", 1);
    $("#In_Balcony, #In_Seats, #In_Net, #In_Bench, #In_Garden, #In_Tree, #In_Grass, #In_TrashBin, #In_Table").css("fill", '777777');});
    $("#fin17").hover(function(){$("#fin17").toggle();})

$("#fin18").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_ParkedCar, #In_Wall, #In_Tree, #In_PropertyWall, #In_Window").css("fill", '000000');
    }, function() {
        $("#fin18").css("opacity", 1);
    $("#In_ParkedCar, #In_Wall, #In_Tree, #In_PropertyWall, #In_Window").css("fill", '777777');});
    $("#fin18").hover(function(){$("#fin18").toggle();})

$("#fin19").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Buffet, #In_Chair, #In_Table, #In_Window, #In_Drawer, #In_Ceiling").css("fill", '000000');
    }, function() {
        $("#fin19").css("opacity", 1);
    $("#In_Buffet, #In_Chair, #In_Table, #In_Window, #In_Drawer, #In_Ceiling").css("fill", '777777');});
    $("#fin19").hover(function(){$("#fin19").toggle();})

$("#fin20").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Stairs, #In_Window, #In_DecorativeCartoon, #In_WoodenBarrier, #In_Staircase, #In_ColorfulWall").css("fill", '000000');
    }, function() {
        $("#fin20").css("opacity", 1);
    $("#In_Stairs, #In_Window, #In_DecorativeCartoon, #In_WoodenBarrier, #In_Staircase, #In_ColorfulWall").css("fill", '777777');});
    $("#fin20").hover(function(){$("#fin20").toggle();})

$("#fin21").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Ceiling, #In_Balcony, #In_OtherProperties, #In_Tree, #In_Window, #In_Rooftop, #In_Wood, #In_Mud, #In_People").css("fill", '000000');
    }, function() {
        $("#fin21").css("opacity", 1);
    $("#In_Ceiling, #In_Balcony, #In_OtherProperties, #In_Tree, #In_Window, #In_Rooftop, #In_Wood, #In_Mud, #In_People").css("fill", '777777');});
    $("#fin21").hover(function(){$("#fin21").toggle();})

$("#fin22").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_ParkedMotorbike, #In_Steps, #In_Entrance, #In_Grass, #In_Plant, #In_Window").css("fill", '000000');
    }, function() {
        $("#fin22").css("opacity", 1);
    $("#In_ParkedMotorbike, #In_Steps, #In_Entrance, #In_Grass, #In_Plant, #In_Window").css("fill", '777777');});
    $("#fin22").hover(function(){$("#fin22").toggle();})

$("#fin23").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_ParkedCar, #In_ParkedMotorbike, #In_ParkedBike, #In_Fence, #In_Street, #In_Tree, #In_OtherProperties, #In_Sidewalk, #In_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fin23").css("opacity", 1);
    $("#In_ParkedCar, #In_ParkedMotorbike, #In_ParkedBike, #In_Fence, #In_Street, #In_Tree, #In_OtherProperties, #In_Sidewalk, #In_PropertyWall").css("fill", '777777');});
    $("#fin23").hover(function(){$("#fin23").toggle();})

$("#fin24").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Plant, #In_ParkedCar, #In_ParkedMotorbike, #In_Street, #In_Wall").css("fill", '000000');
    }, function() {
        $("#fin24").css("opacity", 1);
    $("#In_Plant, #In_ParkedCar, #In_ParkedMotorbike, #In_Street, #In_Wall").css("fill", '777777');});
    $("#fin24").hover(function(){$("#fin24").toggle();})

$("#fin25").hover(function(){
    $("this").css("opacity", 0.0);
        $("#In_Balcony, #In_Window, #In_Garage, #In_AutoRickshaw, #In_Awning, #In_WalkingHuman, #In_CeilingDecoration").css("fill", '000000');
    }, function() {
        $("#fin25").css("opacity", 1);
    $("#In_Balcony, #In_Window, #In_Garage, #In_AutoRickshaw, #In_Awning, #In_WalkingHuman, #In_CeilingDecoration").css("fill", '777777');});
    $("#fin25").hover(function(){$("#fin25").toggle();})
//HOVER ITALY
$("#fit01").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_3Dprinter").css("fill", '000000');
    }, function() {
        $("#fit01").css("opacity", 1);
    $("#It_3Dprinter").css("fill", '777777');});
    $("#fit01").hover(function(){$("#fit01").toggle();})

$("#fit02").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Grass, #It_DryingStand, #It_GreenFence, #It_TrashBin, #It_GardenPath").css("fill", '000000');
    }, function() {
        $("#fit02").css("opacity", 1);
    $("#It_Grass, #It_DryingStand, #It_GreenFence, #It_TrashBin, #It_GardenPath").css("fill", '777777');});
    $("#fit02").hover(function(){$("#fit02").toggle();})

$("#fit03").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Window, #It_PropertyWall, #It_PlasticChair, #It_PlasticTable, #It_Plant, #It_AirConditioner, #It_GreenFence").css("fill", '000000');
    }, function() {
        $("#fit03").css("opacity", 1);
    $("#It_Window, #It_PropertyWall, #It_PlasticChair, #It_PlasticTable, #It_Plant, #It_AirConditioner, #It_GreenFence").css("fill", '777777');});
    $("#fit03").hover(function(){$("#fit03").toggle();})

$("#fit04").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_ParkedCar, #It_HandRail, #It_VehicleRamp, #It_ExternalLamp, #It_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fit04").css("opacity", 1);
    $("#It_ParkedCar, #It_HandRail, #It_VehicleRamp, #It_ExternalLamp, #It_PropertyWall").css("fill", '777777');});
    $("#fit04").hover(function(){$("#fit04").toggle();})

$("#fit05").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Plant, #It_Window, #It_EntranceDoor, #It_Sidewalk, #It_Driveway, #It_NoParkSign, #It_Gate, #It_GreenFence, #It_Steps, #It_WelcomeRug").css("fill", '000000');
    }, function() {
        $("#fit05").css("opacity", 1);
    $("#It_Plant, #It_Window, #It_EntranceDoor, #It_Sidewalk, #It_Driveway, #It_NoParkSign, #It_Gate, #It_GreenFence, #It_Steps, #It_WelcomeRug").css("fill", '777777');});
    $("#fit05").hover(function(){$("#fit05").toggle();})

$("#fit06").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Plant, #It_Decoration, #It_Grass, #It_ExternalLamp, #It_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fit06").css("opacity", 1);
    $("#It_Plant, #It_Decoration, #It_Grass, #It_ExternalLamp, #It_PropertyWall").css("fill", '777777');});
    $("#fit06").hover(function(){$("#fit06").toggle();})

$("#fit07").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Cashier, #It_Customers, #It_Products, #It_AdvertisingSign, #It_Television, #It_UniformizedEmployees, #It_IdentifiableHumans").css("fill", '000000');
    }, function() {
        $("#fit07").css("opacity", 1);
    $("#It_Cashier, #It_Customers, #It_Products, #It_AdvertisingSign, #It_Television, #It_UniformizedEmployees, #It_IdentifiableHumans").css("fill", '777777');});
    $("#fit07").hover(function(){$("#fit07").toggle();})

$("#fit08").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Balcony, #It_Tree, #It_Door, #It_Sunblind").css("fill", '000000');
    }, function() {
        $("#fit08").css("opacity", 1);
    $("#It_Balcony, #It_Tree, #It_Door, #It_Sunblind").css("fill", '777777');});
    $("#fit08").hover(function(){$("#fit08").toggle();})

$("#fit09").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Grass, #It_Plant, #It_Balcony, #It_Sidewalk, #It_Fence").css("fill", '000000');
    }, function() {
        $("#fit09").css("opacity", 1);
    $("#It_Grass, #It_Plant, #It_Balcony, #It_Sidewalk, #It_Fence").css("fill", '777777');});
    $("#fit09").hover(function(){$("#fit09").toggle();})

$("#fit10").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Tree, #It_GreenFence, #It_Balcony, #It_Trampolin, #It_Roof, #It_Window, #It_PropertyWall, #It_Garden").css("fill", '000000');
    }, function() {
        $("#fit10").css("opacity", 1);
    $("#It_Tree, #It_GreenFence, #It_Balcony, #It_Trampolin, #It_Roof, #It_Window, #It_PropertyWall, #It_Garden").css("fill", '777777');});
    $("#fit10").hover(function(){$("#fit10").toggle();})

$("#fit11").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_ParkedCar, #It_MovingCar, #It_Pedestrians, #It_Plant, #It_Sidewalk, #It_Street, #It_RollerShutter").css("fill", '000000');
    }, function() {
        $("#fit11").css("opacity", 1);
    $("#It_ParkedCar, #It_MovingCar, #It_Pedestrians, #It_Plant, #It_Sidewalk, #It_Street, #It_RollerShutter").css("fill", '777777');});
    $("#fit11").hover(function(){$("#fit11").toggle();})

$("#fit12").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_TruckTrailer, #It_Containers, #It_Window, #It_Gate, #It_GravelFloor, #It_Pallets, #It_OtherProperties, #It_TrashBins").css("fill", '000000');
    }, function() {
        $("#fit12").css("opacity", 1);
    $("#It_TruckTrailer, #It_Containers, #It_Window, #It_Gate, #It_GravelFloor, #It_Pallets, #It_OtherProperties, #It_TrashBins").css("fill", '777777');});
    $("#fit12").hover(function(){$("#fit12").toggle();})

$("#fit13").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_EntrancePortico, #It_ParkedCar, #It_Street, #It_PropertyGate, #It_OtherProperties, #It_LampPost").css("fill", '000000');
    }, function() {
        $("#fit13").css("opacity", 1);
    $("#It_EntrancePortico, #It_ParkedCar, #It_Street, #It_PropertyGate, #It_OtherProperties, #It_LampPost").css("fill", '777777');});
    $("#fit13").hover(function(){$("#fit13").toggle();})

$("#fit14").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Tree, #It_TrashBin, #It_Gate, #It_Street, #It_Window, #It_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fit14").css("opacity", 1);
    $("#It_Tree, #It_TrashBin, #It_Gate, #It_Street, #It_Window, #It_PropertyWall").css("fill", '777777');});
    $("#fit14").hover(function(){$("#fit14").toggle();})

$("#fit15").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_OtherProperties, #It_Sea, #It_Tree, #It_Mountain, #It_Window, #It_Chimneys, #It_Balcony, #It_Sunblind").css("fill", '000000');
    }, function() {
        $("#fit15").css("opacity", 1);
    $("#It_OtherProperties, #It_Sea, #It_Tree, #It_Mountain, #It_Window, #It_Chimneys, #It_Balcony, #It_Sunblind").css("fill", '777777');});
    $("#fit15").hover(function(){$("#fit15").toggle();})

$("#fit16").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_MovingCar, #It_ParkedCar, #It_StreetSign, #It_OtherProperties, #It_Sidewalk").css("fill", '000000');
    }, function() {
        $("#fit16").css("opacity", 1);
    $("#It_MovingCar, #It_ParkedCar, #It_StreetSign, #It_OtherProperties, #It_Sidewalk").css("fill", '777777');});
    $("#fit16").hover(function(){$("#fit16").toggle();})

$("#fit17").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Grass, #It_Plant, #It_Driveway, #It_Street, #It_Gate, #It_PalmTree, #It_Rock, #It_ParkedCar").css("fill", '000000');
    }, function() {
        $("#fit17").css("opacity", 1);
    $("#It_Grass, #It_Plant, #It_Driveway, #It_Street, #It_Gate, #It_PalmTree, #It_Rock, #It_ParkedCar").css("fill", '777777');});
    $("#fit17").hover(function(){$("#fit17").toggle();})

$("#fit18").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Reception, #It_Door, #It_TrashBin, #It_PaperBooklets, #It_PlasticContainers, #It_ElectricalSocket").css("fill", '000000');
    }, function() {
        $("#fit18").css("opacity", 1);
    $("#It_Reception, #It_Door, #It_TrashBin, #It_PaperBooklets, #It_PlasticContainers, #It_ElectricalSocket").css("fill", '777777');});
    $("#fit18").hover(function(){$("#fit18").toggle();})

$("#fit19").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Fence, #It_ProperyWall, #It_OtherProperty, #It_ParkingLot, #It_Window, #It_Door, #It_Awning").css("fill", '000000');
    }, function() {
        $("#fit19").css("opacity", 1);
    $("#It_Fence, #It_ProperyWall, #It_OtherProperty, #It_ParkingLot, #It_Window, #It_Door, #It_Awning").css("fill", '777777');});
    $("#fit19").hover(function(){$("#fit19").toggle();})

$("#fit20").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_ParkedCar, #It_Gate, #It_PropertyWall, #It_Street, #It_Furniture, #It_Garage, #It_Window, #It_Pallets").css("fill", '000000');
    }, function() {
        $("#fit20").css("opacity", 1);
    $("#It_ParkedCar, #It_Gate, #It_PropertyWall, #It_Street, #It_Furniture, #It_Garage, #It_Window, #It_Pallets").css("fill", '777777');});
    $("#fit20").hover(function(){$("#fit20").toggle();})

$("#fit21").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_ParkingLot, #It_IndustrialPiecer, #It_PropertyWall, #It_Shed, #It_Fence, #It_Window").css("fill", '000000');
    }, function() {
        $("#fit21").css("opacity", 1);
    $("#It_ParkingLot, #It_IndustrialPiecer, #It_PropertyWall, #It_Shed, #It_Fence, #It_Window").css("fill", '777777');});
    $("#fit21").hover(function(){$("#fit21").toggle();})

$("#fit22").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Gate, #It_Stairs, #It_Street, #It_PropertyWall, #It_ParkedCar").css("fill", '000000');
    }, function() {
        $("#fit22").css("opacity", 1);
    $("#It_Gate, #It_Stairs, #It_Street, #It_PropertyWall, #It_ParkedCar").css("fill", '777777');});
    $("#fit22").hover(function(){$("#fit22").toggle();})

$("#fit23").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Garden, #It_ExternalLight, #It_GardenPath, #It_GreenFence, #It_Plant, #It_Drain").css("fill", '000000');
    }, function() {
        $("#fit23").css("opacity", 1);
    $("#It_Garden, #It_ExternalLight, #It_GardenPath, #It_GreenFence, #It_Plant, #It_Drain").css("fill", '777777');});
    $("#fit23").hover(function(){$("#fit23").toggle();})

$("#fit24").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_ParkedCar, #It_Driveway, #It_Tree, #It_Grass, #It_Window, #It_Door, #It_Awning, #It_ExternalLight, #It_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fit24").css("opacity", 1);
    $("#It_ParkedCar, #It_Driveway, #It_Tree, #It_Grass, #It_Window, #It_Door, #It_Awning, #It_ExternalLight, #It_PropertyWall").css("fill", '777777');});
    $("#fit24").hover(function(){$("#fit24").toggle();})

$("#fit25").hover(function(){
    $("this").css("opacity", 0.0);
        $("#It_Gate, #It_Pallet, #It_Street, #It_ParkedCar, #It_LampPost, #It_MovingTruck, #It_OtherProperties, #It_Sky, #It_ParkingLot, #It_Shed").css("fill", '000000');
    }, function() {
        $("#fit25").css("opacity", 1);
    $("#It_Gate, #It_Pallet, #It_Street, #It_ParkedCar, #It_LampPost, #It_MovingTruck, #It_OtherProperties, #It_Sky, #It_ParkingLot, #It_Shed").css("fill", '777777');});
    $("#fit25").hover(function(){$("#fit25").toggle();})

//HOVER SPAIN

$("#fsp01").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Stairs, #Sp_UnfinishedWall, #Sp_Sky, #Sp_Grass").css("fill", '000000');
    }, function() {
        $("#fsp01").css("opacity", 1);
    $("#Sp_Stairs, #Sp_UnfinishedWall, #Sp_Sky, #Sp_Grass").css("fill", '777777');});
    $("#fsp01").hover(function(){$("#fsp01").toggle();})


$("#fsp02").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Stairs, #Sp_Mirror, #Sp_PropertyGate, #Sp_Street").css("fill", '000000');
    }, function() {
        $("#fsp02").css("opacity", 1);
    $("#Sp_Stairs, #Sp_Mirror, #Sp_PropertyGate, #Sp_Street").css("fill", '777777');});
    $("#fsp02").hover(function(){$("#fsp02").toggle();})


$("#fsp03").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Road, #Sp_ParkedCar, #Sp_Yard, #Sp_PropertyGate").css("fill", '000000');
    }, function() {
        $("#fsp03").css("opacity", 1);
    $("#Sp_Road, #Sp_ParkedCar, #Sp_Yard, #Sp_PropertyGate").css("fill", '777777');});
    $("#fsp03").hover(function(){$("#fsp03").toggle();})


$("#fsp04").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_ParkedCar, #Sp_Street, #Sp_Sidewalk").css("fill", '000000');
    }, function() {
        $("#fsp04").css("opacity", 1);
    $("#Sp_ParkedCar, #Sp_Street, #Sp_Sidewalk").css("fill", '777777');});
    $("#fsp04").hover(function(){$("#fsp04").toggle();})


$("#fsp05").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Motor, #Sp_Hall, #Sp_Window, #Sp_Railing").css("fill", '000000');
    }, function() {
        $("#fsp05").css("opacity", 1);
    $("#Sp_Motor, #Sp_Hall, #Sp_Window, #Sp_Railing").css("fill", '777777');});
    $("#fsp05").hover(function(){$("#fsp05").toggle();})


$("#fsp06").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_WashingMachine, #Sp_TumbleDryer").css("fill", '000000');
    }, function() {
        $("#fsp06").css("opacity", 1);
    $("#Sp_WashingMachine, #Sp_TumbleDryer").css("fill", '777777');});
    $("#fsp06").hover(function(){$("#fsp06").toggle();})


$("#fsp07").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_ParkingLot, #Sp_ParkedCar, #Sp_Street, #Sp_Tree, #Sp_Grass, #Sp_Sky").css("fill", '000000');
    }, function() {
        $("#fsp07").css("opacity", 1);
    $("#Sp_ParkingLot, #Sp_ParkedCar, #Sp_Street, #Sp_Tree, #Sp_Grass, #Sp_Sky").css("fill", '777777');});
    $("#fsp07").hover(function(){$("#fsp07").toggle();})


$("#fsp08").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Hall, #Sp_FrontageStore").css("fill", '000000');
    }, function() {
        $("#fsp08").css("opacity", 1);
    $("#Sp_Hall, #Sp_FrontageStore").css("fill", '777777');});
    $("#fsp08").hover(function(){$("#fsp08").toggle();})


$("#fsp09").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_ControlCenter").css("fill", '000000');
    }, function() {
        $("#fsp09").css("opacity", 1);
    $("#Sp_ControlCenter").css("fill", '777777');});
    $("#fsp09").hover(function(){$("#fsp09").toggle();})


$("#fsp10").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_IdentificableHuman, #Sp_FoodProduct, #Sp_Gate").css("fill", '000000');
    }, function() {
        $("#fsp10").css("opacity", 1);
    $("#Sp_IdentificableHuman, #Sp_FoodProduct, #Sp_Gate").css("fill", '777777');});
    $("#fsp10").hover(function(){$("#fsp10").toggle();})


$("#fsp11").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_IdentificableHuman, #Sp_FoodProduct, #Sp_Gate").css("fill", '000000');
    }, function() {
        $("#fsp11").css("opacity", 1);
    $("#Sp_IdentificableHuman, #Sp_FoodProduct, #Sp_Gate").css("fill", '777777');});
    $("#fsp11").hover(function(){$("#fsp11").toggle();})


$("#fsp12").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Grass, #Sp_Cellar, #Sp_Tree, #Sp_LampPost").css("fill", '000000');
    }, function() {
        $("#fsp12").css("opacity", 1);
    $("#Sp_Grass, #Sp_Cellar, #Sp_Tree, #Sp_LampPost").css("fill", '777777');});
    $("#fsp12").hover(function(){$("#fsp12").toggle();})


$("#fsp13").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Stairs, #Sp_PropertyGate, #Sp_Cellar, #Sp_Plant, #Sp_Street, #Sp_ParkedCar").css("fill", '000000');
    }, function() {
        $("#fsp13").css("opacity", 1);
    $("#Sp_Stairs, #Sp_PropertyGate, #Sp_Cellar, #Sp_Plant, #Sp_Street, #Sp_ParkedCar").css("fill", '777777');});
    $("#fsp13").hover(function(){$("#fsp13").toggle();})


$("#fsp14").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_ParkingLot, #Sp_Grass, #Sp_ParkedCar, #Sp_Plant, #Sp_tree").css("fill", '000000');
    }, function() {
        $("#fsp14").css("opacity", 1);
    $("#Sp_ParkingLot, #Sp_Grass, #Sp_ParkedCar, #Sp_Plant, #Sp_tree").css("fill", '777777');});
    $("#fsp14").hover(function(){$("#fsp14").toggle();})


$("#fsp15").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Pool, #Sp_House, #Sp_PropertyGate, #Sp_Plant, #Sp_Hall").css("fill", '000000');
    }, function() {
        $("#fsp15").css("opacity", 1);
    $("#Sp_Pool, #Sp_House, #Sp_PropertyGate, #Sp_Plant, #Sp_Hall").css("fill", '777777');});
    $("#fsp15").hover(function(){$("#fsp15").toggle();})


$("#fsp16").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Pool, #Sp_Plant, #Sp_Tree, #Sp_Railing, #Sp_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fsp16").css("opacity", 1);
    $("#Sp_Pool, #Sp_Plant, #Sp_Tree, #Sp_Railing, #Sp_PropertyWall").css("fill", '777777');});
    $("#fsp16").hover(function(){$("#fsp16").toggle();})


$("#fsp17").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_PropertyWall, #Sp_Rack").css("fill", '000000');
    }, function() {
        $("#fsp17").css("opacity", 1);
    $("#Sp_PropertyWall, #Sp_Rack").css("fill", '777777');});
    $("#fsp17").hover(function(){$("#fsp17").toggle();})


$("#fsp18").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_IdentifiableHuman, #Sp_ProductDispenser, #Sp_Table, #Sp_Chair, #Sp_Lamp, #Sp_Gate").css("fill", '000000');
    }, function() {
        $("#fsp18").css("opacity", 1);
    $("#Sp_IdentifiableHuman, #Sp_ProductDispenser, #Sp_Table, #Sp_Chair, #Sp_Lamp, #Sp_Gate").css("fill", '777777');});
    $("#fsp18").hover(function(){$("#fsp18").toggle();})


$("#fsp19").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Roofs, #Sp_Sky, #Sp_Mountain").css("fill", '000000');
    }, function() {
        $("#fsp19").css("opacity", 1);
    $("#Sp_Roofs, #Sp_Sky, #Sp_Mountain").css("fill", '777777');});
    $("#fsp19").hover(function(){$("#fsp19").toggle();})


$("#fsp20").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Hall, #Sp_Door, #Sp_Floor").css("fill", '000000');
    }, function() {
        $("#fsp20").css("opacity", 1);
    $("#Sp_Hall, #Sp_Door, #Sp_Floor").css("fill", '777777');});
    $("#fsp20").hover(function(){$("#fsp20").toggle();})


$("#fsp21").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Grass, #Sp_Sky, #Sp_Tree").css("fill", '000000');
    }, function() {
        $("#fsp21").css("opacity", 1);
    $("#Sp_Grass, #Sp_Sky, #Sp_Tree").css("fill", '777777');});
    $("#fsp21").hover(function(){$("#fsp21").toggle();})


$("#fsp22").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Street, #Sp_ParkedCar, #Sp_Plant, #Sp_Tree, #Sp_House, #Sp_Sky").css("fill", '000000');
    }, function() {
        $("#fsp22").css("opacity", 1);
    $("#Sp_Street, #Sp_ParkedCar, #Sp_Plant, #Sp_Tree, #Sp_House, #Sp_Sky").css("fill", '777777');});
    $("#fsp22").hover(function(){$("#fsp22").toggle();})


$("#fsp23").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_PropertyGate, #Sp_Grass, #Sp_Tree, #Sp_IdentifiableHuman, #Sp_LampPost, #Sp_Cabin").css("fill", '000000');
    }, function() {
        $("#fsp23").css("opacity", 1);
    $("#Sp_PropertyGate, #Sp_Grass, #Sp_Tree, #Sp_IdentifiableHuman, #Sp_LampPost, #Sp_Cabin").css("fill", '777777');});
    $("#fsp23").hover(function(){$("#fsp23").toggle();})


$("#fsp24").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Table, #Sp_Chair, #Sp_Tree, #Sp_Railing, #Sp_Rock, #Sp_Barrel").css("fill", '000000');
    }, function() {
        $("#fsp24").css("opacity", 1);
    $("#Sp_Table, #Sp_Chair, #Sp_Tree, #Sp_Railing, #Sp_Rock, #Sp_Barrel").css("fill", '777777');});
    $("#fsp24").hover(function(){$("#fsp24").toggle();})


$("#fsp25").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Sp_Street, #Sp_MovingCar, #Sp_Tree, #Sp_Roadsign, #Sp_Bridge").css("fill", '000000');
    }, function() {
        $("#fsp25").css("opacity", 1);
    $("#Sp_Street, #Sp_MovingCar, #Sp_Tree, #Sp_Roadsign, #Sp_Bridge").css("fill", '777777');});
    $("#fsp25").hover(function(){$("#fsp25").toggle();})

// HOVER USA US

$("#fus01").hover(function(){
    $("this").css("opacity", 0.0);
        $("##Us_Advertisement, #Us_ParkedCar, #Us_Street, #Us_Tree, #Us_Sky").css("fill", '000000');
    }, function() {
        $("#fus01").css("opacity", 1);
    $("#Us_Advertisement, #Us_ParkedCar, #Us_Street, #Us_Tree, #Us_Sky").css("fill", '777777');});
    $("#fus01").hover(function(){$("#fus01").toggle();})

$("#fus02").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_#Us_Showcase, #Us_ElectronicProducts, #Us_Plant, #Us_GlassDoor, #Us_AlarmKeypad").css("fill", '000000');
    }, function() {
        $("#fus02").css("opacity", 1);
    $("#Us_Showcase, #Us_ElectronicProducts, #Us_Plant, #Us_GlassDoor, #Us_AlarmKeypad").css("fill", '777777');});
    $("#fus02").hover(function(){$("#fus02").toggle();})

$("#fus03").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Unknown").css("fill", '000000');
    }, function() {
        $("#fus03").css("opacity", 1);
    $("#Us_Unknown").css("fill", '777777');});
    $("#fus03").hover(function(){$("#fus03").toggle();})

$("#fus04").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Advertisement, #Us_Street, #Us_House, #Us_Tree, #Us_Mountain").css("fill", '000000');
    }, function() {
        $("#fus04").css("opacity", 1);
    $("#Us_Advertisement, #Us_Street, #Us_House, #Us_Tree, #Us_Mountain").css("fill", '777777');});
    $("#fus04").hover(function(){$("#fus04").toggle();})

$("#fus05").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Street, #Us_Sidewalk, #Us_Roadsign, #Us_PropertyGate, #Us_Chair, #Us_Grass").css("fill", '000000');
    }, function() {
        $("#fus05").css("opacity", 1);
    $("#Us_Street, #Us_Sidewalk, #Us_Roadsign, #Us_PropertyGate, #Us_Chair, #Us_Grass").css("fill", '777777');});
    $("#fus05").hover(function(){$("#fus05").toggle();})

$("#fus06").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Pool, #Us_Grass, #Us_HotelRooms, #Us_Table, #Us_Chair").css("fill", '000000');
    }, function() {
        $("#fus06").css("opacity", 1);
    $("#Us_Pool, #Us_Grass, #Us_HotelRooms, #Us_Table, #Us_Chair").css("fill", '777777');});
    $("#fus06").hover(function(){$("#fus06").toggle();})

$("#fus07").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Beach, #Us_Sea, #Us_Sky").css("fill", '000000');
    }, function() {
        $("#fus07").css("opacity", 1);
    $("#Us_Beach, #Us_Sea, #Us_Sky").css("fill", '777777');});
    $("#fus07").hover(function(){$("#fus07").toggle();})

$("#fus08").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Grass, #Us_Street, #Us_ParkedCar, #Us_House, #Us_railing").css("fill", '000000');
    }, function() {
        $("#fus08").css("opacity", 1);
    $("#Us_Grass, #Us_Street, #Us_ParkedCar, #Us_House, #Us_railing").css("fill", '777777');});
    $("#fus08").hover(function(){$("#fus08").toggle();})

$("#fus09").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_MetallicStructure, #Us_BrokenObject").css("fill", '000000');
    }, function() {
        $("#fus09").css("opacity", 1);
    $("#Us_MetallicStructure, #Us_BrokenObject").css("fill", '777777');});
    $("#fus09").hover(function(){$("#fus09").toggle();})

$("#fus10").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_MetallicStructure, #Us_BrokenObject").css("fill", '000000');
    }, function() {
        $("#fus10").css("opacity", 1);
    $("#Us_MetallicStructure, #Us_BrokenObject").css("fill", '777777');});
    $("#fus10").hover(function(){$("#fus10").toggle();})

$("#fus11").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Grass, #Us_Street, #Us_ParkedCar, #Us_House, #Us_Railing").css("fill", '000000');
    }, function() {
        $("#fus11").css("opacity", 1);
    $("#Us_Grass, #Us_Street, #Us_ParkedCar, #Us_House, #Us_Railing").css("fill", '777777');});
    $("#fus11").hover(function(){$("#fus11").toggle();})

$("#fus12").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Grass, #Us_WoodSticks, #Us_Pot").css("fill", '000000');
    }, function() {
        $("#fus12").css("opacity", 1);
    $("#Us_Grass, #Us_WoodSticks, #Us_Pot").css("fill", '777777');});
    $("#fus12").hover(function(){$("#fus12").toggle();})

$("#fus13").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_WoodenSurface").css("fill", '000000');
    }, function() {
        $("#fus13").css("opacity", 1);
    $("#Us_WoodenSurface").css("fill", '777777');});
    $("#fus13").hover(function(){$("#fus13").toggle();})

$("#fus14").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Street, #Us_Grass, #Us_Tree, #Us_Ceiling, #Us_Lake, #Us_Mountains").css("fill", '000000');
    }, function() {
        $("#fus14").css("opacity", 1);
    $("#Us_Street, #Us_Grass, #Us_Tree, #Us_Ceiling, #Us_Lake, #Us_Mountains").css("fill", '777777');});
    $("#fus14").hover(function(){$("#fus14").toggle();})

$("#fus15").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Aquarium").css("fill", '000000');
    }, function() {
        $("#fus15").css("opacity", 1);
    $("#Us_Aquarium").css("fill", '777777');});
    $("#fus15").hover(function(){$("#fus15").toggle();})


$("#fus16").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Tree, #Us_Lake, #Us_HouseOnTheLake").css("fill", '000000');
    }, function() {
        $("#fus16").css("opacity", 1);
    $("#Us_Tree, #Us_Lake, #Us_HouseOnTheLake").css("fill", '777777');});
    $("#fus16").hover(function(){$("#fus16").toggle();})

$("#fus17").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_#Us_Columns, #Us_Grass, #Us_Tree, #Us_Street").css("fill", '000000');
    }, function() {
        $("#fus17").css("opacity", 1);
    $("#Us_Columns, #Us_Grass, #Us_Tree, #Us_Street").css("fill", '777777');});
    $("#fus17").hover(function(){$("#fus17").toggle();})

$("#fus18").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_MovingCar, #Us_ParkedCar, #Us_Street, #Us_House, #Us_Grass").css("fill", '000000');
    }, function() {
        $("#fus18").css("opacity", 1);
    $("#Us_MovingCar, #Us_ParkedCar, #Us_Street, #Us_House, #Us_Grass").css("fill", '777777');});
    $("#fus18").hover(function(){$("#fus18").toggle();})


$("#fus19").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Plant, #Us_Chair, #Us_GlassDoor, #Us_Grass, #Us_TrashCan").css("fill", '000000');
    }, function() {
        $("#fus19").css("opacity", 1);
    $("#Us_Plant, #Us_Chair, #Us_GlassDoor, #Us_Grass, #Us_TrashCan").css("fill", '777777');});
    $("#fus19").hover(function(){$("#fus19").toggle();})


$("#fus20").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Road, #Us_Grass, #Us_Tree").css("fill", '000000');
    }, function() {
        $("#fus20").css("opacity", 1);
    $("#Us_Road, #Us_Grass, #Us_Tree").css("fill", '777777');});
    $("#fus20").hover(function(){$("#fus20").toggle();})


$("#fus21").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Street, #Us_MovingCar, #Us_PropertyGate, #Us_Grass, #Us_Yard").css("fill", '000000');
    }, function() {
        $("#fus21").css("opacity", 1);
    $("#Us_Street, #Us_MovingCar, #Us_PropertyGate, #Us_Grass, #Us_Yard").css("fill", '777777');});
    $("#fus21").hover(function(){$("#fus21").toggle();})


$("#fus22").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_ParkingLot, #Us_ParkedCar, #Us_Stores, #Us_Grass, #Us_Tree, #Us_LampPost, #Us_RoadSign").css("fill", '000000');
    }, function() {
        $("#fus22").css("opacity", 1);
    $("#Us_ParkingLot, #Us_ParkedCar, #Us_Stores, #Us_Grass, #Us_Tree, #Us_LampPost, #Us_RoadSign").css("fill", '777777');});
    $("#fus22").hover(function(){$("#fus22").toggle();})


$("#fus23").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Lake, #Us_Road, #Us_Tree, #Us_House, #Us_Grass, #Us_Rock, #Us_UnidentifiableHuman").css("fill", '000000');
    }, function() {
        $("#fus23").css("opacity", 1);
    $("#Us_Lake, #Us_Road, #Us_Tree, #Us_House, #Us_Grass, #Us_Rock, #Us_UnidentifiableHuman").css("fill", '777777');});
    $("#fus23").hover(function(){$("#fus23").toggle();})


$("#fus24").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Street, #Us_PropertyWall").css("fill", '000000');
    }, function() {
        $("#fus24").css("opacity", 1);
    $("#Us_Street, #Us_PropertyWall").css("fill", '777777');});
    $("#fus24").hover(function(){$("#fus24").toggle();})


$("#fus25").hover(function(){
    $("this").css("opacity", 0.0);
        $("#Us_Table, #Us_Chair, #Us_OfficeMaterial, #Us_GlassDoor, #Us_UnidentifiableHuman").css("fill", '000000');
    }, function() {
        $("#fus25").css("opacity", 1);
    $("#Us_Table, #Us_Chair, #Us_OfficeMaterial, #Us_GlassDoor, #Us_UnidentifiableHuman").css("fill", '777777');});
    $("#fus25").hover(function(){$("#fus25").toggle();})


//WORDCLOUD

//WORDCLOUD GENERAL ACTIVATION TO GRAY
$("#Br_WordCloud").css("fill", '777777');
$("#Co_WordCloud").css("fill", '777777');
$("#In_WordCloud").css("fill", '777777');
$("#It_WordCloud").css("fill", '777777');
$("#Sp_WordCloud").css("fill", '777777');
$("#Us_WordCloud").css("fill", '777777');

//WORDCLOUD BRASIL

//NEXT KEYWORD
$("#Street").hover(function(){
    $("#Street").css("color", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'E5E5E5').css("opacity", 0.9);
 $("#fbr03,#fbr06,#fbr07,#fbr09,#fbr12,#fbr15,#fbr16,#fbr18,#fbr20,#fbr21,#fbr22,#fbr23,#fbr25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Street").css("color", '777777');
 $("#fbr03,#fbr06,#fbr07,#fbr09,#fbr12,#fbr15,#fbr16,#fbr18,#fbr20,#fbr21,#fbr22,#fbr23,#fbr25").css("opacity", 1); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Street").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#ParkedCar").hover(function(){ $("#ParkedCar").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr03,#fbr07,#fbr09,#fbr12,#fbr15,#fbr16,#fbr18,#fbr20,#fbr21,#fbr22,#fbr25").css("opacity", 0);
   //go back to original
    }, function() {
$("#ParkedCar").css("fill", '777777');
 $("#fbr03,#fbr07,#fbr09,#fbr12,#fbr15,#fbr16,#fbr18,#fbr20,#fbr21,#fbr22,#fbr25").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#ParkedCar").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Sidewalk").hover(function(){ $("#Sidewalk").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr03,#fbr07,#fbr09,#fbr12,#fbr16,#fbr20,#fbr21,#fbr23,#fbr25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sidewalk").css("fill", '777777');
 $("#fbr03,#fbr07,#fbr09,#fbr12,#fbr16,#fbr20,#fbr21,#fbr23,#fbr25").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sidewalk").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Plant").hover(function(){ $("#Plant").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr03,#fbr10,#fbr11,#fbr14,#fbr15,#fbr18,#fbr22,#fbr23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Plant").css("fill", '777777');
 $("#fbr03,#fbr10,#fbr11,#fbr14,#fbr15,#fbr18,#fbr22,#fbr23").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Plant").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Tree").hover(function(){ $("#Tree").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr05,#fbr12,#fbr15,#fbr18,#fbr20,#fbr21,#fbr23,#fbr24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Tree").css("fill", '777777');
 $("#fbr05,#fbr12,#fbr15,#fbr18,#fbr20,#fbr21,#fbr23,#fbr24").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Tree").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Gate").hover(function(){ $("#Gate").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr05,#fbr07,#fbr18,#fbr20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Gate").css("fill", '777777');
 $("#fbr05,#fbr07,#fbr18,#fbr20").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Gate").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#PropertyWall").hover(function(){ $("#PropertyWall").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr03,#fbr12,#fbr17,#fbr20").css("opacity", 0);
   //go back to original
    }, function() {
$("#PropertyWall").css("fill", '777777');
 $("#fbr03,#fbr12,#fbr17,#fbr20").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#PropertyWall").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#LampPost").hover(function(){ $("#LampPost").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr07,#fbr16,#fbr20,#fbr24").css("opacity", 0);
   //go back to original
    }, function() {
$("#LampPost").css("fill", '777777');
 $("#fbr07,#fbr16,#fbr20,#fbr24").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#LampPost").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Wall").hover(function(){ $("#Wall").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr13,#fbr17,#fbr22").css("opacity", 0);
   //go back to original
    }, function() {
$("#Wall").css("fill", '777777');
 $("#fbr13,#fbr17,#fbr22").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Wall").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Wire").hover(function(){ $("#Wire").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr11,#fbr20,#fbr24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Wire").css("fill", '777777');
 $("#fbr11,#fbr20,#fbr24").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Wire").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#PropertyGate").hover(function(){ $("#PropertyGate").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr07,#fbr21,#fbr25").css("opacity", 0);
   //go back to original
    }, function() {
$("#PropertyGate").css("fill", '777777');
 $("#fbr07,#fbr21,#fbr25").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#PropertyGate").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#MovingCar").hover(function(){ $("#MovingCar").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr06,#fbr24,#fbr25").css("opacity", 0);
   //go back to original
    }, function() {
$("#MovingCar").css("fill", '777777');
 $("#fbr06,#fbr24,#fbr25").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#MovingCar").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Driveway").hover(function(){ $("#Driveway").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr21,#fbr22,#fbr23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Driveway").css("fill", '777777');
 $("#fbr21,#fbr22,#fbr23").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Driveway").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Road").hover(function(){ $("#Road").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr02,#fbr24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Road").css("fill", '777777');
 $("#fbr02,#fbr24").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Road").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Grass").hover(function(){ $("#Grass").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr13,#fbr18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Grass").css("fill", '777777');
 $("#fbr13,#fbr18").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Grass").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Bench").hover(function(){ $("#Bench").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr10,#fbr13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Bench").css("fill", '777777');
 $("#fbr10,#fbr13").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Bench").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#CardboardBox").hover(function(){ $("#CardboardBox").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr19").css("opacity", 0);
   //go back to original
    }, function() {
$("#CardboardBox").css("fill", '777777');
 $("#fbr19").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#CardboardBox").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#BusinessFront").hover(function(){ $("#BusinessFront").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr16").css("opacity", 0);
   //go back to original
    }, function() {
$("#BusinessFront").css("fill", '777777');
 $("#fbr16").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#BusinessFront").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#FrontDesk").hover(function(){ $("#FrontDesk").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr14").css("opacity", 0);
   //go back to original
    }, function() {
$("#FrontDesk").css("fill", '777777');
 $("#fbr14").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#FrontDesk").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Computer").hover(function(){ $("#Computer").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Computer").css("fill", '777777');
 $("#fbr14").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Computer").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Display").hover(function(){ $("#Display").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Display").css("fill", '777777');
 $("#fbr14").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Display").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Fan").hover(function(){ $("#Fan").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Fan").css("fill", '777777');
 $("#fbr14").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Fan").hover(function(){$().toggle();})
//BEGIN
$("#Drawer").hover(function(){ $("#Drawer").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Drawer").css("fill", '777777');
 $("#fbr14").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Drawer").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Newsstand").hover(function(){ $("#Newsstand").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr15").css("opacity", 0);
   //go back to original
    }, function() {
$("#Newsstand").css("fill", '777777');
 $("#fbr15").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Newsstand").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Microwave").hover(function(){ $("#Microwave").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Microwave").css("fill", '777777');
 $("#fbr19").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Microwave").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Fridge").hover(function(){ $("#Fridge").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Fridge").css("fill", '777777');
 $("#fbr19").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Fridge").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Laptop").hover(function(){ $("#Laptop").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Laptop").css("fill", '777777');
 $("#fbr19").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Laptop").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#3Dprinter").hover(function(){ $("#3Dprinter").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr01").css("opacity", 0);
   //go back to original
    }, function() {
$("#3Dprinter").css("fill", '777777');
 $("#fbr01").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#3Dprinter").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#StoreSign").hover(function(){ $("#StoreSign").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr10").css("opacity", 0);
   //go back to original
    }, function() {
$("#StoreSign").css("fill", '777777');
 $("#fbr10").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#StoreSign").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Table").hover(function(){ $("#Table").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Table").css("fill", '777777');
 $("#fbr13").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Table").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#GlassDoor").hover(function(){ $("#GlassDoor").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr08").css("opacity", 0);
   //go back to original
    }, function() {
$("#GlassDoor").css("fill", '777777');
 $("#fbr08").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#GlassDoor").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#StreetNumber").hover(function(){ $("#StreetNumber").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr03").css("opacity", 0);
   //go back to original
    }, function() {
$("#StreetNumber").css("fill", '777777');
 $("#fbr03").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#StreetNumber").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Warehouse").hover(function(){ $("#Warehouse").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr04").css("opacity", 0);
   //go back to original
    }, function() {
$("#Warehouse").css("fill", '777777');
 $("#fbr04").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Warehouse").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Rack").hover(function(){ $("#Rack").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr04").css("opacity", 0);
   //go back to original
    }, function() {
$("#Rack").css("fill", '777777');
 $("#fbr04").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Rack").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Box").hover(function(){ $("#Box").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr04").css("opacity", 0);
   //go back to original
    }, function() {
$("#Box").css("fill", '777777');
 $("#fbr04").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Box").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#FireExtinguisher").hover(function(){ $("#FireExtinguisher").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr04").css("opacity", 0);
   //go back to original
    }, function() {
$("#FireExtinguisher").css("fill", '777777');
 $("#fbr04").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#FireExtinguisher").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#PedestrianAccess").hover(function(){ $("#PedestrianAccess").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr05").css("opacity", 0);
   //go back to original
    }, function() {
$("#PedestrianAccess").css("fill", '777777');
 $("#fbr05").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#PedestrianAccess").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Fence").hover(function(){ $("#Fence").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Fence").css("fill", '777777');
 $("#fbr06").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Fence").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Lamp").hover(function(){ $("#Lamp").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Lamp").css("fill", '777777');
 $("#fbr06").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Lamp").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Store").hover(function(){ $("#Store").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Store").css("fill", '777777');
 $("#fbr09").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Store").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#BusinessSign").hover(function(){ $("#BusinessSign").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr12").css("opacity", 0);
   //go back to original
    }, function() {
$("#BusinessSign").css("fill", '777777');
 $("#fbr12").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#BusinessSign").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Beverage").hover(function(){ $("#Beverage").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Beverage").css("fill", '777777');
 $("#fbr09").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Beverage").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#TrashBin").hover(function(){ $("#TrashBin").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr09").css("opacity", 0);
   //go back to original
    }, function() {
$("#TrashBin").css("fill", '777777');
 $("#fbr09").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#TrashBin").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#BarbecueGrill").hover(function(){ $("#BarbecueGrill").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr09").css("opacity", 0);
   //go back to original
    }, function() {
$("#BarbecueGrill").css("fill", '777777');
 $("#fbr09").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#BarbecueGrill").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Clothes").hover(function(){ $("#Clothes").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr10").css("opacity", 0);
   //go back to original
    }, function() {
$("#Clothes").css("fill", '777777');
 $("#fbr10").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Clothes").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Shoes").hover(function(){ $("#Shoes").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr10").css("opacity", 0);
   //go back to original
    }, function() {
$("#Shoes").css("fill", '777777');
 $("#fbr10").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Shoes").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Mannequin").hover(function(){ $("#Mannequin").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr10").css("opacity", 0);
   //go back to original
    }, function() {
$("#Mannequin").css("fill", '777777');
 $("#fbr10").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Mannequin").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#ElectronicCircuit").hover(function(){ $("#ElectronicCircuit").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr11").css("opacity", 0);
   //go back to original
    }, function() {
$("#ElectronicCircuit").css("fill", '777777');
 $("#fbr11").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#ElectronicCircuit").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Surface").hover(function(){ $("#Surface").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr11").css("opacity", 0);
   //go back to original
    }, function() {
$("#Surface").css("fill", '777777');
 $("#fbr11").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Surface").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Awning").hover(function(){ $("#Awning").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Awning").css("fill", '777777');
 $("#fbr12").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Awning").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#BusStop").hover(function(){ $("#BusStop").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr25").css("opacity", 0);
   //go back to original
    }, function() {
$("#BusStop").css("fill", '777777');
 $("#fbr25").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#BusStop").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Drain").hover(function(){ $("#Drain").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Drain").css("fill", '777777');
 $("#fbr17").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Drain").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Corridor").hover(function(){ $("#Corridor").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Corridor").css("fill", '777777');
 $("#fbr17").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Corridor").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Window").hover(function(){ $("#Window").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Window").css("fill", '777777');
 $("#fbr17").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Window").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#ParkedMotorbike").hover(function(){ $("#ParkedMotorbike").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr18").css("opacity", 0);
   //go back to original
    }, function() {
$("#ParkedMotorbike").css("fill", '777777');
 $("#fbr18").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#ParkedMotorbike").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Staircase").hover(function(){ $("#Staircase").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Staircase").css("fill", '777777');
 $("#fbr19").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Staircase").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#Overpass").hover(function(){ $("#Overpass").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Overpass").css("fill", '777777');
 $("#fbr24").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Overpass").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#RoadSign").hover(function(){ $("#RoadSign").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr24").css("opacity", 0);
   //go back to original
    }, function() {
$("#RoadSign").css("fill", '777777');
 $("#fbr24").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#RoadSign").hover(function(){$().toggle();})
//NEXT KEYWORD
$("#PlasticBench").hover(function(){ $("#PlasticBench").css("fill", '000000');
    $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("fill", 'e5e5e5');
        $("#ColorUnknown, #ColorCommercial, #ColorIndustrial, #ColorResidential, #ColorOthers, #ColorCity").css("opacity", 0.9);
 $("#fbr19").css("opacity", 0);
   //go back to original
    }, function() {
$("#PlasticBench").css("fill", '777777');
 $("#fbr19").css("opacity", 0.75); $("#ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#PlasticBench").hover(function(){$().toggle();})

//WORDCLOUD COLOMBIA
//NEXT KEYWORD
//NEXT KEYWORD
$("#Co_Grass").hover(function(){
    $("#Co_Grass").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco05, #fco10, #fco14, #fco15, #fco17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Grass").css("fill", '777777');
 $("#fco05, #fco10, #fco14, #fco15, #fco17").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Grass").hover(function(){$().toggle();});
$("#Co_Rack").hover(function(){
    $("#Co_Rack").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco02, #fco06, #fco18, #fco21, #fco23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Rack").css("fill", '777777');
 $("#fco02, #fco06, #fco18, #fco21, #fco23").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Rack").hover(function(){$().toggle();});
$("#Co_ConstructionMaterials").hover(function(){
    $("#Co_ConstructionMaterials").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco07").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_ConstructionMaterials").css("fill", '777777');
 $("#fco07").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_ConstructionMaterials").hover(function(){$().toggle();});

$("#Co_ParkedCar").hover(function(){
    $("#Co_ParkedCar").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco02, #fco03, #fco05, #fco08, #fco11").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_ParkedCar").css("fill", '777777');
 $("#fco02, #fco03, #fco05, #fco08, #fco11").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_ParkedCar").hover(function(){$().toggle();})
$("#Co_Street").hover(function(){
    $("#Co_Street").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco02, #fco08, #fco09, #fco10, #fco11, #fco19, #fco22, #fco23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Street").css("fill", '777777');
 $("#fco02, #fco08, #fco09, #fco10, #fco11, #fco19, #fco22, #fco23").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Street").hover(function(){$().toggle();})

$("#Co_PropertyGate").hover(function(){
    $("#Co_PropertyGate").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco03, #fco08, #fco10, #fco11, #fco17, #fco22").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_PropertyGate").css("fill", '777777');
 $("#fco03, #fco08, #fco10, #fco11, #fco17, #fco22").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_PropertyGate").hover(function(){$().toggle();});

$("#Co_MovingCar").hover(function(){
    $("#Co_MovingCar").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco02, #fco09, #fco11, #fco17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_MovingCar").css("fill", '777777');
 $("#fco02, #fco09, #fco11, #fco17").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_MovingCar").hover(function(){$().toggle();});

$("#Co_Wall").hover(function(){
    $("#Co_Wall").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco03, #fco12, #fco13, #fco25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Wall").css("fill", '777777');
 $("#fco03, #fco12, #fco13, #fco25").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Wall").hover(function(){$().toggle();});

$("#Co_House").hover(function(){
    $("#Co_House").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco04, #fco08, #fco17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_House").css("fill", '777777');
 $("#fco04, #fco08, #fco17").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_House").hover(function(){$().toggle();});

$("#Co_Floor").hover(function(){
    $("#Co_Floor").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco03, #fco06, #fco13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Floor").css("fill", '777777');
 $("#fco03, #fco06, #fco13").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Floor").hover(function(){$().toggle();});

$("#Co_Chair").hover(function(){
    $("#Co_Chair").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco06, #fco13, #fco23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Chair").css("fill", '777777');
 $("#fco06, #fco13, #fco23").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Chair").hover(function(){$().toggle();});

$("#Co_UnidentifiableHuman").hover(function(){
    $("#Co_UnidentifiableHuman").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco15, #fco20, #fco22").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_UnidentifiableHuman").css("fill", '777777');
 $("#fco15, #fco20, #fco22").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_UnidentifiableHuman").hover(function(){$().toggle();});

$("#Co_Window").hover(function(){
    $("#Co_Window").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco05, #fco18, #fco23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Window").css("fill", '777777');
 $("#fco05, #fco18, #fco23").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Window").hover(function(){$().toggle();});

$("#Co_Roof").hover(function(){
    $("#Co_Roof").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco07, #fco10, #fco19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Roof").css("fill", '777777');
 $("#fco07, #fco10, #fco19").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Roof").hover(function(){$().toggle();});

$("#Co_ParkingLot").hover(function(){
    $("#Co_ParkingLot").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco04, #fco05").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_ParkingLot").css("fill", '777777');
 $("#fco04, #fco05").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_ParkingLot").hover(function(){$().toggle();});

$("#Co_Stairs").hover(function(){
    $("#Co_Stairs").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco08, #fco15").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Stairs").css("fill", '777777');
 $("#fco08, #fco15").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Stairs").hover(function(){$().toggle();});

$("#Co_Motorcycle").hover(function(){
    $("#Co_Motorcycle").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco09, #fco11").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Motorcycle").css("fill", '777777');
 $("#fco09, #fco11").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Motorcycle").hover(function(){$().toggle();});
$("#Co_Sidewalk").hover(function(){ $("#Co_Sidewalk").css("fill", '000000');
 $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco10, #fco22").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Sidewalk").css("fill", '777777');
 $("#fco10, #fco22").css("opacity", 0.75); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Sidewalk").hover(function(){$().toggle();})

$("#Co_LampPost").hover(function(){
    $("#Co_LampPost").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco9, #fco14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_LampPost").css("fill", '777777');
 $("#fco9, #fco14").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_LampPost").hover(function(){$().toggle();})

$("#Co_Machinery").hover(function(){
    $("#Co_Machinery").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco14, #fco15").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Machinery").css("fill", '777777');
 $("#fco14, #fco15").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Machinery").hover(function(){$().toggle();});

$("#Co_Hall").hover(function(){
    $("#Co_Hall").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco18, #fco24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Hall").css("fill", '777777');
 $("#fco18, #fco24").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Hall").hover(function(){$().toggle();});

$("#Co_Table").hover(function(){
    $("#Co_Table").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco06, #fco13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Table").css("fill", '777777');
 $("#fco06, #fco13").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Table").hover(function(){$().toggle();});

$("#Co_Sky").hover(function(){
    $("#Co_Sky").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco04, #fco07").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Sky").css("fill", '777777');
 $("#fco04, #fco07").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Sky").hover(function(){$().toggle();});

$("#Co_Plant").hover(function(){
    $("#Co_Plant").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco06, #fco19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Plant").css("fill", '777777');
 $("#fco06, #fco19").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Plant").hover(function(){$().toggle();});

$("#Co_PropertyWall").hover(function(){
    $("#Co_PropertyWall").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco04, #fco06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_PropertyWall").css("fill", '777777');
 $("#fco04, #fco06").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_PropertyWall").hover(function(){$().toggle();});
$("#Co_Trash").hover(function(){
    $("#Co_Trash").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Trash").css("fill", '777777');
 $("#fco19").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Trash").hover(function(){$().toggle();});

$("#Co_Light").hover(function(){
    $("#Co_Light").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco16").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Light").css("fill", '777777');
 $("#fco16").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Light").hover(function(){$().toggle();});

$("#Co_Booth").hover(function(){
    $("#Co_Booth").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Booth").css("fill", '777777');
 $("#fco23").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Booth").hover(function(){$().toggle();});

$("#Co_Door").hover(function(){
    $("#Co_Door").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Door").css("fill", '777777');
 $("#fco24").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Door").hover(function(){$().toggle();});

$("#Co_Fence").hover(function(){
    $("#Co_Fence").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco04").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Fence").css("fill", '777777');
 $("#fco04").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Fence").hover(function(){$().toggle();});

$("#Co_Mirror").hover(function(){
    $("#Co_Mirror").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Mirror").css("fill", '777777');
 $("#fco06").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Mirror").hover(function(){$().toggle();});

$("#Co_Certificates").hover(function(){
    $("#Co_Certificates").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Certificates").css("fill", '777777');
 $("#fco25").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Certificates").hover(function(){$().toggle();});

$("#Co_Board").hover(function(){
    $("#Co_Board").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Board").css("fill", '777777');
 $("#fco23").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Board").hover(function(){$().toggle();});

$("#Co_Pet").hover(function(){
    $("#Co_Pet").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco02").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Pet").css("fill", '777777');
 $("#fco02").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Pet").hover(function(){$().toggle();});

$("#Co_School").hover(function(){
    $("#Co_School").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_School").css("fill", '777777');
 $("#fco09").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_School").hover(function(){$().toggle();});

$("#Co_MovingBus").hover(function(){
    $("#Co_MovingBus").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_MovingBus").css("fill", '777777');
 $("#fco09").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_MovingBus").hover(function(){$().toggle();});

$("#Co_Park").hover(function(){
    $("#Co_Park").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Park").css("fill", '777777');
 $("#fco09").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Park").hover(function(){$().toggle();});

$("#Co_IdentifiableHuman").hover(function(){
    $("#Co_IdentifiableHuman").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_IdentifiableHuman").css("fill", '777777');
 $("#fco09").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_IdentifiableHuman").hover(function(){$().toggle();});

$("#Co_InternalRoof").hover(function(){
    $("#Co_InternalRoof").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_InternalRoof").css("fill", '777777');
 $("#fco25").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_InternalRoof").hover(function(){$().toggle();});
$("#Co_Supplies").hover(function(){
    $("#Co_Supplies").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco01").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Supplies").css("fill", '777777');
 $("#fco01").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Supplies").hover(function(){$().toggle();});
$("#Co_OfficeMaterial").hover(function(){
    $("#Co_OfficeMaterial").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_OfficeMaterial").css("fill", '777777');
 $("#fco25").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_OfficeMaterial").hover(function(){$().toggle();});

$("#Co_Lamp").hover(function(){
    $("#Co_Lamp").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco12, #fco12, #fco14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Lamp").css("fill", '777777');
 $("#fco12, #fco12, #fco14").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Lamp").hover(function(){$().toggle();});

$("#Co_ConstructionWork").hover(function(){
    $("#Co_ConstructionWork").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco07").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_ConstructionWork").css("fill", '777777');
 $("#fco07").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_ConstructionWork").hover(function(){$().toggle();});

$("#Co_Balcony").hover(function(){
    $("#Co_Balcony").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco08").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Balcony").css("fill", '777777');
 $("#fco08").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Balcony").hover(function(){$().toggle();});

$("#Co_Human").hover(function(){
    $("#Co_Human").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco11").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Human").css("fill", '777777');
 $("#fco11").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Human").hover(function(){$().toggle();});

$("#Co_StackedBox").hover(function(){
    $("#Co_StackedBox").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_StackedBox").css("fill", '777777');
 $("#fco12").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_StackedBox").hover(function(){$().toggle();});

$("#Co_Backpack").hover(function(){
    $("#Co_Backpack").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Backpack").css("fill", '777777');
 $("#fco12").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Backpack").hover(function(){$().toggle();});

$("#Co_Groceries").hover(function(){
    $("#Co_Groceries").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Groceries").css("fill", '777777');
 $("#fco20").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Groceries").hover(function(){$().toggle();});

$("#Co_Wires").hover(function(){
    $("#Co_Wires").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Wires").css("fill", '777777');
 $("#fco21").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Wires").hover(function(){$().toggle();});

$("#Co_Fan").hover(function(){
    $("#Co_Fan").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Fan").css("fill", '777777');
 $("#fco20").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Fan").hover(function(){$().toggle();});

$("#Co_SewingMachine").hover(function(){
    $("#Co_SewingMachine").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco01").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_SewingMachine").css("fill", '777777');
 $("#fco01").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_SewingMachine").hover(function(){$().toggle();});

$("#Co_Products").hover(function(){
    $("#Co_Products").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco01").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Products").css("fill", '777777');
 $("#fco01").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Products").hover(function(){$().toggle();});

$("#Co_Clothes").hover(function(){
    $("#Co_Clothes").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco01").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Clothes").css("fill", '777777');
 $("#fco01").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Clothes").hover(function(){$().toggle();});

$("#Co_Fabric").hover(function(){
    $("#Co_Fabric").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco01").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Fabric").css("fill", '777777');
 $("#fco01").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Fabric").hover(function(){$().toggle();});

$("#Co_Experiment").hover(function(){
    $("#Co_Experiment").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Experiment").css("fill", '777777');
 $("#fco18").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Experiment").hover(function(){$().toggle();});

$("#Co_Server").hover(function(){
    $("#Co_Server").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Server").css("fill", '777777');
 $("#fco21").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Server").hover(function(){$().toggle();});

$("#Co_Bike").hover(function(){
    $("#Co_Bike").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Bike").css("fill", '777777');
 $("#fco09").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Bike").hover(function(){$().toggle();});

$("#Co_Tree").hover(function(){
    $("#Co_Tree").css("fill", '000000');
    $("#Co_ColorUnknown, #Co_ColorCommercial, #Co_ColorIndustrial, #Co_ColorResidential, #Co_ColorOthers, #Co_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fco05, #fco07, #fco08, #fco10, #fco14, #fco15, #fco17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Co_Tree").css("fill", '777777');
 $("#fco05, #fco07, #fco08, #fco10, #fco14, #fco15, #fco17").css("opacity", 1); $("#Co_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Co_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Co_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Co_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Co_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Co_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Co_Tree").hover(function(){$().toggle();})

})

// WORDCLOUD INDIA

$("#In_Window").hover(function(){
    $("#In_Window").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin08, #fin09, #fin10, #fin11, #fin16, #fin18, #fin19, #fin20, #fin21, #fin22").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Window").css("fill", '777777');
 $("#fin08, #fin09, #fin10, #fin11, #fin16, #fin18, #fin19, #fin20, #fin21, #fin22").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Window").hover(function(){$().toggle();})

$("#In_Chair").hover(function(){
    $("#In_Chair").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01, #fin02, #fin04, #fin05, #fin06, #fin08, #fin09, #fin19").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Chair").css("fill", '777777');
 $("#fin01, #fin02, #fin04, #fin05, #fin06, #fin08, #fin09, #fin19").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Chair").hover(function(){$().toggle();})

$("#In_Worker").hover(function(){
    $("#In_Worker").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin05, #fin07, #fin09, #fin11, #fin13, #fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Worker").css("fill", '777777');
 $("#fin05, #fin07, #fin09, #fin11, #fin13, #fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Worker").hover(function(){$().toggle();})

$("#In_Tree").hover(function(){
    $("#In_Tree").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin14, #fin17, #fin18, #fin21, #fin23").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Tree").css("fill", '777777');
 $("#fin14, #fin17, #fin18, #fin21, #fin23").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Tree").hover(function(){$().toggle();})

$("#In_IdentifiableHuman").hover(function(){
    $("#In_IdentifiableHuman").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01, #fin05, #fin07, #fin13, #fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_IdentifiableHuman").css("fill", '777777');
 $("#fin01, #fin05, #fin07, #fin13, #fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_IdentifiableHuman").hover(function(){$().toggle();})

$("#In_Door").hover(function(){
    $("#In_Door").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin02, #fin03, #fin04, #fin09, #fin11").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Door").css("fill", '777777');
 $("#fin02, #fin03, #fin04, #fin09, #fin11").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Door").hover(function(){$().toggle();})

$("#In_Machinery").hover(function(){
    $("#In_Machinery").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin11, #fin12, #fin13, #fin14, #fin16").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Machinery").css("fill", '777777');
 $("#fin11, #fin12, #fin13, #fin14, #fin16").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Machinery").hover(function(){$().toggle();})

$("#In_Wall").hover(function(){
    $("#In_Wall").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin14, #fin15, #fin18, #fin24").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Wall").css("fill", '777777');
 $("#fin14, #fin15, #fin18, #fin24").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Wall").hover(function(){$().toggle();})

$("#In_Paper").hover(function(){
    $("#In_Paper").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin03, #fin05, #fin06").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Paper").css("fill", '777777');
 $("#fin03, #fin05, #fin06").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Paper").hover(function(){$().toggle();})

$("#In_ParkedMotorbike").hover(function(){
    $("#In_ParkedMotorbike").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin22, #fin23, #fin24").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_ParkedMotorbike").css("fill", '777777');
 $("#fin22, #fin23, #fin24").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_ParkedMotorbike").hover(function(){$().toggle();})

$("#In_Plant").hover(function(){
    $("#In_Plant").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01, #fin22, #fin24").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Plant").css("fill", '777777');
 $("#fin01, #fin22, #fin24").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Plant").hover(function(){$().toggle();})

$("#In_ParkedCar").hover(function(){
    $("#In_ParkedCar").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin18, #fin23, #fin24").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_ParkedCar").css("fill", '777777');
 $("#fin18, #fin23, #fin24").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_ParkedCar").hover(function(){$().toggle();})

$("#In_Drawer").hover(function(){
    $("#In_Drawer").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin02, #fin07, #fin19").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Drawer").css("fill", '777777');
 $("#fin02, #fin07, #fin19").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Drawer").hover(function(){$().toggle();})

$("#In_Shed").hover(function(){
    $("#In_Shed").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin10, #fin11, #fin16").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Shed").css("fill", '777777');
 $("#fin10, #fin11, #fin16").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Shed").hover(function(){$().toggle();})

$("#In_Box").hover(function(){
    $("#In_Box").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin08, #fin13, #fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Box").css("fill", '777777');
 $("#fin08, #fin13, #fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Box").hover(function(){$().toggle();})

$("#In_Balcony").hover(function(){
    $("#In_Balcony").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17, #fin21, #fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Balcony").css("fill", '777777');
 $("#fin17, #fin21, #fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Balcony").hover(function(){$().toggle();})

$("#In_PropertyWall").hover(function(){
    $("#In_PropertyWall").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin18, #fin23").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_PropertyWall").css("fill", '777777');
 $("#fin18, #fin23").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_PropertyWall").hover(function(){$().toggle();})

$("#In_OtherProperties").hover(function(){
    $("#In_OtherProperties").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin21, #fin23").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_OtherProperties").css("fill", '777777');
 $("#fin21, #fin23").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_OtherProperties").hover(function(){$().toggle();})

$("#In_Ceiling").hover(function(){
    $("#In_Ceiling").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin19, #fin21, #fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Ceiling").css("fill", '777777');
 $("#fin19, #fin21, #fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Ceiling").hover(function(){$().toggle();})

$("#In_Grass").hover(function(){
    $("#In_Grass").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17, #fin22").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Grass").css("fill", '777777');
 $("#fin17, #fin22").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Grass").hover(function(){$().toggle();})

$("#In_Table").hover(function(){
    $("#In_Table").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17, #fin19").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Table").css("fill", '777777');
 $("#fin17, #fin19").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Table").hover(function(){$().toggle();})

$("#In_Computer").hover(function(){
    $("#In_Computer").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin05, #fin06").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Computer").css("fill", '777777');
 $("#fin05, #fin06").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Computer").hover(function(){$().toggle();})

$("#In_Staircase").hover(function(){
    $("#In_Staircase").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin08, #fin20").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Staircase").css("fill", '777777');
 $("#fin08, #fin20").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Staircase").hover(function(){$().toggle();})

$("#In_Sacks").hover(function(){
    $("#In_Sacks").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin10, #fin11").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Sacks").css("fill", '777777');
 $("#fin10, #fin11").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Sacks").hover(function(){$().toggle();})

$("#In_Pallet").hover(function(){
    $("#In_Pallet").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin10, #fin11").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Pallet").css("fill", '777777');
 $("#fin10, #fin11").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Pallet").hover(function(){$().toggle();})

$("#In_Street").hover(function(){
    $("#In_Street").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin23, #fin24").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Street").css("fill", '777777');
 $("#fin23, #fin24").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Street").hover(function(){$().toggle();})

$("#In_Stairs").hover(function(){
    $("#In_Stairs").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin03, #fin20").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Stairs").css("fill", '777777');
 $("#fin03, #fin20").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Stairs").hover(function(){$().toggle();})

$("#In_People").hover(function(){
    $("#In_People").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin16, #fin21").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_People").css("fill", '777777');
 $("#fin16, #fin21").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_People").hover(function(){$().toggle();})

$("#In_Desk").hover(function(){
    $("#In_Desk").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin02, #fin06").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Desk").css("fill", '777777');
 $("#fin02, #fin06").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Desk").hover(function(){$().toggle();})

$("#In_PersonalObjects").hover(function(){
    $("#In_PersonalObjects").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01, #fin02").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_PersonalObjects").css("fill", '777777');
 $("#fin01, #fin02").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_PersonalObjects").hover(function(){$().toggle();})

$("#In_Seats").hover(function(){
    $("#In_Seats").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Seats").css("fill", '777777');
 $("#fin17").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Seats").hover(function(){$().toggle();})

$("#In_Net").hover(function(){
    $("#In_Net").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Net").css("fill", '777777');
 $("#fin17").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Net").hover(function(){$().toggle();})

$("#In_Bench").hover(function(){
    $("#In_Bench").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Bench").css("fill", '777777');
 $("#fin17").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Bench").hover(function(){$().toggle();})

$("#In_Garden").hover(function(){
    $("#In_Garden").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Garden").css("fill", '777777');
 $("#fin17").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Garden").hover(function(){$().toggle();})

$("#In_Deposit").hover(function(){
    $("#In_Deposit").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin16").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Deposit").css("fill", '777777');
 $("#fin16").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Deposit").hover(function(){$().toggle();})

$("#In_Tube").hover(function(){
    $("#In_Tube").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin13, #fin16").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Tube").css("fill", '777777');
 $("#fin13, #fin16").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Tube").hover(function(){$().toggle();})

$("#In_FrontDesk").hover(function(){
    $("#In_FrontDesk").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_FrontDesk").css("fill", '777777');
 $("#fin01").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_FrontDesk").hover(function(){$().toggle();})

$("#In_WoodenBarrier").hover(function(){
    $("#In_WoodenBarrier").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin20").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_WoodenBarrier").css("fill", '777777');
 $("#fin20").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_WoodenBarrier").hover(function(){$().toggle();})

$("#In_TrashBin").hover(function(){
    $("#In_TrashBin").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin17").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_TrashBin").css("fill", '777777');
 $("#fin17").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_TrashBin").hover(function(){$().toggle();})

$("#In_ParkedBike").hover(function(){
    $("#In_ParkedBike").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin23").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_ParkedBike").css("fill", '777777');
 $("#fin23").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_ParkedBike").hover(function(){$().toggle();})

$("#In_WalkingHuman").hover(function(){
    $("#In_WalkingHuman").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_WalkingHuman").css("fill", '777777');
 $("#fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_WalkingHuman").hover(function(){$().toggle();})

$("#In_Awning").hover(function(){
    $("#In_Awning").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Awning").css("fill", '777777');
 $("#fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Awning").hover(function(){$().toggle();})

$("#In_AutoRickshaw").hover(function(){
    $("#In_AutoRickshaw").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_AutoRickshaw").css("fill", '777777');
 $("#fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_AutoRickshaw").hover(function(){$().toggle();})

$("#In_Garage").hover(function(){
    $("#In_Garage").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Garage").css("fill", '777777');
 $("#fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Garage").hover(function(){$().toggle();})

$("#In_Sidewalk").hover(function(){
    $("#In_Sidewalk").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin23").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Sidewalk").css("fill", '777777');
 $("#fin23").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Sidewalk").hover(function(){$().toggle();})

$("#In_Fence").hover(function(){
    $("#In_Fence").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin23").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Fence").css("fill", '777777');
 $("#fin23").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Fence").hover(function(){$().toggle();})

$("#In_Entrance").hover(function(){
    $("#In_Entrance").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin22").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Entrance").css("fill", '777777');
 $("#fin22").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Entrance").hover(function(){$().toggle();})

$("#In_Buffet").hover(function(){
    $("#In_Buffet").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin19").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Buffet").css("fill", '777777');
 $("#fin19").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Buffet").hover(function(){$().toggle();})

$("#In_Steps").hover(function(){
    $("#In_Steps").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin22").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Steps").css("fill", '777777');
 $("#fin22").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Steps").hover(function(){$().toggle();})

$("#In_Mud").hover(function(){
    $("#In_Mud").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin21").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Mud").css("fill", '777777');
 $("#fin21").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Mud").hover(function(){$().toggle();})

$("#In_Wood").hover(function(){
    $("#In_Wood").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin21").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Wood").css("fill", '777777');
 $("#fin21").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Wood").hover(function(){$().toggle();})

$("#In_Rooftop").hover(function(){
    $("#In_Rooftop").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin21").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Rooftop").css("fill", '777777');
 $("#fin21").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Rooftop").hover(function(){$().toggle();})

$("#In_ColorfulWall").hover(function(){
    $("#In_ColorfulWall").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin20").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_ColorfulWall").css("fill", '777777');
 $("#fin20").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_ColorfulWall").hover(function(){$().toggle();})

$("#In_Object").hover(function(){
    $("#In_Object").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Object").css("fill", '777777');
 $("#fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Object").hover(function(){$().toggle();})

$("#In_DecorativeCartoon").hover(function(){
    $("#In_DecorativeCartoon").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin20").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_DecorativeCartoon").css("fill", '777777');
 $("#fin20").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_DecorativeCartoon").hover(function(){$().toggle();})

$("#In_DecorativeCartoon").hover(function(){
    $("#In_DecorativeCartoon").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin20").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_DecorativeCartoon").css("fill", '777777');
 $("#fin20").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_DecorativeCartoon").hover(function(){$().toggle();})

$("#In_Calendar").hover(function(){
    $("#In_Calendar").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Calendar").css("fill", '777777');
 $("#fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Calendar").hover(function(){$().toggle();})

$("#In_MovingBelt").hover(function(){
    $("#In_MovingBelt").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin11").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_MovingBelt").css("fill", '777777');
 $("#fin11").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_MovingBelt").hover(function(){$().toggle();})

$("#In_FloorCushion").hover(function(){
    $("#In_FloorCushion").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_FloorCushion").css("fill", '777777');
 $("#fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_FloorCushion").hover(function(){$().toggle();})

$("#In_SittingPerson").hover(function(){
    $("#In_SittingPerson").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin03").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_SittingPerson").css("fill", '777777');
 $("#fin03").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_SittingPerson").hover(function(){$().toggle();})

$("#In_OfficeSpace").hover(function(){
    $("#In_OfficeSpace").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin06").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_OfficeSpace").css("fill", '777777');
 $("#fin06").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_OfficeSpace").hover(function(){$().toggle();})

$("#In_Printer").hover(function(){
    $("#In_Printer").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin05").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Printer").css("fill", '777777');
 $("#fin05").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Printer").hover(function(){$().toggle();})

$("#In_Woman").hover(function(){
    $("#In_Woman").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin04").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Woman").css("fill", '777777');
 $("#fin04").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Woman").hover(function(){$().toggle();})

$("#In_WomanSitting").hover(function(){
    $("#In_WomanSitting").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin04").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_WomanSitting").css("fill", '777777');
 $("#fin04").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_WomanSitting").hover(function(){$().toggle();})

$("#In_WaitingArea").hover(function(){
    $("#In_WaitingArea").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin04").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_WaitingArea").css("fill", '777777');
 $("#fin04").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_WaitingArea").hover(function(){$().toggle();})

$("#In_Dog").hover(function(){
    $("#In_Dog").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin04").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Dog").css("fill", '777777');
 $("#fin04").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Dog").hover(function(){$().toggle();})

$("#In_WaterBottle").hover(function(){
    $("#In_WaterBottle").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin03").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_WaterBottle").css("fill", '777777');
 $("#fin03").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_WaterBottle").hover(function(){$().toggle();})

$("#In_BrandSign").hover(function(){
    $("#In_BrandSign").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin07").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_BrandSign").css("fill", '777777');
 $("#fin07").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_BrandSign").hover(function(){$().toggle();})

$("#In_Floor").hover(function(){
    $("#In_Floor").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin03").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Floor").css("fill", '777777');
 $("#fin03").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Floor").hover(function(){$().toggle();})

$("#In_Rugs").hover(function(){
    $("#In_Rugs").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin03").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Rugs").css("fill", '777777');
 $("#fin03").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Rugs").hover(function(){$().toggle();})

$("#In_Posters").hover(function(){
    $("#In_Posters").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin02").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Posters").css("fill", '777777');
 $("#fin02").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Posters").hover(function(){$().toggle();})

$("#In_Laptop").hover(function(){
    $("#In_Laptop").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin02").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Laptop").css("fill", '777777');
 $("#fin02").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Laptop").hover(function(){$().toggle();})

$("#In_ComputerScreen").hover(function(){
    $("#In_ComputerScreen").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin02").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_ComputerScreen").css("fill", '777777');
 $("#fin02").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_ComputerScreen").hover(function(){$().toggle();})

$("#In_Purse").hover(function(){
    $("#In_Purse").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Purse").css("fill", '777777');
 $("#fin01").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Purse").hover(function(){$().toggle();})

$("#In_Receptionist").hover(function(){
    $("#In_Receptionist").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin01").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Receptionist").css("fill", '777777');
 $("#fin01").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Receptionist").hover(function(){$().toggle();})

$("#In_Watch").hover(function(){
    $("#In_Watch").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin07").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Watch").css("fill", '777777');
 $("#fin07").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Watch").hover(function(){$().toggle();})

$("#In_Display").hover(function(){
    $("#In_Display").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin07").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Display").css("fill", '777777');
 $("#fin07").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Display").hover(function(){$().toggle();})

$("#In_FluorescentLight").hover(function(){
    $("#In_FluorescentLight").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin15").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_FluorescentLight").css("fill", '777777');
 $("#fin15").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_FluorescentLight").hover(function(){$().toggle();})

$("#In_Shelves").hover(function(){
    $("#In_Shelves").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin09").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Shelves").css("fill", '777777');
 $("#fin09").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Shelves").hover(function(){$().toggle();})

$("#In_Gallon").hover(function(){
    $("#In_Gallon").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin14").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Gallon").css("fill", '777777');
 $("#fin14").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Gallon").hover(function(){$().toggle();})

$("#In_Tank").hover(function(){
    $("#In_Tank").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin14").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Tank").css("fill", '777777');
 $("#fin14").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Tank").hover(function(){$().toggle();})

$("#In_Pipeline").hover(function(){
    $("#In_Pipeline").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin14").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Pipeline").css("fill", '777777');
 $("#fin14").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Pipeline").hover(function(){$().toggle();})

$("#In_Tubes").hover(function(){
    $("#In_Tubes").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin13").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Tubes").css("fill", '777777');
 $("#fin13").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Tubes").hover(function(){$().toggle();})

$("#In_Man").hover(function(){
    $("#In_Man").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin12").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Man").css("fill", '777777');
 $("#fin12").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Man").hover(function(){$().toggle();})

$("#In_LargeRoll").hover(function(){
    $("#In_LargeRoll").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin12").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_LargeRoll").css("fill", '777777');
 $("#fin12").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_LargeRoll").hover(function(){$().toggle();})

$("#In_Lamp").hover(function(){
    $("#In_Lamp").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin09").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Lamp").css("fill", '777777');
 $("#fin09").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Lamp").hover(function(){$().toggle();})

$("#In_AdvertiSignDisplay").hover(function(){
    $("#In_AdvertiSignDisplay").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin07").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_AdvertiSignDisplay").css("fill", '777777');
 $("#fin07").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_AdvertiSignDisplay").hover(function(){$().toggle();})

$("#In_WorkingDesks").hover(function(){
    $("#In_WorkingDesks").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin09").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_WorkingDesks").css("fill", '777777');
 $("#fin09").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_WorkingDesks").hover(function(){$().toggle();})

$("#In_Objects").hover(function(){
    $("#In_Objects").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin09").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Objects").css("fill", '777777');
 $("#fin09").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Objects").hover(function(){$().toggle();})

$("#In_Products").hover(function(){
    $("#In_Products").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin08").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Products").css("fill", '777777');
 $("#fin08").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Products").hover(function(){$().toggle();})

$("#In_Sofa").hover(function(){
    $("#In_Sofa").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin08").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Sofa").css("fill", '777777');
 $("#fin08").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Sofa").hover(function(){$().toggle();})

$("#In_Mattress").hover(function(){
    $("#In_Mattress").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin08").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Mattress").css("fill", '777777');
 $("#fin08").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Mattress").hover(function(){$().toggle();})

$("#In_ShoppingBag").hover(function(){
    $("#In_ShoppingBag").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin07").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_ShoppingBag").css("fill", '777777');
 $("#fin07").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_ShoppingBag").hover(function(){$().toggle();})

$("#In_Suitcase").hover(function(){
    $("#In_Suitcase").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin07").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_Suitcase").css("fill", '777777');
 $("#fin07").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_Suitcase").hover(function(){$().toggle();})

$("#In_CeilingDecoration").hover(function(){
    $("#In_CeilingDecoration").css("fill", '000000');
    $("#In_ColorUnknown, #In_ColorCommercial, #In_ColorIndustrial, #In_ColorResidential, #In_ColorOthers, #In_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fin25").css("opacity", 0);
   //go back to original
    }, function() {
$("#In_CeilingDecoration").css("fill", '777777');
 $("#fin25").css("opacity", 1); $("#In_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#In_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#In_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#In_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#In_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#In_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#In_CeilingDecoration").hover(function(){$().toggle();})

// WORDCLOUD ITALY

$("#It_Window").hover(function(){
    $("#It_Window").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02, #fit05, #fit07, #fit10, #fit13, #fit15, #fit16, #fit17, #fit20, #fit22").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Window").css("fill", '777777');
 $("#fit02, #fit05, #fit07, #fit10, #fit13, #fit15, #fit16, #fit17, #fit20, #fit22").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Window").hover(function(){$().toggle();})
$("#It_PropertyWall").hover(function(){
    $("#It_PropertyWall").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit07, #fit10, #fit11, #fit13, #fit15, #fit17, #fit19, #fit22, #fit24").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_PropertyWall").css("fill", '777777');
 $("#fit07, #fit10, #fit11, #fit13, #fit15, #fit17, #fit19, #fit22, #fit24").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_PropertyWall").hover(function(){$().toggle();})
$("#It_ProperyWall").hover(function(){
    $("#It_ProperyWall").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit07, #fit10, #fit11, #fit13, #fit15, #fit17, #fit19, #fit22, #fit24").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_ProperyWall").css("fill", '777777');
 $("#fit07, #fit10, #fit11, #fit13, #fit15, #fit17, #fit19, #fit22, #fit24").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_ProperyWall").hover(function(){$().toggle();})
$("#It_ParkedCar").hover(function(){
    $("#It_ParkedCar").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01, #fit03, #fit15, #fit17, #fit18, #fit19, #fit23, #fit24, #fit25").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_ParkedCar").css("fill", '777777');
 $("#fit01, #fit03, #fit15, #fit17, #fit18, #fit19, #fit23, #fit24, #fit25").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_ParkedCar").hover(function(){$().toggle();})
$("#It_Gate").hover(function(){
    $("#It_Gate").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05, #fit17, #fit18, #fit20, #fit22, #fit23, #fit24, #fit25").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Gate").css("fill", '777777');
 $("#fit05, #fit17, #fit18, #fit20, #fit22, #fit23, #fit24, #fit25").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Gate").hover(function(){$().toggle();})
$("#It_Plant").hover(function(){
    $("#It_Plant").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01, #fit10, #fit11, #fit14, #fit20, #fit21, #fit23").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Plant").css("fill", '777777');
 $("#fit01, #fit10, #fit11, #fit14, #fit20, #fit21, #fit23").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Plant").hover(function(){$().toggle();})
$("#It_Street").hover(function(){
    $("#It_Street").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01, #fit17, #fit18, #fit22, #fit23, #fit24, #fit25").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Street").css("fill", '777777');
 $("#fit01, #fit17, #fit18, #fit22, #fit23, #fit24, #fit25").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Street").hover(function(){$().toggle();})
$("#It_GreenFence").hover(function(){
    $("#It_GreenFence").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit09, #fit10, #fit13, #fit14, #fit20").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_GreenFence").css("fill", '777777');
 $("#fit09, #fit10, #fit13, #fit14, #fit20").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_GreenFence").hover(function(){$().toggle();})
$("#It_Tree").hover(function(){
    $("#It_Tree").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02, #fit12, #fit13, #fit15, #fit22").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Tree").css("fill", '777777');
 $("#fit02, #fit12, #fit13, #fit15, #fit22").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Tree").hover(function(){$().toggle();})
$("#It_Grass").hover(function(){
    $("#It_Grass").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit09, #fit11, #fit15, #fit21, #fit23").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Grass").css("fill", '777777');
 $("#fit09, #fit11, #fit15, #fit21, #fit23").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Grass").hover(function(){$().toggle();})
$("#It_OtherProperties").hover(function(){
    $("#It_OtherProperties").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02, #fit03, #fit05, #fit18, #fit25").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_OtherProperties").css("fill", '777777');
 $("#fit02, #fit03, #fit05, #fit18, #fit25").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_OtherProperties").hover(function(){$().toggle();})
$("#It_Door").hover(function(){
    $("#It_Door").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit06, #fit12, #fit15, #fit16").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Door").css("fill", '777777');
 $("#fit06, #fit12, #fit15, #fit16").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Door").hover(function(){$().toggle();})
$("#It_Balcony").hover(function(){
    $("#It_Balcony").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02, #fit12, #fit13, #fit21").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Balcony").css("fill", '777777');
 $("#fit02, #fit12, #fit13, #fit21").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Balcony").hover(function(){$().toggle();})
$("#It_Sidewalk").hover(function(){
    $("#It_Sidewalk").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01, #fit03, #fit20, #fit21").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Sidewalk").css("fill", '777777');
 $("#fit01, #fit03, #fit20, #fit21").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Sidewalk").hover(function(){$().toggle();})
$("#It_TrashBin").hover(function(){
    $("#It_TrashBin").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05, #fit06, #fit09, #fit22").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_TrashBin").css("fill", '777777');
 $("#fit05, #fit06, #fit09, #fit22").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_TrashBin").hover(function(){$().toggle();})
$("#It_ParkingLot").hover(function(){
    $("#It_ParkingLot").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit07, #fit16, #fit18").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_ParkingLot").css("fill", '777777');
 $("#fit07, #fit16, #fit18").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_ParkingLot").hover(function(){$().toggle();})
$("#It_Pallet").hover(function(){
    $("#It_Pallet").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05, #fit17, #fit18").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Pallet").css("fill", '777777');
 $("#fit05, #fit17, #fit18").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Pallet").hover(function(){$().toggle();})
$("#It_Pallet").hover(function(){
    $("#It_Pallet").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05, #fit17, #fit18").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Pallet").css("fill", '777777');
 $("#fit05, #fit17, #fit18").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Pallet").hover(function(){$().toggle();})
$("#It_Fence").hover(function(){
    $("#It_Fence").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit07, #fit16, #fit21").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Fence").css("fill", '777777');
 $("#fit07, #fit16, #fit21").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Fence").hover(function(){$().toggle();})
$("#It_Driveway").hover(function(){
    $("#It_Driveway").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit15, #fit20, #fit23").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Driveway").css("fill", '777777');
 $("#fit15, #fit20, #fit23").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Driveway").hover(function(){$().toggle();})
$("#It_LampPost").hover(function(){
    $("#It_LampPost").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit18, #fit25").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_LampPost").css("fill", '777777');
 $("#fit18, #fit25").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_LampPost").hover(function(){$().toggle();})
$("#It_GardenPath").hover(function(){
    $("#It_GardenPath").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit14, #fit09").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_GardenPath").css("fill", '777777');
 $("#fit14, #fit09").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_GardenPath").hover(function(){$().toggle();})
$("#It_Sunblind").hover(function(){
    $("#It_Sunblind").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02, #fit12").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Sunblind").css("fill", '777777');
 $("#fit02, #fit12").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Sunblind").hover(function(){$().toggle();})
$("#It_ExternalLight").hover(function(){
    $("#It_ExternalLight").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit14, #fit15").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_ExternalLight").css("fill", '777777');
 $("#fit14, #fit15").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_ExternalLight").hover(function(){$().toggle();})
$("#It_MovingCar").hover(function(){
    $("#It_MovingCar").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01, #fit03").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_MovingCar").css("fill", '777777');
 $("#fit01, #fit03").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_MovingCar").hover(function(){$().toggle();})
$("#It_ExternalLamp").hover(function(){
    $("#It_ExternalLamp").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit11, #fit19").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_ExternalLamp").css("fill", '777777');
 $("#fit11, #fit19").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_ExternalLamp").hover(function(){$().toggle();})
$("#It_Shed").hover(function(){
    $("#It_Shed").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit07, #fit18").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Shed").css("fill", '777777');
 $("#fit07, #fit18").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Shed").hover(function(){$().toggle();})
$("#It_Awning").hover(function(){
    $("#It_Awning").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit15, #fit16").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Awning").css("fill", '777777');
 $("#fit15, #fit16").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Awning").hover(function(){$().toggle();})
$("#It_Garden").hover(function(){
    $("#It_Garden").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit14").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Garden").css("fill", '777777');
 $("#fit14").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Garden").hover(function(){$().toggle();})
$("#It_OtherProperty").hover(function(){
    $("#It_OtherProperty").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit16").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_OtherProperty").css("fill", '777777');
 $("#fit16").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_OtherProperty").hover(function(){$().toggle();})
$("#It_Furniture").hover(function(){
    $("#It_Furniture").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit17").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Furniture").css("fill", '777777');
 $("#fit17").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Furniture").hover(function(){$().toggle();})
$("#It_Sea").hover(function(){
    $("#It_Sea").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Sea").css("fill", '777777');
 $("#fit02").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Sea").hover(function(){$().toggle();})
$("#It_Mountain").hover(function(){
    $("#It_Mountain").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Mountain").css("fill", '777777');
 $("#fit02").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Mountain").hover(function(){$().toggle();})
$("#It_Chimney").hover(function(){
    $("#It_Chimney").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit02").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Chimney").css("fill", '777777');
 $("#fit02").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Chimney").hover(function(){$().toggle();})
$("#It_MovingTruck").hover(function(){
    $("#It_MovingTruck").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit18").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_MovingTruck").css("fill", '777777');
 $("#fit18").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_MovingTruck").hover(function(){$().toggle();})
$("#It_StreetSign").hover(function(){
    $("#It_StreetSign").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit03").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_StreetSign").css("fill", '777777');
 $("#fit03").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_StreetSign").hover(function(){$().toggle();})
$("#It_Garage").hover(function(){
    $("#It_Garage").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit17").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Garage").css("fill", '777777');
 $("#fit17").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Garage").hover(function(){$().toggle();})
$("#It_Stairs").hover(function(){
    $("#It_Stairs").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit24").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Stairs").css("fill", '777777');
 $("#fit24").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Stairs").hover(function(){$().toggle();})
$("#It_PalmTree").hover(function(){
    $("#It_PalmTree").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit23").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_PalmTree").css("fill", '777777');
 $("#fit23").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_PalmTree").hover(function(){$().toggle();})
$("#It_Drain").hover(function(){
    $("#It_Drain").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit14").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Drain").css("fill", '777777');
 $("#fit14").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Drain").hover(function(){$().toggle();})
$("#It_IndustrialPieces").hover(function(){
    $("#It_IndustrialPieces").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit07").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_IndustrialPieces").css("fill", '777777');
 $("#fit07").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_IndustrialPieces").hover(function(){$().toggle();})
$("#It_Rock").hover(function(){
    $("#It_Rock").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit23").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Rock").css("fill", '777777');
 $("#fit23").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Rock").hover(function(){$().toggle();})
$("#It_Reception").hover(function(){
    $("#It_Reception").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit06").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Reception").css("fill", '777777');
 $("#fit06").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Reception").hover(function(){$().toggle();})
$("#It_PaperBooklets").hover(function(){
    $("#It_PaperBooklets").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit06").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_PaperBooklets").css("fill", '777777');
 $("#fit06").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_PaperBooklets").hover(function(){$().toggle();})
$("#It_PlasticContainers").hover(function(){
    $("#It_PlasticContainers").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit06").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_PlasticContainers").css("fill", '777777');
 $("#fit06").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_PlasticContainers").hover(function(){$().toggle();})
$("#It_ElectricalSocket").hover(function(){
    $("#It_ElectricalSocket").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit06").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_ElectricalSocket").css("fill", '777777');
 $("#fit06").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_ElectricalSocket").hover(function(){$().toggle();})
$("#It_3Dprinter").hover(function(){
    $("#It_3Dprinter").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit08").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_3Dprinter").css("fill", '777777');
 $("#fit08").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_3Dprinter").hover(function(){$().toggle();})
$("#It_Roof").hover(function(){
    $("#It_Roof").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit13").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Roof").css("fill", '777777');
 $("#fit13").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Roof").hover(function(){$().toggle();})
$("#It_EntrancePortico").hover(function(){
    $("#It_EntrancePortico").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit25").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_EntrancePortico").css("fill", '777777');
 $("#fit25").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_EntrancePortico").hover(function(){$().toggle();})
$("#It_Cashier").hover(function(){
    $("#It_Cashier").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Cashier").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Cashier").hover(function(){$().toggle();})
$("#It_DryingStand").hover(function(){
    $("#It_DryingStand").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit09").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_DryingStand").css("fill", '777777');
 $("#fit09").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_DryingStand").hover(function(){$().toggle();})
$("#It_PlasticChair").hover(function(){
    $("#It_PlasticChair").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit10").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_PlasticChair").css("fill", '777777');
 $("#fit10").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_PlasticChair").hover(function(){$().toggle();})
$("#It_PlasticTable").hover(function(){
    $("#It_PlasticTable").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit10").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_PlasticTable").css("fill", '777777');
 $("#fit10").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_PlasticTable").hover(function(){$().toggle();})
$("#It_AirConditioner").hover(function(){
    $("#It_AirConditioner").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit10").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_AirConditioner").css("fill", '777777');
 $("#fit10").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_AirConditioner").hover(function(){$().toggle();})
$("#It_HandRail").hover(function(){
    $("#It_HandRail").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit19").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_HandRail").css("fill", '777777');
 $("#fit19").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_HandRail").hover(function(){$().toggle();})
$("#It_VehicleRamp").hover(function(){
    $("#It_VehicleRamp").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit19").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_VehicleRamp").css("fill", '777777');
 $("#fit19").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_VehicleRamp").hover(function(){$().toggle();})
$("#It_EntranceDoor").hover(function(){
    $("#It_EntranceDoor").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit20").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_EntranceDoor").css("fill", '777777');
 $("#fit20").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_EntranceDoor").hover(function(){$().toggle();})
$("#It_NoParkSign").hover(function(){
    $("#It_NoParkSign").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit20").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_NoParkSign").css("fill", '777777');
 $("#fit20").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_NoParkSign").hover(function(){$().toggle();})
$("#It_Steps").hover(function(){
    $("#It_Steps").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit20").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Steps").css("fill", '777777');
 $("#fit20").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Steps").hover(function(){$().toggle();})
$("#It_WelcomeRug").hover(function(){
    $("#It_WelcomeRug").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit20").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_WelcomeRug").css("fill", '777777');
 $("#fit20").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_WelcomeRug").hover(function(){$().toggle();})
$("#It_Decoration").hover(function(){
    $("#It_Decoration").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit11").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Decoration").css("fill", '777777');
 $("#fit11").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Decoration").hover(function(){$().toggle();})
$("#It_Customers").hover(function(){
    $("#It_Customers").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Customers").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Customers").hover(function(){$().toggle();})
$("#It_Products").hover(function(){
    $("#It_Products").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Products").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Products").hover(function(){$().toggle();})
$("#It_AdvertiSignSign").hover(function(){
    $("#It_AdvertiSignSign").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_AdvertiSignSign").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_AdvertiSignSign").hover(function(){$().toggle();})
$("#It_Television").hover(function(){
    $("#It_Television").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Television").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Television").hover(function(){$().toggle();})
$("#It_UniformizedEmployee").hover(function(){
    $("#It_UniformizedEmployee").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_UniformizedEmployee").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_UniformizedEmployee").hover(function(){$().toggle();})
$("#It_IdentifiableHuman").hover(function(){
    $("#It_IdentifiableHuman").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit04").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_IdentifiableHuman").css("fill", '777777');
 $("#fit04").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_IdentifiableHuman").hover(function(){$().toggle();})
$("#It_Trampolin").hover(function(){
    $("#It_Trampolin").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit13").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Trampolin").css("fill", '777777');
 $("#fit13").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Trampolin").hover(function(){$().toggle();})
$("#It_Pedestrians").hover(function(){
    $("#It_Pedestrians").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Pedestrians").css("fill", '777777');
 $("#fit01").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Pedestrians").hover(function(){$().toggle();})
$("#It_RollerShutter").hover(function(){
    $("#It_RollerShutter").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit01").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_RollerShutter").css("fill", '777777');
 $("#fit01").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_RollerShutter").hover(function(){$().toggle();})
$("#It_TruckTrailer").hover(function(){
    $("#It_TruckTrailer").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_TruckTrailer").css("fill", '777777');
 $("#fit05").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_TruckTrailer").hover(function(){$().toggle();})
$("#It_Containers").hover(function(){
    $("#It_Containers").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Containers").css("fill", '777777');
 $("#fit05").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Containers").hover(function(){$().toggle();})
$("#It_GravelFloor").hover(function(){
    $("#It_GravelFloor").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit05").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_GravelFloor").css("fill", '777777');
 $("#fit05").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_GravelFloor").hover(function(){$().toggle();})
$("#It_Sky").hover(function(){
    $("#It_Sky").css("fill", '000000');
    $("#It_ColorUnknown, #It_ColorCommercial, #It_ColorIndustrial, #It_ColorResidential, #It_ColorOthers, #It_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fit18").css("opacity", 0);
   //go back to original
    }, function() {
$("#It_Sky").css("fill", '777777');
 $("#fit18").css("opacity", 1); $("#It_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#It_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#It_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#It_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#It_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#It_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#It_Sky").hover(function(){$().toggle();})

// WORDCLOUD SPAIN

$("#Sp_Lamp").hover(function(){
    $("#Sp_Lamp").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp08, #fsp14, #fsp20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Lamp").css("fill", '777777');
 $("#fsp08, #fsp14, #fsp20").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Lamp").hover(function(){$().toggle();})

$("#Sp_Cabin").hover(function(){
    $("#Sp_Cabin").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Cabin").css("fill", '777777');
 $("#fsp23").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Cabin").hover(function(){$().toggle();})

$("#Sp_Tree").hover(function(){
    $("#Sp_Tree").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp01, #fsp02, #fsp04, #fsp06, #fsp08, #fsp14, #fsp15, #fsp17, #fsp21, #fsp23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Tree").css("fill", '777777');
 $("#fsp01, #fsp02, #fsp04, #fsp06, #fsp08, #fsp14, #fsp15, #fsp17, #fsp21, #fsp23").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Tree").hover(function(){$().toggle();})

$("#Sp_Roof").hover(function(){
    $("#Sp_Roof").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp07").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Roof").css("fill", '777777');
 $("#fsp07").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Roof").hover(function(){$().toggle();})

$("#Sp_Grass").hover(function(){
    $("#Sp_Grass").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp03, #fsp04, #fsp08, #fsp14, #fsp15, #fsp23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Grass").css("fill", '777777');
 $("#fsp03, #fsp04, #fsp08, #fsp14, #fsp15, #fsp23").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Grass").hover(function(){$().toggle();})

$("#Sp_Stairs").hover(function(){
    $("#Sp_Stairs").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp03, #fsp22, #fsp25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Stairs").css("fill", '777777');
 $("#fsp03, #fsp22, #fsp25").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Stairs").hover(function(){$().toggle();})

$("#Sp_ParkingLot").hover(function(){
    $("#Sp_ParkingLot").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp15, #fsp23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_ParkingLot").css("fill", '777777');
 $("#fsp15, #fsp23").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_ParkingLot").hover(function(){$().toggle();})

$("#Sp_Mountain").hover(function(){
    $("#Sp_Mountain").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp07").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Mountain").css("fill", '777777');
 $("#fsp07").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Mountain").hover(function(){$().toggle();})

$("#Sp_PropertyGate").hover(function(){
    $("#Sp_PropertyGate").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp08, #fsp16, #fsp22, #fsp24, #fsp25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_PropertyGate").css("fill", '777777');
 $("#fsp08, #fsp16, #fsp22, #fsp24, #fsp25").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_PropertyGate").hover(function(){$().toggle();})

$("#Sp_Hall").hover(function(){
    $("#Sp_Hall").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp10, #fsp12, #fsp16, #fsp18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Hall").css("fill", '777777');
 $("#fsp10, #fsp12, #fsp16, #fsp18").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Hall").hover(function(){$().toggle();})

$("#Sp_Railing").hover(function(){
    $("#Sp_Railing").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp17, #fsp18, #fsp21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Railing").css("fill", '777777');
 $("#fsp17, #fsp18, #fsp21").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Railing").hover(function(){$().toggle();})

$("#Sp_Table").hover(function(){
    $("#Sp_Table").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp20, #fsp21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Table").css("fill", '777777');
 $("#fsp20, #fsp21").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Table").hover(function(){$().toggle();})

$("#Sp_House").hover(function(){
    $("#Sp_House").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp01, #fsp06, #fsp16").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_House").css("fill", '777777');
 $("#fsp01, #fsp06, #fsp16").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_House").hover(function(){$().toggle();})

$("#Sp_IdentifiableHuman").hover(function(){
    $("#Sp_IdentifiableHuman").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp08, #fsp11, #fsp20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_IdentifiableHuman").css("fill", '777777');
 $("#fsp08, #fsp11, #fsp20").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_IdentifiableHuman").hover(function(){$().toggle();})

$("#Sp_LampPost").hover(function(){
    $("#Sp_LampPost").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp08, #fsp14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_LampPost").css("fill", '777777');
 $("#fsp08, #fsp14").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_LampPost").hover(function(){$().toggle();})

$("#Sp_Gate").hover(function(){
    $("#Sp_Gate").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp11, #fsp20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Gate").css("fill", '777777');
 $("#fsp11, #fsp20").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Gate").hover(function(){$().toggle();})

$("#Sp_Pool").hover(function(){
    $("#Sp_Pool").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp16, #fsp17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Pool").css("fill", '777777');
 $("#fsp16, #fsp17").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Pool").hover(function(){$().toggle();})

$("#Sp_Sky").hover(function(){
    $("#Sp_Sky").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp01, #fsp03, #fsp04, #fsp07, #fsp23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Sky").css("fill", '777777');
 $("#fsp01, #fsp03, #fsp04, #fsp07, #fsp23").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Sky").hover(function(){$().toggle();})

$("#Sp_Chair").hover(function(){
    $("#Sp_Chair").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp20, #fsp21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Chair").css("fill", '777777');
 $("#fsp20, #fsp21").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Chair").hover(function(){$().toggle();})

$("#Sp_PropertyWall").hover(function(){
    $("#Sp_PropertyWall").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp17, #fsp19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_PropertyWall").css("fill", '777777');
 $("#fsp17, #fsp19").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_PropertyWall").hover(function(){$().toggle();})

$("#Sp_Floor").hover(function(){
    $("#Sp_Floor").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Floor").css("fill", '777777');
 $("#fsp12").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Floor").hover(function(){$().toggle();})

$("#Sp_Street").hover(function(){
    $("#Sp_Street").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp01, #fsp02, #fsp05, #fsp06, #fsp22, #fsp23, #fsp25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Street").css("fill", '777777');
 $("#fsp01, #fsp02, #fsp05, #fsp06, #fsp22, #fsp23, #fsp25").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Street").hover(function(){$().toggle();})

$("#Sp_Plant").hover(function(){
    $("#Sp_Plant").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp01, #fsp15, #fsp16, #fsp17, #fsp25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Plant").css("fill", '777777');
 $("#fsp01, #fsp15, #fsp16, #fsp17, #fsp25").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Plant").hover(function(){$().toggle();})

$("#Sp_ParkedCar").hover(function(){
    $("#Sp_ParkedCar").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp01, #fsp05, #fsp06, #fsp15, #fsp23, #fsp24, #fsp25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_ParkedCar").css("fill", '777777');
 $("#fsp01, #fsp05, #fsp06, #fsp15, #fsp23, #fsp24, #fsp25").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_ParkedCar").hover(function(){$().toggle();})

$("#Sp_Cellar").hover(function(){
    $("#Sp_Cellar").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp14, #fsp25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Cellar").css("fill", '777777');
 $("#fsp14, #fsp25").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Cellar").hover(function(){$().toggle();})

$("#Sp_Rock").hover(function(){
    $("#Sp_Rock").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Rock").css("fill", '777777');
 $("#fsp21").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Rock").hover(function(){$().toggle();})

$("#Sp_Barrel").hover(function(){
    $("#Sp_Barrel").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Barrel").css("fill", '777777');
 $("#fsp21").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Barrel").hover(function(){$().toggle();})

$("#Sp_MovingCar").hover(function(){
    $("#Sp_MovingCar").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp02").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_MovingCar").css("fill", '777777');
 $("#fsp02").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_MovingCar").hover(function(){$().toggle();})

$("#Sp_Roadsign").hover(function(){
    $("#Sp_Roadsign").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp02").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Roadsign").css("fill", '777777');
 $("#fsp02").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Roadsign").hover(function(){$().toggle();})

$("#Sp_Door").hover(function(){
    $("#Sp_Door").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Door").css("fill", '777777');
 $("#fsp12").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Door").hover(function(){$().toggle();})

$("#Sp_FoodProduct").hover(function(){
    $("#Sp_FoodProduct").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp11").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_FoodProduct").css("fill", '777777');
 $("#fsp11").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_FoodProduct").hover(function(){$().toggle();})

$("#Sp_ProductDispenser").hover(function(){
    $("#Sp_ProductDispenser").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_ProductDispenser").css("fill", '777777');
 $("#fsp20").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_ProductDispenser").hover(function(){$().toggle();})

$("#Sp_Rack").hover(function(){
    $("#Sp_Rack").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Rack").css("fill", '777777');
 $("#fsp19").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Rack").hover(function(){$().toggle();})

$("#Sp_UnfinishedWall").hover(function(){
    $("#Sp_UnfinishedWall").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp03").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_UnfinishedWall").css("fill", '777777');
 $("#fsp03").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_UnfinishedWall").hover(function(){$().toggle();})

$("#Sp_ControlCenter").hover(function(){
    $("#Sp_ControlCenter").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_ControlCenter").css("fill", '777777');
 $("#fsp13").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_ControlCenter").hover(function(){$().toggle();})

$("#Sp_FrontageStore").hover(function(){
    $("#Sp_FrontageStore").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp10").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_FrontageStore").css("fill", '777777');
 $("#fsp10").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_FrontageStore").hover(function(){$().toggle();})

$("#Sp_TumbleDryer").hover(function(){
    $("#Sp_TumbleDryer").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_TumbleDryer").css("fill", '777777');
 $("#fsp09").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_TumbleDryer").hover(function(){$().toggle();})

$("#Sp_WashingMachine").hover(function(){
    $("#Sp_WashingMachine").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_WashingMachine").css("fill", '777777');
 $("#fsp09").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_WashingMachine").hover(function(){$().toggle();})

$("#Sp_Window").hover(function(){
    $("#Sp_Window").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Window").css("fill", '777777');
 $("#fsp18").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Window").hover(function(){$().toggle();})

$("#Sp_Motor").hover(function(){
    $("#Sp_Motor").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Motor").css("fill", '777777');
 $("#fsp18").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Motor").hover(function(){$().toggle();})

$("#Sp_Sidewalk").hover(function(){
    $("#Sp_Sidewalk").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp05").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Sidewalk").css("fill", '777777');
 $("#fsp05").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Sidewalk").hover(function(){$().toggle();})

$("#Sp_Yard").hover(function(){
    $("#Sp_Yard").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Yard").css("fill", '777777');
 $("#fsp24").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Yard").hover(function(){$().toggle();})

$("#Sp_Road").hover(function(){
    $("#Sp_Road").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Road").css("fill", '777777');
 $("#fsp24").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Road").hover(function(){$().toggle();})

$("#Sp_Mirror").hover(function(){
    $("#Sp_Mirror").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp22").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Mirror").css("fill", '777777');
 $("#fsp22").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Mirror").hover(function(){$().toggle();})

$("#Sp_Bridge").hover(function(){
    $("#Sp_Bridge").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp02").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_Bridge").css("fill", '777777');
 $("#fsp02").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_Bridge").hover(function(){$().toggle();})

$("#Sp_BusinessSign").hover(function(){
    $("#Sp_BusinessSign").css("fill", '000000');
    $("#Sp_ColorUnknown, #Sp_ColorCommercial, #Sp_ColorIndustrial, #Sp_ColorResidential, #Sp_ColorOthers, #Sp_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fsp13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Sp_BusinessSign").css("fill", '777777');
 $("#fsp13").css("opacity", 1); $("#Sp_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Sp_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Sp_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Sp_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Sp_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Sp_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Sp_BusinessSign").hover(function(){$().toggle();})

// WORDCLOUD USA

$("#Us_Street").hover(function(){
    $("#Us_Street").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus01, #fus02, #fus07, #fus08, #fus09, #fus10, #fus11, #fus14, #fus24, #fus25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Street").css("fill", '777777');
 $("#fus01, #fus02, #fus07, #fus08, #fus09, #fus10, #fus11, #fus14, #fus24, #fus25").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Street").hover(function(){$().toggle();})

$("#Us_Grass").hover(function(){
    $("#Us_Grass").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus03, #fus04, #fus07, #fus08, #fus09, #fus11, #fus12, #fus14, #fus15, #fus17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Grass").css("fill", '777777');
 $("#fus03, #fus04, #fus07, #fus08, #fus09, #fus11, #fus12, #fus14, #fus15, #fus17").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Grass").hover(function(){$().toggle();})

$("#Us_House").hover(function(){
    $("#Us_House").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus02, #fus04, #fus11, #fus14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_House").css("fill", '777777');
 $("#fus02, #fus04, #fus11, #fus14").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_House").hover(function(){$().toggle();})

$("#Us_TrashCan").hover(function(){
    $("#Us_TrashCan").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_TrashCan").css("fill", '777777');
 $("#fus21").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_TrashCan").hover(function(){$().toggle();})

$("#Us_Stores").hover(function(){
    $("#Us_Stores").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus03").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Stores").css("fill", '777777');
 $("#fus03").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Stores").hover(function(){$().toggle();})

$("#Us_Lake").hover(function(){
    $("#Us_Lake").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus04, #fus13, #fus25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Lake").css("fill", '777777');
 $("#fus04, #fus13, #fus25").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Lake").hover(function(){$().toggle();})

$("#Us_Sea").hover(function(){
    $("#Us_Sea").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus05, #fus06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Sea").css("fill", '777777');
 $("#fus05, #fus06").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Sea").hover(function(){$().toggle();})

$("#Us_GlassDoor").hover(function(){
    $("#Us_GlassDoor").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus16, #fus18, #fus21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_GlassDoor").css("fill", '777777');
 $("#fus16, #fus18, #fus21").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_GlassDoor").hover(function(){$().toggle();})

$("#Us_Plant").hover(function(){
    $("#Us_Plant").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus16, #fus21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Plant").css("fill", '777777');
 $("#fus16, #fus21").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Plant").hover(function(){$().toggle();})

$("#Us_ParkingLot").hover(function(){
    $("#Us_ParkingLot").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus03").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_ParkingLot").css("fill", '777777');
 $("#fus03").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_ParkingLot").hover(function(){$().toggle();})

$("#Us_LampPost").hover(function(){
    $("#Us_LampPost").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus03").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_LampPost").css("fill", '777777');
 $("#fus03").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_LampPost").hover(function(){$().toggle();})

$("#Us_Rock").hover(function(){
    $("#Us_Rock").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus04, #fus06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Rock").css("fill", '777777');
 $("#fus04, #fus06").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Rock").hover(function(){$().toggle();})

$("#Us_Beach").hover(function(){
    $("#Us_Beach").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus05, #fus06").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Beach").css("fill", '777777');
 $("#fus05, #fus06").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Beach").hover(function(){$().toggle();})

$("#Us_Mountain").hover(function(){
    $("#Us_Mountain").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus02, #fus25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Mountain").css("fill", '777777');
 $("#fus02, #fus25").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Mountain").hover(function(){$().toggle();})

$("#Us_UnidentifiableHuman").hover(function(){
    $("#Us_UnidentifiableHuman").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus04, #fus18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_UnidentifiableHuman").css("fill", '777777');
 $("#fus04, #fus18").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_UnidentifiableHuman").hover(function(){$().toggle();})

$("#Us_Yard").hover(function(){
    $("#Us_Yard").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus09").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Yard").css("fill", '777777');
 $("#fus09").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Yard").hover(function(){$().toggle();})

$("#Us_Tree").hover(function(){
    $("#Us_Tree").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus01, #fus02, #fus03, #fus04, #fus07, #fus08, #fus08, #fus13, #fus15, #fus25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Tree").css("fill", '777777');
 $("#fus01, #fus02, #fus03, #fus04, #fus07, #fus08, #fus08, #fus13, #fus15, #fus25").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Tree").hover(function(){$().toggle();})

$("#Us_PropertyGate").hover(function(){
    $("#Us_PropertyGate").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus07, #fus09, #fus24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_PropertyGate").css("fill", '777777');
 $("#fus07, #fus09, #fus24").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_PropertyGate").hover(function(){$().toggle();})

$("#Us_RoadSign").hover(function(){
    $("#Us_RoadSign").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus03, #fus24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_RoadSign").css("fill", '777777');
 $("#fus03, #fus24").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_RoadSign").hover(function(){$().toggle();})

$("#Us_MovingCar").hover(function(){
    $("#Us_MovingCar").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus09, #fus14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_MovingCar").css("fill", '777777');
 $("#fus09, #fus14").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_MovingCar").hover(function(){$().toggle();})

$("#Us_Advertisement").hover(function(){
    $("#Us_Advertisement").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus01, #fus02").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Advertisement").css("fill", '777777');
 $("#fus01, #fus02").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Advertisement").hover(function(){$().toggle();})

$("#Us_Sky").hover(function(){
    $("#Us_Sky").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus01, #fus05").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Sky").css("fill", '777777');
 $("#fus01, #fus05").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Sky").hover(function(){$().toggle();})

$("#Us_ParkedCar").hover(function(){
    $("#Us_ParkedCar").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus01, #fus03, #fus11, #fus14").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_ParkedCar").css("fill", '777777');
 $("#fus01, #fus03, #fus11, #fus14").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_ParkedCar").hover(function(){$().toggle();})

$("#Us_Table").hover(function(){
    $("#Us_Table").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus17, #fus18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Table").css("fill", '777777');
 $("#fus17, #fus18").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Table").hover(function(){$().toggle();})

$("#Us_Chair").hover(function(){
    $("#Us_Chair").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus17, #fus18, #fus21, #fus24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Chair").css("fill", '777777');
 $("#fus17, #fus18, #fus21, #fus24").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Chair").hover(function(){$().toggle();})

$("#Us_Road").hover(function(){
    $("#Us_Road").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus04, #fus15").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Road").css("fill", '777777');
 $("#fus04, #fus15").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Road").hover(function(){$().toggle();})

$("#Us_PropertyWall").hover(function(){
    $("#Us_PropertyWall").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus10").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_PropertyWall").css("fill", '777777');
 $("#fus10").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_PropertyWall").hover(function(){$().toggle();})

$("#Us_Columns").hover(function(){
    $("#Us_Columns").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus08").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Columns").css("fill", '777777');
 $("#fus08").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Columns").hover(function(){$().toggle();})

$("#Us_FloatingStructure").hover(function(){
    $("#Us_FloatingStructure").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus13").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_FloatingStructure").css("fill", '777777');
 $("#fus13").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_FloatingStructure").hover(function(){$().toggle();})

$("#Us_Aquarium").hover(function(){
    $("#Us_Aquarium").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus20").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Aquarium").css("fill", '777777');
 $("#fus20").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Aquarium").hover(function(){$().toggle();})

$("#Us_Railing").hover(function(){
    $("#Us_Railing").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus11").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Railing").css("fill", '777777');
 $("#fus11").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Railing").hover(function(){$().toggle();})

$("#Us_Ceiling").hover(function(){
    $("#Us_Ceiling").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus25").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Ceiling").css("fill", '777777');
 $("#fus25").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Ceiling").hover(function(){$().toggle();})

$("#Us_WoodenSurface").hover(function(){
    $("#Us_WoodenSurface").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus23").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_WoodenSurface").css("fill", '777777');
 $("#fus23").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_WoodenSurface").hover(function(){$().toggle();})

$("#Us_Pot").hover(function(){
    $("#Us_Pot").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Pot").css("fill", '777777');
 $("#fus12").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Pot").hover(function(){$().toggle();})

$("#Us_WoodSticks").hover(function(){
    $("#Us_WoodSticks").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus12").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_WoodSticks").css("fill", '777777');
 $("#fus12").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_WoodSticks").hover(function(){$().toggle();})

$("#Us_BrokenObject").hover(function(){
    $("#Us_BrokenObject").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_BrokenObject").css("fill", '777777');
 $("#fus19").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_BrokenObject").hover(function(){$().toggle();})

$("#Us_MetallicStructure").hover(function(){
    $("#Us_MetallicStructure").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus19").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_MetallicStructure").css("fill", '777777');
 $("#fus19").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_MetallicStructure").hover(function(){$().toggle();})

$("#Us_HotelRooms").hover(function(){
    $("#Us_HotelRooms").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_HotelRooms").css("fill", '777777');
 $("#fus17").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_HotelRooms").hover(function(){$().toggle();})

$("#Us_Pool").hover(function(){
    $("#Us_Pool").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus17").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Pool").css("fill", '777777');
 $("#fus17").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Pool").hover(function(){$().toggle();})

$("#Us_RoadSign").hover(function(){
    $("#Us_RoadSign").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus03, #fus24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_RoadSign").css("fill", '777777');
 $("#fus03, #fus24").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_RoadSign").hover(function(){$().toggle();})

$("#Us_Sidewalk").hover(function(){
    $("#Us_Sidewalk").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus24").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Sidewalk").css("fill", '777777');
 $("#fus24").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Sidewalk").hover(function(){$().toggle();})

$("#Us_Unknown").hover(function(){
    $("#Us_Unknown").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus22").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Unknown").css("fill", '777777');
 $("#fus22").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Unknown").hover(function(){$().toggle();})

$("#Us_AlarmKeypad").hover(function(){
    $("#Us_AlarmKeypad").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus16").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_AlarmKeypad").css("fill", '777777');
 $("#fus16").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_AlarmKeypad").hover(function(){$().toggle();})

$("#Us_GlassDoor").hover(function(){
    $("#Us_GlassDoor").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus16, #fus18, #fus21").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_GlassDoor").css("fill", '777777');
 $("#fus16, #fus18, #fus21").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_GlassDoor").hover(function(){$().toggle();})

$("#Us_ElectronicProducts").hover(function(){
    $("#Us_ElectronicProducts").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus16").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_ElectronicProducts").css("fill", '777777');
 $("#fus16").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_ElectronicProducts").hover(function(){$().toggle();})

$("#Us_Showcase").hover(function(){
    $("#Us_Showcase").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus16").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_Showcase").css("fill", '777777');
 $("#fus16").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_Showcase").hover(function(){$().toggle();})

$("#Us_OfficeMaterial").hover(function(){
    $("#Us_OfficeMaterial").css("fill", '000000');
    $("#Us_ColorUnknown, #Us_ColorCommercial, #Us_ColorIndustrial, #Us_ColorResidential, #Us_ColorOthers, #Us_ColorCity").css("fill", 'e5e5e5').css("opacity", 0.9);
 $("#fus18").css("opacity", 0);
   //go back to original
    }, function() {
$("#Us_OfficeMaterial").css("fill", '777777');
 $("#fus18").css("opacity", 1); $("#Us_ColorUnknown").css("fill", 'E01F5A').css("opacity", 0.75);
    $("#Us_ColorIndustrial").css("fill", '005da3').css("opacity", 0.75);
    $("#Us_ColorResidential").css("fill", 'ECB22D').css("opacity", 0.75);
    $("#Us_ColorOthers").css("fill", '4A154B').css("opacity", 0.75);
    $("#Us_ColorCity").css("fill", '36C5F1').css("opacity", 0.75);
    $("#Us_ColorCommercial").css("fill", '2FB67C').css("opacity", 0.75);
    },);
$("#Us_OfficeMaterial").hover(function(){$().toggle();});

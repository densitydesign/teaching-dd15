// JavaScript Document


// navbar background color change on scroll
$(window).scroll(
        function(){
                        var scroll = $(window).scrollTop();
                        if (scroll < 1300) {$('.nav-bar-transition').css('background','none'); }         
                        else {  $('.nav-bar-transition').css('background','black');}
                  }
)

//variables
//this list contains all the page names necessary to display the elements in the cart and moralist page
        var listTour = ["01-gohaunt","01-pizza","01-hear", "01-bestdo", "01-gotmoves", "01-show", "01-door", "01-knock", "01-godyes", "02-driveyourcart", "02-getwith", "02-wire", "02-stand", "02-onthehunt", "02-thebeach", "03-strip", "03-yoga", "03-getwith", "03-climb", "03-youcan", "03-getsouvenirs", "03-godyes", "04-feelfree", "04-reachtheufo","04-anything", "04-everybody", "04-climb"];
        
        var listMorals =["01-gohaunt", "01-pizza", "01-hear", "01-bestdo", "01-gotmoves", "01-show", "01-door", "01-knock", "01-godyes", "02-driveyourcart", "02-getwith", "02-wire", "02-stand", "02-onthehunt", "02-thebeach", "03-strip", "03-yoga", "03-getwith", "03-climb", "03-youcan", "03-getsouvenirs", "03-godyes", "04-feelfree", "04-reachtheufo", "04-anything", "04-everybody", "04-climb"];
//pageName is the variable that will be used to check the name of each page
        var pageName;

$(document).ready(function(){   

        pageName= location.pathname.substring(location.pathname.lastIndexOf("/")+1);
        pageName= pageName.substring(0,pageName.lastIndexOf("."))
        console.log(pageName);

                CheckCartIcon();
                FillCart();

        // this function checks if the cart is full or empty and changes cart icon
                function CheckCartIcon() { 
              
                        var empty= true;

                        for (var i = 0; i < listTour.length; i++) 
                                {
                                  if (localStorage.getItem(listTour[i])== "true") 
                                        { 
                                          console.log("c'è" + listTour[i]);
                                          empty=false;
                                        }
                        }

                         // Let's check if we are in the homepage or behindthescene!
                        var pathImgFull="../assets/images/icon-backpack-full.png";
                        var pathImgEmpty ="../assets/images/icon-backpack.png";
                        //the empty condition is necessary for when the github link oesn't show any name
                        if(pageName=="index" || pageName=="behindthescene"|| pageName==="")
                                {
                                 pathImgFull="assets/images/icon-backpack-full.png";
                                 pathImgEmpty="assets/images/icon-backpack.png";
                                }

                         // change icon if cart is filled or empty
                        if(empty== true) 
                            { 
                              $("#icon-backpack").attr('src',pathImgEmpty);
                            }
                        else
                          {
                            $("#icon-backpack").attr('src',pathImgFull);
                          }
                }

        //this function checks if elements ar added to cart and adds or removes the class that makes them invisible
                function FillCart() {

                        for (var i = 0; i < listTour.length; i++) 
                                {                                         
                                        if (localStorage.getItem(listTour[i])== "true") 
                                                { 
                                                  console.log("c'è" + listTour[i]);
                                                  $("#cartelement-"+listTour[i]).removeClass("cartelement-hide");
                                                }
                                        else {
                                                console.log("non c'è" + listTour[i]);
                                                $("#cartelement-"+listTour[i]).addClass("cartelement-hide");
                                             }
                        }
                        //this bit fills the moralis page with the appropriate surce and disclosure text
                        for (var i = 0; i < listMorals.length; i++) 
                                {                                         
                                        if (localStorage.getItem(listMorals[i])== "true") 
                                                { 
                                                  console.log("c'è" + listMorals[i]);
                                                  $("#moral-"+listMorals[i]).removeClass("cartelement-hide");
                                                }
                                        else {
                                                console.log("non c'è" + listMorals[i]);
                                                $("#moral-"+listMorals[i]).addClass("cartelement-hide");
                                             }
                        }
                }

        //add to cart btn unhides elements
                $("#addCartbtn").click(
                        function() {                                                    
                                    localStorage.setItem(pageName, "true");
                                    CheckCartIcon();
                                    FillCart();                
                                  }                
                ); 

        //remove elements from cart when clicking the element x
                $(".cartelement-x").click(
                          function() {
                                      var xSuffix=$(this).attr('id').substring($(this).attr('id').lastIndexOf("_")+1);
                                      localStorage.removeItem(xSuffix);
                                      CheckCartIcon();
                                      FillCart();
                                    }
                );

        //cart btn click makes text appear in cart
                $(".cartbtn").click(
                                function() {
                                              $("#cartcontent-cart").delay(500).fadeIn(500,"linear" );
                                           }
                );
        // purchase click opens moralist page and closes cart
                $(".purchasebtn").click(
                         function() {                                        
                                     //close the cart
                                         $("#mySidenav").css("width", "0");
                                         $("#cartcontent-cart").fadeOut(500, "linear");
                                      
                                     //open moralist page
                                         if (windWidth<=898) {$("#mySidemoral").css("width", "100%");} 
                                         else if(windWidth>898 && windWidth<=1024) {$("#mySidemoral").css("width", "75%");}
                                         else if(windWidth>1024 && windWidth<=1280) {$("#mySidemoral").css("width", "60%");}
                                         else {$("#mySidemoral").css("width", "50%");}
                                         $(".cartcontent-moral").delay(500).fadeIn(500,"linear" );                                         
                                    }
                );

        //behind the scene button in moralist page fades text out and empties the cart
                $(".moralbtn").click(
                        function() {
                                     $(".cartcontent-moral").fadeOut(500, "linear");
                                        //this empies the cart                               
                                        localStorage.clear();
                                        CheckCartIcon();
                                        FillCart();
                                    } 
                );

        // category color change on hover and background image change
                $(".categoryBt").hover( 
                        
                        function(){  if (windWidth>=3500) {
                                                         $(".whiteHover").css({"color": "white", "border": "5px solid white" });
                                                         $(".categoryLinks").css("color", "white");
                                                         $(".dropdownTxt").css("color", "white");
                                                         $(".categoryDescr").css({"border": "5px solid white", "border-top-style": "none"});
                                                        } 
                                     else{
                                        $(".categoryBt").addClass("whiteHover");
                                        $(".categoryDescr").css("border-top-style", "none");
                                        $(".categoryLinks").css("color", "white");
                                        }
                                  },

                        function(){  if (windWidth>=3500) {
                                                         $(".whiteHover").css({"color": "#F39200", "border": "5px solid #F39200" });
                                                         $(".categoryLinks").css("color", "#F39200");
                                                         $(".dropdownTxt").css("color", "#F39200");
                                                         $(".categoryDescr").css({"border": "5px solid #F39200", "border-top-style": "none"});
                                                        } 
                                     else{
                                        $(".categoryBt").removeClass("whiteHover");
                                        $(".categoryDescr").css("border-top-style", "none");
                                        $(".categoryLinks").css("color", "#F39200");
                                        }
                                  },                                                                                    
        );

        //this function makes the category image appear on hover 

                $("#MAKE").hover(       
                        function(){     if (windWidth>1100 && windWidth<2000) {                                      
                                                $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "url('assets/images/category01.jpg')")
                                        }
                                  },
                        
                        function(){      if (windWidth>1100 && windWidth<2000) {                                  
                                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "none")
                                        }
                                  }
                );

                 $("#LEAVE").hover(
                        function(){    
                                        if (windWidth>1100 && windWidth<2000) {
                                                $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "url('assets/images/category02.jpg')")
                                        }
                                  },
                                
                        function(){      if (windWidth>1100 && windWidth<2000) {                                  
                                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "none")
                                        }
                                  }
                );

                 $("#SWIM").hover(
                        function(){      if (windWidth>1100 && windWidth<2000) {                                  
                                                $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "url('assets/images/category03.jpg')")
                                        }
                                  },
                        
                        function(){      if (windWidth>1100 && windWidth<2000) {                                       
                                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "none")
                                        }
                                  }
                );

                 $("#FEEL").hover(
                        function(){      if (windWidth>1100 && windWidth<2000) {                                  
                                                $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "url('assets/images/category04.jpg')")
                                        }
                                  },
                        
                        function(){      if (windWidth>1100 && windWidth<2000) {                                  
                                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "none")
                                        }
                                  }
                );

        //Calendar btn---------------------------------------------------------
                $(".dropbtn-calendar").click(
                        function() {
                                     $(".dropdown-content-calendar").toggle();
                                     $(this).toggleClass("noBottom"); 
                                     if($(".dropdown-content").is(":visible"))
                                                {
                                                 $(".dropdown-content").toggle();
                                                 $(".dropbtn").toggleClass("noBottom");
                                                } 
                        }
                );
                $(" .dropbtn-calendar-cart").click(
                        function() {
                                     $(this).siblings(".dropdown-content-calendar-cart").toggle();
                                     $(this).toggleClass("noBottom"); 
                                     if($(".dropdown-content-cart").is(":visible"))
                                                {
                                                 $(".noBottom").siblings(".dropdown-content-cart").toggle();
                                                 $(".dropbtn-cart.noBottom").toggleClass("noBottom");
                                                } 
                                                                          
                        }
                );

        //Quantity btn---------------------------------------------------------
                $(".dropbtn").click(
                        function() {
                                        $(".dropdown-content").toggle();
                                        $(this).toggleClass("noBottom");
                                        if($(".dropdown-content-calendar").is(":visible"))
                                                {
                                                 $(".dropdown-content-calendar").toggle();
                                                 $(".dropbtn-calendar").toggleClass("noBottom");
                                                }

                        }
                );
                $(".dropbtn-cart").click(
                        function() {
                                        $(this).siblings(".dropdown-content-cart").toggle();
                                        $(this).toggleClass("noBottom");
                                        if($(".dropdown-content-calendar-cart").is(":visible"))
                                                {
                                                 $(".noBottom").siblings(".dropdown-content-calendar-cart").toggle();
                                                 $(".dropbtn-calendar-cart.noBottom").toggleClass("noBottom");
                                                }
                        }
                );
    
        //about--------------------------------------------//

                $("#makeyourpresence").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#makeyourpresence_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#makeyourpresence_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #feeltheadrenalina").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#feeltheadrenalina_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#feeltheadrenalina_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #swimagainst").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#swimagainst_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#swimagainst_hover").css("opacity", "0");
                            }
                );

        // ----------------------
                $(" #leaveyourmark").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#leaveyourmark_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#leaveyourmark_hover").css("opacity", "0");
                            }
                );
    
    
        //svg mobile--------------------------------------------

    $("#makeyourpresence-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#makeyourpresence_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#makeyourpresence_hover-mobile").css("opacity", "0");
      }
    );

    // ----------------------
    $(" #feeltheadrenalina-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#feeltheadrenalina_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#feeltheadrenalina_hover-mobile").css("opacity", "0");
      }
    );

    // ----------------------
    $(" #swimagainst-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#swimagainst_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#swimagainst_hover-mobile").css("opacity", "0");
      }
    );

    // ----------------------
    $(" #leaveyourmark-mobile").hover(
      function() {
        $(this).css("opacity", "0");
        $("#leaveyourmark_hover-mobile").css("opacity", "1");
      },
      function() {
        $(this).css("opacity", "1");
        $("#leaveyourmark_hover-mobile").css("opacity", "0");
      }
    );
        
    
    //Audio
    $("#buttonAudio").click(function(){
        toggleMute();
    });
    
    
    //about--------------------------------------------

        $("#makeyourpresence").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#makeyourpresence_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#makeyourpresence_hover").css("opacity", "0");
                            }
                     );

        // ----------------------
        $(" #feeltheadrenalina").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#feeltheadrenalina_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#feeltheadrenalina_hover").css("opacity", "0");
                            }
                     );

        // ----------------------
        $(" #swimagainst").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#swimagainst_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#swimagainst_hover").css("opacity", "0");
                            }
                     );

        // ----------------------
        $(" #leaveyourmark").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#leaveyourmark_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#leaveyourmark_hover").css("opacity", "0");
                            }
                     );
    
});


//Audio button//
function toggleMute() {
    
    var video=document.getElementById("coverVideo")
    if(video.muted){video.muted = false;
                    $('#buttonAudio').attr('src', "assets/images/icon-mutono.png");
                   }
    else {	video.muted = true;
          $('#buttonAudio').attr('src', "assets/images/icon-mutoyes.png");
         }
    console.log("ok!");
}



//Reviews//
$(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    
    
    if(linkText === "SHOW MORE"){
        linkText = "show less";
        $content.switchClass("hideContent", "showContent", 400);
    }
    
    else {
        linkText = "show more";
        $content.switchClass("showContent", "hideContent", 400);
    };
        
    $this.text(linkText);
        
});

  var windWidth = $(window).width();

function closeNav() {
    $("#mySidenav").css("width", "0");
    $("#main-content, #footer, #nav-content").css("opacity", "1");
    $("body").css("background-color", "black");
    $("#cartcontent-cart").fadeOut(100, "linear");

}

function closeMoral() {
    $("#mySidemoral").css("width", "0");
    $("#main-content, #footer, #nav-content").css("opacity", "1");
    $("body").css("background-color", "black");
    $(".cartcontent-moral").fadeOut(100, "linear");
}

function openNav() { 
    if (windWidth<=898) {$("#mySidenav").css("width", "100%");}
    else if(windWidth>898 && windWidth<=1024) {$("#mySidenav").css("width", "75%");}
    else if(windWidth>1024 && windWidth<=1280) {$("#mySidenav").css("width", "60%");} 
    else {$("#mySidenav").css("width", "50%");}  
    $("#main-content, #footer, #nav-content").css("opacity", "0.2");
    $("body").css("background-color", "rgb(0,0,0,0.8)");
}



//Menu category//
function showMake() {
    $("#makebtn").css("display", "inline-block");  
    $("#leavebtn, #swimbtn, #feelbtn").css("display", "none");      
};

function showLeave() { 
    $("#leavebtn").css("display", "inline-block"); 
    $("#makebtn, #swimbtn, #feelbtn").css("display", "none");
};

function showSwim() {
    $("#swimbtn").css("display", "inline-block");  
    $("#leavebtn, #makebtn, #feelbtn").css("display", "none");
};

function showFeel() {
    $("#feelbtn").css("display", "inline-block");  
    $("#leavebtn, #swimbtn, #makebtn").css("display", "none");
};



//LOADER

var loader = document.getElementById("loader");

window.setTimeout(function(){
    loader.style.height="500px";
    loader.style.width="500px";
    loader.style.visibility ="hidden";
}, 1700);



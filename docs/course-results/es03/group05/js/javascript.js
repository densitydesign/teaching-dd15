/** loader **/
jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        },4000);
        setTimeout(function(){
            $('#loader').fadeOut('slow', function () {
            });
        },3500);

    });  
});

setInterval(function(){
    var clicked = document.getElementsByClassName("scale").length;
    if (clicked == 10) {
                $(".donebutton6").css("display", "block");
    }
    else {
                $(".donebutton6").css("display", "none");}}, 1);

setInterval(function(){
    var clicked = document.getElementsByClassName("scale").length;
    if (clicked == 10) {
                $(".donebutton").css("display", "block");
    } else {
                $(".donebutton").css("display", "none");}}, 1);

setInterval(function(){
    var clicked = document.getElementsByClassName("scale").length;
    if (clicked == 10) {
                $(".donebutton3").css("display", "block");
    } else {
                $(".donebutton3").css("display", "none");}}, 1);

setInterval(function(){
    var clicked = document.getElementsByClassName("scale2").length;
    if (clicked == 6) {
                $(".donebutton9").css("display", "block");
    } else {
                $(".donebutton9").css("display", "none");}}, 1);

setInterval(function(){
    var clicked = document.getElementsByClassName("scale1").length;
    if (clicked == 2) {
                $(".donebutton12").css("display", "block");
    } else {
                $(".donebutton12").css("display", "none");}}, 1);

var t;

function conta(){
    var contatore = document.getElementsByClassName("scale").length;
    document.getElementById("score").innerHTML = contatore;
    if (contatore === 10) {
                $("#score").css("color", "#7135b6");
    }
    if (contatore > 10) {
                $("#score").css("color", "black");
    }
};

var r;

function conta1(){
    var contatore = document.getElementsByClassName("scale2").length;
    document.getElementById("score2").innerHTML = contatore;
    if (contatore === 6) {
                $("#score2").css("color", "#7135b6");
    }
    if (contatore > 6) {
                $("#score2").css("color", "black");
    }
};

var p;

function conta2(){
    var contatore = document.getElementsByClassName("scale1").length;
    document.getElementById("score3").innerHTML = contatore;
    if (contatore === 2) {
                $("#score3").css("color", "#7135b6");
    }
    if (contatore > 2) {
                $("#score3").css("color", "black");
    } 
};


/** QUIZ 1.1 **/

setTimeout(function(){ t = setInterval(conta, 1); }, 1);

var quaranta = false;
var quarantuno = false;
var quarantadue = false;
var quarantacinque = false;
var quarantotto = false;
var quarantanove = false;
var cinquantuno = false;
var cinquantasei = false;
var cinquantasette = false;
var cinquantotto = false;
var scoreC = 0;

/** img 40 **/
$("#quaranta").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "block");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else { 

                quaranta = ! quaranta;
                console.log(quaranta);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(quaranta === true){
                quaranta = ! quaranta;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 41 **/
$("#quarantuno").click(function() {
    if (info) {
                $(".info2").css("display", "block");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    

                quarantuno = ! quarantuno;
                console.log(quarantuno);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(quarantuno === true){
                quarantuno = ! quarantuno;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 42 **/
$("#quarantadue").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "block");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {     

                quarantadue = ! quarantadue;
                console.log(quarantadue);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(quarantadue === true){
                quarantadue = ! quarantadue;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 43 **/
$("#quarantatre").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "block");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    

                $(this).toggleClass("scale");}
});

/** img 44 **/
$("#quarantaquattro").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "block");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                $(this).toggleClass("scale");}
});

/** img 45 **/
$("#quarantacinque").click(function() {
    if (info === true) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "block");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                quarantacinque = ! quarantacinque;
                console.log(quarantacinque);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(quarantacinque === true){
                quarantacinque = ! quarantacinque;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 46 **/
$("#quarantasei").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "block");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {     
                $(this).toggleClass("scale");}
});

/** img 47 **/
$("#quarantasette").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "block");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                $(this).toggleClass("scale");}
});

/** img 48 **/
$("#quarantotto").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "block");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                quarantotto = ! quarantotto;
                console.log(quarantotto);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(quarantotto === true){
                quarantotto = ! quarantotto;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 49 **/
$("#quarantanove").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "block");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                quarantanove = ! quarantanove;
                console.log(quarantanove);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(quarantanove === true){
                quarantanove = ! quarantanove;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 50 **/
$("#cinquanta").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "block");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 51 **/
$("#cinquantuno").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "block");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                cinquantuno = ! cinquantuno;
                console.log(cinquantuno);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(cinquantuno === true){
                cinquantuno = ! cinquantuno;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 52 **/
$("#cinquantadue").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "block");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                $(this).toggleClass("scale");}
});

/** img 53 **/
$("#cinquantatre").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "block");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {   
                $(this).toggleClass("scale");}
});

/** img 54 **/
$("#cinquantaquattro").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "block");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {   
                $(this).toggleClass("scale");}
});

/** img 55 **/
$("#cinquantacinque").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "block");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                $(this).toggleClass("scale");}
});

/** img 56 **/
$("#cinquantasei").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "block");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {   
                cinquantasei = ! cinquantasei;
                console.log(cinquantasei);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(cinquantasei === true){
                cinquantasei = ! cinquantasei;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 57 **/
$("#cinquantasette").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "block");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {    
                cinquantasette = ! cinquantasette;
                console.log(cinquantasette);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(cinquantasette === true){
                cinquantasette = ! cinquantasette;
                scoreC++;
                console.log(scoreC);}
                });
});

/** img 59 **/
$("#cinquantanove").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "block");
    } else {    
                $(this).toggleClass("scale");}
});

/** img 58 **/
$("#cinquantotto").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "block");
                $(".info20").css("display", "none");
    } else {     
                cinquantotto = ! cinquantotto;
                console.log(cinquantotto);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton6").click(
                function (){
                if(cinquantotto === true){
                cinquantotto = ! cinquantotto;
                scoreC++;
                console.log(scoreC);}
                });
});

/** done button **/

var first_click = true;


$(document).ready(function() {
$(".donebutton6").click(function() {
    if (first_click) {
                clearInterval(t);
                document.getElementById("numberscoreC1").innerHTML = scoreC;
                $(".numberscoreC").css("display", "block");
                setTimeout(function(){ $(".numberscoreC").css("display", "none"); }, 3000);
                $(".why").css("display", "block");
                $(".text2").css("color", "#7135b6");
                $(".grid-container").css("opacity", "0.2");
                setTimeout(function(){ $(".grid-container").css("opacity", "1"); }, 3000);        
                setTimeout(function(){ $(".why").css("display", "none"); }, 3000);
                document.getElementById("text2").innerHTML = "ARE YOU WONDERING WHY? CLICK ON THE IMAGES";
                document.getElementById("score").innerHTML = scoreC + "/10";
                document.getElementById("donebutton8").innerHTML = "NEXT";
                $(".score").css("opacity", "1");
document.getElementById("quaranta").src = "img/quiz2/40A.jpg";
document.getElementById("quarantuno").src = "img/quiz2/41A.jpg";
document.getElementById("quarantadue").src = "img/quiz2/42A.jpg";
document.getElementById("quarantacinque").src = "img/quiz2/45A.jpg";
document.getElementById("quarantotto").src = "img/quiz2/48A.jpg";
document.getElementById("quarantanove").src = "img/quiz2/49A.jpg";
document.getElementById("cinquantuno").src = "img/quiz2/51A.jpg";
document.getElementById("cinquantasei").src = "img/quiz2/56A.jpg";
document.getElementById("cinquantasette").src = "img/quiz2/57A.jpg";
document.getElementById("cinquantotto").src = "img/quiz2/58A.jpg";
                first_click = false;
                info = ! info;
    } else {
        location.replace("task2.html");
        localStorage.setItem("punteggioA", scoreC);}
});
});    

/** info **/

var info = false;

$(document).ready(function() {    
            $(".info1A").click(function (){
                $(".info1").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info2A").click(function (){
                $(".info2").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info3A").click(function (){
                $(".info3").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info4A").click(function (){
                $(".info4").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info5A").click(function (){
                $(".info5").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info6A").click(function (){
                $(".info6").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info7A").click(function (){
                $(".info7").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info8A").click(function (){
                $(".info8").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info9A").click(function (){
                $(".info9").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info10A").click(function (){
                $(".info10").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info11A").click(function (){
                $(".info11").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info12A").click(function (){
                $(".info12").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info13A").click(function (){
                $(".info13").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info14A").click(function (){
                $(".info14").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info15A").click(function (){
                $(".info15").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info16A").click(function (){
                $(".info16").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info17A").click(function (){
                $(".info17").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info18A").click(function (){
                $(".info18").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info19A").click(function (){
                $(".info19").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info20A").click(function (){
                $(".info20").css("display", "none");
                });
});

/** QUIZ 1.2 **/

var scoreG = 0;
var numberclick = 1;    
var step = 0;
var funziona = false;

$(document).ready(function () {
    $(".first").click(function() {
            if (numberclick === 1 && funziona === false) {
                numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");    
                    $("#ventiquattro").css("border", "1px solid #7135b6"); 
                    $("#ventiquattro").css("border-radius", "2px"); 
                    console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/26.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/27.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                document.getElementById("text5").innerHTML = "WRONG";                                      
            }
  if (numberclick == 2 && funziona === false) {
                numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#ventiquattro").css("border", "1px solid #7135b6"); 
                    $("#ventiquattro").css("border-radius", "2px");                     console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/30.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/31.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                document.getElementById("text5").innerHTML = "WRONG";                                      
            }
 if (numberclick == 3 && funziona === false) {
                numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#ventiquattro").css("border", "1px solid #7135b6"); 
                    $("#ventiquattro").css("border-radius", "2px");                     console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/34.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/35.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                    scoreG++;
                document.getElementById("text5").innerHTML = "RIGHT";
            }
            if (numberclick == 4 && funziona === false) {
                numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#ventiquattro").css("border", "1px solid #7135b6"); 
                    $("#ventiquattro").css("border-radius", "2px");                     console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/38.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/39.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                document.getElementById("text5").innerHTML = "WRONG";                                      
            }
            if (numberclick == 5 && funziona === false) {
                numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#ventiquattro").css("border", "1px solid #7135b6"); 
                    $("#ventiquattro").css("border-radius", "2px");                      console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/42.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/43.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                    scoreG++;
                document.getElementById("text5").innerHTML = "RIGHT";            
            }
            }); });

$(document).ready(function () {
    $(".second").click(function() {
            if (numberclick === 1 && funziona === false) {
                    numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#venticinque").css("border", "1px solid #7135b6"); 
                    $("#venticinque").css("border-radius", "2px");                      console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/26.jpg"); }, 1000);
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/27.jpg"); }, 1000);  
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                    scoreG++;
                document.getElementById("text5").innerHTML = "RIGHT";        
            }
            if (numberclick == 2 && funziona === false) {
                    numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#venticinque").css("border", "1px solid #7135b6"); 
                    $("#venticinque").css("border-radius", "2px");                     console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/30.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/31.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                    scoreG++;
                document.getElementById("text5").innerHTML = "RIGHT";             
            }
            if (numberclick == 3 && funziona === false) {
                    numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#venticinque").css("border", "1px solid #7135b6"); 
                    $("#venticinque").css("border-radius", "2px");                     console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/34.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/35.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                document.getElementById("text5").innerHTML = "WRONG";                                      
            }
            if (numberclick == 4 && funziona === false) {
                    numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#venticinque").css("border", "1px solid #7135b6"); 
                    $("#venticinque").css("border-radius", "2px");                     console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/38.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/39.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                    scoreG++;
                document.getElementById("text5").innerHTML = "RIGHT";             
            }
            if (numberclick == 5 && funziona === false) {
                    numberclick++;
                console.log(funziona);
                funziona = true;
                document.getElementById("text2").innerHTML = "READ THE POST TO UNDERSTAND THE REASON";
                $("#text2").css("color", "#7135b6");
                    $("#venticinque").css("border", "1px solid #7135b6"); 
                    $("#venticinque").css("border-radius", "2px");
                    console.log(numberclick);
                    setTimeout(function(){ $("#ventiquattro").attr("src","img/quiz3A/42.jpg"); }, 1000);  
                    setTimeout(function(){ $("#venticinque").attr("src","img/quiz3A/43.jpg"); }, 1000);
                    setTimeout(function(){ $("#nextlevel").css("display", "block"); }, 1000);
                    $("#text5").css("display", "block");
                document.getElementById("text5").innerHTML = "WRONG";                          
            }
            }); });

$(document).ready(function () {
    $("#nextlevel").click(function() {
                    step++;
            if (step == 1) {
                console.log(funziona);
                funziona = false;
                document.getElementById("text2").innerHTML = "SELECT THE CROPPED PHOTO THAT RESPECTS THE POLICY";
                $("#text2").css("color", "black");
                    $("#venticinque").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border-radius", "0px");
                    $("#venticinque").css("border-radius", "0px");
                    $("#ventiquattro").attr("src","img/quiz3A/28.jpg"); 
                    $("#venticinque").attr("src","img/quiz3A/29.jpg"); 
                    $("#nextlevel").css("display", "none");
                    $("#text5").css("display", "none");                 
            }
            if (step == 2) {
                console.log(funziona);
                funziona = false;
                document.getElementById("text2").innerHTML = "SELECT THE CROPPED PHOTO THAT RESPECTS THE POLICY";
                $("#text2").css("color", "black");
                    $("#venticinque").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border-radius", "0px");
                    $("#venticinque").css("border-radius", "0px");    
                    $("#ventiquattro").attr("src","img/quiz3A/32.jpg"); 
                    $("#venticinque").attr("src","img/quiz3A/33.jpg"); 
                    $("#nextlevel").css("display", "none");
                    $("#text5").css("display", "none");                      
            }
            if (step == 3) {
                console.log(funziona);
                funziona = false;
                document.getElementById("text2").innerHTML = "SELECT THE CROPPED PHOTO THAT RESPECTS THE POLICY";
                $("#text2").css("color", "black");
                    $("#venticinque").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border-radius", "0px");
                    $("#venticinque").css("border-radius", "0px");   
                    $("#ventiquattro").attr("src","img/quiz3A/36.jpg"); 
                    $("#venticinque").attr("src","img/quiz3A/37.jpg"); 
                    $("#nextlevel").css("display", "none");
                    $("#text5").css("display", "none");                      
            }
            if (step == 4) {
                console.log(funziona);
                funziona = false;
                document.getElementById("text2").innerHTML = "SELECT THE CROPPED PHOTO THAT RESPECTS THE POLICY";
                $("#text2").css("color", "black");
                    $("#venticinque").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border-radius", "0px");
                    $("#venticinque").css("border-radius", "0px");   
                    $("#ventiquattro").attr("src","img/quiz3A/40.jpg"); 
                    $("#venticinque").attr("src","img/quiz3A/41.jpg"); 
                    $("#nextlevel").css("display", "none");
                    $("#text5").css("display", "none");                      
            }
            if (step == 5) {
                console.log(funziona);
                funziona = false;
                    $("#text5").css("display", "none");
                    $("#venticinque").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border", "1px solid transparent");
                    $("#ventiquattro").css("border-radius", "0px");
                    $("#venticinque").css("border-radius", "0px");                  
                document.getElementById("text2").innerHTML = "SELECT THE CROPPED PHOTO THAT RESPECTS THE POLICY";
                $("#text2").css("display", "none");   
                $("#nextlevel").css("opacity", "0");
                $(".first").css("opacity", "0");
                $(".second").css("opacity", "0");
                document.getElementById("numberscoreF1").innerHTML = scoreG;
                $(".numberscoreF").css("display", "block");
                setTimeout(function(){ $(".numberscoreF").css("display", "none"); }, 3000);
                setTimeout(function(){ $(".levelcompleted").css("display", "block"); }, 4000);
                setTimeout(function(){ location.replace("animationlevel2.html");}, 8000);
                localStorage.setItem("punteggioB", scoreG);}
            });
            });


/** QUIZ 2.1 **/

var due = false;
var quattro = false;
var cinque = false;
var sei = false;
var otto = false;
var nove = false;
var dieci = false;
var sedici = false;
var diciannove = false;
var venti = false;
var score = 0;

/** img 1 **/
$("#uno").click(function() {
    if (info) {
                $(".info1").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 2 **/
$("#due").click(function() {
    if (info) {
                $(".info2").css("display", "block");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                due = ! due;
                console.log(due);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(due === true){
                due = ! due;
                score++;
                console.log(score);}
                });
});

/** img 3 **/
$("#tre").click(function() {
    if (info) {
                $(".info3").css("display", "block");
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 4 **/
$("#quattro").click(function() {
    if (info) {
                $(".info4").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info1").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                quattro = ! quattro;
                console.log(quattro);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(quattro === true){
                quattro = ! quattro;
                score++;
                console.log(score);}
                });
});

/** img 5 **/
$("#cinque").click(function() {
    if (info === true) {
                $(".info5").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info1").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                cinque = ! cinque;
                console.log(cinque);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(cinque === true){
                cinque = ! cinque;
                score++;
                console.log(score);}
                });
});

/** img 6 **/
$("#sei").click(function() {
    if (info === true) {
                $(".info6").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info1").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sei = ! sei;
                console.log(sei);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(sei === true){
                sei = ! sei;
                score++;
                console.log(score);}
                });
});

/** img 7 **/
$("#sette").click(function() {
    if (info) {
                $(".info7").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info1").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 8 **/
$("#otto").click(function() {
    if (info) {
                $(".info8").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info1").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                otto = ! otto;
                console.log(otto);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(otto === true){
                otto = ! otto;
                score++;
                console.log(score);}
                });
});

/** img 9 **/
$("#nove").click(function() {
    if (info) {
                $(".info9").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info1").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                nove = ! nove;
                console.log(nove);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(nove === true){
                nove = ! nove;
                score++;
                console.log(score);}
                });
});

/** img 10 **/
$("#dieci").click(function() {
    if (info) {
                $(".info10").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info1").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                dieci = ! dieci;
                console.log(dieci);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(dieci === true){
                dieci = ! dieci;
                score++;
                console.log(score);}
                });
});

/** img 11 **/
$("#undici").click(function() {
    if (info) {
                $(".info11").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info1").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 12 **/
$("#dodici").click(function() {
    if (info) {
                $(".info12").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info1").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 13 **/
$("#tredici").click(function() {
    if (info) {
                $(".info13").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info1").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 14 **/
$("#quattordici").click(function() {
    if (info) {
                $(".info14").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info1").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 15 **/
$("#quindici").click(function() {
    if (info) {
                $(".info15").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info1").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 16 **/
$("#sedici").click(function() {
    if (info) {
                $(".info16").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info1").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sedici = ! sedici;
                console.log(sedici);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(sedici === true){
                sedici = ! sedici;
                score++;
                console.log(score);}
                });
});

/** img 17 **/
$("#diciassette").click(function() {
    if (info) {
                $(".info17").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info1").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 18 **/
$("#diciotto").click(function() {
    if (info) {
                $(".info18").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info1").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 19 **/
$("#diciannove").click(function() {
    if (info) {
                $(".info19").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info1").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                diciannove = ! diciannove;
                console.log(diciannove);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(diciannove === true){
                diciannove = ! diciannove;
                score++;
                console.log(score);}
                });
});

/** img 20 **/
$("#venti").click(function() {
    if (info) {
                $(".info20").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info1").css("display", "none");
    } else {
                venti = ! venti;
                console.log(venti);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton").click(
                function (){
                if(venti === true){
                venti = ! venti;
                score++;
                console.log(score);}
                });
});

/** done button **/

var first_click = true;


$(document).ready(function() {
$(".donebutton").click(function() {
    if (first_click) {
                clearInterval(t);
                document.getElementById("numberscore1").innerHTML = score;
                $(".numberscore").css("display", "block");
                setTimeout(function(){ $(".numberscore").css("display", "none"); }, 3000);
                $(".why").css("display", "block");
                setTimeout(function(){ $(".why").css("display", "none"); }, 3000);
                document.getElementById("text2").innerHTML = "ARE YOU WONDERING WHY? CLICK ON THE IMAGES";
                $(".text2").css("color", "#7135b6");
                document.getElementById("score").innerHTML = score + "/10";
                document.getElementById("donebutton2").innerHTML = "NEXT";
                $(".grid-container").css("opacity", "0.2");
                setTimeout(function(){ $(".grid-container").css("opacity", "1"); }, 3000); 
                $(".score").css("opacity", "1");
document.getElementById("due").src = "img/quiz1/2A.jpg";
document.getElementById("quattro").src = "img/quiz1/4A.jpg";
document.getElementById("cinque").src = "img/quiz1/5A.jpg";
document.getElementById("sei").src = "img/quiz1/6A.jpg";
document.getElementById("otto").src = "img/quiz1/8A.jpg";
document.getElementById("nove").src = "img/quiz1/9A.jpg";
document.getElementById("dieci").src = "img/quiz1/10A.jpg";
document.getElementById("sedici").src = "img/quiz1/16A.jpg";
document.getElementById("diciannove").src = "img/quiz1/19A.jpg";
document.getElementById("venti").src = "img/quiz1/20A.jpg";
                first_click = false;
                info = ! info;        
    } else {
        location.replace("task4.html");
        localStorage.setItem("punteggioC", score);}
});
});    

/** QUIZ 2.2 **/

$(document).ready(function () {
    console.log("Page loaded.");

    var interval = null;

    var next = false;
    var imgCounter = 0;
    var maxImages = 10;
    var scoreA = 0;

    var solutions = [
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
    ];

    $(".truebutton, .falsebutton").click(function() {
        
        var answer;

        if ($(this).attr("id") == "truebutton") {
            answer = true;
            $(".shapebutton1").css("background-color", "#7135b6");
            setTimeout(function(){ $(".shapebutton1").css("background-color", "transparent"); }, 3500);
        } else {
            answer = false;
            $(".shapebutton2").css("background-color", "#7135b6");
            setTimeout(function(){ $(".shapebutton2").css("background-color", "transparent"); }, 3500);
        }

        if (checkAnswer(answer, solutions, imgCounter)) {
            console.log("true");
        } else {
            console.log("false");
        }
            imgCounter++;
        
            if (imgCounter == maxImages) {
                document.getElementById("numberscoreE1").innerHTML = scoreA;
                setTimeout(function(){ $(".numberscoreE").css("display", "block"); }, 3500);
                setTimeout(function(){ $(".numberscoreE").css("display", "none"); }, 5500);
                setTimeout(function(){ $("#imgquiz2").css("display", "none"); }, 3000);
                setTimeout(function(){ $(".levelcompleted2").css("display", "block"); }, 6500);
                setTimeout(function(){ location.replace("animationlevel3.html");}, 10000);
                localStorage.setItem("punteggioD", scoreA);
            }

            if (imgCounter === 1) {
                $("#iconcoverA").addClass("rotate");
                setTimeout(function(){ $("#iconcoverA").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverB").css("display", "block"); }, 3600);                
            }
            if (imgCounter === 2) {
                $("#iconcoverB").addClass("rotate");
                setTimeout(function(){ $("#iconcoverB").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverC").css("display", "block"); }, 3600);                        
            }
            if (imgCounter === 3) {
                $("#iconcoverC").addClass("rotate");
                setTimeout(function(){ $("#iconcoverC").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverD").css("display", "block"); }, 3600);                        
            }
            if (imgCounter === 4) {
                $("#iconcoverD").addClass("rotate");
                setTimeout(function(){ $("#iconcoverD").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverE").css("display", "block"); }, 3600);                        
            }
            if (imgCounter === 5) {
                $("#iconcoverE").addClass("rotate");
                setTimeout(function(){ $("#iconcoverE").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverF").css("display", "block"); }, 3600);                        
            }
            if (imgCounter === 6) {
                $("#iconcoverF").addClass("rotate");
                setTimeout(function(){ $("#iconcoverF").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverG").css("display", "block"); }, 3600);                        
            }
            if (imgCounter === 7) {
                $("#iconcoverG").addClass("rotate");
                setTimeout(function(){ $("#iconcoverG").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverH").css("display", "block"); }, 3600);                        
            }
            if (imgCounter === 8) {
                $("#iconcoverH").addClass("rotate");
                setTimeout(function(){ $("#iconcoverH").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverI").css("display", "block"); }, 3600);    
            }
            if (imgCounter === 9) {
                $("#iconcoverI").addClass("rotate");
                setTimeout(function(){ $("#iconcoverI").css("display", "none"); }, 1000);
                setTimeout(function(){ $("#iconcoverL").css("display", "block"); }, 3600);    
            }
            if (imgCounter === 10) {
                $("#iconcoverL").addClass("rotate");
                setTimeout(function(){ $("#iconcoverL").css("display", "none"); }, 1000);
            setTimeout(function(){ $("#truebutton").css("display", "none"); }, 3000);
            setTimeout(function(){ $("#falsebutton").css("display", "none"); }, 3000);                
            }

            setTimeout(function(){ $("#imgquiz2").attr("src","img/quiz1A/" + imgCounter + ".jpg"); }, 3500);        
        
            function checkAnswer(answer, solutions, currentImage) {
            console.log(answer);
            if (answer == solutions[currentImage]) {
            scoreA++;
            console.log(scoreA);
            setTimeout(function(){ $(".right").css("display", "block"); }, 1000);        
            setTimeout(function(){ $(".right").css("display", "none"); }, 3000);        
            } else {
            setTimeout(function(){ $(".wrong").css("display", "block"); }, 1000);        
            setTimeout(function(){ $(".wrong").css("display", "none"); }, 3000);
            }
            }
            });

    //
    // Functions below
    //

    function gradientOpacity(id1, id2, offset_x, offset_y) {
        var rel = { x: -1, y: -1 };
        $(document).mousemove(function (event) {
            rel.x = (event.pageX - $(id1).offset().left + offset_x);
            rel.y = (event.pageY - $(id1).offset().top + offset_y);

            console.log(rel);

            var dist = Math.sqrt((rel.x * rel.x) + (rel.y * rel.y));
            console.log("dist: " + dist);
            if (dist <= 300) {
                $(id2).css("opacity", 1 - normalize(dist, 0, 300));
            } else {
                $(id2).css("opacity", 0);
            }
        });
    }

    function normalize(val, min, max) {
        var value = ((val - min) / (max - min));
        console.log(value);
        return value;
    }
});

/** QUIZ 3.1 **/

var sessantadue = false;
var sessantatre = false;
var sessantaquattro = false;
var sessantasei = false;
var sessantanove = false;
var settantuno = false;
var settantatre = false;
var settantacinque = false;
var settantasette = false;
var settantanove = false;
var scoreD = 0;

/** img 60 **/
$("#sessanta").click(function() {
    if (info) {
                $(".info1").css("display", "block");
                $(".info2").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 61 **/
$("#sessantuno").click(function() {
    if (info) {
                $(".info1").css("display", "none");
                $(".info2").css("display", "block");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 62 **/
$("#sessantadue").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "block");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sessantadue = ! sessantadue;
                console.log(sessantadue);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(sessantadue === true){
                sessantadue = ! sessantadue;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 63 **/
$("#sessantatre").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "block");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sessantatre = ! sessantatre;
                console.log(sessantatre);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(sessantatre === true){
                sessantatre = ! sessantatre;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 64 **/
$("#sessantaquattro").click(function() {
    if (info === true) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "block");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sessantaquattro = ! sessantaquattro;
                console.log(sessantaquattro);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(sessantaquattro === true){
                sessantaquattro = ! sessantaquattro;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 65 **/
$("#sessantacinque").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "block");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 66 **/
$("#sessantasei").click(function() {
    if (info === true) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "block");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sessantasei = ! sessantasei;
                console.log(sessantasei);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(sessantasei === true){
                sessantasei = ! sessantasei;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 67 **/
$("#sessantasette").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "block");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 68 **/
$("#sessantotto").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "block");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 69 **/
$("#sessantanove").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "block");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                sessantanove = ! sessantanove;
                console.log(sessantanove);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(sessantanove === true){
                sessantanove = ! sessantanove;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 70 **/
$("#settanta").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "block");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 71 **/
$("#settantuno").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "block");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                settantuno = ! settantuno;
                console.log(settantuno);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(settantuno === true){
                settantuno = ! settantuno;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 72 **/
$("#settantadue").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "block");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 73 **/
$("#settantatre").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "block");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                settantatre = ! settantatre;
                console.log(settantatre);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(settantatre === true){
                settantatre = ! settantatre;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 74 **/
$("#settantaquattro").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "block");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 75 **/
$("#settantacinque").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "block");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                settantacinque = ! settantacinque;
                console.log(settantacinque);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(settantacinque === true){
                settantacinque = ! settantacinque;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 76 **/
$("#settantasei").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "block");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 77 **/
$("#settantasette").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "block");
                $(".info19").css("display", "none");
                $(".info20").css("display", "none");
    } else {
                settantasette = ! settantasette;
                console.log(settantasette);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(settantasette === true){
                settantasette = ! settantasette;
                scoreD++;
                console.log(scoreD);}
                });
});

/** img 78 **/
$("#settantotto").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "block");
                $(".info20").css("display", "none");
    } else {
                $(this).toggleClass("scale");}
});

/** img 79 **/
$("#settantanove").click(function() {
    if (info) {
                $(".info2").css("display", "none");
                $(".info1").css("display", "none");
                $(".info3").css("display", "none");
                $(".info4").css("display", "none");
                $(".info5").css("display", "none");
                $(".info6").css("display", "none");
                $(".info7").css("display", "none");
                $(".info8").css("display", "none");
                $(".info9").css("display", "none");
                $(".info10").css("display", "none");
                $(".info11").css("display", "none");
                $(".info12").css("display", "none");
                $(".info13").css("display", "none");
                $(".info14").css("display", "none");
                $(".info15").css("display", "none");
                $(".info16").css("display", "none");
                $(".info17").css("display", "none");
                $(".info18").css("display", "none");
                $(".info19").css("display", "none");
                $(".info20").css("display", "block");
    } else {
                settantanove = ! settantanove;
                console.log(settantanove);
                $(this).toggleClass("scale");}
});

$(document).ready(function() {    
            $(".donebutton3").click(
                function (){
                if(settantanove === true){
                settantanove = ! settantanove;
                scoreD++;
                console.log(scoreD);}
                });
});

/** done button **/

var first_click = true;


$(document).ready(function() {
$(".donebutton3").click(function() {
    if (first_click) {
                clearInterval(t);
                document.getElementById("numberscoreD1").innerHTML = scoreD;
                $(".numberscoreD").css("display", "block");
                setTimeout(function(){ $(".numberscoreD").css("display", "none"); }, 3000);
                $(".why").css("display", "block");
                setTimeout(function(){ $(".why").css("display", "none"); }, 3000);
                $(".text2").css("color", "#7135b6");
                document.getElementById("score").innerHTML = scoreD +"/10";
                document.getElementById("text2").innerHTML = "ARE YOU WONDERING WHY? CLICK ON THE IMAGES";
                document.getElementById("donebutton5").innerHTML = "NEXT";
                $(".score").css("opacity", "1");
                $(".grid-container").css("opacity", "0.2");
                setTimeout(function(){ $(".grid-container").css("opacity", "1"); }, 3000); 
document.getElementById("sessantadue").src = "img/quiz3/62A.jpg";
document.getElementById("sessantatre").src = "img/quiz3/63A.jpg";
document.getElementById("sessantaquattro").src = "img/quiz3/64A.jpg";
document.getElementById("sessantasei").src = "img/quiz3/66A.jpg";
document.getElementById("sessantanove").src = "img/quiz3/69A.jpg";
document.getElementById("settantanove").src = "img/quiz3/79A.jpg";
document.getElementById("settantatre").src = "img/quiz3/73A.jpg";
document.getElementById("settantacinque").src = "img/quiz3/75A.jpg";
document.getElementById("settantuno").src = "img/quiz3/71A.jpg";
document.getElementById("settantasette").src = "img/quiz3/77A.jpg";
                first_click = false;
                info = ! info;
    } else {
        location.replace("task6.html");
        localStorage.setItem("punteggioE", scoreD);}
});
});

/** QUIZ 3.2 **/

$(document).ready(function () {
    console.log("Page loaded.");

    var intervalA = null;

    var nextA = false;
    var imgCounterA = 0;
    var maxImagesA = 15;
    var scoreE = 0;

    var solutionsA = [
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false
    ];

    $(".truebutton4, .falsebutton4").click(function() {

        var answerA;

        if ($(this).attr("id") == "truebutton4") {
            answerA = true;
            $(".shapebutton1").css("background-color", "#7135b6");
            setTimeout(function(){ $(".shapebutton1").css("background-color", "transparent"); }, 1500);
        } else {
            answerA = false;
            $(".shapebutton2").css("background-color", "#7135b6");
            setTimeout(function(){ $(".shapebutton2").css("background-color", "transparent"); }, 1500);
        }

        if (checkAnswer(answerA, solutionsA, imgCounterA)) {
            console.log("true");
        } else {
            console.log("false");
        }
            imgCounterA++;

            setTimeout(function(){ $("#imgquiz2A").attr("src","img/quiz2A/" + imgCounterA + ".jpg"); }, 600);
            setTimeout(function(){ $(".truebutton4").css("display", "none"); }, 500);                    
            setTimeout(function(){ $(".falsebutton4").css("display", "none"); }, 500);                    
            setTimeout(function(){ $("#nextlevel1").css("display", "block"); }, 800);                    
        
            function checkAnswer(answerA, solutionsA, currentImage) {
            console.log(answerA);
            if (answerA == solutionsA[currentImage]) {
            scoreE++;
            console.log(scoreE);
            $(".right").css("display", "block");        
            setTimeout(function(){ $(".right").css("display", "none"); }, 500);  
            }
            else {
            $(".wrong").css("display", "block");        
            setTimeout(function(){ $(".wrong").css("display", "none"); }, 500);  
            }
            }
            });

    //
    // Functions below
    //
   
            $("#nextlevel1").click(
                function (){
                    if (imgCounterA < maxImagesA) {
            setTimeout(function(){ $(".truebutton4").css("display", "block"); }, 100);  
            setTimeout(function(){ $(".falsebutton4").css("display", "block"); }, 100);  
            imgCounterA++;        
            $("#imgquiz2A").attr("src","img/quiz2A/" + imgCounterA + ".jpg");
            $("#nextlevel1").css("display", "none");
                        }
            else {
                $("#nextlevel1").css("display", "none");
                localStorage.setItem("punteggioF", scoreE);
                document.getElementById("numberscoreE1").innerHTML = scoreE;
                setTimeout(function(){ $(".numberscoreE").css("display", "block"); }, 100);
                setTimeout(function(){ $(".numberscoreE").css("display", "none"); }, 3100);
                $("#imgquiz2A").css("display", "none");
                setTimeout(function(){ $(".levelcompleted3").css("display", "block"); }, 4000);
                setTimeout(function(){ location.replace("policy4.html");}, 7000);
            setInterval(function(){ $(".truebutton4").css("display", "none"); }, 1);  
            setInterval(function(){ $(".falsebutton4").css("display", "none"); }, 1); 
            }
                }
            );
    
    function gradientOpacity(id1, id2, offset_x, offset_y) {
        var rel = { x: -1, y: -1 };
        $(document).mousemove(function (event) {
            rel.x = (event.pageX - $(id1).offset().left + offset_x);
            rel.y = (event.pageY - $(id1).offset().top + offset_y);

            console.log(rel);

            var dist = Math.sqrt((rel.x * rel.x) + (rel.y * rel.y));
            console.log("dist: " + dist);
            if (dist <= 300) {
                $(id2).css("opacity", 1 - normalize(dist, 0, 300));
            } else {
                $(id2).css("opacity", 0);
            }
        });
    }

    function normalize(val, min, max) {
        var value = ((val - min) / (max - min));
        console.log(value);
        return value;
    }
});

/** QUIZ 4.1 **/

setTimeout(function(){ r = setInterval(conta1, 1); }, 1);

var ottantasette = false;
var ottantanove = false;
var ottantuno = false;
var novantadue = false;
var ottantasei = false;
var novantuno = false;
var scoreB = 0;

/** img 82 **/
$("#ottantadue").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info3a").css("display", "block");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                $(this).toggleClass("scale2");}
});

/** img 81 **/
$("#ottantuno").click(function() {
    if (info) {
                $(".info2a").css("display", "block");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                ottantuno = ! ottantuno;
                console.log(ottantuno);
                $(this).toggleClass("scale2");}
});

$(document).ready(function() {    
            $(".donebutton9").click(
                function (){
                if(ottantuno === true){
                ottantuno = ! ottantuno;
                scoreB++;
                console.log(scoreB);}
                });
});

/** img 83 **/
$("#ottantatre").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info4a").css("display", "block");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                $(this).toggleClass("scale2");}
});

/** img 84 **/
$("#ottantaquattro").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info7a").css("display", "block");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                $(this).toggleClass("scale2");}
});

/** img 85 **/
$("#ottantacinque").click(function() {
    if (info === true) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info8a").css("display", "block");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                $(this).toggleClass("scale2");}
});

/** img 86 **/
$("#ottantasei").click(function() {
    if (info === true) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info9a").css("display", "block");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                ottantasei = ! ottantasei;
                console.log(ottantasei);
                $(this).toggleClass("scale2");}
});

$(document).ready(function() {    
            $(".donebutton9").click(
                function (){
                if(ottantasei === true){
                ottantasei = ! ottantasei;
                scoreB++;
                console.log(scoreB);}
                });
});

/** img 87 **/
$("#ottantasette").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
                $(".info12a").css("display", "block");
    } else {    
                ottantasette = ! ottantasette;
                console.log(ottantasette);
                $(this).toggleClass("scale2");}
});

$(document).ready(function() {    
            $(".donebutton9").click(
                function (){
                if(ottantasette === true){
                ottantasette = ! ottantasette;
                scoreB++;
                console.log(scoreB);}
                });
});

/** img 88 **/
$("#ottantotto").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "block");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                $(this).toggleClass("scale2");}
});

/** img 89 **/
$("#ottantanove").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "block");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                ottantanove = ! ottantanove;
                console.log(ottantanove);
                $(this).toggleClass("scale2");}
});

$(document).ready(function() {    
            $(".donebutton9").click(
                function (){
                if(ottantanove === true){
                ottantanove = ! ottantanove;
                scoreB++;
                console.log(scoreB);}
                });
});

/** img 90 **/
$("#novanta").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "block");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "none");
    } else {    
                $(this).toggleClass("scale2");}
});

/** img 91 **/
$("#novantuno").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "block");
                $(".info19a").css("display", "none");
    } else {    
                novantuno = ! novantuno;
                console.log(novantuno);
                $(this).toggleClass("scale2");}
});

$(document).ready(function() {    
            $(".donebutton9").click(
                function (){
                if(novantuno === true){
                novantuno = ! novantuno;
                scoreB++;
                console.log(scoreB);}
                });
});

/** img 92 **/
$("#novantadue").click(function() {
    if (info) {
                $(".info2a").css("display", "none");
                $(".info3a").css("display", "none");
                $(".info4a").css("display", "none");
                $(".info7a").css("display", "none");
                $(".info8a").css("display", "none");
                $(".info9a").css("display", "none");
                $(".info12a").css("display", "none");
                $(".info13a").css("display", "none");
                $(".info14a").css("display", "none");
                $(".info17a").css("display", "none");
                $(".info18a").css("display", "none");
                $(".info19a").css("display", "block");
    } else {    
                novantadue = ! novantadue;
                console.log(novantadue);
                $(this).toggleClass("scale2");}
});

$(document).ready(function() {    
            $(".donebutton9").click(
                function (){
                if(novantadue === true){
                novantadue = ! novantadue;
                scoreB++;
                console.log(scoreB);}
                });
});

/** done button **/

var first_click = true;


$(document).ready(function() {
$(".donebutton9").click(function() {
    if (first_click) {
            clearInterval(r);
                document.getElementById("numberscoreB1").innerHTML = scoreB;
                $(".numberscoreB").css("display", "block");
                setTimeout(function(){ $(".numberscoreB").css("display", "none"); }, 3000);
                $(".why").css("display", "block");
                setTimeout(function(){ $(".why").css("display", "none"); }, 3000);
                document.getElementById("text2").innerHTML = "ARE YOU WONDERING WHY? CLICK ON THE IMAGES";
                $(".text8").css("color", "#7135b6");
                document.getElementById("score2").innerHTML = scoreB + "/6";
                document.getElementById("donebutton11").innerHTML = "NEXT";
                $(".text2").css("color", "#7135b6");
                $(".score2").css("opacity", "1");
                $(".grid-container").css("opacity", "0.2");
                setTimeout(function(){ $(".grid-container").css("opacity", "1"); }, 3000);
document.getElementById("ottantasette").src = "img/quiz4/87A.jpg";
document.getElementById("ottantanove").src = "img/quiz4/89A.jpg";
document.getElementById("ottantuno").src = "img/quiz4/81A.jpg";
document.getElementById("novantadue").src = "img/quiz4/92A.jpg";
document.getElementById("ottantasei").src = "img/quiz4/86A.jpg";
document.getElementById("novantuno").src = "img/quiz4/91A.jpg";
                first_click = false;
                info = ! info;
    } else {
        location.replace("task8.html");
        localStorage.setItem("punteggioG", scoreB);}
});
});

/** QUIZ 4.2 **/

setTimeout(function(){ p = setInterval(conta2, 2); }, 1);

var ventuno = false;
var ventitre = false;
var scoreF = 0;

/** img 21 **/
$("#ventuno").click(function() {
    if (info) {
                $(".info2b").css("display", "block");
                $(".info3b").css("display", "none");
                $(".info4b").css("display", "none");
    } else {    

                ventuno = ! ventuno;
                console.log(ventuno);
                $(this).toggleClass("scale1");}
});

$(document).ready(function() {    
            $(".donebutton12").click(
                function (){
                if(ventuno === true){
                ventuno = ! ventuno;
                scoreF++;
                console.log(scoreF);}
                });
});

/** img 22 **/
$("#ventitre").click(function() {
    if (info) {
                $(".info2b").css("display", "none");
                $(".info3b").css("display", "none");
                $(".info4b").css("display", "block");
    } else {    

                ventitre = ! ventitre;
                console.log(ventitre);
                $(this).toggleClass("scale1");}
});

$(document).ready(function() {    
            $(".donebutton12").click(
                function (){
                if(ventitre === true){
                ventitre = ! ventitre;
                scoreF++;
                console.log(scoreF);}
                });
});

/** img 23 **/
$("#ventidue").click(function() {
    if (info) {
                $(".info2b").css("display", "none");
                $(".info4b").css("display", "none");
                $(".info3b").css("display", "block");
    } else {    

                $(this).toggleClass("scale1");}
});

/** done button **/

var first_click = true;

$(document).ready(function() {
$(".donebutton12").click(function() {
    if (first_click) {
                clearInterval(p);
                document.getElementById("numberscoreG1").innerHTML = scoreF;
                $(".numberscoreG").css("display", "block");
                setTimeout(function(){ $(".numberscoreG").css("display", "none"); }, 3000);
                $(".why1").css("display", "block");
                setTimeout(function(){ $(".why1").css("display", "none"); }, 3000);
                document.getElementById("text2").innerHTML = "ARE YOU WONDERING WHY? CLICK ON THE IMAGES";
                $(".text7").css("color", "#7135b6");
                document.getElementById("score3").innerHTML = scoreF + "/2";
                document.getElementById("donebutton14").innerHTML = "NEXT";
                $(".score3").css("opacity", "1");
document.getElementById("ventidue").src = "img/quiz4A/22A.jpg";
                $(".grid-container").css("opacity", "0.2");
                setTimeout(function(){ $(".grid-container").css("opacity", "1"); }, 3000); 
                first_click = false;
                info = ! info;
    } else {
        location.replace("policyfinal.html");
        localStorage.setItem("punteggioH", scoreF);
    }
});
});    

/** gif home **/

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome1").css("display", "block");        
        setTimeout(function(){$(".gifhome1").css("display", "none");}, Math.random() * 10);
 }, 30000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome2").css("display", "block");        
        setTimeout(function(){$(".gifhome2").css("display", "none");}, 3000);
 }, 10000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome3").css("display", "block");        
        setTimeout(function(){$(".gifhome3").css("display", "none");}, 1000);
 }, 5000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome4").css("display", "block");        
        setTimeout(function(){$(".gifhome4").css("display", "none");}, 5000);
 }, 20000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome5").css("display", "block");        
        setTimeout(function(){$(".gifhome5").css("display", "none");}, 1000);
 }, 30000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome6").css("display", "block");        
        setTimeout(function(){$(".gifhome6").css("display", "none");}, 3000);
 }, 20000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome7").css("display", "block");        
        setTimeout(function(){$(".gifhome7").css("display", "none");}, 4000);
 }, 15000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome8").css("display", "block");        
        setTimeout(function(){$(".gifhome8").css("display", "none");}, 2000);
 }, 7000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome9").css("display", "block");        
        setTimeout(function(){$(".gifhome9").css("display", "none");}, 4500);
 }, 8000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome10").css("display", "block");        
        setTimeout(function(){$(".gifhome10").css("display", "none");}, 1500);
 }, 6000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome11").css("display", "block");        
        setTimeout(function(){$(".gifhome11").css("display", "none");}, 5000);
 }, 6000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome12").css("display", "block");        
        setTimeout(function(){$(".gifhome12").css("display", "none");}, 3000);
 }, 6000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome13").css("display", "block");        
        setTimeout(function(){$(".gifhome13").css("display", "none");}, 7000);
 }, 2000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome14").css("display", "block");        
        setTimeout(function(){$(".gifhome14").css("display", "none");}, 2000);
 }, 5000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome15").css("display", "block");        
        setTimeout(function(){$(".gifhome15").css("display", "none");}, 4000);
 }, 7000);
});


/** policy to quiz **/
$(document).ready(function() {    
    setTimeout(function(){
        $(".frecciadx").css("opacity", "1");}, 4000);
});

$(document).ready(function() {    
            $("#freccia1").click(
                function (){
        location.replace("task1.html");
                });
});

$(document).ready(function() {    
            $("#freccia2").click(
                function (){
        location.replace("task3.html");
                });
});

$(document).ready(function() {    
            $("#freccia3").click(
                function (){
        location.replace("task5.html");
                });
});

$(document).ready(function() {    
            $("#freccia4").click(
                function (){
        location.replace("task7.html");
                });
});

$(document).ready(function() {    
            $("#freccia5").click(
                function (){
        location.replace("levelcompleted.html");
                });
});

/* INFO 4.1 */

$(document).ready(function() {    
            $(".info2A").click(function (){
                $(".info2a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info3A").click(function (){
                $(".info3a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info4A").click(function (){
                $(".info4a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info7A").click(function (){
                $(".info7a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info8A").click(function (){
                $(".info8a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info9A").click(function (){
                $(".info9a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info12A").click(function (){
                $(".info12a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info13A").click(function (){
                $(".info13a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info14A").click(function (){
                $(".info14a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info17A").click(function (){
                $(".info17a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info18A").click(function (){
                $(".info18a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info19A").click(function (){
                $(".info19a").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info20A").click(function (){
                $(".info20a").css("display", "none");
                });
});

/* INFO 4.2 */

$(document).ready(function() {    
            $(".info2A").click(function (){
                $(".info2b").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info3A").click(function (){
                $(".info3b").css("display", "none");
                });
});

$(document).ready(function() {    
            $(".info4A").click(function (){
                $(".info4b").css("display", "none");
                });
});

/* Level completed final */

$(document).ready(function() {
    setInterval(function(){ setTimeout(function(){ $("#levelcompletedA").css("display", "none"); }, 400);
    setTimeout(function(){ $("#levelcompletedA").css("display", "block"); }, 800);
    setTimeout(function(){ $("#levelcompletedB").css("display", "none"); }, 400);
    setTimeout(function(){ $("#levelcompletedB").css("display", "block"); }, 800);
    setTimeout(function(){ $("#levelcompletedC").css("display", "none"); }, 400);
    setTimeout(function(){ $("#levelcompletedC").css("display", "block"); }, 800);
    setTimeout(function(){ $("#levelcompletedD").css("display", "none"); }, 400);
    setTimeout(function(){ $("#levelcompletedD").css("display", "block"); }, 800); }, 800);  
});


/** gif home **/

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome16").css("display", "block");        
        setTimeout(function(){$(".gifhome16").css("display", "none");}, 1000);
 }, 2000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome17").css("display", "block");        
        setTimeout(function(){$(".gifhome17").css("display", "none");}, 900);
 }, 1100);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome18").css("display", "block");        
        setTimeout(function(){$(".gifhome18").css("display", "none");}, 1100);
 }, 1200);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome19").css("display", "block");        
        setTimeout(function(){$(".gifhome19").css("display", "none");}, 3000);
 }, 5000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome20").css("display", "block");        
        setTimeout(function(){$(".gifhome20").css("display", "none");}, 1700);
 }, 1700);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome21").css("display", "block");        
        setTimeout(function(){$(".gifhome21").css("display", "none");}, 900);
 }, 700);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome22").css("display", "block");        
        setTimeout(function(){$(".gifhome22").css("display", "none");}, 2000);
 }, 1500);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome23").css("display", "block");        
        setTimeout(function(){$(".gifhome23").css("display", "none");}, 1000);
 }, 3000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome24").css("display", "block");        
        setTimeout(function(){$(".gifhome24").css("display", "none");}, 1000);
 }, 1400);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome25").css("display", "block");        
        setTimeout(function(){$(".gifhome25").css("display", "none");}, 1000);
 }, 3000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome26").css("display", "block");        
        setTimeout(function(){$(".gifhome26").css("display", "none");}, 1600);
 }, 800);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome28").css("display", "block");        
        setTimeout(function(){$(".gifhome28").css("display", "none");}, 2000);
 }, 1000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhom29").css("display", "block");        
        setTimeout(function(){$(".gifhome29").css("display", "none");}, 1200);
 }, 800);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome30").css("display", "block");        
        setTimeout(function(){$(".gifhome30").css("display", "none");}, 800);
 }, 1000);
});

$(document).ready(function() {    
    setInterval(function(){
        $(".gifhome31").css("display", "block");        
        setTimeout(function(){$(".gifhome31").css("display", "none");}, 2000);
 }, 2000);
});

  // VERTICAL SCROLL

$(document).ready(function() {
  var delta = 0;
  var scrollThreshold = 5;

  // detect available wheel event
  wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
      document.onmousewheel !== undefined ? "mousewheel" :         // Webkit and IE support at least "mousewheel"
      "DOMMouseScroll";                                            // let's assume that remaining browsers are older Firefox

  // Bind event handler
  $(window).on(wheelEvent, function (e) {
      // Do nothing if we weren't scrolling the carousel
      var carousel = $('.carousel.vertical:hover');
      if (carousel.length === 0)  return;

      // Get the scroll position of the current slide
      var currentSlide = $(e.target).closest('.item')
      var scrollPosition = currentSlide.scrollTop();

      // --- Scrolling up ---
      if (e.originalEvent.detail < 0 || e.originalEvent.deltaY < 0 || e.originalEvent.wheelDelta > 0) {
          // Do nothing if the current slide is not at the scroll top
          if(scrollPosition !== 0) return;

          delta--;

          if ( Math.abs(delta) >= scrollThreshold) {
              delta = 0;
              carousel.carousel('prev');
          }
      }

      // --- Scrolling down ---
      else {
          // Do nothing if the current slide is not at the scroll bottom
          var contentHeight = currentSlide.find('> .content').outerHeight();
          if(contentHeight > currentSlide.outerHeight() && scrollPosition + currentSlide.outerHeight() !== contentHeight) return;

          delta++;
          if (delta >= scrollThreshold)
          {
              delta = 0;
              carousel.carousel('next');
          }
      }

      // Prevent page from scrolling
      return false;
  });
})
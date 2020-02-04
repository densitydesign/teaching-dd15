$(document).ready(function () {
    $("#populh, #natuh, #replaceh, #efforth, #perfectionh, #skillsh").hide();
    $("#popul1, #natu1, #replace1, #effort1, #perfection1, #skills1").hide();

    // $("element").hover(mouseEntering, mouseLeaving)
    $("#popul").hover(function () {
        $("#populh").toggle();
        $("#popul1").toggle();
        $("#popul").hide();
    }, function () {
        $("#popul").toggle();
        $("#popul1").hide();
        $("#populh").hide();
    });

    $("#natu").hover(function () {
        $("#natuh").toggle();
        $("#natu1").toggle();
        $("#natu").hide();
    }, function () {
        $("#natu").toggle();
        $("#natu1").hide();
        $("#natuh").hide();
    });


    $("#replace").hover(function () {
        $("#replaceh").toggle();
        $("#replace1").toggle();
        $("#replace").hide();
    }, function () {
        $("#replace").toggle();
        $("#replace1").hide();
        $("#replaceh").hide();
    });


    $("#effort").hover(function () {
        $("#efforth").toggle();
        $("#effort1").toggle();
        $("#effort").hide();
    }, function () {
        $("#effort").toggle();
        $("#effort1").hide();
        $("#efforth").hide();
    });



    $("#perfection").hover(function () {
        $("#perfectionh").toggle();
        $("#perfection1").toggle();
        $("#perfection").hide();
    }, function () {
        $("#perfection").toggle();
        $("#perfection1").hide();
        $("#perfectionh").hide();
    });


    $("#skills").hover(function () {
        $("#skillsh").toggle();
        $("#skills1").toggle();
        $("#skills").hide();
    }, function () {
        $("#skills").toggle();
        $("#skills1").hide();
        $("#skillsh").hide();
    });

});


let toolTip1 = document.getElementById('tooltip1');
let toolTip2 = document.getElementById('tooltip2');
let toolTip3 = document.getElementById('tooltip3');
let toolTip4 = document.getElementById('tooltip4');
let toolTip5 = document.getElementById('tooltip5');
let toolTip6 = document.getElementById('tooltip6');


window.onmousemove = function (event) {
    let x = event.clientX;
    let y = event.clientY;
    toolTip1.style.left = (x - 50) + 'px';
    toolTip1.style.top = (y + 20) + 'px';
	
    toolTip2.style.left = (x - 250) + 'px';
    toolTip2.style.top = (y + 20) + 'px';
   
   toolTip3.style.left = (x - 100) + 'px';
    toolTip3.style.top = (y + 20) + 'px';
    
	toolTip4.style.left = (x - 200) + 'px';
    toolTip4.style.top = (y + 20) + 'px';
   
   toolTip5.style.left = (x - 100) + 'px';
    toolTip5.style.top = (y + 20) + 'px';
    
	toolTip6.style.left = (x - 280) + 'px';
    toolTip6.style.top = (y + 20) + 'px';
}
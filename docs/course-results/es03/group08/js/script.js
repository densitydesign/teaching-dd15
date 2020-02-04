console.log("HELLO");
updateAutoMargin();

//$(".video-collection").css("height", $(".interactive").css("height"));

var vid = document.getElementById("vid-post");

const _sections = [
    "first",
    "second",
    "third",
    "forth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth"
];


var scrollTop;
var scrollLeft;

//
// CONST VARIABLES
//
const _visible = "visible";
const _hidden = "hidden";

// resizable: div element can change size
const _resizable = "resizable";
// resizable: div element cannot change size
const _fixed = "fixed";
const _defaul = "default";
const _experiment = "experiment";
const _interactive = "interactive";

//
// SECTIONS DECLARATION
//
class Section {
    constructor(id, type, layout, status) {
        this.id = id;
        this.type = type;
        this.layout = layout;
        this.status = status;
        this.dir = 1;
    }
}

//
// SECTIONS BEHAVIOUR DESCRIPTION
//
var sectionList = [
    new Section(_sections[0], _defaul, _fixed, _visible),
    new Section(_sections[1], _defaul, _fixed, _visible),
    new Section(_sections[2], _defaul, _fixed, _visible),
    new Section(_sections[3], _defaul, _resizable, _visible),
    new Section(_sections[4], _interactive, _fixed, _visible),
    new Section(_sections[5], _experiment, _fixed, _visible),
    new Section(_sections[6], _defaul, _resizable, _visible),
    new Section(_sections[7], _defaul, _fixed, _visible),
    new Section(_sections[8], _defaul, _resizable, _visible),
    new Section(_sections[9], _experiment, _fixed, _visible),
    new Section(_sections[10], _experiment, _fixed, _visible),
    new Section(_sections[11], _defaul, _fixed, _visible),
    new Section(_sections[12], _defaul, _fixed, _visible)
]

//
// LOCK SCROLLING TO PAGES
//
var delta = 0;
var wheelEventTime = Date.now();

var currentSection = 0;

function scroll_to(id) {
    var vid;

    for (var i = 0; i < _sections.length; i++) {
        vid = document.getElementById("vid-" + _sections[i]);
        if (vid != null)
            vid.muted = true;
    }

    var i = 0;
    while (i < _sections.length) {
        if (id === _sections[i]) {
            if (sectionList[i].type === _experiment) {
                console.log("EXPERIMENT!");
                $("body").css("background-color", "rgba(0, 0, 0, .8)");
            } else {
                if (!($("body").css("background-color") === "black")) {
                    $("body").css("background-color", "black");
                }
            }
        }
        i++;
    }

    vid = document.getElementById("vid-" + id);
    if (vid != null) {
        vid.muted = false;
        vid.play();
    }
        

    $('html,body').animate({
        scrollTop: $('#' + id).offset().top
    }, 'slow');
}



//
// SCREEN RESIZING AND
// VIEWPORT VW CALCULATION
//
var body = $("div");
var vw = $(window).width() / 100;
var amount = vw * 5;

$(window).resize(function () {
    var tmp = vw;
    vw = $(window).width() / 100;

    amount = vw * (amount / tmp);

    updateAutoMargin();
});


var dir = 1;

var isHidden = false;

//
// SCROLLING AND RESIZING ANIMATION
//
$(document).ready(function () {
    $("#plus, #minus").click(function (event) {

        var id = event.target.id;
        if (event.target.id === "plus" || event.target.id === "minus") {
            id = $(this).closest('div').attr('id');
        }
        console.log(id);


        //
        // RESIZING
        //
        //console.log($(".video-main#" + id).css('width'));


        // SELECTING CURRENT SECTION
        var i = 0;
        while (sectionList[i].id != id) {
            i++;
        }

        console.log(event.target.id + ": I've found section number " + i + " whit id " + id);

        $("div.button#" + id + " > p#plus").toggle();
        $("div.button#" + id + " > p#minus").toggle();

        if (sectionList[i].layout === _fixed) {
            console.log("I AM FIXED!");

            //
            // SCROLLING
            //
            $("#" + id).stop().animate({ scrollLeft: (7 * amount * sectionList[i].dir) }, 250, 'swing', function () {
            });

            sectionList[i].dir *= (-1);
        } else {
            console.log(sectionList[i]);
            console.log("I AM RESIZABLE!");

            if (sectionList[i].status === _visible) {
                $(".video-main#" + id).css("width", "55vw");
                $(".wide#" + id).css("width", "115vw");
                sectionList[i].status = _hidden;

            } else {
                $(".video-main#" + id).css("width", "90vw");
                $(".wide#" + id).css("width", "150vw");
                sectionList[i].status = _visible;
            }
        }
    });
});


//
// ICON DESCRIPTION ANIMATION
//
var id;

$('.icon').mouseenter(function (event) {
    console.log("ICON ENTER");

    id = event.target.id;

    $(".icon-desc#" + id).css("height", "auto");
    $(".icon-desc#" + id).css("padding", "1.25vw");
    console.log("mouseenter ON " + id);
}).mouseleave(function () {
    $(".icon-desc#" + id).css("height", "0px");
    $(".icon-desc#" + id).css("padding", "0px 1.25vw 0px 1.25vw");
    console.log("mouseleave ON " + id);
});

var videoIDList = [
    "original",
    "dataset",
    "mask",
    "alignment",
    "deepfake",
    "post"
]


$(".dot#" + videoIDList[videoIDList.length - 1]).addClass("dot-active");

$('.ivana-anne').mouseenter(function (event) {
    console.log("CONTROLS ENTER");

    var currentTime = vid.currentTime;
    id = event.target.id;
    vid = document.getElementById("vid-" + id);




    for (var i = 0; i < videoIDList.length; i++) {
        $(".video-player#" + videoIDList[i]).css("display", "none");
        $(".dot#" + videoIDList[i]).removeClass("dot-active");
    }
    vid.currentTime = currentTime;
    $(".dot#" + id).addClass("dot-active");
    $(".video-player#" + id).css("display", "");

    console.log("mouseenter ON " + id);
});

function updateAutoMargin() {
    //$(".video-collection").css("height", $(".interactive").css("height"));

    var margin = (window.innerHeight - (($(window).width() * 9) / 16)) / 2;
    console.log("H = " + window.innerHeight + "; W = " + $(window).width());
    console.log(margin);
    $(".auto-margin").css("height", margin + "px");
}

function getCurTime() {
    alert(vid.currentTime);
}

function setCurTime() {
    vid.currentTime = 5;
}


// var scrollEventTime = Date.now();

// var runOnScroll = function (event) {



//     if (Date.now() - scrollEventTime > 250) {
//         for (var i = 0; i < _sections.length; i++) {
//             if ($('.number#' + _sections[i]).visible()) {

//                 if (currentSection != i) {
//                     console.log("NOW VISIBLE: " + _sections[i]);
//                     currentSection = i;
//                     scroll_to(_sections[i]);
//                     scrollEventTime = Date.now();
//                 }

//             }
//         }
//     }


// };

// window.addEventListener("scroll", runOnScroll);

// window.addEventListener("wheel", event => {


//     if (Date.now() - wheelEventTime > 250) {
//         delta = Math.sign(event.deltaY);
//         console.log(event.deltaY);

//         if (delta > 0) {

//             console.log("+");
//             if (currentSection < _sections.length - 1) {
//                 currentSection++;
//             }
//         }

//         if (delta < 0) {
//             console.log("-");
//             if (currentSection > 0) {
//                 currentSection--;
//             }
//         }

//         scroll_to(_sections[currentSection]);
//     }
//     wheelEventTime = Date.now();
//     scrollEventTime = Date.now();
// });

var scrollingValue = 0;
var wasScrolling = false;
var isScrolling = false;
var previousScrollingValue = 0;

var wheelEventTime = 0;

window.addEventListener("wheel", event => {

    console.log(event.deltaY);

    if (event.deltaY > 75) {
        // section++

        if ((event.deltaY > previousScrollingValue) && (Date.now() - wheelEventTime > 250)) {
            wheelEventTime = Date.now();
            if (currentSection < _sections.length - 1) {
                currentSection++;
            }
            console.log("------------>SCROLLING DOWN");
            scroll_to(_sections[currentSection]);

        }
    }

    if (event.deltaY < -75) {
        // section--

        if ((event.deltaY < previousScrollingValue) && (Date.now() - wheelEventTime > 250)) {
            wheelEventTime = Date.now();
            if (currentSection > 0) {
                currentSection--;
            }
            scroll_to(_sections[currentSection]);
        }
    }

    previousScrollingValue = event.deltaY;



    // if (!wasScrolling) {
    //     wasScrolling = true;
    //     scrollingValue = event.deltaY;

    //     if (event.deltaY > 0) {
    //         currentSection++
    //     }

    //     if (event.deltaY < 0) {
    //         currentSection--
    //     }

    //     scroll_to(_sections[currentSection]);
    // }


    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        console.log('Scrolling has stopped.');
        previousScrollingValue = 0;
        scrollingValue = 0;
        wasScrolling = false;

    }, 250);
}, false);


var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

document.addEventListener('wheel', preventDefault, { passive: false });


document.addEventListener('touchstart', handleTouchStart, false); //bind & fire - evento di inizio tocco
document.addEventListener('touchmove', handleTouchMove, false); // bind & fire - evento di movimento durante il tocco
var xDown = null;
var yDown = null;
function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    } //nessun movimento
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*Trovo quello più significativo sulle assi X e Y*/
        if (xDiff > 0) {
            /* swipe sinistra */
            console.log("Swipe SINISTRA");
        } else {
            /* swipe destra */
            console.log("Swipe DESTRA");
        }//right
    } else {
        if (yDiff > 0) {
            /* swipe alto */
            console.log("Swipe ALTO");
            if (currentSection < _sections.length - 1) {
                currentSection++;
            }
            scroll_to(_sections[currentSection]);
        } else {
            /* swipe basso */
            console.log("Swipe BASSO");
            if (currentSection > 0) {
                currentSection--;
            }
            scroll_to(_sections[currentSection]);
        }
    }


    /* reset values */
    xDown = null;
    yDown = null;
};

var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys 
            {
                if (e.keyCode == 38) {
                    if (currentSection > 0) {
                        currentSection--;
                    } else {
                        currentSection == 0;
                    }
                    scroll_to(_sections[currentSection]);
                }
                if (e.keyCode == 40) {
                    console.log("LOL");
                    if (currentSection < _sections.length - 1) {
                        currentSection++;
                    } else {
                        currentSection == _sections.length - 1;
                    }
                    scroll_to(_sections[currentSection]);
                }
                break;
            }
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);
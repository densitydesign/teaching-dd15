//
// Initializing viewport list
//
const viewportClass = ".viewport";
const viewportID = "viewport";
var viewportList = [];
var mostVisible = "undefined";
var mostVisiblePrec = "undefined";
var vid = document.getElementById("vid-original");

$(viewportClass).each(function (i, obj) {
    var id = viewportID + i;
    viewportList.push(id);
    $(this).attr('id', id);

    $($(this).find(".button")).each(function (j, obj) {
        var btnId = $(this).attr("id");
        $(this).attr("id", id + "-" + btnId);
    });

    $($(this).find(".tab")).each(function (j, obj) {
        var btnId = $(this).attr("id");
        $(this).attr("id", id + "-" + btnId);
    });

    if ((i > 1) && (i < 12)) {
        var mainNode = document.createElement("div");
        var pNode = document.createElement("p");
        var textNode = document.createTextNode(("0" + (i - 1)).slice(-2) + ".");

        mainNode.setAttribute("class", "left-navbar-element");
        mainNode.setAttribute("id", "left-navbar-element-" + id);
        mainNode.setAttribute("onClick", "goToVieweport(" + i + ");");

        pNode.appendChild(textNode);
        mainNode.appendChild(pNode);

        document.getElementById("left-navbar").appendChild(mainNode);
    }
});

var currentViewportPos = 0;
var currentViewport = viewportList[0];

viewport = {
    targetInternal: viewportList[0],
    targetListener: function (val) { },
    set target(val) {
        this.targetInternal = val;
        this.targetListener(val);
    },
    get target() {
        return this.targetInternal;
    },
    registerListener: function (listener) {
        this.targetListener = listener;
    }
}

viewport.registerListener(function (val) {
    scroll_To(val);
    console.log("New target: " + val);
});

goToVieweport(getCurrentViewportPos());
currentViewportPos = getCurrentViewportPos();
scroll_To("#" + viewportList[getCurrentViewportPos()]);



//
// On scroll update
//

$(window).scroll(function () {

    currentViewportPos = getCurrentViewportPos();

});

function getCurrentViewportPos() {
    var currentElement = 0;
    var currentElementPos = 0;

    $(viewportClass).each(function (i, obj) {
        var element = elementVisibility(viewportClass, "#" + viewportList[i]);

        if (currentElement < element) {
            currentElement = element;
            currentViewport = viewportList[i];
            //currentViewportPos = i;
            currentElementPos = i;
        }
    });

    console.log(currentViewport + " is visible!");

    mostVisiblePrec = currentViewport;
    return currentElementPos;
}

//
// Helpers
//
function elementVisibility(elementClass, elementId) {

    class Element {
        constructor(top, bottom) {
            this.top = top;
            this.bottom = bottom;
            this.height = bottom - top;
        }
    }

    var element = new Element($(elementClass + elementId).offset().top,
        $(elementClass + elementId).offset().top + $(elementClass + elementId).outerHeight());
    var screen = new Element($(window).scrollTop(), $(window).scrollTop() + $(window).innerHeight());


    if ((element.bottom < screen.top) || (element.top > screen.bottom)) {
        return 0;
    }

    if (element.top <= screen.top) {
        return (1 / screen.height) * (element.bottom - screen.top);
    }

    if (element.bottom <= screen.bottom) {
        return (screen.bottom - element.top)
    } else {
        return (1 / screen.height) * (screen.bottom - element.top);
    }

}

var page = $("html, body");

function scroll_To(id) {
    console.log("Scrolling to: " + id);
    //page.stop();    
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 400, function () {
        //page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    });

    for (var i = 0; i < viewportList.length; i++) {
        $(".left-navbar-element#left-navbar-element-" + viewportList[i]).removeClass("left-navbar-element-selected");
    }
    $(".left-navbar-element#left-navbar-element-" + viewport.target.substring(1, viewport.target.length)).addClass("left-navbar-element-selected");
}

page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
    //page.stop();
});

var isScrolling = false;
var scrollValuePrec = 0;
var scrollValue = 0;

window.addEventListener("wheel", event => {

    if (scrollValue == 0) {

        if (event.deltaY > 0) {
            // Increase current page
            if (currentViewportPos < viewportList.length - 1) {
                currentViewportPos++;
            }
        } else {
            // Decrease current page
            if (currentViewportPos > 0) {
                currentViewportPos--;
            }
        }
        goToVieweport(currentViewportPos);
        scrollValue = event.deltaY;
    }

    scrollValuePrec = event.deltaY;
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
        // Run the callback
        console.log(event.deltaY + ' Scrolling has stopped.');
        scrollValue = 0;
        scrollValuePrec = 0;
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

$(".button").click(function () {
    //alert("click on " + $(this).attr("class") + " " + $(this).attr("id"));


    var currentViewport;
    for (var i = 0; i < viewportList.length; i++) {
        if ($(this).attr("id").includes(viewportList[i])) {
            currentViewport = viewportList[i];
        }
    }

    var type = ($(this).attr("id").substring(currentViewport.length, $(this).attr("id").length));

    console.log(currentViewport + "; " + type);

    var currentTime;

    $("#" + currentViewport).each(function (i, obj) {
        $($(this).find(".button")).each(function (j, obj) {
            $(this).removeClass("button-selected");

            $(".tab#" + $(this).attr("id")).hide();
        });

        $($(this).find("video")).each(function (j, obj) {
            console.log($(this).attr("id"));
            if ($(this).attr("id") != undefined) {

                if ($(this).attr("id").includes("vid-")) {

                    var type = $(this).attr("id").substring(3, $(this).attr("id").length);

                    console.log($("#vid-" + type.substring(1, type.length)).css("display"));
                    if ($("#vid-" + type.substring(1, type.length)).css('display').toLowerCase() !== 'none') {
                        $("#vid-" + type.substring(1, type.length)).hide();
                        console.log("----> hiding: " + type);
                        // console.log("#vid-" + type.substring(1, type.length) + " is now hidden");
                        currentTime = vid.currentTime;

                    }
                }
            }
        });
    });

    for (var i = 0; i < viewportList.length; i++) {
        if ($(this).attr("id") === viewportList[i] + type) {
            $(this).addClass("button-selected");
            $(".tab#" + viewportList[i] + type).show();
            //$("#vid-" + type.substring(1, type.length)).show();
            console.log("000000: showing: " + type);
            if ($(this).attr("class").includes("process")) {
                vid = document.getElementById("vid-" + type.substring(1, type.length));
                vid.currentTime = currentTime;
                console.log(currentTime);
    
                $("#vid-" + type.substring(1, type.length)).show();
            } else {
                console.log("vid not included");
            }



        }
    }


    // for (var i = 0; i < viewportList.length; i++) {
    //     if ($(this).attr("id") === viewportList[i] + "-tech") {
    //         $(this).addClass("button-selected");
    //         $(".button#" + viewportList[i] + "-visual").removeClass("button-selected");
    //         $(".tab#" + viewportList[i] + "-tech").show();
    //         $(".tab#" + viewportList[i] + "-visual").hide();
    //     } else if ($(this).attr("id") === viewportList[i] + "-visual"){
    //         $(this).addClass("button-selected");
    //         $(".button#" + viewportList[i] + "-tech").removeClass("button-selected");
    //         $(".tab#" + viewportList[i] + "-tech").hide();
    //         $(".tab#" + viewportList[i] + "-visual").show();
    //     }
    // }

})

// TOUCH HANDLER
document.addEventListener('touchstart', handleTouchStart, false); //bind & fire - evento di inizio tocco
document.addEventListener('touchmove', handleTouchMove, false); // bind & fire - evento di movimento durante il tocco
document.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;
var scrollPos = 0;

var initialY = 0;
var currentY = 0;
var distance = 0;

var timeTouchStart = 0;
var timeTouchEnd = 0;

function handleTouchStart(event) {
    currentViewportPos = getCurrentViewportPos();
    timeTouchStart = Date.now();
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
    scrollPos = document.documentElement.scrollTop;
    initialY = 0;
    currentY = 0;
    distance = 0;
};



function handleTouchMove(event) {

    distance = initialY - currentY;
    currentY = event.touches[0].clientY;
    window.scrollTo(0, scrollPos + distance);

    if (!xDown || !yDown) {
        return;
    } //nessun movimento


    initialY = event.touches[0].clientY;
    //scrollPos = document.documentElement.scrollTop;

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    //window.scrollTo(top, left);


    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*Trovo quello più significativo sulle assi X e Y*/
        if (xDiff > 0) {
            /* swipe sinistra */
            console.log("Swipe sx");
        } else {
            /* swipe destra */
            console.log("Swipe dx");
        }//right
    } else {
        if (distance > 0 || distance < 0) {
            if (yDiff > 0) {
                /* swipe alto */
                console.log("Swipe up");
                if (currentViewportPos < viewportList.length - 1) {
                    currentViewportPos++;
                }
            } else {
                /* swipe basso */
                console.log("Swipe down");
                if (currentViewportPos > 0) {
                    currentViewportPos--;
                }
            }
        }
    }

    /* reset values */
    xDown = null;
    yDown = null;
};

function handleTouchEnd(event) {

    timeTouchEnd = Date.now();

    var scrollThreshold = .25;
    var velocityThreshold = 0.2;
    var velocity = distance / (timeTouchEnd - timeTouchStart);

    //console.log("Touch scroll speed: " + velocity);

    var normalizedDist = distance / window.innerHeight;

    if ((normalizedDist > scrollThreshold) || (velocity > velocityThreshold)) {
        if (currentViewportPos < viewportList.length - 1) {
            currentViewportPos++;
        }
    }

    if ((normalizedDist < -(scrollThreshold)) || (velocity < -velocityThreshold)) {
        if (currentViewportPos > 0) {
            currentViewportPos--;
        }
    }

    goToVieweport(currentViewportPos);
}

function goToVieweport(index) {
    viewport.target = "#" + viewportList[index];
}
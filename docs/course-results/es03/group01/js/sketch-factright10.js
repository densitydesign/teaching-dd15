function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q11.html?q10=' + check10, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check10 = url.searchParams.get("q10");
console.log(check10);

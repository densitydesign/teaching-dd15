function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q12.html?q11=' + check11, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check11 = url.searchParams.get("q11");
console.log(check11);

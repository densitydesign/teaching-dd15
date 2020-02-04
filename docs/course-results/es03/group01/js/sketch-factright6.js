function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q7.html?q6=' + check6, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check6 = url.searchParams.get("q6");
console.log(check6);

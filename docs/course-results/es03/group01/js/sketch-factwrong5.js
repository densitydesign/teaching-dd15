function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q6.html?q5=' + check5, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check5 = url.searchParams.get("q5");
console.log(check5);

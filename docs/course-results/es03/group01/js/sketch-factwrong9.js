function preload() {}

function setup() {}

function draw() {
  $('#next1').click(function() {
    window.open('../q/q10.html?q9=' + check9, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check9 = url.searchParams.get("q9");
console.log(check9);

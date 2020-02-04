let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 150) {
    window.open('../fact/fact9r.html?q9=' + check9, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check9 = url.searchParams.get("q9");

console.log(check9);

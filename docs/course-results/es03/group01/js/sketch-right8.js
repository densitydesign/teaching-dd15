let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 150) {
    window.open('../fact/fact8r.html?q8=' + check8, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check8 = url.searchParams.get("q8");

console.log(check8);

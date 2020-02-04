let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 150) {
    window.open('../fact/fact7w.html?q7=' + check7, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check7 = url.searchParams.get("q7")

console.log(check7);

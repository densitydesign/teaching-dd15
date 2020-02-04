let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 150) {
    window.open('../fact/fact6w.html?q6=' + check6, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check6 = url.searchParams.get("q6")

console.log(check6);

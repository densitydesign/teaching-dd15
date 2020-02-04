var giusto = 1;
var sbagliato = 0;

let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  var url_string = window.location.href;
  var url = new URL(url_string);

  var check = url.searchParams.get("q1")

  if (frameCount >= 150 && check == 1) {
    window.open('../fact/fact1r.html?q1=' + giusto, '_self');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

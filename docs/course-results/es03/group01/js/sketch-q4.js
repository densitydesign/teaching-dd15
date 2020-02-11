let fr = 50;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 4250) {
    tempoScaduto();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto() {
  var risul3 = parseInt(check3, 10);
  let sbagliato4 = risul3 + 0;
  window.open('../right-wrong/timeisup4.html?q4=' + sbagliato4, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check3 = url.searchParams.get("q3");

if (check3 == 3) {
  console.log('ok');
} else if (check3 < 3) {
  console.log('no');
}

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
  var risul7 = parseInt(check7, 10);
  let sbagliato8 = risul7 + 0;
  window.open('../right-wrong/timeisup8.html?q8=' + sbagliato8, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check7 = url.searchParams.get("q7");

if (check7 == 7) {
  console.log('ok');
} else if (check7 < 7) {
  console.log('no');
}

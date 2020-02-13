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
  var risul1 = parseInt(check1, 10);
  let sbagliato2 = risul1 + 0;
  window.open('../right-wrong/timeisup2.html?q2=' + sbagliato2, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check1 = url.searchParams.get("q1");

if (check1 == 1) {
  console.log('ok');
} else if (check1 == 0) {
  console.log('no');
}

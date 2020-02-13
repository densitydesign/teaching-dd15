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
  var risul2 = parseInt(check2, 10);
  let sbagliato3 = risul2 + 0;
  window.open('../right-wrong/timeisup3.html?q3=' + sbagliato3, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check2 = url.searchParams.get("q2");

if (check2 == 2) {
  console.log('ok');
} else if (check2 < 2) {
  console.log('no');
}

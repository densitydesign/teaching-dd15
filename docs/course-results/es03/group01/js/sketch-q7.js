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
  var risul6 = parseInt(check6, 10);
  let sbagliato7 = risul6 + 0;
  window.open('../right-wrong/timeisup7.html?q7=' + sbagliato7, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check6 = url.searchParams.get("q6");

if (check6 == 6) {
  console.log('ok');
} else if (check6 < 6) {
  console.log('no');
}

let fr = 50;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if (frameCount >= 3000) {
    tempoScaduto();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto() {
  var risul9 = parseInt(check9, 10);
  let sbagliato10 = risul9 + 0;
  window.open('../right-wrong/timeisup10.html?q10=' + sbagliato10, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check9 = url.searchParams.get("q9");

if (check9 == 9) {
  console.log('ok');
} else if (check9 < 9) {
  console.log('no');
}

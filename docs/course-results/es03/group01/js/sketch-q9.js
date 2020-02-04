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
  var risul8 = parseInt(check8, 10);
  let sbagliato9 = risul8 + 0;
  window.open('../right-wrong/timeisup9.html?q9=' + sbagliato9, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check8 = url.searchParams.get("q8");

if (check8 == 8) {
  console.log('ok');
} else if (check8 < 8) {
  console.log('no');
}

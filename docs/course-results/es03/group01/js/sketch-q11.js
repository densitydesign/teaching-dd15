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
  var risul10 = parseInt(check10, 10);
  let sbagliato11 = risul10 + 0;
  window.open('../right-wrong/timeisup11.html?q11=' + sbagliato11, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check10 = url.searchParams.get("q10");

if (check10 == 10) {
  console.log('ok');
} else if (check10 < 10) {
  console.log('no');
}

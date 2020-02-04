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
  var risul11 = parseInt(check11, 10);
  let sbagliato12 = risul11 + 0;
  window.open('../right-wrong/timeisup12.html?q12=' + sbagliato12, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check11 = url.searchParams.get("q11");

if (check11 == 11) {
  console.log('ok');
} else if (check11 < 11) {
  console.log('no');
}

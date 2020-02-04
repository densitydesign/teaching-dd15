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
  var risul5 = parseInt(check5, 10);
  let sbagliato6 = risul5 + 0;
  window.open('../right-wrong/timeisup6.html?q6=' + sbagliato6, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check5 = url.searchParams.get("q5");

if (check5 == 5) {
  console.log('ok');
} else if (check5 < 5) {
  console.log('no');
}

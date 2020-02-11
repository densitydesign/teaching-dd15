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
  var risul4 = parseInt(check4, 10);
  let sbagliato5 = risul4 + 0;
  window.open('../right-wrong/timeisup5.html?q5=' + sbagliato5, '_self');
}

var url_string = window.location.href;
var url = new URL(url_string);

var check4 = url.searchParams.get("q4");

if (check4 == 4) {
  console.log('ok');
} else if (check4 < 4) {
  console.log('no');
}

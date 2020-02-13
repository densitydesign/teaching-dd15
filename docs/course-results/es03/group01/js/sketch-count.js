let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if(frameCount >= 360){ //controllare in base alla connessione
    tempoScaduto();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto(){
  window.open('./q/q1.html?dummy=test', '_self');
}

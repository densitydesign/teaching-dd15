let fr = 60;

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  var risulFin = parseInt(check12, 10);
  $( "#parag" ).text( "Result: " + risulFin +  "/10" );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check12 = url.searchParams.get("q12")

console.log(check12);

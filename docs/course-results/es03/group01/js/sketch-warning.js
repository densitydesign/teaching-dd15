function preload() {}

function setup() {}

function draw() {
  $('#NEXTW').click(function() {
    window.open('./q/q9.html?q8=' + check8, '_self');
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var url_string = window.location.href;
var url = new URL(url_string);

var check8 = url.searchParams.get("q8");
console.log(check8);

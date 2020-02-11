  var vid;
  // var playing = true;

  let button1;
  let button2;

  function preload() {}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    vid = createVideo('0-1fail.mp4');
    vid.hide();

    vid.size(1920, 1080);
    vid.autoplay(true);
    vid.onended(choices);


    button1 = select("#opt4-1").style("display", "none");
    button2 = select("#opt4-2").style("display", "none");    createbtnExit();
  }

  function draw() {

    push();
    var video = vid.loadPixels();
    imageMode(CENTER);

    image(vid, width / 2, height / 2, width, width * 9 / 16);
    pop();
  }


  //pause
  // function mouseClicked() {
  //   if (!playing) {
  //     vid.play();
  //     // vid.time((mouseX/width) * vid.duration());
  //     playing = true;
  //   } else {
  //     vid.pause();
  //     playing = false;
  //   }
  // }

  function choices(elt) {


    button1.style("display", "inline-block");
    button1.mousePressed(senario1);
    // button1.position(width * 0.25, height * 0.8);


    button2.style("display", "inline-block");
    button2.mousePressed(senario2);

  }

  function senario1() {
    self.location = '../0-0intro/0-0intro.html';
  }
  function senario2() {
    self.location = '../0-2day2/0-2day2.html';
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  var vid;
  // var playing = true;

  let button1;
  let button2;
  // let button3;
  // let button4;

  function preload() {}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    vid = createVideo('1-2-1walkOfFameLose.mp4');
    vid.hide();

    vid.size(1920, 1080);
    vid.autoplay(true);
    vid.onended(choices);


    button1 = select("#opt4-1").style("display", "none");
    button2 = select("#opt4-2").style("display", "none");
    // button3 = select("#opt4-3").style("display", "none");
    // button4 = select("#opt4-4").style("display", "none");
        createbtnExit();
  }

  function draw() {

    push();
    var video = vid.loadPixels();
    imageMode(CENTER);

    image(vid, width / 2, height / 2, width, width * 9 / 16);
    pop();
  }



  function choices(elt) {

    button1.style("display", "inline-block");
    button1.mousePressed(senario1);

    button2.style("display", "inline-block");
    button2.mousePressed(senario2);

    // button3.style("display", "inline-block");
    // button3.mousePressed(senario3);

    // button4.style("display", "inline-block");
    // button4.mousePressed(senario4);

  }

  function senario1() {
    self.location = '../0-0intro/0-0intro.html';
  }

  function senario2() {
    self.location = '../1-0-0hollywood-map/1-0-0hollywood-map.html';
  }

  // function senario3() {
  //   self.location = '../1-1hollywood-map/1-1hollywood-map.html';
  // }

  // function senario4() {
  //   self.location = '../';
  // }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

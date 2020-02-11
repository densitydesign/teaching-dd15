function createbtnExit() {
  let btnExit;
  btnExit = createImg("../../QUIT.png").id("btnExit");
  select("#btnExit").style("text-align", "right");
  select("#btnExit").style("width", "10vw");
  select("#btnExit").position(windowWidth * 0.85, windowHeight * 0.05);
  btnExit.mousePressed(exitGame);

}

function exitGame() {
  self.location = "../../page4.html";
}

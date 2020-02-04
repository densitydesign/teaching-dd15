var s = function( p ) {
let fronte;
let retro;
let alpha;
let theta;
p.preload= function () {
retro = p.loadImage('assets/cardstacking5.jpg');
fronte = p.loadImage('assets/cardstacking11.jpg');
};
    
p.setup =function() {
 alpha=0;
p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
};

p.draw= function(){
     
theta = p.map(p.mouseX, 0, p.width, 0, 360);
   
   p.noStroke();
p.background(20);
    p.rotateY(-alpha);
    p.rotateY(theta*0.01);
    p.rotateZ(0.2);
    p.rotateX(0.1);
    p.texture(retro);
    p.plane(250, 400);
    p.translate(0, 0, 0.1);
    p.texture(fronte);
    p.plane(250, 400);
alpha=alpha + 0.1;
   
};
};

var myp5 = new p5(s, 'poster');





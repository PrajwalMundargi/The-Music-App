let x,y,r,g,b;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
 r=random(200);
 b=random(255);
 g=random(0);
  x=random(windowWidth);
  y=random(windowHeight)
 fill(r,g,b)
 ellipse(x,y,10,10)
}
function mousePressed() {
  background(0);
}

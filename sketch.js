var stairs;

function preload() {
  stairs = loadModel('assets/stairs.csv');
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {

  background(255);

  push();
  colorMode(HSB);
  fill(random(255),100,100);
  stroke(0,255,255,20);
  translate(valueX-200, valueY-100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(20);
  model(stairs);
  pop();
}
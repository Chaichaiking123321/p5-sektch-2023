let c;
let ourFont;
let points;
let hue = 0;
let alpha = 100;

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(100);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
  noFill();
}

function draw() {
  background(0);
  
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    let noiseVal = noise(x * 0.01, y * 0.01, frameCount * 0.01);
    let angle = map(noiseVal, 0, 1, 0, TWO_PI);
    let length = map(noiseVal, 0, 1, 5, 60);
    let alphaVal = map(noiseVal, 0, 1, 100, 200);
    let weight = map(noiseVal, 0, 1, 1, 5);
    let colorVal = (hue + i * 10) % 255;
    stroke(colorVal, 255, 255, alphaVal);
    strokeWeight(weight);
    line(x, y, x + length * cos(angle), y + length * sin(angle));
  }
  
  hue = (hue + 1) % 255;
}

function mousePressed() {
  saveCanvas(c, "fresh-sketch", "png");
}
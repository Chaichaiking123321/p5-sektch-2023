let c;
let ourFont;
let points;
let scaleAmount = 1;

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(100);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 100, 600, 600);
  noStroke();
}

function draw() {

  background(0);
  scale(1 / scaleAmount);
  

  scaleAmount = map(1000, 0, width, 0.5, 3);
  
  scale(scaleAmount);
  translate(width / (2 * scaleAmount), height / (2 * scaleAmount));
  

  for (let i = 0; i < points.length; i++) {
    fill(random(255), 255, 255);
    rect(points[i].x + random(-5, 5), points[i].y + random(-5, 5), random(10, 60));
  }
}
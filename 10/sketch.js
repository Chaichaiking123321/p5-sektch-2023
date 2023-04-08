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
  

  scaleAmount = map(900, 0, width, 0.5, 3);
  

  scale(scaleAmount);
  translate(width / (2 * scaleAmount), height / (2 * scaleAmount));
  

  for (let i = 0; i < points.length; i++) {
    let hue = map(points[i].x, 0, width, 0, 255);
    fill(hue, 255, 255);
    let size = map(points[i].y, 0, height, 5, 50);
    let x = points[i].x + sin(frameCount / 10 + i) * size;
    let y = points[i].y + cos(frameCount / 10 + i) * size;
    rect(x, y, size);
  }
}
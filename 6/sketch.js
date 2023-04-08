let c;
let ourFont;
let points;
let waveHeight = 200;
let waveSpeed = 0.02;
let waveWidth = 0.01;
let textSizeVal = 200;

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(textSizeVal);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
  noStroke();
}

function draw() {
  background(0);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y + sin(frameCount * waveSpeed + x * waveWidth) * waveHeight;
    fill((x + frameCount) % 255, 255, 255, 100);
    ellipse(x, y, 5, 5);
  }
}
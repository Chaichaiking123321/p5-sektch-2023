let c;
let ourFont;
let points;
let hue = 0;

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(100);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
  noStroke();
}

function draw() {
  background(map(frameCount % 255, 0, 255, 0, 360), 255, 255);

  for (let i = 0; i < points.length; i++) {
    let y = points[i].y + sin(frameCount / 20 + i) * 50;
    fill(hue, 255, 255);
    rect(points[i].x, y, 20, 20);
  }

  hue = (hue + 1) % 255;
}
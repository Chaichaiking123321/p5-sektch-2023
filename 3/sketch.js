let c;
let ourFont;
let points;

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
  background(0);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    let r = 10 + sin(frameCount * 0.05 + i * 0.1) * 30;
    let hue = map(i, 0, points.length, 0, 255);
    let sat = map(i, 0, points.length, 100, 255);
    let bri = map(i, 0, points.length, 50, 255);
    fill(hue, sat, bri);
    ellipse(x, y, r, r);
  }
}
let c;
let ourFont;
let points;
let time = 0;

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 1);
  textSize(200);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
  noStroke();
}

function draw() {
  background(0, 0.2);

  let wave = sin(time);
  let hue = map(wave, -1, 1, 240, 0);

  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + sin(time + i * 0.1) * 50;
    let y = points[i].y + cos(time + i * 0.1) * 50;
    let size = map(sin(time + i * 0.05), -1, 1, 10, 50);
    fill(hue, 80, 80, 0.8);
    ellipse(x, y, size);
  }

  time += 0.05;
}


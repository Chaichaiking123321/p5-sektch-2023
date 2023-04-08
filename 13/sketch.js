let c;
let ourFont;
let points;
let time = 0;

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(100);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
}

function draw() {
  background(0);
  time += 0.01;

  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + noise(i, time) * 100 - 50;
    let y = points[i].y + noise(i, time + 100) * 100 - 50;
    let hue = map(noise(i, time * 2), 0, 1, 0, 255);
    let saturation = map(noise(i, time * 2 + 100), 0, 1, 0, 255);
    let brightness = map(noise(i, time * 2 + 200), 0, 1, 0, 255);
    fill(hue, saturation, brightness);
    noStroke();
    ellipse(x, y, random(10, 60));
  }
}


let c;
let ourFont;
let points;
let time = 0;
let colors = ["#ff0033", "#ffaa00", "#00ccff", "#cc00ff"];

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 1);
  textSize(300);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
  noStroke();
}

function draw() {
  background(0);

  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + sin(time + i * 0.05) * 100;
    let y = points[i].y + cos(time + i * 0.05) * 100;
    let size = map(sin(time + i * 0.05), -1, 1, 10, 60);
    let index = floor(random(0, colors.length));
    let color = colors[index];
    fill(color);
    ellipse(x, y, size);
  }

  time += 0.05;
}


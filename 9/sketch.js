let c;
let ourFont;
let points;
let colors = ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
let colorIndex = 0;

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
    fill(colors[colorIndex]);
    rect(points[i].x, points[i].y, random(10, 50), random(10, 50));
  }

  if (frameCount % 60 == 0) {
    colorIndex = (colorIndex + 1) % colors.length;
  }

  textSize(mouseY / 10);
}
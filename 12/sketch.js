let c;
let ourFont;
let points;
let noiseScale = 0.01;
let angle = 0;
let speed = 0.005;

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

  noiseScale = map(mouseX, 0, width, 0.001, 0.02);

  angle += speed * frameCount;

  for (let i = 0; i < points.length; i++) {
  
    let noiseVal = noise(points[i].x * noiseScale, points[i].y * noiseScale, angle);
 
    let size = map(noiseVal, 0, 1, 10, 100);

    let hue = map(noiseVal, 0, 1, 0, 255);

    let x = points[i].x + map(noiseVal, 0, 1, -100, 100);
    let y = points[i].y + map(noiseVal, 0, 1, -100, 100);

    fill(hue, 255, 255);
    rect(x, y, size, size);
  }
}
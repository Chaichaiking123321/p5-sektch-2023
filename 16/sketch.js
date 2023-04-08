let c;
let ourFont;
let points;
let hue = 0;
let alpha = 100;

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
    let size = random(10, 60);
    let jitterX = random(-10, 10);
    let jitterY = random(-10, 10);
    let jitterSize = random(-10, 10);
    let x = points[i].x + jitterX;
    let y = points[i].y + jitterY;
    fill(hue, 255, 255, alpha);
    rect(x, y, size + jitterSize, size + jitterSize);
  }
  
  let noiseScale = 0.02;
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      let noiseVal = noise(x * noiseScale, y * noiseScale, frameCount * 0.02);
      let alphaVal = map(noiseVal, 0, 1, 50, 100);
      fill(0, 0, 255, alphaVal);
      ellipse(x, y, 10, 10);
    }
  }

  hue = (hue + 1) % 255;
  alpha = (alpha + 1) % 100;
}


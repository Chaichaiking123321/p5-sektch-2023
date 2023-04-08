let c;
let ourFont;
let points = [];
let hue = 0;
let textInput = "";

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(100);
  textFont(ourFont);
  noStroke();
}

function draw() {
  background(0);
  if (textInput.length > 0) {
    points = ourFont.textToPoints(textInput, 100, 600, 600, {
      sampleFactor: 0.25
    });
    for (let i = 0; i < points.length; i++) {
      let size = map(points[i].y, 0, height, 5, 50);
      let x = points[i].x + sin(frameCount / 10 + i) * size;
      let y = points[i].y + cos(frameCount / 10 + i) * size;
      let wave = sin(x / 20 + frameCount / 10) * 30;
      fill(hue + wave, 255, 255);
      rect(x, y + wave, size, size);
    }
  }

  hue = (hue + 1) % 255;
  textSize(50);
  fill(255);
  text("Type text to see it wavy", 100, 100);
}

function keyTyped() {
  textInput += key;
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    textInput = textInput.substring(0, textInput.length - 1);
  }
}
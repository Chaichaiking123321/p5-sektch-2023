let c;
let ourFont;
let points;
let hue = 0;
let alpha = 100;
let noiseScale = 0.02;
let triangleSize = 10;
let triangleColors = ["#FFD15C", "#FFBF69", "#FFA377", "#FF8F84", "#FF6C99", "#FF4DA3", "#FF00B5"];

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
    let noiseVal = noise(x * noiseScale, y * noiseScale, frameCount * 0.02);
    let triangleAlpha = map(noiseVal, 0, 1, 100, 200);
    
    for (let j = triangleColors.length - 1; j >= 0; j--) {
      let triangleHue = map(j, 0, triangleColors.length - 1, 0, 255);
      let triangleSizeMod = map(j, 0, triangleColors.length - 1, 1, 2);
      let triangleSizeNoise = noise(x * noiseScale * triangleSizeMod, y * noiseScale * triangleSizeMod, frameCount * 0.02);
      let triangleSizeVal = triangleSize + map(triangleSizeNoise, 0, 1, 0, 10);
      let triangleColor = color(triangleHue, 255, 255, triangleAlpha);
      
      fill(triangleColor);
      let rand = random();
      if (rand < 0.33) {
        triangle(x, y - triangleSizeVal / 2, x - triangleSizeVal / 2, y + triangleSizeVal / 2, x + triangleSizeVal / 2, y + triangleSizeVal / 2);
      } else if (rand < 0.66) {
        triangle(x - triangleSizeVal / 2, y - triangleSizeVal / 2, x + triangleSizeVal / 2, y - triangleSizeVal / 2, x, y + triangleSizeVal / 2);
      } else {
        triangle(x - triangleSizeVal / 2, y + triangleSizeVal / 2, x + triangleSizeVal / 2, y + triangleSizeVal / 2, x, y - triangleSizeVal / 2);
      }
    }
  }
  
  hue = (hue + 1) % 255;
  alpha = (alpha + 1) % 100;
}
let c;
let ourFont;
let points;
let hue = 0;
let particles = [];

function preload() {
  ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
  c = createCanvas(1000, 1000);
  colorMode(HSB, 255);
  textSize(100);
  textFont(ourFont);
  points = ourFont.textToPoints("B", 200, 700, 700);
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    let size = map(sin(frameCount * 0.05), -1, 1, 20, 80);
    fill(hue, 255, 255);
    noStroke();
    ellipse(x, y, size, size);
  }
  
  hue = (hue + 1) % 255;
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.color = color(random(255), random(255), random(255));
    this.size = random(5, 30);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.size = map(noise(this.pos.x * 0.01, this.pos.y * 0.01, frameCount * 0.01), 0, 1, 5, 30);
    this.color = color(
      noise(this.pos.x * 0.01, this.pos.y * 0.01, frameCount * 0.01) * 255,
      noise(this.pos.x * 0.01 + 1000, this.pos.y * 0.01 + 1000, frameCount * 0.01) * 255,
      noise(this.pos.x * 0.01 + 2000, this.pos.y * 0.01 + 2000, frameCount * 0.01) * 255
    );
  }
  
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

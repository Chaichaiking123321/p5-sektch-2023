let c;
let ourFont;
let points;
let hue = 0;
let letters = [];

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

  for (let i = 0; i < points.length; i++) {
    letters.push(new Letter(points[i]));
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < letters.length; i++) {
    letters[i].update();
    letters[i].draw();
  }
  
  hue = (hue + 1) % 255;
}


class Letter {
  constructor(point) {
    this.pos = createVector(point.x, point.y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);
    this.size = random(10, 60);
    this.color = color(random(255), 255, 255);
  }
  
  update() {
 
    this.acc.x += random(-0.1, 0.1);
    this.acc.y += random(-0.1, 0.1);
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);
    

    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
    this.acc.set(0, 0);
  }
  
  draw() {
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.size);
  }
}

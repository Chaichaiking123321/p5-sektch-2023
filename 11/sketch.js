let c;
let ourFont;
let f = 0;

let points;


function preload() {
    ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
    c = createCanvas(1000,1000)

    textSize(100)
    textFont(ourFont);
    
    points = ourFont.textToPoints("B",200,700,700);

    noStroke();
    
}

function draw() {
    background(0);
    colorMode(HSB,255);
f=f+0.0001;
    
  for(let i=0; i<points.length; i++) {
        fill(noise(f*points[i].x)*255,255,255)
        ellipse(points[i].x+random(-5,5), points[i].y+random(-5,5),random(10,20))
        
    }
    
}

let c;
let ourFont;
let points;

function preload() {
    ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
    c = createCanvas(1000,1000);
    colorMode(HSB, 255);
    textSize(100);
    textFont(ourFont);  
    points = ourFont.textToPoints("B", 200, 700, 700);
    noStroke();
}

function draw() {
    background(0);
    for(let i=0; i<points.length; i++) {
        let size = map(mouseX, 0, width, 5, 60);
        let hue = map(i, 0, points.length, 0, 255);
        fill(hue, 255, 255);
        ellipse(points[i].x, points[i].y, size, size);
    }
}
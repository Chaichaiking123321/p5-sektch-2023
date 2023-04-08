let c;
let ourFont;
let points;
let time = 0;

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
    background(0, 5);
    for(let i=0; i<points.length; i++) {
        let hue = map(i, 0, points.length, 0, 255);
        let size = 50 + sin(time + i * 0.2) * 30;
        let x = points[i].x;
        let y = points[i].y;
        fill(hue, 255, 255);
        ellipse(x, y, size);

        for(let j=1; j<8; j++) {
            let rippleSize = size + j * 20;
            let alpha = map(j, 0, 8, 100, 0);
            fill(hue, 255, 255, alpha);
            ellipse(x, y, rippleSize + sin(time * 0.3 + j * 0.2) * (8-j) * 10);
        }
    }
    time += 0.1;
}


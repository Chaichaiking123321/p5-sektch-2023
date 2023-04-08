let c;
let ourFont;
let f = 0;

let points;

function preload() {
    ourFont = loadFont('supERSUPER!.otf');
}

function setup() {
    c = createCanvas(1000, 1000, WEBGL);
    colorMode(HSB, 255);
    textSize(200);
    textFont(ourFont);
    points = ourFont.textToPoints("B", 200, 700, 700, {
        sampleFactor: 1.5
    });
}

function draw() {
    background(0);
    translate(-width / 2, -height / 2, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    f += 0.05;

    for (let i = 0; i < points.length; i++) {
        let n = noise(f, i);
        let size = map(n, 0, 1, 10, 60);
        let x = points[i].x;
        let y = points[i].y;
        let z = sin(f + i * 0.01) * 200;
        let hue = map(x, -350, 350, 0, 255);
        fill(hue, 255, 255);
        push();
        translate(x, y, z);
        sphere(size);
        pop();
    }
}


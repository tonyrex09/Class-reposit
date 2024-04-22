let canvasWidth = 400;
let canvasHeight = 400;
let bgColor;
let shapeColor1;
let shapeColor2;
let shapeColor3;
let angle = 0;
let radius = 50;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  bgColor = color(150); // Grayscale background color
  colorMode(RGB);
  shapeColor1 = color(255, 0, 0); // Red
  shapeColor2 = color(0, 255, 0); // Green
  shapeColor3 = color(0, 0, 255); // Blue
  frameRate(30); // Set the frame rate to 30 frames per second
}

function draw() {
  background(bgColor);
  drawDynamicShape();
}

function drawDynamicShape() {
  // Draw a shape at the mouse position
  translate(mouseX, mouseY);
  rotate(radians(angle));
  fill(shapeColor1);
  stroke(shapeColor2);
  ellipse(0, 0, radius * 2);

  // Update angle for rotation using pow() function
  angle += pow(sin(frameCount * 0.02), 2) * 5;

  // Use pmouseX, pmouseY to draw lines
  stroke(shapeColor3);
  line(pmouseX, pmouseY, mouseX, mouseY);

  // Use dist() function to change radius
  radius = dist(mouseX, mouseY, pmouseX, pmouseY) / 2;
}

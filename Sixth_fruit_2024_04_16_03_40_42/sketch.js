let points = []; 
let hullPoints = []; 
let k = 3; 
let hull;

function setup() {
  createCanvas(400, 400);
  generatePoints(50); 

}

function draw() {
  background(220);
  // Draw points
  fill(0);
  noStroke();
  points.forEach(point => {
    ellipse(point[0], point[1], 5, 5);
  });
  

  noFill();
  stroke(0, 0, 255);
  beginShape();
  hullPoints.forEach(point => {
    vertex(point[0], point[1]);
  });
  endShape(CLOSE);
}

function generatePoints(numPoints) {
  for (let i = 0; i < numPoints; i++) {
    let x = random(width);
    let y = random(height);
    points.push([x, y]);
  }
}




function setup() {
  createCanvas(400, 400); // Create a canvas that is 400x400 pixels
  angleMode(DEGREES); // Set angle mode to degrees
  background(220); // Set background color

  // Call the drawWeatherShape function multiple times using a for loop
  for (let i = 0; i < 5; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    drawWeatherShape(x, y); // Call the function with unique coordinates
  }

  // Call the calculateWindSpeed function and store the result
  let windSpeed = calculateWindSpeed();
  console.log("Wind Speed:", windSpeed); // Log the wind speed to the console
}

// Function to draw a weather shape (raindrop or cloud)
function drawWeatherShape(x, y) {
  push(); // Save the current transformation state
  translate(x, y); // Move origin to specified x, y coordinates

  // Draw a raindrop or cloud depending on a random choice
  let choice = random();
  if (choice < 0.5) {
    // Draw raindrop
    fill(0, 0, 255); // Blue color for raindrop
    ellipse(0, 0, 20, 40); // Ellipse shape for raindrop
  } else {
    // Draw cloud
    fill(255); // White color for cloud
    ellipse(0, 0, 60, 40); // Ellipse shape for cloud
    ellipse(20, -10, 40, 30); // Second ellipse for cloud
    ellipse(-20, -10, 40, 30); // Third ellipse for cloud
  }

  pop(); // Restore the previous transformation state
}

// Function to calculate wind speed (random value) and print it to console
function calculateWindSpeed() {
  let windSpeed = random(0, 50); // Generate random wind speed value
  print("Wind Speed:", windSpeed); // Send wind speed to console
  return windSpeed; // Return the wind speed value
}

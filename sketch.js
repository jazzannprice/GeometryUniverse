//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  noLoop();
}

function draw() {
  background(0); //Set your background color to black (0)

  for (let i=0; i<100; i++){


    noFill();
    translate(random(), random());
    scale(1, 1);
    rotate(random(), random(), random());
    ellipse(random(width), random(height), random(25,75), random(25,75))
    strokeWeight(8);
    stroke(random(255), random(255) , random(255));

  }
}

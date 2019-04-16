var s;
var scl = 20;
var food;


function setup() {
  createCanvas(200, 200);
  s = new Snake();
  frameRate(10);
  pickLocation();
}


// to create a grip pattern
function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}



function draw() {
  background(51);
  s.death();
  s.update();
  s.show();
  
  if (s.eat(food)) {
    pickLocation();
  }
  
  // fill the food with a color, then create a rectangle with size
  fill (255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

// function that is a global event
function keyPressed() {
  
  
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
    // nothing in x direction and -1 (or up 1) in y direction
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1); 
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  }
}


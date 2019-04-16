// constructial function
// a simple object, (a snake object)
// it has an x, y, and a speed for both

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  
  this.death = function() {
    // If the snake runs into itself, it resets the game
    
    // so we loop through every spot in the tail
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i]; // we look at each position
      var d  = dist(this.x, this.y, pos.x, pos.y); 
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
      }
    }
  }
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }
  
  // object can have input of x and y and they are assigned direction
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.update = function () {
    
    
    // adding the tail of the snake
    // two possibilities:
    // 1. adding food to the front and not shifting
    // 2. not adding food, so everything has to shift over
    
    // 2. no food eaten
    if (this.total === this.tail.length) {
          // no food, so shift the tail down
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
       
    }
    // 1. food is eaten, just add new spot
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    
    // that object can be constrained to certain areas
    // value is constrained between 0 and width
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
    
  }
  
  this.show = function() {
    // draw the rectangle where the tail is
    fill(255); // white in color
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    } 
    rect(this.x, this.y, scl, scl);
    
    
  
  }
}

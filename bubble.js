class Bubble {
  
  constructor (x, y, d, color) {
    
    this.x = x;
    this.y = y;
    this.d = d;
    this.color = color;
    
  }
  
  move() {
    
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
    
  }
  
  show() {
    
    stroke(255);
    strokeWeight(3);
    fill(0, 0, 255, this.color);
    ellipse(this.x, this.y, this.d);
    
  }
  
}

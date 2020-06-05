let bubbles = [];

function setup() {

  createCanvas(600, 400);
  
  for (let i = 0; i < 10; i ++) {
  
    bubbles.push(new Bubble(random(0, width), random(0, height), random(30, 50), 0));
    
  }

}

function draw() {

  background(0);

  for (let i = 0; i < bubbles.length; i++) {

    bubbles[i].move();
    bubbles[i].show();

  }

}

function mousePressed() {

  for (let i = 0; i < bubbles.length; i++) {
    
    if (dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y) <= bubbles[i].d / 2) {

      console.log('bubble clicked!');
      bubbles[i].color = 255;

    }

  }

}

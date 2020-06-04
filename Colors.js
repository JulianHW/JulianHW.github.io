var x = 0;
var y = 0;
var color_picked = false

function setup() {
  createCanvas(600, 600);

  while (x <= width) {

    y = 0;

    while (y <= height) {

      fill((map(x, 0, width, 0, 255)), 0, (map(y, 0, height, 0, 255)));
      noStroke();

      rect(x, y, 1, 1);

      y += 1;
    }
    x += 1;
  }
}

function mousePressed() {

  if (color_picked == false) {
    
    console.log('Color:');
    console.log(map(mouseX, 0, width, 0, 255));
    console.log(0);
    console.log(map(mouseY, 0, height, 0, 255));

    console.log('Complementary Color:');
    console.log(255 - (map(mouseX, 0, width, 0, 255)));
    console.log(255);
    console.log(255 - (map(mouseY, 0, height, 0, 255)));


    background((map(mouseX, 0, width, 0, 255)), 0, (map(mouseY, 0, height, 0, 255)));

  }

  color_picked = true
}

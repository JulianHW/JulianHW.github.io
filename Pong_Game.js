// -------------------------------------------------------

var ball = new Ball(300, 200, 8, -6);

var wait = 0;

var score = 0;

// -------------------------------------------------------

function setup() {

    createCanvas(600, 400);

}

// -------------------------------------------------------

function draw() {

    background(0, 0, 255);

// -------------------------------------------------------

    if (wait == false) {

        player();
        ball.move();
        ball.bounce();
        ball.display();
        scoreDisplay();

    }

// -------------------------------------------------------

    if (ball.x < 0) {

        restart();
        wait = true

    }

// -------------------------------------------------------

    if (wait == true) {

        fill(255, 0, 0);
        textSize(32);
        text('Game Over', 220, 100);
        text('Click to Restart', 200, 300);
        text('Score:', 240, 200);
        text(score, 340, 200);

    }

}

// -------------------------------------------------------

function player() {

    noStroke();
    fill(255, 0, 0);
    y = mouseY;

    if (y > 330) {

        y = 330;

    }

    if (y < 0) {

        y = 0;

    }

    rect(20, y, 10, 70);

}

// -------------------------------------------------------

function restart() {

    ball.x = 300;
    ball.y = 200;
    ball.xspeed = 8;
    ball.yspeed = -6;

}

// -------------------------------------------------------

function scoreDisplay() {

    fill(0);
    textSize(32);
    text('Score:', 240, 30);
    text(score, 340, 30);

}

// -------------------------------------------------------

function mousePressed() {

    if (wait > 0) {

        score = 0

    }

    wait = false;

}

// -------------------------------------------------------
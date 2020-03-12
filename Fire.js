class Ball {

    constructor(x, y, yspeed) {

        this.x = x;
        this.y = y;
        this.yspeed = yspeed;

    }

    move() {

        this.y += this.yspeed;

    }

    show() {

        fill(255, 0, 0);
        noStroke();
        ellipse(this.x, this.y, 5, 5);

    }

}

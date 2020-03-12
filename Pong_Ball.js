class Ball {

    constructor(x, y, xspeed, yspeed) {

        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;

    }

// -------------------------------------------------------

    move() {

        this.x += this.xspeed;
        this.y += this.yspeed;

    }

// -------------------------------------------------------

    bounce() {

        if (this.x > width) {

            this.xspeed = this.xspeed * -1;

        }

        if (this.y > height || this.y < 0) {

            this.yspeed = this.yspeed * -1;

        }

        var playery = mouseY;
        if (playery > 330) {

            playery = 330;

        }

        if (playery < 0) {

            playery = 0;

        }

        if (this.x <= 30 && this.x >= 20 && this.y >= playery && this.y <= playery + 70) {

            this.xspeed = this.xspeed * -1;
            score += 1;

            if (score % 5 == 0) {

                this.xspeed = this.xspeed * 1.1;
                this.yspeed = this.yspeed * 1.1;


            }

        }

    }

// -------------------------------------------------------

    display() {

        noStroke();
        fill(255, 0, 0);
        ellipse(this.x, this.y, 25, 25);

    }

}
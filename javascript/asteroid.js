class Asteroid {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 70;
        this.height = 70;
        this.img = new Image()
        this.img.src = "../images/asteroid2.png"

    }

    drawAsteroid = () => {
        ctx.drawImage( this.img, this.x, this.y, this.width, this.height)
    }

    asteroidMove = () => {
        this.y = this.y + 2.5
    }

}   
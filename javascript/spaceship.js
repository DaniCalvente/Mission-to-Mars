class Spaceship {

    constructor() {
        // spaceship properties
        this.x = canvas.width / 3;
        this.y = canvas.height - 200;
        this.width = 180;
        this.height = 180;
        this.img = new Image()
        this.img.src = "./images/spaceship.png"
    }

    // spaceship methods
    drawSpaceship = () => {
         ctx.drawImage( this.img, this.x, this.y, this.width, this.height)
    }

    spaceshipMove = () => {

    }
   

}
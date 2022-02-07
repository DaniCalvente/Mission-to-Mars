class Spaceship {

    constructor() {
        // spaceship properties
        this.x = canvas.width / 3;
        this.y = canvas.height - 200;
        this.width = 160;
        this.height = 160;
        this.img = new Image()
        this.img.src = "./images/spaceship.png"
        this.spaceshipSpeed = 20;
    }

    // spaceship methods
    drawSpaceship = () => {
         ctx.drawImage( this.img, this.x, this.y, this.width, this.height)
    }


    // quiero dar movimiento a la nave
    spaceshipMovement = (event) => {
        if (event.key === "ArrowRight" && this.x <= canvas.width - this.width ) {
            this.x = this.x + this.spaceshipSpeed
         } else if ( event.key === "ArrowLeft"  && this.x >= 0) {
            this.x = this.x - this.spaceshipSpeed
         } else if ( event.key === "ArrowUp" && this.y >= canvas.height / 2) {
            this.y = this.y - this.spaceshipSpeed 
         } else if ( event.key === "ArrowDown" && this.y <= canvas.height - this.height) {
            this.y = this.y + this.spaceshipSpeed
         }
    }
   

}
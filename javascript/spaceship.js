class Spaceship {

    constructor() {
        // spaceship properties
        this.x = canvas.width / 3;
        this.y = canvas.height - 200;
        // this.speedX = 0;
        // this.speedY = 0;
        this.width = 100;
        this.height = 130;
        this.img = new Image()
        this.img.src = "./images/spaceship.png"
        this.spaceshipSpeed = 20;
    }

    // spaceship methods
    drawSpaceship = () => {
         ctx.drawImage( this.img, this.x, this.y, this.width, this.height)
    }

    /* updatePosition(){
      this.x += this.speedX
      this.y += this.speedY
    } */


    // quiero dar movimiento a la nave
    spaceshipMovement = (event) => {
        if (event.key === "ArrowRight" && this.x <= canvas.width - this.width ) {
         this.x = this.x + this.spaceshipSpeed
            // this.speedX = 3;
         } if ( event.key === "ArrowLeft"  && this.x >= 0) {
         this.x = this.x - this.spaceshipSpeed
           // this.speedX = -3;
         } if ( event.key === "ArrowUp" && this.y >= canvas.height / 2) {
         this.y = this.y - this.spaceshipSpeed
           // this.speedY = 3; 
         } if ( event.key === "ArrowDown" && this.y <= canvas.height - this.height) {
         this.y = this.y + this.spaceshipSpeed
           // this.speedY = -3;
         }
    }
   

}
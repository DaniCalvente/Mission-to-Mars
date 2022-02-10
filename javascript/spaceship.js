class Spaceship {
  constructor() {
    this.x = canvas.width / 3;
    this.y = canvas.height - 200;
    this.speedX = 0;
    this.speedY = 0;
    this.width = 40;
    this.height = 60;
    this.img = new Image();
    this.img.src = "./images/spaceship.png";
  }

  drawSpaceship = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  updatePosition() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width - this.width || this.x < 0) {
      this.speedX = 0;
    } 
    if (this.y < 0 || this.y > canvas.height - this.height) {
      this.speedY = 0;
     
    }
  }

  spaceshipMovement = (event) => {
    if (event.key === "ArrowRight" && this.x <= canvas.width - this.width) {
      this.speedX = 1.5;
    }
    if (event.key === "ArrowLeft" && this.x >= 0 + this.speedX) {
      this.speedX = -1.5;
    }
    if (event.key === "ArrowUp" && this.y >= 0) {
      this.speedY = -1.5;
    }
    if (event.key === "ArrowDown" && this.y <= canvas.height - this.height) {
      this.speedY = 1.5;
    }
  };
}

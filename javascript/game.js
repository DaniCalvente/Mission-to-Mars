class Game {

  constructor() {
    // all the properties of the game.
    this.background = new Image();
    this.background.src = "./images/outer-space2.jpg";
    this.spaceship = new Spaceship();
    this.asteroidArr = [new Asteroid(canvas.width / 2)];
    this.asteroid = new Asteroid();
    this.astSeparation = 250;
    this.shot = undefined;
    this.isGameOn = true;
    
  }

  shootingLaser = ( ) => {

      this.shot = new Shot(this.spaceship.x, this.spaceship.y)

  }
  
  spawningAsteroid = () => {
    let lastAsteroid = this.asteroidArr[this.asteroidArr.length - 1];
    if (lastAsteroid.y > 0 + this.astSeparation) {
      // here I add a new asteroid
      let randomX = Math.random() * (canvas.width - this.asteroid.width);
      let newAsteroid = new Asteroid(randomX);
      randomX = Math.floor(randomX);
      this.asteroidArr.push(newAsteroid);
    }
  };

  checkShipAstCollision = (eachAsteroidParam) => {
    if (
      this.spaceship.x < eachAsteroidParam.x + eachAsteroidParam.width &&
      this.spaceship.x + this.spaceship.width > eachAsteroidParam.x &&
      this.spaceship.y < eachAsteroidParam.y + eachAsteroidParam.height &&
      this.spaceship.height + this.spaceship.y > eachAsteroidParam.y
    ) 
    {
     console.log("¨collition") 
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
    }
}

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // all the methods of the game.
  gameLoop = () => {
     console.log("game is working!")
    
    // 1. clear canvas
    this.clearCanvas();

    // 2. move the elements or other actions
    this.asteroidArr.forEach((eachAsteroid) => {
      eachAsteroid.asteroidMove();
    });
    this.spawningAsteroid();
    // this.spaceship.updatePosition()

    this.asteroidArr.forEach((eachAsteroid) => {
      //chequear colision entre pollito y pipe.
      this.checkShipAstCollision(eachAsteroid);
    });

    // hacer mover el shot si existe
    if ( this.shot !== undefined) {
      this.shot.shotMove()
    }

    // 3. draw the elements
    this.drawBackground();
    this.spaceship.drawSpaceship();
    this.asteroidArr.forEach((eachAsteroid) => {
      eachAsteroid.drawAsteroid();
    });

    if ( this.shot !== undefined ){
      this.shot.drawShot()
    }
    

    // 4. recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
    
  };
}

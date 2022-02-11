class Game {
  constructor() {
    // all the properties of the game.
    this.background = new Image();
    this.background.src = "./images/outer-space2.jpg";
    this.spaceship = new Spaceship();
    this.asteroidArr = [new Asteroid(canvas.width / 2)];
    this.astSeparation = 100;
    this.shot = undefined;
    this.isGameOn = true;
    this.score = 0;
    this.shotSound = new Audio("./sounds/laser-shot.mp3");
    this.shotSound.volume = 0.1;
    this.explosionSound = new Audio("./sounds/explosion.mp3");
    this.explosionSound.volume = 0.1;
    this.shipExplosionSound = new Audio("./sounds/ship-explosion.mp3");
    this.shipExplosionSound.volume = 0.3;
    this.soundTrack = new Audio("./sounds/space-soundtrack.mp3");
    this.soundTrack.volume = 0.2;
  }

  astDisappearPoints = (eachAsteroidParam) => {
    if (eachAsteroidParam.y === canvas.height) {
      this.score += 50;
      scoreDom.innerText = this.score;
      this.asteroidArr.shift();
    }
  };

  shootingLaser = () => {
    this.shot = new Shot(
      this.spaceship.x + this.spaceship.width / 3,
      this.spaceship.y
    );
    this.shotSound.play();
  };

  checkShotAstCollision = (eachAsteroidParam) => {
    if (
      this.shot !== undefined &&
      this.shot.x < eachAsteroidParam.x + eachAsteroidParam.width &&
      this.shot.x + this.shot.width > eachAsteroidParam.x &&
      this.shot.y < eachAsteroidParam.y + eachAsteroidParam.height &&
      this.shot.height + this.shot.y > eachAsteroidParam.y
    ) {
      this.shot = undefined;
      const astIndex = this.asteroidArr.indexOf(eachAsteroidParam);
      this.asteroidArr.splice(astIndex, 1);
      this.explosionSound.play();
      this.score = this.score + 100;
      scoreDom.innerText = this.score;
    }
  };

  spawningAsteroid = () => {
    let lastAsteroid = this.asteroidArr[this.asteroidArr.length - 1];
    if (lastAsteroid.y > 0 + this.astSeparation) {
      let randomX = Math.random() * (canvas.width - lastAsteroid.width);
      let newAsteroid = new Asteroid(randomX);
      if (this.score >= 1000) {
        newAsteroid.asteroidSpeed = 3;
      }

      if (this.score >= 2000) {
        newAsteroid.asteroidSpeed = 4;
      }
      if (this.score >= 3000) {
        newAsteroid.asteroidSpeed = 5;
      }

      this.asteroidArr.push(newAsteroid);
    }
  };

  checkShipAstCollision = (eachAsteroidParam) => {
    if (
      this.spaceship.x < eachAsteroidParam.x + eachAsteroidParam.width &&
      this.spaceship.x + this.spaceship.width > eachAsteroidParam.x &&
      this.spaceship.y < eachAsteroidParam.y + eachAsteroidParam.height &&
      this.spaceship.height + this.spaceship.y > eachAsteroidParam.y
    ) {
      this.isGameOn = false;

      this.shipExplosionSound.play();
      this.soundTrack.pause();
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
    }
  };

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // all the methods of the game.
  gameLoop = () => {
    // 1. clear canvas
    this.clearCanvas();

    // 2. move the elements or other actions

    this.spawningAsteroid();
    this.spaceship.updatePosition();

    this.asteroidArr.forEach((eachAsteroid) => {
      eachAsteroid.asteroidMove();
      this.checkShipAstCollision(eachAsteroid);
      this.checkShotAstCollision(eachAsteroid);
      this.astDisappearPoints(eachAsteroid);
    });

    if (this.shot !== undefined) {
      this.shot.shotMove();
    }

    // 3. draw the elements
    this.drawBackground();
    this.spaceship.drawSpaceship();
    this.asteroidArr.forEach((eachAsteroid) => {
      eachAsteroid.drawAsteroid();
    });

    if (this.shot !== undefined) {
      this.shot.drawShot();
    }

    // 4. recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

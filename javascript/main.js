// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let scoreBoard = document.querySelector("#scoreboard");
let ctx = canvas.getContext("2d");
let newGame;
let scoreDom = document.querySelector("#score-accumulator");

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // removing splash-screen and appearing canvas.
  gameOverScreen.style.display = "none";
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  scoreBoard.style.display = "flex";

  // starting game
  newGame = new Game();
  //this.soundTrack.play();
  // this.soundTrack.loop = true;
  // this.soundTrack.playbackRate = 2;
  scoreDom.innerText = 0;
  newGame.gameLoop();
};

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

// quiero asignar las flechas del teclado para mover la nave
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    newGame.shootingLaser();
  } else {
    newGame.spaceship.spaceshipMovement(event);
  }
});

// solo funciona la primera vez
let playAgainButton = document.querySelector("#restart-btn");
playAgainButton.addEventListener("click", startGame);

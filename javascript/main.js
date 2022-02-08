// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // removing splash-screen and appearing canvas.
  splashScreen.style.display = "none";
  canvas.style.display = "flex";

  // starting game
  newGame = new Game();
  // console.log(newGame);
  newGame.gameLoop();
};

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

// quiero asignar las flechas del teclado para mover la nave
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    newGame.shootingLaser(event)
  } else {
     newGame.spaceship.spaceshipMovement(event);
  }
 
});

// quiero disparar laser con tecla espacio
//document.querySelector("keydown", (event) => {
   
//}) 


// solo funciona la primera vez
let playAgainButton = document.querySelector("#restart-btn");
playAgainButton.addEventListener("click", startGame);

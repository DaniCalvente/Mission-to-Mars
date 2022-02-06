class Game {

  constructor() {
      // all the properties of the game.
      this.background = new Image();
      this.background.src = "./images/outer-space2.jpg"
      this.spaceship = new Spaceship()

  } 
  
  drawBackground = () => {
       ctx.drawImage( this.background, 0, 0, canvas.width, canvas.height )
  }

  clearCanvas = () => {
      ctx.clearRect( 0, 0, canvas.width, canvas.height )
  }

  // all the methods of the game.
  gameLoop = () => {
    // console.log("game is working!")
    // 1. clear canvas
    this.clearCanvas ()

    // 2. move the elements or other actions

    // 3. draw the elements
    this.drawBackground ()
    this.spaceship.drawSpaceship()

    // 4. recursion
    requestAnimationFrame(this.gameLoop)

  }


}
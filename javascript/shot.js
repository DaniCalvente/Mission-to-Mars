class Shot {
  constructor(posXParam, posYParam) {
    this.x = posXParam;
    this.y = posYParam;
    this.width = 40;
    this.height = 80;
    this.img = new Image();
    this.img.src = "./images/laser-shot.png";
    this.shotSpeed = 25;
  }

  drawShot = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  shotMove = () => {
    this.y = this.y - this.shotSpeed;
  };
}

const scoreBoard = {
    ctx: undefined,
    score: undefined,
    width: undefined,
    height: undefined,

    init: function (ctx, gameWidth, bgWidth, bgHeight, level) {
        this.ctx = ctx;
        this.width = bgWidth/4;
        this.height = bgHeight/32;
        this.posX = (gameWidth - bgWidth)/2 + bgWidth/20;
        this.posY = bgHeight / 16;
        this.scoreWidth = this.width/2;
        this.level = level;
    },

    draw: function () {
    
        this.ctx.fillStyle = "#ff553f";
        this.ctx.fillRect(this.posX, this.posY + this.height/2, this.scoreWidth, this.height)

        this.ctx.fillStyle = "#e4ddd3";
        this.ctx.font = '0.8em "Press Start 2P"'
        this.ctx.fillText("VINCENT", this.posX, this.posY)

        this.ctx.fillStyle = "#e4ddd3";
        let levelText = `LEVEL ${this.level}`;
        let levelWidth =  this.ctx.measureText(levelText).width;
        this.ctx.fillText(`LEVEL ${this.level}`, this.posX+this.width - levelWidth, this.posY)

        this.ctx.lineWidth = this.height*0.2;
        this.ctx.strokeStyle = "#e4ddd3";
        this.ctx.strokeRect(this.posX, this.posY + this.height/2, this.width, this.height)
    }   
}
class Background {
    constructor(ctx, img, width, height){
        this.ctx = ctx;
        this.height = height;
        this.width = this.height*16/9;


        // this.width = height*16/9;
        // this.height = 600;
        this.image  = new Image();
        this.image.src = img;

        this.posX = (width - this.width) / 2;
        this.posY = 0;
    }

    draw (){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    animate() {}
}
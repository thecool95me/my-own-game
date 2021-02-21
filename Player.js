class Player{
    constructor(x,y){
        this.name = "";
        this.body =  createSprite(x,y);
    }

    display(){
        drawSprites();
    }
}
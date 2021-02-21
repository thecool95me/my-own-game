var player1, player1SImg, player1Maze;
var player2, player2SImg, player2Maze;
var dragon1, dragon1Img;
var dragon2, dragon2Img;
var dragon3, dragon3Img;
var egg, eggImg;
var gameState = 0;
var goblin, goblinImg;
var form;
var game; 
var count = 0;
var score1 = 0;
var score2 = 0;
var bulletarray=[]
var box;
var winner = null;

function preload(){
//bgImg = loadImage("images/bg.jpeg");
player1SImg =loadImage("images/broomstick.png");
player2SImg = loadImage("images/ronb.png");
player1Maze = loadImage("images/standing.png");
player2Maze = loadImage("images/rons.png");
dragon1Img = loadAnimation("images/D11.gif", "images/D12.gif", "images/D13.gif","images/D14.gif","images/D15.gif");
dragon2Img = loadAnimation("images/D21.gif", "images/D22.gif", "images/D23.gif", "images/D24.gif", "images/D25.gif", "images/D26.gif")
dragon3Img = loadAnimation("images/D31.gif", "images/D32.gif", "images/D33.gif", "images/D34.gif", "images/D35.gif", 
"images/D36.gif", "images/D37.gif", "images/D38.gif", "images/D39.gif", "images/D40.gif", "images/D41.gif")
eggImg = loadImage("images/eggs.png");
goblinImg = loadImage("images/goblin.jpg");
}

function setup() {
  createCanvas(1500,700);
  player1 =  new Player(200, 500);
  player1.body.addImage("player1S", player1SImg);
  player1.body.addImage("MazePlayer1", player1Maze);
  player1.body.scale = 0.4;
  player1.body.visible=false;

  player2 = new Player(200, 200);
  player2.body.addImage("player2S", player2SImg);
  player2.body.addImage("MazePlayer2", player2Maze);
  player2.body.scale = 0.5;
  player2.body.visible=false;

        dragon1 = createSprite(800, 400);
        dragon1.addAnimation("dragon1", dragon1Img);
        dragon1.scale = 0.5;
        dragon1.visible = false;

        dragon2 = createSprite(1000, 500);
        dragon2.addAnimation("dradon2", dragon2Img);
        dragon2.scale = 0.2
        dragon2.visible = false;

        dragon3 = createSprite(1000, 200);
        dragon3.addAnimation("dragon3", dragon3Img);
        dragon3.scale = 0.5;
        dragon3.visible = false;
        dragon3.setCollider("rectangle", 0,0,100,100);

        egg = createSprite(1000, 400);
        egg.addImage("egg", eggImg);
        egg.scale = 0.25;

        

  game = new Game();
  game.register();
}

function draw() {
  text(mouseX+" "+mouseY, 100, 100);
  if(gameState===1){
    game.play();
  }

  if(gameState===2){
    game.playMaze();
  }

  if(gameState===3){
    game.end();
  }
}
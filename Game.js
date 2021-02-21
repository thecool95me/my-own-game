class Game{
 constructor(){
 }

 register(){
     if(gameState===0){
     form = new Form();
     background(57, 45, 196);
     form.display();
     }
 }

 play(){
    
     if(gameState===1){
        form.hide(); 
        background(224, 201, 71);
        player1.body.visible = true;
        player2.body.visible = true;
        dragon1.visible = true;
        
          if(gameState===1 && dragon1.y<550){
            dragon1.velocityX = 2;
            dragon1.velocityY = 3;
          }
        
          if(dragon1.y>550){
            console.log("am inside");
            dragon1.x = 800;
            dragon1.y = 400;
          }

          dragon2.visible = true;

          if(gameState===1 && dragon2.y<550){
            dragon2.velocityX = 2;
            dragon2.velocityY = -3;
          }

          if(dragon2.y<300){
            dragon2.x = 1000;
            dragon2.y = 500;
          }

          dragon3.visible = true;
         

          if(gameState===1 && dragon3.y<550){
            dragon3.velocityX = -2;
            dragon3.velocityY = 3;
          }

          if(dragon3.y>600){
            dragon3.x = 1000;
            dragon3.y = 200;
          }
//player1 movements
          if(keyDown(RIGHT_ARROW) && score1===0){
            player1.body.x  = player1.body.x + 10;
          }
        
          if(keyDown(UP_ARROW)){
            player1.body.y  = player1.body.y - 10;
          }

          if(keyDown(LEFT_ARROW)){
            player1.body.x =  player1.body.x - 10;
          }

          if(keyDown(DOWN_ARROW)){
            player1.body.y  = player1.body.y + 10;
          }

//player2 movements
          if(keyDown("d")){
            player2.body.x  = player2.body.x + 10;
          }
        
          if(keyDown("w")){
            player2.body.y  = player2.body.y - 10;
          }

          if(keyDown("a")){
            player2.body.x =  player2.body.x - 10;
          }

          if(keyDown("s")){
            player2.body.y  = player2.body.y + 10;
          }

          // if(player1.body.isTouching(dragon1)){
          //   player1.body.x = 200;
          //   player1.body.y = 500;
          // }

          // if(player1.body.isTouching(dragon2)){
          //   player1.body.x = 200;
          //   player1.body.y = 500;
          // }

          // if(player1.body.isTouching(dragon3)){
          //   player1.body.x = 200;
          //   player1.body.y = 500;
          // }

          // if(player2.body.isTouching(dragon1)){
          //   player2.body.x = 200;
          //   player2.body.y = 200;
          // }

          // if(player2.body.isTouching(dragon2)){
          //   player2.body.x = 200;
          //   player2.body.y = 200;
          // }

          // if(player2.body.isTouching(dragon3)){
          //   player2.body.x = 200;
          //   player2.body.y = 200;
          // }

          if(count === 2){
            player1.body.x = 200;
            player1.body.y = 500;
            player2.body.x = 200;
            player2.body.y = 200;
            gameState = 2;
            egg.destroy();
            dragon1.destroy();
            dragon2.destroy();
            dragon3.destroy();
          }

          if(player1.body.isTouching(egg) && score2===0){
            score1 = score1+1;
            player1.body.x = 600;
            player1.body.y = 100;
           
          }

          if(score1 === 1 || score2 === 1){
            text("You have reached level 2!!!", 600, 150);
          }

          if(player2.body.isTouching(egg) && score1===0){
            score2 = score2+1;
            player2.body.x = 600;
            player2.body.y = 100;
          }

          text("PLAYER1 " + score1, 100, 100);
          text("PLAYER2 " + score2, 100, 300);

          if(player1.body.isTouching(egg) || player2.body.isTouching(egg)){
            count=count+1;
          }
        
        drawSprites();
     }
 }

 playMaze(){
if(gameState===2){
    background(225,225,225);
    player1.body.changeImage("MazePlayer1", player1Maze);
    // player1.body.x = 200;
    // player1.body.y = 500;
    player1.body.scale = 0.2;
    player2.body.changeImage("MazePlayer2", player2Maze);
    // player2.body.x = 200;
    // player2.body.y = 200;
    player2.body.scale = 0.25;

    for(var i=400; i<1200; i=i+80){
      image(goblinImg, i, 60, 60, 60);
      //var rand = randomNumber(400,1200) 
      if(i===Math.round(random(390,1190))){
        var bullet = createSprite(i, 60, 10, 10);
        bullet.velocityY = 3; 
        bullet.lifetime=300;
        bulletarray.push(bullet);
      }
    }
    
    for(var i=400; i<1200; i=i+80){
      image(goblinImg, i, 600, 60, 60);
      //var rand = randomNumber(400,1200) 
      if(i===Math.round(random(390,1190))){
        var bullet = createSprite(i, 660, 10, 10);
        bullet.velocityY = -3; 
        bullet.lifetime=300;
        bulletarray.push(bullet);
      }
    }

    for(var i=0; i<bulletarray.length; i++){
      if(bulletarray[i].isTouching(player1.body)){
       player1.body.x = 200;
       player1.body.y = 500;
      }
    }

    for(var i=0; i<bulletarray.length; i++){
      if(bulletarray[i].isTouching(player2.body)){
       player2.body.x = 200;
       player2.body.y = 200;
      }
    }

    //player1 movements
    if(keyDown(RIGHT_ARROW)){
      player1.body.x  = player1.body.x + 10;
    }
  
    if(keyDown(UP_ARROW)){
      player1.body.y  = player1.body.y - 10;
    }

    if(keyDown(LEFT_ARROW)){
      player1.body.x =  player1.body.x - 10;
    }

    if(keyDown(DOWN_ARROW)){
      player1.body.y  = player1.body.y + 10;
    }

//player2 movements
    if(keyDown("d")){
      player2.body.x  = player2.body.x + 10;
    }
  
    if(keyDown("w")){
      player2.body.y  = player2.body.y - 10;
    }

    if(keyDown("a")){
      player2.body.x =  player2.body.x - 10;
    }

    if(keyDown("s")){
      player2.body.y  = player2.body.y + 10;
    }
    
    text("PLAYER1 " + score1, 100, 100);
    text("PLAYER2 " + score2, 100, 300);

    box = createSprite(1300, 350, 40, 40);
    
    if(player1.body.isTouching(box)){
        gameState=3;
        winner = "player1";
    }

    if(player2.body.isTouching(box)){
      gameState=3;
      winner = "player2"
  }

    drawSprites();
}
}

end(){
  if(gameState===3){
    if(winner === "player1"){
      textSize(50);
      text("PLAYER1 IS THE WINNER", 200,200);
 }

 if(winner === "player2"){
  textSize(50);
  text("PLAYER2 IS THE WINNER", 200,200);
}
}
}
}
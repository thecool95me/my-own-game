class Form {

    constructor() {
      this.input1 = createInput("Player1");
      this.input2 = createInput("Player2");
      this.button1 = createButton('GO');
      this.button2 = createButton('GO');
      this.flag = 0;
      this.greeting1 = createElement('h2');
      this.greeting2 = createElement('h2');
      this.title = createElement('h1');
      
      //this.reset = createButton('Reset');
    }

    hide(){
      this.greeting1.hide();
      this.button1.hide();
      this.input1.hide();
      this.title.hide();
      this.greeting2.hide();
      this.button2.hide();
      this.input2.hide();
    }
  
    display(){

      // var flag = 0;
      this.title.html("THE GOBLET OF FIRE");
      this.title.position(displayWidth/2 - 100, 0);
  
      this.input1.position(displayWidth/2 - 200 , displayHeight/2 - 80);
      this.input2.position(displayWidth/2 + 200 , displayHeight/2 - 80);
      this.button1.position(displayWidth/2 - 30, displayHeight/2);
      this.button2.position(displayWidth/2 + 30, displayHeight/2);
    //   this.reset.position(displayWidth-100,20);
  
      this.button1.mousePressed(()=>{
        this.input1.hide();
        this.button1.hide();
        player1.name = this.input1.value();
        // playerCount+=1;
        // player.index = playerCount;
        // player.update();
        // player.updateCount(playerCount);
        this.greeting1.html("Hello " + player1.name)
        //player1.display();
        this.greeting1.position(displayWidth/2 - 70, displayHeight/4);
        this.flag = this.flag+1;
        if(this.flag===2){
        
          // console.log(this.flag);
          // var button = createButton('PLAY');
          // button.position(displayWidth/2, displayHeight/2-100)
          gameState=1;
          game.play();
        }
        console.log(this.flag);
      });

  
      // if(flag === 1){
      //   player1.display();
      // }

      this.button2.mousePressed(()=>{
        this.input2.hide();
        this.button2.hide();
        player2.name = this.input2.value();
        // playerCount+=1;
        // player.index = playerCount;
        // player.update();
        // player.updateCount(playerCount);
        this.greeting2.html("Hello " + player2.name)
        //player2.display();
        this.greeting2.position(displayWidth/2 + 70, displayHeight/4);
        this.flag = this.flag+1;

        if(this.flag===2){
        
          // console.log(this.flag);
          // var button = createButton('PLAY');
          // button.position(displayWidth/2, displayHeight/2-100)
          gameState=1 
          game.play();
        }
        console.log(this.flag);
      });
      
      console.log(this.flag);
      

    //   this.reset.mousePressed(()=>{
    //     player.updateCount(0);
    //     game.update(0);
    //   });
  
    }
  }
  
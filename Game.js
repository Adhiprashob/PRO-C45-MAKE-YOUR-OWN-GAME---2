class Game {
  constructor() {

    this.resetButton = createButton("Reset");

  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){

    database.ref("/").update({
    gameState:state
    });
    
    
    }
    

  start() {
    player = new Player();
    playerCount = player.getCount();


    form = new Form();
    form.display();

      

          
         

      

car1 = createSprite(width/2- 100, height - 80);
car1 .addImage("car1",car1Img);
car1 .scale=0.30;

car2 = createSprite(width/ 2 + 100, height - 80);
car2.addImage("car3",car2Img);
car2 .scale=0.20;

car3 = createSprite(width/2+25,height-80);
car3.addImage("car4",car4Img);
car3.scale=0.30;




cars=[car1,car3,car2];
  
  }

  handleElements() {
    form.hide();

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);


 
  }
    play() {

this.handleResetButton();
      this.handleElements();

    

      Player.getPlayersInfo();

      if (allPlayers !== undefined) {

        //image(track, 90, -height * 5, width-1, height * 6);

         image(track, 7, -height * 3, width, height * 6);




      var index = 0;
      for ( var  plr in allPlayers) {
     
        index = index + 1;

       
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

      
     

if(index===player.index){

  fill("red")
  stroke(10);

  ellipse(x,y,60,60);

  //image( markerImg,x,y-20,200,100);

 


camera.position.y = cars[index-1].position.y;

}


      }
      this.handlePlayerControls();

      
      drawSprites();
      }
    }      


    handleResetButton() {
      this.resetButton.mousePressed(() => {
        database.ref("/").set({
          playerCount: 0,
          gameState: 0,
          players: {},
             });
        window.location.reload();
      });
    }

    handlePlayerControls() {
   

      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }
    }
  

}

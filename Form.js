class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.greeting = createElement("h2");
      this.carSelect = createSelect();
      this.carSelect.option("BMW");
      this.carSelect.option("MINICOOPER");
      this.carSelect.option("GTR");
      
    }
  
    setElementsPosition() {
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 70, height / 2 - 10);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      this.carSelect.position(width/2 - 90, height / 2 - 20);
    }


    setElementsStyle() {
         this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
  
      }

      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      this.carSelect.hide();


      }

      handleMousePressed(){

        this.playButton.mousePressed( ()=>{
          this.input.hide();
          this.playButton.hide();
          this.carSelect.hide();
          var message= `
          Hello ${this.input.value()}
          </br>waiting for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.selectedCar = this.carSelect.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);

          
          
        });


      }


     

  
      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();

      }
    
}  
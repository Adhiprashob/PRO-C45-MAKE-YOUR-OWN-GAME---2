class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.selectedCar = null;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2- 149;
    } else if(this.index===2) {
 
     this.positionX = width / 2 + 190;
      

    }else{

      this.positionX = width / 2 + 25;

    }

    database.ref(playerIndex).set({
      name: this.name,
      selectedCar : this.selectedCar,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  static getPlayersInfo() {
var playerInfoRef=database.ref("players");
playerInfoRef.on("value",data=>{
allPlayers=data.val();
});
 }
}

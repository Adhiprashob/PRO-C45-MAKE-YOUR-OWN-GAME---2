const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var canvas;
var backgroundImage;
var bgImg;
var form;
var gameState;
var playerCount;
var car1,car2,car3,car4;
var database;
var car1Img,car2Img,car3Img,car4Img;
var track;
var player;
var playerCount;
var allPlayers;
var cars =[];
var sel;
var background2;
var carSelect ;
var markerImg;

var  tire;                 


function preload(){


  backgroundImage = loadImage("./assets/background.png");
background2 = loadImage("./assets/background3.png");


  track = loadImage("./assets/track.jpg");

  car1Img = loadImage("./assets/GTR.png");

  car2Img = loadImage("./assets/bmw.png");

 car4Img = loadImage("./assets/porsche.png");



 markerImg = loadImage("./assets/marker.png");

}



function setup() {
   createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
game = new Game();
  game.getState();
  game.start();

 





}





function draw() {
  background(backgroundImage);  
 
  if (playerCount === 3) {
    game.update(1)

}

if (gameState === 1) {
  
  game.play();




}


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


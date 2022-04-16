//var allocation.
var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  //loaded the background image.
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  // creating a compatible canvas.
  canvas = createCanvas(windowWidth, windowHeight);
  //connecting sdk/database.
  database = firebase.database();
  //calling a game class.
  game = new Game();
  game.start();

}

function draw() {
  //given image to the background.
  background(backgroundImage);
}

function windowResized() {
  //used to resize window of the game on the basis of the device. 
  resizeCanvas(windowWidth, windowHeight);
}

var backgroundImg;
var player, playerImg, bottle, bottleImg;
var TITLE = 1;
var gameState = TITLE;
var start, game;
var bottle,bottleGroup;
var timer =5;

var score = 0;

function preload(){

  backgroundImg = loadImage("./assets/bg.jpg");
  playerImg = loadImage("./assets/player.png");
  bottleImg = loadImage("./assets/bottle.png");

}

function setup() {
  createCanvas(800,400);

  start = new Start();
  game = new Game();

}

function draw() {
  background(backgroundImg);

  if(gameState === TITLE){
    start.display();
    console.log("main screen");
  }

  if(gameState === 2){
    game.display();
  }

  drawSprites();

  if(gameState === 2){
  fill("black");
  textSize(20);
  text("Score: " +score, 650, 50);
  }

}
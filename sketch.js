const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var canvas;
var ironMan,ironManImg,thor,thorImg,captain,captainImg,blackpanther,blackpantherImg;
var backgroundImg;
var ultron,ultronImg,hela,helaImg,ronan,ronanImg,killmonger,killmongerImg,thanos,thanosImg;
var ironmanS2,ironmanS1;
var ground,playingback;
var repulser,repulserImg;


function preload(){
ironManImg = loadImage("images/ironmanS2.1.png");
backgroundImg= loadImage("images/playback.jpg");
ironmanS2 = loadAnimation("images/ironmanS2.1.png","images/ironmanS2.2.png","images/ironmanS2.3.png","images/ironmanS2.4.png");
blackpantherImg = loadImage("images/blackPanther.png");
ironmanS1 = loadAnimation("images/ironmanS1.1.png","images/ironmanS1.2.png","images/ironmanS1.3.png");
repulserImg = loadImage("images/repulser.png");


}
function setup(){
canvas = createCanvas(800,600);


ground = createSprite(400,600,800,50);
ground.shapeColor="red";
ground.visible = false;


}
function draw(){
background("black");
if(keyWentDown("s")){
  ironMan.changeAnimation("arcoverload",ironmanS2);
}

if(keyWentUp("s")){
  ironMan.changeAnimation("basic");
}
if(keyWentDown(RIGHT_ARROW)){
  ironMan.changeAnimation("repulser");
  repulser = createSprite(90,500,50,50);
  repulser.addImage(repulserImg);
  repulser.scale = 0.2
  repulser.velocityX = 10;

}
if(keyWentUp(RIGHT_ARROW)){
  ironMan.changeAnimation("basic");
}

drawSprites();
}
function mouseClicked(){
//background(backgroundImg);
console.log("ironman")
gameStart();

}
function gameStart(){
  playingback = createSprite(800,400);
  playingback.addImage(backgroundImg);
  ironMan = createSprite(80,520,10,10);
ironMan.addImage(ironManImg);
ironMan.addAnimation("arcoverload",ironmanS2);
ironMan.addAnimation("basic",ironManImg);
ironMan.addAnimation("repulser",ironmanS1);
ironMan.scale = 0.5;

blackpanther = createSprite(700,520,10,10);
blackpanther.addImage(blackpantherImg);
blackpanther.scale = 0.3;
ironMan.collide(ground);
blackpanther.collide(ground);
}




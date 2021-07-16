var shup, shdn;
var sea;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(600,600);
  sea = createSprite(0, 0, 600,600);
  sea.addImage(seaImg);
  sea.velocityX = -5
  ship = createSprite(200,200);
  ship.addAnimation("shio",shipImg);
  ship .scale = 0.3;
  
}

function draw() {
  background(seaImg);

  if(sea.x <= 0)
  {
    sea.x = sea.width/2;
  }

  drawSprites();
 
}
var PLAY=1;
var END=0;
var gameState = PLAY;
var monkey , monkey_running;
var bananaImage, obstacleImage;
var foodGroup, obstaclesGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2
console.log(ground.x);
  
foodGroup=createGroup();
obstaclesGroup=createGroup();
  

  
}


function draw() {
background(225);
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }

if(keyDown("space")){
monkey.velocityY=-12;
}
  
monkey.velocityY=monkey.velocityY+0.8;
  
monkey.collide(ground);
  
bananas();
Obstacles();
  

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime,100,50);

if(monkey.isTouching(foodGroup)) {
 foodGroup.destroyEach();
}
  
if(monkey.isTouching(obstaclesGroup)) {
 gameState=END;
}
  
drawSprites();
}

function bananas(){
if (frameCount % 80 === 0){
var banana = createSprite(600,100,40,10);
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage);
banana.scale = 0.5;
banana.velocityX = -3;
banana.scale=0.1;
  
banana.lifetime = 210; 
  
foodGroup.add(banana);
} 
}

function Obstacles(){
 if (frameCount % 300 === 0){
var obstacle = createSprite(400,310,10,40);
obstacle.velocityX = -6;
obstacle.scale = 0.2;
   
obstacle.addImage(obstacleImage);
   
obstacle.lifetime = 200;

obstaclesGroup.add(obstacle);
 }
}
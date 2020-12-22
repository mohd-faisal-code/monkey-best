var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup,obstacleGroup
var score
var ground;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  monkey=createSprite(50,150,20,50); 
 
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  
   ground = createSprite(200,180,1200,10);
   ground.x = ground.width /2;
  ground.velocityX=-3;
}


function draw() {
background("white");
  
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
 console.log(monkey.y);
    
    monkey.velocityY = monkey.velocityY + 0.8
 if(ground.x<0){
   ground.x=ground.width/2;
 }   
  monkey.collide(ground);
  
    
  spawnBanana();
  spawnobstacle();
  
  
  
  
  
  
  
  
  drawSprites();
}


function spawnBanana(){
  if (frameCount % 80===0) {
    var banana =createSprite(600,120,40,10);
    banana.y = Math.round(random(20,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime=200;     
}
}

function spawnobstacle(){
  if (frameCount % 300===0){
  var obstacle =createSprite(600,180,40,10);
  
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  
  obstacle.lifetime=200;
  } 
}




var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudimage



var score;


function preload(){
  trex_running = loadImage("walking_trex.gif");
  trex_collided = loadImage("trex_collided.png");
  cloudimage = loadImage ("clou1d.png")
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.05;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))


}

function draw() {
  //set background color
  background(180);
  

  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount % 60 === 0){
  cloud = createSprite(600,100,40,20)
  cloud.y = Math.round(random(60,120))
  cloud.addImage (cloudimage)
  cloud.scale = 0.05
  cloud.velocityX = -4
trex.depth = cloud.depth + 1
  console.log(trex.depth)
  console.log(cloud.depth)
 }
}




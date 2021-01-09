var jungle , monkey, ground;
var jungle2, monkey2;
var bananaGroup, stoneGroup;


var score ;

function preload(){
  jungle2 = loadImage("jungle.jpg")
  monkey2 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  banana2 = loadImage("banana.png");
  stone2 = loadImage("stone.png");
   
}

function setup() {
  createCanvas(400, 400);
  
  textSize(20);
  fill("blue");
  score = 0;
  
  
  
  jungle = createSprite(200,200,400,400);
  jungle.addImage("hi",jungle2);
  jungle.x = jungle.width/2;
  
  monkey = createSprite(45,365,20,20);
  monkey.addAnimation("hello",monkey2);
  monkey.scale = 0.2;
  
  bananaGroup = createGroup();
  stoneGroup = createGroup();
  
  
  ground = createSprite(200,399,400,10);
 ground.visible = false;



}

function draw() {
  background(180);

  
  jungle.velocityX = -6;
  
  if (jungle.x < 0){
  jungle.x = jungle.width/2;
  }
  
  if (keyDown("space") && monkey.y>=100) {
   monkey.velocityY = -13;
  }
  
  if(bananaGroup.isTouching(monkey)){
   
    score = score + 2;
    bananaGroup.destroyEach();
  
  }
  
  if(stoneGroup.isTouching(monkey)){
   
   monkey.scale = monkey.scale - 0.005;
   stoneGroup.destroyEach(); 
  
  }
  
  switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 40: monkey.scale = 0.18;
              break;
      
      default: break;
    }
  
  
  
  
  
  
  
  monkey.velocityY = monkey.velocityY+0.8;
  
   
 
  
  spawnBanana();
 spawnStone();
  
  
  
  monkey.collide(ground);
  
    
  drawSprites();
 text("Score: "+ score, 200,30);
}

function spawnBanana () {
 if (frameCount%60===0) {
 var banana = createSprite(390,290,10,10);
   banana.velocityX = -7;  
   banana.y = Math.round(random(200,240));
   banana.scale = 0.1;
   banana.addImage("tata",banana2);
   bananaGroup.add(banana);
 }
     
     
     }

function spawnStone () {
 if (frameCount%120===0) {
 var stone = createSprite(390,370,10,10);
   stone.velocityX = -7;  
   stone.scale = 0.2;
   stone.addImage("byebye",stone2);
   stoneGroup.add(stone);
 
 }
     
     
     }


var background1,back1,back2

var monkey , monkeyi

var banana ,bananaImage, obstacle, obstacleImage,f2,f3;

var Food, obstacle1

var score=0;


var fruits=0;
var invisible;
var sco,scoi;
var END=2,PLAY=3;
gameState=PLAY;
var re
var f6,f5
function preload(){
    
 monkeyi =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png"             ,"sprite_3.png","sprite_4.png","sprite_5.png",
             "sprite_6.png","sprite_7.png","sprite_8.png")
  
  back1=loadImage("forest.jpg")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  f2=loadImage("aby.png");
  f3=loadImage("ba.png")
  scoi=loadImage("score.png")
  f5=loadImage("f1.jpg");
  obstacle1=new Group();
  Food=new Group();
  
}

function setup() {
 background1=createSprite(200,200); 
 background1.addImage(back1);
 background1.scale=0.6;
  
 monkey=createSprite(100,400);
 monkey.addAnimation("running",monkeyi);
 //6=createSprite(200,100)
 //f6.addImage(f5);
 sco=createSprite(200,40);  
 sco.addImage(scoi);
 sco.scale=0.05
  
 invisible=createSprite(100,460,1000,20)
 re=createSprite(200,250);
 re.visible=0;
}

function draw() {
 createCanvas(410,480)
 if(gameState===PLAY){
 background1.velocityX=-(7+score/100);
 if(background1.x < 80){
    background1.x = background1.x=220
  } 
 invisible.visible=0;
 monkey.scale=0.2;
 monkey.collide(invisible); 
 monkey.velocityY=monkey.velocityY+0.8;
 if(keyDown("space")&&monkey.y>=380){
    monkey.velocityY=-17
 }
 score=score+Math.round(getFrameRate()/60); 
 ob();
 fruites();
 destroy();
 }
  if(gameState===END){
    fill("red")
    textSize(68);
    text("GAME OVER",0,200)
     monkey.destroy();
    fill("black")
    textSize(20)
    text("Reset",200,250);
    if(mousePressedOver(re)){
      reset();
    }
  }
 // monkey.debug=1;
  monkey.setCollider("circle",0,0,300)
 drawSprites();

 fill("black")
 textSize(28) 
 text(score,120,64);
 fill("white")
  textSize(28);
  text("fruit:"+fruits,160,120)
}
function ob(){
 if(frameCount%150===0){
    obstacle=createSprite(500,410) 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2 ;
    obstacle.lifetime=350;
    obstacle.velocityX=-(8+score/100);
    obstacle1.add(obstacle);
    
  }
}
function fruites(){
 if(frameCount%200===0){
    banana=createSprite(600,200);
    banana.y=Math.round(random(180,300))
    var rand=Math.round(random(1,4))
    
    switch(rand){
      
     case 1 : banana.addImage(bananaImage);
          break;
     case 2 :banana.addImage(f2);
          break;
     case 3:banana.addImage(bananaImage);
          break;
     case 4:banana.addImage(f3);
          default:break;
    }      
   banana.scale=0.1;
   banana.velocityX=-(9+score/100);
   banana.lifetime=400;
   Food.add(banana);
 } 
  if(monkey.isTouching(Food)){
    Food.destroyEach();
    fruits=fruits+1;
  }
  
}
function destroy(){
  if(monkey .isTouching(obstacle1)){
    gameState=END;
    obstacle1.destroyEach();
  }
 
}
function reset(){
    gameState=PLAY;
    score=0;
    monkey=createSprite(100,400);
    monkey.addAnimation("running",monkeyi);
    fruits=0;
  }
  



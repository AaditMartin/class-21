var a,b,c,d;

var music;

function preload(){
music=loadSound("music.mp3");
}



function setup(){

  createCanvas(1200,800);

  a=createSprite(200,200,20,30);
  a.shapeColor="green";

  b=createSprite(400,400,30,40);
  b.shapeColor="green";

  c=createSprite(600,600,30,40);
  c.shapeColor="green";
  c.velocityX=-3;

  d=createSprite(100,600,30,40);
  d.shapeColor="green";
  d.velocityX=3;

  
}

function draw(){
  background(0);

  b.y=mouseY;
  b.x=mouseX;

  console.log(a.y-b.y);

  if(istouching(a,b)){
    a.shapeColor="cyan";
    b.shapeColor="cyan";
  }else{
    a.shapeColor="green";
    b.shapeColor="green";
  }

  if(b.isTouching(a)){
    music.play();
  }

  bounceoff(c,d);
    
  drawSprites();

}

function istouching(object1,object2){
  if(object1.x-object2.x<(object1.width/2+object2.width/2) 
  && object2.x-object1.x<(object1.width/2+object2.width/2) 
  && object1.y-object2.y<(object1.height/2+object2.height/2) 
  && object2.y-object1.y<(object1.height/2+object2.height/2)){

    return true;
  }else{
    
    return false;
  }
}

function bounceoff(object1,object2){

  if(object1.x-object2.x<(object1.width/2+object2.width/2)
  && object2.x-object1.x<(object1.width/2+object2.width/2)){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
  
  if(object1.x-object2.x<(object1.height/2+object2.height/2)
  && object2.x-object1.x<(object1.height/2+object2.height/2)){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
  }

  
}
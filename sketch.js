var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52); 
  thickness=random(89,170);

  bullet=createSprite(50,200,100,10);
  bullet.shapeColor=color(0,225,0);
  bullet.velocityX=speed; 
  bullet.shapeColor="white" ;

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80)

}

function draw() {
  textSize(20);
  background(0);

  if(isTouching(wall,bullet)){

if(wall.x-bullet.x< (bullet.width+wall.width)/2){
  bullet.velocityX=0 ;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  console.log(damage);


  if(damage<10){
    wall.shapeColor="green";
  }

  if(damage>10){
    wall.shapeColor="red";
  }

  
}
  }



  drawSprites();
}

function isTouching(ball,wall){
  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
    return true;
  }
 return false;
  
}
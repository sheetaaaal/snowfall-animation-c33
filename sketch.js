const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var scenary;
var snow1;
snow1=[]
var boyImage;
var boy;
var ground;

function preload(){
  scenary=loadImage("snow2.jpg")
  boyImage= loadImage("boy.png");

}


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  
  world=engine.world;
  ground=new Ground(width/2,395,width,20);
  boyoptions={
    restitution:0.4,
    friction:0.01,
  }

  boy= Bodies.rectangle(400,350,50,50,boyoptions)
  
  World.add(world,boy);


  

  

}

function draw() {
  background(scenary);
Engine.update(engine);
ground.display();

if(frameCount%10===0){
  snow1.push(new Snowflake(random(0,width), 30,30));
  
}



for (var j = 0; j < snow1.length; j++) {
   snow1[j].display();
 }
push()
translate (boy.position.x, boy.position.y)
imageMode(CENTER);
image(boyImage,0,0,100,100)
  
  
}
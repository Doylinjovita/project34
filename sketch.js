
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject
var rope1,rope2,rope3,rope4,rope5;
var world;
var bodyA,bodyB;

function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	
	roofObject=new Roof(width/2,height/4,250,20);
	
	bobDiameter=50;

	startBobPositonX=width/2;
	startBobPositonY=height/4+500;
	bobObject1=new Bob(width/2-bobDiameter*2,height/4+250,bobDiameter);
	bobObject2=new Bob(width/2-bobDiameter,height/4+250,bobDiameter);
	bobObject3=new Bob(width/2,height/4+250,bobDiameter);
	bobObject4=new Bob(width/2+bobDiameter,height/4+250,bobDiameter);
	bobObject5=new Bob(width/2+bobDiameter*2,height/4+250,bobDiameter);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	rope3=new rope(bobObject3.body,roofObject.body,0,0);
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2,0);

	
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);

  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

   
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope4.display();
  rope5.display();


 
  drawSprites();

  
}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}





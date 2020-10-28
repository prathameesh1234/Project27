
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
roof5 = new roof(400,40,800,20);
roof4 = new roof(350,40,800,20);
roof3 = new roof(300,40,800,20);
roof2 = new roof(250,40,800,20);
roof1 = new roof(200,40,800,20);



bob1 = new bob(200,480,60);
bob2 = new bob(250,480,60);
bob3 = new bob(300,480,60);
bob4 = new bob(350,480,60);
bob5 = new bob(400,480,60);

rope1 = new Rope(roof1.body,bob1.body);
rope2 = new Rope(roof2.body,bob2.body);
rope3 = new Rope(roof3.body,bob3.body)
rope4  = new Rope(roof4.body,bob4.body);
rope5 = new Rope(roof5.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  

  text(mouseX+","+mouseY,mouseX,mouseY);

  roof5.display()

bob1.display();
bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:1,y:1})
  
  }
  
  }




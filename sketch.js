
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;


	//Create the Bodies Here.
	  paper = new Paper(150,320,20);
    box2 = new Box(920,320,70,70)
    ground = new GROUND(600,height,1200,20)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  box2.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
   }
  }





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, box1,box2,box3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,800,20);
	ball = new Paper(40,685,18);
	box1 = new Dustbin(600,620,20,110);
	box2 = new Dustbin(730,620,20,110);
	box3 = new Dustbin(665,670,150,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display()
  drawSprites();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:53,y:-53})
	}
}
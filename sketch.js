
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paperBall;

var dbLeft,dbBottom,dbRight;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,500,70); 
	ground=new Ground (400,580,width,20);

	dbLeft=new Dustbin (595,560,20,30);
	dbRight=new Dustbin (745,560,20,30);
	dbBottom=new Dustbin (670,560,180,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 paperBall.display(); 
 dbLeft.display();

dbRight.display();
dbBottom.display();

ground.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:90,y:-100})

	}


}


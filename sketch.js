
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof();

	bob1 = new Bob(250,500);
	bob2 = new Bob(325,500);
	bob3 = new Bob(400,500);
	bob4 = new Bob(475,500);
	bob5 = new Bob(550,500);
	rope1 = new Rope(bob1.body,{x:0,y:0});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();

  drawSprites();
}
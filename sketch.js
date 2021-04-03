const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, ground, ball

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

var ground_option = {
  isStatic: true
}
ground = Bodies.rectangle(400,400,800,50, ground_option);
World.add(world, ground);

var ball_option = {
  restitution: 1.3
}
ball = Bodies.circle(200,100,50, ball_option);
World.add(world, ball);
  
}

function draw() {
  background(0); 
  Engine.update(engine);

  fill("green")
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,50);

  fill("red")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,50,50);
  
}
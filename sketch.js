//creating constraint objects
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// creating variables for the game
var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var hex;
var ball;
var hexImg;

var score = 0;

var backgroundImg;
var bg = "bg.png";

var gameState = "onSling";


function preload() {

 //loading image of hexagon 
  hexImg = loadImage("polygon.png");

  getBackgroundImg();
 

}

function setup() {

//creating canvas
  createCanvas(1200,400);
  
//creating engine and adding engine to the world  
  engine = Engine.create();
  world = engine.world;

//creating the blocks and the ground  
  strokeWeight(2);
  block1 = new Box(600, 260, 30, 40);
  block2 = new Box(570, 260, 30, 40);
  block3 = new Box(540, 260, 30, 40);
  block4 = new Box(630, 260, 30, 40);
  block5 = new Box(660, 260, 30, 40);


  block6 = new Box(585, 220, 30, 40);
  block7 = new Box(555, 220, 30, 40);
  block8 = new Box(615, 220, 30, 40);
  block9 = new Box(645, 220, 30, 40);


  block10 = new Box(600, 170, 30, 40);
  block11 = new Box(570, 180, 30, 40);
  block12 = new Box(630, 180, 30, 40);


  block13 = new Box(600, 140, 30, 40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 400, 1500, 20);


  block14 = new Box(900, 170, 30, 40);
  block15 = new Box(930, 170, 30, 40);
  block16 = new Box(870, 170, 30, 40);
  block17 = new Box(840, 170, 30, 40);
  block18 = new Box(960, 170, 30, 40);


  block19 = new Box(900, 140, 30, 40);
  block20 = new Box(930, 140, 30, 40);
  block21 = new Box(870, 140, 30, 40);
  block22 = new Box(900, 110, 30, 40);

//creating a hexagon object
  hex = new Polygon(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

//creating the chain  
  chain = new Slingshot(this.ball,{x:150, y:160});

}

function draw() {

  background("white");
  if(backgroundImg){
    background(backgroundImg)
  }

//updating the engine
  Engine.update(engine);
//displaying the blocks  
  fill("red");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();

  fill("yellow");
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();

  fill("green");
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  fill("darkgreen");
  block13.display();
  block13.score();

  fill("cyan");
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();

  fill("blue");
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();

  fill("orange");
  block22.display();
  block22.score();

//displaying the grounds/stands  
  ground1.display();
  ground2.display();
  ground3.display();

//giving image to the hexagon object  
  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

//displaying the chain  
  chain.display();

  push();
  fill("blue");
  textSize(20);
  text("SCORE: " + score,1000 ,40);
  pop();
}

//adding mouse dragged function
function mouseDragged() {
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

//adding mouse released function
function mouseReleased() {
  chain.fly();
  
}

//adding the key pressed function
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.ball, {x: 150, y: 150});
    chain.attach(this.ball);
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "bg1.png"
  } else {
      bg = "bg2.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
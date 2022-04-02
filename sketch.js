let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Velocidad vertical: "+round(vy),800,75);
  pop();

  // caída
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


function keyPressed ()
{
  if(keyCode==UP_ARROW)
   {
     upward_thrust();
     lander.changeAnimation('thrusting');
     thrust.nextFrame();

    }
}

function upward_thrust()
{
  vy = -1;
}
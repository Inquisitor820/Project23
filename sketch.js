var helicopterIMG,helicopterSprite,packageSprite,packageIMG;
var packageBody,ground;
var boxl,boxr,boxd
var boxl1,boxr1,boxd1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxl = createSprite(310,600,20,100);
	boxl.shapeColor = 'red';
	boxl1 = Bodies.rectangle(310,600,20,100,{isStatic:true});
	World.add(world,boxl1);

	boxd = createSprite(400,600,200,20);
	boxd.shapeColor = 'red';
	boxd1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,boxd1);

	boxr = createSprite(490,600,20,100);
	boxr.shapeColor = 'red';
	boxr1 = Bodies.rectangle(490,600,20,100,{isStatic:true});

	World.add(world,boxr1);
    World.add(world,boxl1);
	World.add(world,boxd1);


    //packagedelivery
    keyPressed();
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:false});

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  boxr.display();
    boxr.x = boxr1.position.x 
    boxr.y = boxr1.position.y 
  boxl.display();
    boxl.x = boxl1.position.x 
    boxl.y = boxl1.position.y 
  boxd.display();
    boxd.x = boxd1.position.x 
    boxd.y = boxd1.position.y 

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
    World.add(world, packageBody);
 }
}




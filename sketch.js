// declare all variables
var garden, rabbit, apple, orangeL, redL;
var gardenImg,rabbitImg,appleImg,orangeImg,redImg;
var edges;

function preload(){
  // load all images
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  // create a 400 * 400 canvas
  createCanvas (400, 400);

  // create garden at canvas centre and add image
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  // create rabbit, add image and scale it
  rabbit = createSprite(160,340,20,20);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.09;

  // create edge sprites to prevent rabbit escaping canvas
  edges = createEdgeSprites();
}

function draw() {
  // set background to white
  background(0);
  
  // move boy horizontally with mouse pointer
  rabbit.x = World.mouseX;
  
  // make rabbit collide with edge sprites to prevent from escaping canvas
  rabbit.collide(edges);
  
  // draw sprites
  drawSprites();
   
  var select_sprite = Math.round(random(1,3));

  if (frameCount % 80 == 0) {
    if (select_sprite == 1) {
      create (apple, appleImg, 0.07);
    } else if (select_sprite == 2) {
      create (orangeL, orangeImg, 0.08);
    } else {
      create (redL, redImg, 0.06);
    }
  }
}

function create (sprite, img, scale) {
  sprite = createSprite(random(50, 350),40, 10, 10);
  sprite.addImage(img);
  sprite.scale = scale;
  sprite.velocityY = 3;
  sprite.lifetime = 150;
}

var lechak;
var comida;
var background2;

function preload(){
bgImg=loadImage("assets/suelo de madera.png");
lechakImg=loadImage("assets/lechak1.png");
comidaImg=loadImage("assets/dog food.png");
}
function setup() {
  createCanvas(800,400);
  background2 = createSprite(650,450);
 background2.addImage(bgImg);

lechak=createSprite(179,32);
lechak.addImage(lechakImg);
lechak.scale = 0.5;
comida = createSprite(194,277);
comida.addImage(comidaImg);
comida.scale = 0.5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
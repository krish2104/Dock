var space, spacecraft;
var bg, spaceimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  spaceimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  space = createSprite(330,130);
  space.addImage(spaceimg);
  space.scale = 0.25;
}
function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("up")){
    spacecraft.y = spacecraft.y-2;
  }
    
  if(keyDown("left")){
      spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x-1;
  }
    
  if(keyDown("right")){
      spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x+1;
  }
    
  if(keyDown("down")){
      spacecraft.addImage(scimg1);
  }
}
  if(spacecraft.y <= (space.y+70) && spacecraft.x <= (space.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("OPERATION :DOCKING COMPLETE", 150, 300);
  }
  drawSprites();
}
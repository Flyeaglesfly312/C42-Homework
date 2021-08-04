var issImage,background1,spaceCraft1Image,spaceCraft2Image,spaceCraft3Image,spaceCraft4Image;
var iss,spaceCraft,hasDocked;

hasDocked = false;

function preload(){
  issImage = loadImage("iss.png");
  background1 = loadImage("spacebg.jpg");
  spaceCraft1Image = loadImage("spaceCraft1.png");
  spaceCraft2Image = loadImage("spaceCraft2.png");
  spaceCraft3Image = loadImage("spaceCraft3.png");
  spaceCraft4Image = loadImage("spaceCraft4.png");


}
function setup() {
  createCanvas(800,400);
  iss = createSprite(400,200,50,50);
  iss.addImage(issImage);
  iss.scale = 0.5;

  spaceCraft - createSprite(400,150,50,50);
  spaceCraft.addImage(spaceCraft1Image);
}

function draw() {
  background(background1);  
  if(!hasDocked){
    spaceCraft.x = random(50,160);
    if(keyDown(LEFT_ARROW)){
      spaceCraft.velocityX = -2;
      spaceCraft.addImage(spaceCraft3Image);
    }

    if(keyDown(RIGHT_ARROW)){
      spaceCraft.velocityX = 2;
      spaceCraft.addImage(spaceCraft4Image);
    }

    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(spaceCraft1Image);
    }

    if(keyDown(UP_ARROW)){
      spaceCraft.velocityY = -2;
      spaceCraft.addImage(spaceCraft1Image);
    }
  }
    if(spaceCraft.x === iss.x){
      hasDocked = true;
      text("Docking Succesfull!", 400,350);
    }
  drawSprites();
}
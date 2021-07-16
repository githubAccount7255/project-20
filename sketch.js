var cat1,cat2,cat3,cat4,garden,mouse1,mouse2,mouse3,mouse4;
var catimg1,catimg2,mouseimg1,mouseimg2;
var cat,mouse;

function preload() {
    //load the images here
garden = loadImage("garden.png");
catimg1 = loadAnimation("images/cat1.png");
mouseimg1 = loadAnimations("images/mouse1.png");
catimg2 = loadeAnimation("images/cat2.png", "images/cat3.png", "images/cat4.png");
mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png", "mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite("cat1.png");
    cat2 = createSprite("cat2.png");
    cat3 = createSprite("cat3.png");
    cat4 = createSprite("cat4.png");
    mouse1 = createSprite("mouse1.png");
    mouse2 = createSprite("mouse2.png");
    mouse3 = createSprite("mouse3.png");
    mouse4 = createSprite("mouse4.png");
}

function draw() {

    background("garden");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouse1.png", mouseimg1);
        mouse.changeAnimation("mouse1.png");
        velocityX = 0;
        cat.addAnimation("cat2.png", catimg2);
        cat.changeAnimation("cat2.png");
        velocityY = 0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.adAnimation("mouse3.png", mouseimg2);
      mouse.changeAnimation("mouse3.png");
      mouse.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouse3.png", mouseimg2);
      mouse.changeAnimation("mouse3.png");
      mouse.frameDelay = 25;
  }

}

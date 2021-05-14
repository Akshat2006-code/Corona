

var play

function preload(){
  photo=loadImage("Capture.jpg");
  
  }

  function setup() {
    createCanvas(1600,800);
    play=createSprite(800,360,30,30);
    play.addImage(photo);
    play.scale=1;
  }

function draw() {
  background(255,255,255);  
  drawSprites();
}
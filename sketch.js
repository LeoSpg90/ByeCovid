let covid, jeringa;
var angulo = 0.0;
var gloriaSound, horrorSound;

function preload() {
  gloriaSound = loadSound("gloria.mp3");
  horrorSound = loadSound("horror.mp3");
}


function setup() {

  createCanvas(600, 600);
  covid = new Covid();
  jeringa = new Jeringa();
 
}

function draw() {
  
  var bgR = map(mouseY, 100, height / 2 + 50, 235, 0);
  var bgG = map(mouseY, 100, height / 2 + 50, 235, 0);
  var bgB = map(mouseY, 100, height / 2 + 50, 0, 0);
  background(bgR, bgG, bgB);

  covid.draw();
  covid.move();
  jeringa.draw();

}

function mouseMoved() {

  if (mouseY <= height / 2) {
    gloriaSound.play();
    horrorSound.stop();
  } else if (mouseY >= height / 2) {
    gloriaSound.stop();
    horrorSound.play();
  }

}
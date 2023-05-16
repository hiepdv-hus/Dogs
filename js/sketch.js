//Question 4
//Create a sketch with a 600 x 400 canvas that loads in 2 images, “dog.png” and “cat.png”. These images can be found in the Assets folder.
//The dog image should be displayed on the left of the canvas, half way down. The cat image should be displayed on the opposite side of the canvas.
//The cat should move up and down the screen at speed.
//The user should be able to control the dog using the cursor keys (left, right, up, down).
//The user should try and move the dog past the cat, past the right edge of the canvas. If they do, the screen should go black and “YOU WIN!” be displayed in the middle of the screen. However, if the cat hits the dog, the game should end and “YOU LOSE!” should be displayed.

//CAT AND DOG - QUESTION 4


var dog;
var cat;
var yspeed = 5;
var x = 600;
var y = 10;
var x2 = 10;
var y2 = 10;

function preload() {
  cat = loadImage("../images/dogp5.png");
  dog = loadImage("../images/dog-img.png");

}

function setup() {
  var w = windowWidth;
  var canvas = createCanvas(w, 300);
  canvas.parent("sketch-container");
}

function draw() {
  background(39, 34, 34);
  image(cat, x, y, 290, 226);
  y += yspeed;
  image(dog, x2, y2, 125, 250);
  if (y+70 > height || y < 0) {
    yspeed = -yspeed;
  }
  
  if(keyIsPressed){
    if (keyCode === UP_ARROW) {
      y2 = y2 - 3;
    } else if (keyCode === DOWN_ARROW) {
      y2 = y2 + 3;
    }
    if (keyCode === LEFT_ARROW) {
      x2 = x2 - 3;
    } else if (keyCode === RIGHT_ARROW) {
      x2 = x2 + 3;
    }
  }
  
  y2 = constrain(y2, 0, 330);
  x2 = constrain(x2, 0, 760);
  
  if ((x2+60 > x) && (x2 < x+60) && (y2+60 > y) && (y2 < y +60)) {
    background(0);
    textAlign(CENTER);
    fill(255)
    text(' You Lose!!! :) ', width / 2, height / 2);
    noLoop();
  }
  
  if (x2>width) {
    background(0);
    textAlign(CENTER);
    fill(255)
    text(' You Win!!! :) ', width / 2, height / 2);
    noLoop();
  }
}
new p5(sketch, 'sketch-container');
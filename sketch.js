let imgShrek;

//load the image
function preload() {
  imgShrek = loadImage('shrek.jpg');
}

function setup() {
  createCanvas(600, 600);
  background(224, 50, 100);
}

//drag the mouse to reveal the green god
function mouseDragged() {
  fill(224, 50, 100);
  noStroke();
  image(imgShrek, mouseX, mouseY, 120, 120)
}
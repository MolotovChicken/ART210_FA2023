//array to store ghosts
let ghosts = [];

let ghostImg;
let ghoulImg;

function preload() {
   ghostImg = loadImage('data/ghost.png');
   ghoulImg = loadImage('data/ghoul.png');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(40, 40, 130);
  
  //spoooky scary haunted mansion
  noStroke();
  fill(0);
  beginShape();
  vertex(400, 50);
  vertex(450, 100);
  vertex(350, 100);
  endShape(CLOSE);
  beginShape();
  vertex(600, 150);
  vertex(650, 330);
  vertex(550, 330);
  endShape(CLOSE);
  beginShape();
  vertex(380, 100);
  vertex(420, 100);
  vertex(420, 140);
  vertex(380, 140);
  endShape(CLOSE);
  beginShape();
  vertex(350, 130);
  vertex(480, 130);
  vertex(650, 330);
  vertex(230, 330);
  endShape(CLOSE);
  beginShape();
  vertex(300, 330);
  vertex(530, 330);
  vertex(520, 580);
  vertex(310, 580);
  endShape(CLOSE);
  beginShape();
  vertex(397, 60);
  vertex(403, 60);
  vertex(400, 10);
  endShape(CLOSE);
  beginShape();
  vertex(310, 380);
  vertex(520, 380);
  vertex(600, 430);
  vertex(230, 430);
  endShape(CLOSE);
  
  circle(400, 40, 20);
  circle(600, 150, 20);
  circle(230, 330, 20);
  circle(600, 430, 20);
  circle(230, 430, 20);
  
  stroke(0);
  strokeWeight(10);
  line(200, 580, 600, 580);
  line(250, 430, 250, 580);
  line(580, 430, 580, 580);
  strokeWeight(5);
  line(300, 430, 300, 580);
  line(530, 430, 530, 580);
  noStroke();
  
  fill(250, 200, 0);
  beginShape();
  vertex(450, 450);
  vertex(500, 450);
  vertex(500, 550);
  vertex(450, 550);
  endShape(CLOSE);
  beginShape();
  vertex(320, 335);
  vertex(350, 335);
  vertex(350, 380);
  vertex(320, 380);
  endShape(CLOSE);
  circle(400, 110, 25);
  circle(700, 80, 70);
  
  
  fill(45);
  beginShape();
  vertex(330, 455);
  vertex(390, 455);
  vertex(390, 575);
  vertex(330, 575);
  endShape(CLOSE);
 
  fill(0);
  circle(380, 520, 10);
  
  noFill();
  
  stroke(0);
  strokeWeight(3);
  line(385, 110, 415, 110);
  line(400, 80, 400, 130);
  line(335, 330, 335, 400);
  line(320, 345, 350, 345);
  line(320, 365, 350, 365);
  
  line(475, 400, 475, 580);
  line(445, 480, 500, 480);
  line(445, 510, 500, 510);
  noStroke();
  
  for (let ghost of ghosts) {
    ghost.angle += 0.02;
    drawGhost(ghost);
  }
  for (let ghost of ghosts) {
    ghost.scale += 0.01;
    }
}

function mousePressed() {
  let ghost = {
    x: mouseX, 
    y: mouseY,
    size: random(50, 100), 
    type: random(1) < 0.5 ? 'ghost' : 'ghoul',
    angle: 0,
    scale: 0
  };
  
  ghosts.push(ghost);
}

function drawGhost(ghost) {
  push();
  translate(ghost.x, ghost.y);
  rotate(ghost.angle);
  scale(ghost.scale);
  imageMode(CENTER);
  if (ghost.type === 'ghost') {
    image(ghostImg, 0, 0, ghost.size, ghost.size);
  } else {
    image(ghoulImg, 0, 0, ghost.size, ghost.size);
  }
  pop();
}

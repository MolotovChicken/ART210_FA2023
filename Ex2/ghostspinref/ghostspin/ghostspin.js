let ghost;  // Ghost image
let ghoul;
let ghosts = [];  // Array to hold ghost objects
let ghouls = [];

function preload() {
  ghost = loadImage('data/ghost.png');  // Load your ghost image
  ghoul = loadImage('data/ghoul.png');
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // Update and draw each ghost
  for (let g of ghosts) {
    g.update();
    g.display();
  }
}

function mousePressed() {
  // Create a new ghost at a random location
  if (mouseX + 70 < 400 && mouseY - 30 > 600) {
  let newGhost = new Ghost(random(width), random(height));
  ghosts.push(newGhost);
  } else {
    let newGhoul = new Ghoul(random(width), random(height));
  ghosts.push(newGhoul);
  }
}

class Ghost {
  constructor(x, y) {
    this.x = mouseX;
    this.y = mouseY;
    this.scale = 0.1;  // Initial scale
    this.maxScale = random(0.5, 1);  // Maximum scale
    this.growthRate = random(0.01, 0.05);  // How fast the ghost grows
    this.spinRate = random(0.1, 1)
    this.rotation = 0.01;
    this.maxRotation = random(3, 8);
  }
  
  class Ghoul {
  constructor(x, y) {
    this.x = mouseX;
    this.y = mouseY;
    this.scale = 0.1;  // Initial scale
    this.maxScale = random(0.5, 1);  // Maximum scale
    this.growthRate = random(0.01, 0.05);  // How fast the ghost grows
    this.spinRate = random(0.1, 1)
    this.rotation = 0.01;
    this.maxRotation = random(3, 8);
  }

  update() {
    // Increase the scale
    if (this.scale < this.maxScale) {
      this.scale += this.growthRate;
    }
    if (this.rotation < this.maxRotation) {
      this.rotation += this.spinRate;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);
    rotate(this.rotation);
    image(ghost, 0, 0);
    pop();
  }
}

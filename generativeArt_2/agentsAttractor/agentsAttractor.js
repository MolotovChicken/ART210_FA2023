//CREATES a series of ellipses which "swarm" and interact
//when they are within a certain # of pixels of eachother, they register as shades of red
//otherwise, they are a random color

let agents = [];
let attractor;

function setup() {
  createCanvas(1280, 720);
  
  attractor = createVector(width/2, height/2);
  //pulls like gravity to center
  
  //let i be a variable that will continue to run this code as long as i < 20
  //also serves to create 20 agents
  for (let i = 0; i < 20; i++){
    agents.push(new Agent());
  }
}


function draw() {
  background(0, 20);
  
  //if there are agents on the screen, run this code
  for (let agent of agents){
    agent.attract(attractor);
    agent.wander(); //pull
    agent.update();
    agent.show();
  }
}

//class variables are written DIFFERENTLY
//this.x: x of this class gets this variable
//applies variable individually to objects
class Agent {
  constructor(){
    //like giving a random x and y to the object
    this.pos = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
    this.noiseOffset = random(1000);
  }
  attract(target){
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(0.2);
    this.acc.add(force);
  }
  wander(){
    //gives varied and interesting angle of attach/trajectory of agents
    let angle = noise(this.noiseOffset) * TWO_PI * 2;
    let force = p5.Vector.fromAngle(angle);
    force.mult(0.02);
    this.acc.add(force);
    this.noiseOffset += 0.02;
  }
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    //keeps agents on the canvas AKA, an adge check
    if (this.pos.x > width || this.pos.x < 0){
      this.vel.x *= -1;
    }
    if (this.pos.y > height || this.pos.y < 0){
      this.vel.y *= -1;
    }
  }
  show(){
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 10);
  }
}

//CREATES a series of ellipses which "swarm" and interact
//when they are within 50 pixels of eachother, they register as shades of red
//otherwise, they are a random color

let agents = [];

function setup() {
  createCanvas(1280, 720);
  //let i be a variable that will continue to run this code as long as i < 30
  //also serves to create 30 agents
  for (let i = 0; i < 30; i++){
    agents.push(new Agent());
  }
}


function draw() {
  background(0, 20);
  
  //if there are agents on the screen, run this code
  for (let agent of agents){
    agent.update();
    agent.checkNeighboors(agents);
    agent.show();
  }
}

//class variables are written DIFFERENTLY
//this.x: x of this class gets this variable
//applies varibale individually to objects
class Agent {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xoff = random(1000);
    this.yoff = random(2000, 3000);
    this.color = [random(255), random(255), random(255)];
  }
  update(){
    //map the x to the noise of the xoff at a percentage of 0-1 representative of 0-width
    this.x = map(noise(this.xoff), 0, 1, 0, width);
    this.y = map(noise(this.yoff), 0, 1, 0, height);
    this.xoff += 0.01; //velocity
    this.yoff += 0.01; //responsible for how fast agents seem to move
  }
  checkNeighboors(agents){
    for (let other of agents){
      //!== means Not equal to
      if (other !== this){
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < 50){
          this.color = [random(255), 0, 0];
          return; //run again
        }
      }
    }
    this.color = [random(255), random(255), random(255)];
    //color will be random unless interacting within 50 pixels with another agent
  }
  show(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 10);
  }
}

//noise has a built in perlin noise function, which we will be using

let yoff = 0; //1st dimension of Perlin noise

function setup() {
  createCanvas(1280, 720);
}


function draw() {
  background(0);
  
  fill(255);
  noStroke(0);
  
  let xoff = 0; //2nd dimension of Perlin noise
  
  //the += part determines the spacing between the ellipses
  for (let x = 0; x <= width; x += 2){
    //reducing final two values determines how tall waves are and where they are
    let y = map(noise(xoff, yoff), 0, 1, 200, 150);
    
    //smaller ellispes equals smoother line)
    ellipse(x, y, 8);
    
    //add xoff to itself at a rate of 0.05
    xoff += 0.05;
  }
  yoff += 0.01;
}

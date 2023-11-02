function setup() {
  createCanvas(800, 800);
  background(0);
}


function draw() {
  //randomly choose a shape
  let shapeChoice = floor(random(2));
  
  //random positions, sizes, color
  let x = random(width);
  let y = random(height);
  let w = random(20, 100);
  let h = random(20, 100);
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
  fill(r, g, b, 150);
  noStroke();
  
  
  //doing a singular size variable acts as if the width and height are the same (determined by the singular "s")
  if (shapeChoice === 0){
    ellipse(x, y, w, h);
  } else {
    rect(x, y, w, h); 
  }
  
}

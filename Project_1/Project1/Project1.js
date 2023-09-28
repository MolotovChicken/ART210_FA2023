//let colors = [];

function setup() {
  createCanvas(1920, 1080);
  background(150);
  
 // let col = {
 //   (random('colBrown', 'colMedGreen', 'colBeige', 'colBrick', 'colBone', 'colMoss', 'colTan', 'colPurple', 'colMossHigh')) 
 // };
//  colors.push(col);
}

function draw() {
   let colBrown = (color(69, 39, 1));
  let colMedGreen = (color(148, 155, 87));
  let colBeige = (color(165, 116, 75));
  let colBrick = (color(133, 50, 0));
  let colBone = (color(189, 175, 148));
  let colMoss = (color(76, 67, 24));
  let colTan = (color(180, 148, 125));
  let colPurple = (color(59, 36, 44));
  let colMossHigh = (color(132, 124, 39));
  
  fill(random(colBrown, colMedGreen, colBeige, colBrick, colBone, colMoss, colTan, colPurple, colMossHigh));
  rect(0, 0, 200, 200);
}

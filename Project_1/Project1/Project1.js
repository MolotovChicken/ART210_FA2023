let dreamButton, wakeButton, restartButton;
let state = 0;

//variables for squigglies, heavily referenced from https://happycoding.io/tutorials/p5js/animation/random-walker
let x;
let y;

//variables for 10print in state 1
//heavily referenced from Colby repo sketch_10Print
let a = 0;
let b = 0;
let spacing = 60;

function preload() {
  //add images here
}

function setup() {
  createCanvas(1920, 1080);
  background(230);
  
  //dreamButton
  
  //let drTextCol = color(76, 67, 24);
  //let drBackCol = color(165, 116, 75);
  dreamButton = createButton('Dream');
  dreamButton.position(1200, 400);
  //dreamButton.style('font-size', '24px');
  //dreamButton.style('color', drTextCol);
  //dreamButton.style('background-color', drBackCol);
  dreamButton.mousePressed(nextPage);
  
  //wakeButton
  wakeButton = createButton('Wake Up');
  wakeButton.position(1800, 1040);
  wakeButton.mousePressed(nextPage);
  
  //restartButton
  restartButton = createButton('Refresh Page to Restart');
  restartButton.position(1650, 1020);
  //restartButton.mousePressed(nextPage);
  
  //declare varibles for squigglies
  x = width / 2;
  y = height / 2;
}

function draw() {
  if(state === 0) {
    dreamButton.show();
    wakeButton.hide();
    restartButton.hide();
    
    //quote for state 0
    fill(100);
    textSize(24);
    text("And when thou art weary, I'll find thee a bed,", width/2, height/2);
    text("Of mosses, and flowers, to pillow thy head.", width/2, 580);
    textSize(18);
    text("-'To Emma' (1815) by John Keats", 1150, 620);
    
    //LOAD IN IMAGE OF PERSON ASLEEP
    
    
    
  } else if (state === 1) {
    dreamButton.hide();
    wakeButton.show();
    restartButton.hide();
    
    //10step background from Colby example
    stroke(random(255));
    strokeWeight(3);
    
    //angle
    if (random(1) < 0.5) {
      line(a, b, a + spacing, b + spacing);
    } else {
      line(a, b + spacing, a + spacing, b);
    }

    a += spacing;
    if (a > width) {
      a = 0;
      b += spacing;
    }
    //end 10step
  
    
    //random squigglies (I put this here since I only want it to run while in state 1)
    for (let i = 0; i <1000; i++) {
      frameRate(24);
      step();
    }
    
  } else if(state === 2) {
    dreamButton.hide();
    wakeButton.hide();
    restartButton.show();
    
    fill(255);
    textSize(24);
    text("From my rotting body, flowers shall grow", width/2, height/2);
    text("and I am in them and that is eternity.", width/2, 580);
    textSize(18);
    text("-Edvard Munch (1863-1944)", 1130, 620);
    
    //LOAD IN IMAGE OF SKELETON IN FOREST
    //Perhaps build on ghost array idea/function to have
    //interactivity with mouse clicks spawning flowers/mushrooms
  }
}

// changes the background along with changes in state
function nextPage() {
  state = (state + 1) % 3;
  
  if (state === 0) {
    background(230);
  } else if(state === 1) {
    background(150);
  } else if(state === 2) {
    background(100);
  }
  
}


// draws the squigglies on a 540 frameCount loop
function step() {  
 x += random(-5, 5);
 y += random(-5, 5);
 
 x = constrain(x, 0, width);
 y = constrain(y, 0, height);
 

//let colors = [colBrown, colMedGreen, colBeige, colBrick, colBone, colMoss, colTan, colPurple, colMossHigh];
//let colors = [color(69, 39, 1), color(148, 155, 87), color(165, 116, 75), color(133, 50, 0), color(189, 175, 148), color(76, 67, 24), color(180, 148, 125), color(59, 36, 44), color(132, 124, 39)];

let colBrown = (color(69, 39, 1));
let colMedGreen = (color(148, 155, 87));
let colBeige = (color(165, 116, 75));
let colBrick = (color(133, 50, 0));
let colBone = (color(189, 175, 148));
let colMoss = (color(76, 67, 24));
let colTan = (color(180, 148, 125));
let colPurple = (color(59, 36, 44));
let colMossHigh = (color(132, 124, 39));


let frC = frameCount;

if (frC <= 60) {
   fill(colBrown);
 } else if (frC > 60 && frC <= 120) {
   fill(colMedGreen);
 } else if (frC > 120 && frC <= 180) {
   fill(colBeige);
 } else if (frC > 180 && frC <= 240) {
   fill(colBrick);
 } else if (frC > 240 && frC <= 300) {
   fill(colBone);
 } else if (frC > 300 && frC <= 360) {
   fill(colMoss);
 } else if (frC > 360 && frC <= 420) {
   fill(colTan);
 } else if (frC > 420 && frC <= 480) {
   fill(colPurple);
 } else if (frC > 480 && frC <= 540) {
   fill(colMossHigh);
 } 
 
 //makes stroke a random shade of dark grey
 stroke(random(0, 150));
 strokeWeight(1);
 ellipse(x, y, 30, 30);
 
 //resets the color loop above 
 if (frameCount > 540) {
   frameCount = 0;
 }
}

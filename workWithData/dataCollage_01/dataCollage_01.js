let objects = [];
let objImgs = 10;

function preload() {
  //preload images with a loop
  for (let i = 0; i < objImgs; i++) {
    objects[i] = loadImage('data/objects/object' + (i + 1) + '.jpeg');
  }
}


function setup() {
  createCanvas(1280, 720);
  noLoop();
}


function draw() {
  background(50, 50, 100);
  
  let baseHeight = height * 0.7;
  
  for (let i = 0; i < objImgs; i++) {
    let object = objects[i];
    //let objectHeight = baseHeight - (i * 20);
    //These variables limit the location to a random location that remains on screen
    let objectWidth = random(10, 1000);
    let objectHeight = random(10, 440);
    
    //object.resize(random(200, 500), random(200, 500));
    
    //MAINTAINS object aspect ratio while making them small enough to see
    //resize/8 is NOT COMPATIBLE with mousePressed() since it continually shrinks them
    //it would be MUCH better to resize them before importing to p5js
    object.resize(object.width/8, object.height/8);
    
    image(object, objectWidth, objectHeight);
  }
}

//function mousePressed() {
//  shuffle(objects, true);
//  redraw();
//}

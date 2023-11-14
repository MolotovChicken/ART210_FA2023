let objectImages = [];
let placeImages = [];

let gridSize = 5;

//boolean, on or off, true or false
let showObjects = false;

function preload() {
  for (let i = 1; i < 10; i++) {
    objectImages.push(loadImage('data/objects/object' + i + '.jpeg'));
    placeImages.push(loadImage('data/places/place' + i + '.jpeg'));
  }
}

function setup() {
  createCanvas(1200, 800);
  noLoop();
}


function draw() {
  background(220);
  
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  //the value of showObjects tells me whether I am looking at an object or place
  let images = showObjects ? objectImages : placeImages;
  //loop to determine how images are rendered on grid
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      let imageIndex = int(random(images.length));
      let img = images[imageIndex];
      image(img, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  //when mouse is pressed, switch between objects and places, and redraw
  showObjects = !showObjects;
  redraw();
}

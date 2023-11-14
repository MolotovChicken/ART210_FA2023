let objectImages = [];
let placeImages = [];
let gridSize = 5;
//boolean, on or off, true or false
let showObjects = false;
let lastUpdateTime = 0;
let updateInterval = 1000;

let grid = [];

function preload() {
  for (let i = 1; i < 11; i++) {
    objectImages.push(loadImage('data/objects/object' + i + '.jpeg'));
    placeImages.push(loadImage('data/places/place' + i + '.jpeg'));
  }
}

function setup() {
  createCanvas(1200, 800);
  initGrid();
}

function draw() {
  let currentTime = millis();
  if (currentTime - lastUpdateTime > updateInterval) {
    updateSingleImage();
    lastUpdateTime = currentTime;
  }
  displayGrid();
}

function initGrid() {
 for (let x = 0; x < gridSize; x++) {
   grid[x] = [];
   for (let y = 0; y < gridSize; y++) {
     grid[x][y] = random(placeImages);
  }
 }
}

function updateSingleImage() {
  let x = int(random(0, gridSize));
  let y = int(random(0, gridSize));
  let images = showObjects ? objectImages : placeImages;
  grid[x][y] = random(images);
}

function displayGrid() {
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      image(grid[x][y], x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  //when mouse is pressed, switch between objects and places, and call updateImages() function
  showObjects = !showObjects;
  updateGrid();
}

function updateGrid() {
  let images = showObjects ? objectImages : placeImages;
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      grid[x][y] = random(images);
    }
  }
}

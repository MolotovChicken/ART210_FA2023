//working with color recognition (NOT object recognition)

let video;
let targetColor;
let spider;

function preload() {
  spider = loadImage('data/spider.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  targetColor = [255, 0, 0];
}


function draw() {
  image(video, 0, 0);
  
  let worldRecord = 500;
  let closestX = 0;
  let closestY = 0;
  
  video.loadPixels();
  
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      //let a = video.pixels[index + 3]; ALPHA grabbing
      
      let d = dist(r, g, b, targetColor[0], targetColor[1], targetColor[2]);
      if (d < worldRecord) {
        worldRecord = d;
        closestX = x;
        closestY = y;
      }
    }
  }
  spider.resize(640, 480);
  image(spider, closestX, closestY, 60, 35);
}

function mousePressed() {
  targetColor = video.get(mouseX, mouseY);
  console.log("Target Color: ", targetColor);
}

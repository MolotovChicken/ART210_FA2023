//working with color recognition (NOT object recognition)

let video;
let targetColor;
let spider;

//Variables for smoothing
let smoothedX = 0;
let smoothedY = 0;
let easing = 0.5; //easing factor

function preload() {
  spider = loadImage('data/spider.png');
}

function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  targetColor = [255, 0, 0];
}


function draw() {
  frameRate(18);
  
  image(video, 0, 0);
  
  //let worldRecord = 500;
  //let closestX = 0;
  //let closestY = 0;
  
  let avgX = 0;
  let avgY = 0;
  let count = 0;
  
  video.loadPixels();
  
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      //let a = video.pixels[index + 3]; ALPHA grabbing
      
      let d = dist(r, g, b, red(targetColor), green(targetColor), blue(targetColor));
      if (d < 50) {
        //worldRecord = d;
        //closestX = x;
        //closestY = y;
        avgX += x;
        avgY += y;
        count++;
      }
    }
  }
  //smoothing math
  if (count > 0) {
    avgX = avgX / count;
    avgY = avgY / count;
    
    smoothedX += (avgX - smoothedX) * easing;
    smoothedY += (avgY - smoothedY) * easing;
    
    spider.resize(width, height);
    image(spider, smoothedX, smoothedY, 60, 35);
  }
}

function mousePressed() {
  targetColor = video.get(mouseX, mouseY);
  console.log("Target Color: ", targetColor);
}

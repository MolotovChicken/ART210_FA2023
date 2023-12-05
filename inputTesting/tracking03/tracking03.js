//working with color recognition (NOT object recognition)

let video;
let targetColor;
let spider;
let spiderHome;
let spiderVisible = true;

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
  
  spiderHome = {x: width - 100, y: height - 100, w: 50, h: 50};
}


function draw() {
  frameRate(18);
  
  image(video, 0, 0);
  
  if (spiderVisible) {
    updateSpiderPosition();
    
    if (smoothedX >= spiderHome.x && smoothedX <= spiderHome.x + spiderHome.w && smoothedY >= spiderHome.y && smoothedY <= spiderHome.y + spiderHome.h) {
      spiderVisible = false;
    }
    if (spiderVisible) {
      image(spider, smoothedX, smoothedY, 60, 35);
    }
  }
  noFill();
  stroke(0, 255, 0);
  strokeWeight(3);
  rect(spiderHome.x, spiderHome.y, spiderHome.w, spiderHome.h);
}

function updateSpiderPosition() {
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
      
      let d = dist(r, g, b, red(targetColor), green(targetColor), blue(targetColor));
      if (d < 50) {
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
  if (!spiderVisible) {
    spiderVisible = true;
    smoothedX = mouseX;
    smoothedY = mouseY;
    targetColor = video.get(mouseX, mouseY);
  } else {
    targetColor = video.get(mouseX, mouseY);
  }
}

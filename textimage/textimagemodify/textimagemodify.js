let img;

function preload() {
  img = loadImage('data/spider.png'); 
}

function setup() {
  //creates a canavas that matches original image dimensions 
  createCanvas(890, 800);
   
   //background(0, 100, 50);
   
   img.resize(890, 800);
   image(img, 0, 0);
   
   //let croppedImg = img.get(100, 100, 200, 200);
  // image(croppedImg, 250, 0);
  
   
}


function draw() {
  background(0, 100, 50);
  
  let tintVal = map(mouseX, 0, width, 0, 255);
  tint(255, tintVal);
  image(img, 0, 0);
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    fill(255, 0, 0);
    textSize(24);
    text('Hovering over Image', img.width/2, img.height/2);
  }
}

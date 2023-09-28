//colBrown = (color(69, 39, 1));
//colMedGreen = (color(148, 155, 87));
//colBeige = (color(165, 116, 75));
//colBrick = (color(133, 50, 0));
//colBone = (color(189, 175, 148));
//colMoss = (color(76, 67, 24));
//colTan = (color(180, 148, 125));
//colPurple = (color(59, 36, 44));
//colMossHigh = (color(132, 124, 39));

let dreamButton, wakeButton, restartButton;
let state = 0;

function setup() {
  createCanvas(1920, 1080);
  
  //dreamButton
  dreamButton = createButton('Dream');
  dreamButton.position(930, 510);
  dreamButton.mousePressed(nextPage);
  
  //wakeButton
  wakeButton = createButton('Wake Up');
  wakeButton.position(930, 510);
  wakeButton.mousePressed(nextPage);
  
  //restartButton
  restartButton = createButton('Refresh to Restart');
  restartButton.position(930, 510);
  restartButton.mousePressed(nextPage);

}

function draw() {
  
  if(state === 0) {
    dreamButton.show();
    wakeButton.hide();
    restartButton.hide();
  } else if (state === 1) {
    dreamButton.hide();
    wakeButton.show();
    restartButton.hide();
  } else if(state === 2) {
    dreamButton.hide();
    wakeButton.hide();
    restartButton.show();
  }
}

function nextPage() {
  state = (state +1) % 3;
  
  if (state === 0) {
    background(230);
  } else if(state === 1) {
    background(150);
  } else if(state === 2) {
    background(100);
  }
  
}

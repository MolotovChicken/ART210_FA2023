//Constants (for gradient polygon below)
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

function setup() {
  createCanvas(798, 650);
  background(239, 219, 210);
//more setup for gradient
  c1 = color(239, 219, 210);
  c2 = color(208, 130, 130);
  
  noLoop();
}

function draw() {
  beginShape();
  noStroke();
  vertex(388, 264);
  vertex(798, 307);
  vertex(798, 431);
  vertex(334, 394);
  endShape(CLOSE);
  
  //background top white polygon
  fill(241, 255, 254);
  noStroke();
  beginShape();
  vertex(261, 54);
  vertex(330, 0);
  vertex(657, 0);
  vertex(311, 126);
  endShape(CLOSE);
  
  //pink gradient polygon (heavily referenced from p5js entry on lerpColor)
  setGradient(333, 265, 465, 170, c1, c2, Y_AXIS);
  
  //background light blue polygons
  fill(210, 215, 219);
  beginShape();
  noStroke();
  vertex(372, 216);
  vertex(410, 270);
  vertex(782, 310);
  vertex(783, 262);
  endShape(CLOSE);
  
  fill(213, 230, 222);
  beginShape();
  noStroke();
  vertex(310, 122);
  vertex(368, 211);
  vertex(459, 165);
  vertex(798, 180);
  vertex(798, 0);
  vertex(625, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(216, 0);
  vertex(269, 59);
  vertex(415, 0);
  endShape(CLOSE);
  
  //polygon to cover bottom edge of gradient
  beginShape();
  noStroke();
  fill(239, 219, 210);
  vertex(334, 389);
  vertex(798, 430);
  vertex(798, 447);
  vertex(307, 460);
  endShape(CLOSE);
  
  //bottom right yellow polygon
  fill(247, 244, 229);
  beginShape();
  vertex(447, 650);
  vertex(798, 573);
  vertex(798, 650);
  endShape(CLOSE);
  
  //bottom maroon line
  stroke(76, 33, 20);
  strokeWeight(20);
  line(798, 627, 619, 605);
  line(481, 587, 240, 555);
  
  //lilac polygon
  fill(150, 147, 202);
  beginShape();
  noStroke();
  vertex(715, 482);
  vertex(798, 482);
  vertex(798, 592);
  vertex(717, 589);
  endShape(CLOSE);
  
  //background bottom white polygon
  fill(239, 240, 245);
  beginShape();
  vertex(196, 638);
  vertex(576, 553);
  vertex(789, 582);
  vertex(458, 650);
  vertex(187, 650);
  endShape(CLOSE);
  
  //orange polygon
  fill(243, 110, 43);
  beginShape();
  vertex(0, 0);
  vertex(235, 0);
  vertex(434, 301);
  vertex(194, 650);
  vertex(0, 650);
  endShape(CLOSE);
  
  //"maroon" line overlay on orange polygon
  fill(174, 82, 36);
  beginShape();
  vertex(0, 516);
  vertex(0, 536);
  vertex(252, 566);
  vertex(264, 548);
  endShape(CLOSE);
  
  //top dark blue circles
  fill(16, 89, 168);
  circle(-26, 178, 83);
  circle(648, 80, 90);
  
  //light orange circles
  //bottom row
  fill(230, 150, 70);
  circle(120, 182, 60);
  circle(207, 170, 60);
  circle(300, 162, 60);
  circle(391, 150, 60);
  circle(532, 135, 60);
  circle(626, 125, 60);
  circle(722, 116, 60);
  circle(814, 106, 60);
  //middle row
  circle(140, 100, 60);
  circle(223, 90, 60);
  circle(319, 80, 60);
  circle(407, 67, 60);
  circle(554, 53, 60);
  circle(648, 42, 60);
  circle(741, 34, 60);
  //top row
  circle(151, 16, 60);
  circle(236, 5, 60);
  circle(328, -8, 60);
  circle(420, -19, 60);
  
  //light orange lines
  stroke(230, 150, 70);
  strokeWeight(10);
  line(412, 440, 480, 0);
  strokeWeight(12);
  line(415, 506, 421, 650);
  strokeWeight(7);
  line(167, 14, 223, 6);
  line(258, 5, 300, -5);
  line(159, 98, 202, 89);
  line(246, 87, 295, 81);
  line(340, 76, 382, 71);
  line(431, 64, 468, 63);
  line(468, 63, 529, 55);
  line(576, 51, 621, 46);
  line(673, 39, 713, 35);
  line(766, 28, 798, 25);
  line(142, 180, 184, 175);
  line(233, 168, 276, 164);
  line(327, 158, 367, 152);
  line(419, 145, 456, 143);
  line(456, 143, 506, 136);
  line(555, 132, 598, 128);
  line(650, 121, 694, 117);
  line(744, 111, 784, 107);
  
  //bottom dark blue circle
  noStroke();
  fill(16, 89, 168);
  circle(373, 613, 90);
    
  //blue polygon
  fill(0, 112, 184);
  beginShape();
  vertex(778, 224);
  vertex(798, 224);
  vertex(798, 411);
  vertex(780, 431);
  endShape(CLOSE);
  
  beginShape();
  vertex(779, 539);
  vertex(798, 515);
  vertex(798, 539);
  endShape(CLOSE);
  
  //reddish "starburst"
  stroke(207, 160, 157);
  noFill();
  strokeWeight(3);
  curve(631, 625, 607, 622, 597, 605);

}
//Part of gradient section. COPIED from p5js example, then edited.
//Link here: https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
  if (axis === Y_AXIS) {
    for (let i = y; i <= y +h; i++) {
      let inter = map(i - 80, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

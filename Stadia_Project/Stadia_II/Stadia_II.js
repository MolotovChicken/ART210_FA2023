function setup() {
  createCanvas(798, 650);
  background(239, 219, 210);
}

function draw() {
  //background top white polygon
  fill(241, 255, 254);
  noStroke();
  beginShape();
  vertex(261, 54);
  vertex(330, 0);
  vertex(657, 0);
  vertex(311, 126);
  endShape(CLOSE);
  
  //background light blue polygons
  fill(210, 215, 219);
  beginShape();
  vertex(372, 216);
  vertex(410, 270);
  vertex(782, 310);
  vertex(783, 262);
  endShape(CLOSE);
  
  fill(213, 230, 222);
  beginShape();
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
  
   //background bottom white polygon
  fill(239, 240, 245);
  beginShape();
  vertex(196, 638);
  vertex(576, 553);
  vertex(789, 582);
  vertex(458, 650);
  vertex(187, 650);
  endShape(CLOSE);
  
  //lilac polygon
  fill(150, 147, 202);
  beginShape();
  vertex(715, 482);
  vertex(798, 482);
  vertex(798, 582);
  vertex(762, 580);
  vertex(717, 571);
  endShape(CLOSE);
  
  //orange polygon
  fill(243, 110, 43);
  beginShape();
  vertex(0, 0);
  vertex(235, 0);
  vertex(431, 303);
  vertex(194, 650);
  vertex(0, 650);
  endShape(CLOSE);
  
  //top dark blue circles
  fill(16, 89, 168);
  circle(-26, 178, 83);
  circle(648, 80, 85);
  
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
  
  
}

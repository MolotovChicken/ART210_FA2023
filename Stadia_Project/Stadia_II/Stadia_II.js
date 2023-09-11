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
  
  //background grey-ish hatching
  stroke(180, 160, 151);
  strokeWeight(4);
  line(321, 16, 318, 38);
  line(318, 121, 365, 137);
  line(457, 143, 682, 250);
  stroke(178, 186, 171);
  line(374, 100 ,457, 143);
  stroke(180, 160, 151);
  line(498, 182, 644, 239);
  line(391, 216, 445, 188);
  line(778, 0, 762, 128);
  line(573, 73, 607, 87);
  line(645, 0, 645, 14);
  line(670, 114, 798, 179);
  line(458, 225, 785, 114);
  line(379, 384, 559, 288);
  line(409, 339, 539, 413);
  line(539, 413, 558, 411);
  line(558, 411, 601, 432);
  line(601, 432, 770, 481);
  line(363, 406, 410, 413);
  line(419, 415, 456, 423);
  line(493, 429, 595, 462);
  line(444, 502, 456, 521);
  line(519, 503, 517, 553);
  line(408, 526, 333, 556);
  line(290, 573, 232, 596);
  line(316, 508, 310, 553);
  line(306, 576, 300, 613);
  line(232, 611, 258, 613);
  line(289, 624, 319, 631);
  line(682, 624, 722, 649);
  line(722, 652, 686, 649);
  line(466, 649, 496, 650);
  line(576, 615, 582, 638);
  line(582, 638, 600, 648);
  strokeWeight(2);
  line(540, 414,716, 523);
  line(490, 502, 572, 553);
  line(290, 511, 316, 508);
  stroke(120);
  line(716, 523, 797, 581);
  
  //maroon strokes and shapes
  noStroke();
  fill(76, 33, 20);
  beginShape();
  vertex(676, 419);
  vertex(677, 412);
  vertex(729, 423);
  vertex(798, 442);
  vertex(798, 451);
  vertex(727, 430);
  endShape(CLOSE);
  beginShape();
  vertex(590, 536);
  vertex(630, 542);
  vertex(595, 542);
  endShape(CLOSE);
  beginShape();
  vertex(498, 496);
  vertex(490, 503);
  vertex(529, 503);
  vertex(609, 515);
  vertex(644, 523);
  vertex(702, 536);
  vertex(713, 535);
  vertex(747, 548);
  vertex(749, 541);
  vertex(715, 528);
  vertex(707, 531);
  vertex(610, 509);
  vertex(531, 501);
  endShape(CLOSE);
  beginShape();
  vertex(348, 426);
  vertex(352, 420);
  vertex(409, 430);
  vertex(409, 432);
  vertex(405, 436);
  endShape(CLOSE);
  beginShape();
  vertex(510, 460);
  vertex(536, 465);
  vertex(559, 477);
  vertex(668, 508);
  vertex(554, 481);
  vertex(543, 474);
  vertex(509, 465);
  endShape(CLOSE);
  beginShape();
  vertex(471, 502);
  vertex(480, 504);
  vertex(494, 534);
  vertex(532, 574);
  vertex(573, 628);
  vertex(580, 627);
  vertex(589, 641);
  vertex(569, 631);
  vertex(510, 561);
  vertex(488, 535);
  endShape(CLOSE);
  beginShape();
  vertex(0, 614);
  vertex(0, 623);
  vertex(63, 650);
  vertex(79, 650);
  endShape(CLOSE);
  
  //lines overlayed on orange polygon
  stroke(189, 61, 7);
  strokeWeight(2);
  line(0, 351, 248, 398);
  line(248, 398, 350, 424);
  strokeWeight(1);
  line(112, 514, 378, 384);
  line(12, 471, 185, 545);
  line(6, 517, 290, 511);
  line(230, 596, 84, 650);
  line(126, 376, 320, 261);
  line(107, 354, 349, 267);
  line(229, 253, 408, 337);
  line(106, 252, 106, 355);
  line(130, 320, 306, 412);
  line(269, 140, 315, 120);
  strokeWeight(0.5);
  line(0, 232, 413, 269);
  line(80, 400, 0, 456);
  line(8, 154, 69, 110);
  line(6, 87, 154, 44);
  line(26, 0, 81, 65);
  line(0, 26, 197, 85);
  line(169, 32, 197, 76);
  line(328, 420, 328, 453);
  line(235, 375, 268, 352);
  
  //small grey circles
  noStroke();
  fill(180, 160, 151);
  circle(646, 242, 10);
  circle(537, 322, 10);
  
  //blueish purple upward arcs left side
  noFill();
  stroke(111, 47, 108);
  strokeWeight(8);
  line(0, 50, 208, 3);
  curve(-100, 400, 0, 276, 371, 170, 400, 230);
  curve(-200, 600, 0, 473, 122, 421, 320, 460);
  //blue arc
  stroke(85, 85, 182);
  curve(-100, 480, 0, 423, 109, 397, 200, 420);
  
  //"maroon" line overlay on orange polygon
  fill(174, 82, 36);
  noStroke();
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
  stroke(215, 160, 157);
  noFill();
  strokeWeight(4);
  line(625, 626, 611, 625);
  line(611, 625, 601, 615);
  line(601, 615, 597, 606);
  line(632, 618, 624, 606);
  line(626, 592, 637, 579);
  line(640, 620, 646, 604);
  line(646, 604, 664, 602);
  line(649, 629, 659, 642);
  line(637, 632, 624, 649);
  line(624, 649, 603, 649);
  
  //yellow blob
  //This code is kinda clunky/long, but it was the quickest way I could find
  fill(255, 200, 11);
  stroke(255, 200, 11);
  beginShape(325, 469);
  curveVertex(326, 466);
  curveVertex(326, 466);
  curveVertex(359, 449);
  curveVertex(389, 441);
  curveVertex(437, 426);
  curveVertex(473, 425);
  curveVertex(498, 433);
  curveVertex(512, 458);
  curveVertex(508, 487);
  curveVertex(491, 500);
  curveVertex(458, 500);
  curveVertex(420, 505);
  curveVertex(389, 519);
  curveVertex(364, 529);
  curveVertex(343, 529);
  curveVertex(330, 525);
  curveVertex(320, 510);
  curveVertex(313, 496);
  curveVertex(314, 479);
  curveVertex(320, 472);
  curveVertex(320, 472);
  curveVertex(326, 466);
  curveVertex(326, 466);
  endShape();
  
  //small bottom left pink triangle
  fill(234, 200, 210);
  noStroke();
  beginShape();
  vertex(334, 557);
  vertex(411, 526);
  vertex(412, 567);
  endShape(CLOSE);
  
  //top arranged blue curve
  noFill();
  stroke(42, 66, 97);
  strokeWeight(8);
  curve(-20, 5, 0, 89, 435, 171, 455, 161);
  curve(395, 111, 435, 171, 798, 200, 810, 180);

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

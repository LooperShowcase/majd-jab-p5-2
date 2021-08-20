let x = 800;
let y = 800;

let img;
function setup() {
  img = loadImage("https://c.tenor.com/LH6VcfpgfaAAAAAd/warp-space.gif");
  createCanvas(x, y);
  angleMode(DEGREES);
}

function draw() {
  background(img);
  let z = x / y;
  strokeWeight(z * 8);
  translate(width / 2, height / 2);
  rotate(-90);
  noFill();
  let sc = second();
  let mn = minute();
  let hr = hour();

  let minuteAngele = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  stroke("#0ABAB5");
  arc(0, 0, x * 0.8, y * 0.8, 0, minuteAngele);

  push();
  rotate(minuteAngele);
  stroke("#0ABAB5");
  line(0, 0, x * 0.2, 0);
  pop();

  let secondAngele = map(sc, 0, 60, 0, 360);
  stroke("#eeeee4");
  arc(0, 0, x * 0.7, y * 0.7, 0, secondAngele);

  push();
  rotate(secondAngele);
  stroke("#eeeee4");
  line(0, 0, x * 0.25, 0);
  pop();

  stroke("#e05ad3");
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(mn, 0, 60, 0, 6);
  arc(0, 0, x * 0.6, y * 0.6, 0, hourAngle);
  push();
  rotate(hourAngle);
  stroke("#e05ad3");
  line(0, 0, x * 0.15, 0);
  pop();

  push();
  rotate(-90);
  strokeWeight(8);
  stroke("red");
  line(0, y * 0.4, 0, y * 0.4 - 10);
  pop();

  push();
  strokeWeight(8);
  stroke("black");
  line(0, y * 0.4, 0, y * 0.4 - 10);
  pop();

  push();
  rotate(-90);
  strokeWeight(8);
  stroke("black");
  line(0, y * 0.4, 0, y * 0.4 - 10);
  pop();

  push();
  rotate(90);
  strokeWeight(8);
  stroke("black");
  line(0, y * 0.4, 0, y * 0.4 - 10);
  pop();

  push();
  rotate(180);
  strokeWeight(8);
  stroke("black");
  line(0, y * 0.4, 0, y * 0.4 - 10);
  pop();
}

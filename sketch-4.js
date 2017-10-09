var circle = {
  x: 100, 
  y: 400,
  vx: 2,
  vy: -2,
  r: 10,
	h:10
};

var circle2 = {
  x: 160, 
  y: 400,
  vx: 2,
  vy: -4,
  r: 10,
	h:60
};

var circle3 = {
	x: 100,
	y: 200,
	vx: 8,
	vy: -6,
	r: 3,
	h:40
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  colorMode(HSB);
	fill(circle.h,100,100);
  paint(circle);
	fill(circle2.h,100,100);
  paint(circle2);
	fill(circle3.h,100,100);
  paint(circle3);
	
  move(circle);
  move(circle2);
  move(circle3);
	
  bounce(circle);
  bounce(circle2);
	bounce(circle3);
}

function paint(circle) {
  ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
  circle.x += circle.vx;  
	//circle.x = circle.x + 1;
  circle.y += circle.vy;
	if (circle.x > 100)
		circle.x = 95;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.y = 400;
  }
  
}

//canvas size
const fieldWidth = 500;
const fieldHeight = 500;

//array of particles (dots)
let particles = [];
//value of current digit
let currentDigit = digits.zero;

function setup() {
	//create canvas
  	createCanvas(fieldWidth, fieldHeight);

   		for (var i = 0; i < currentDigit.length; i++) {
   			let particle = new Particle(currentDigit[i][0]+fieldWidth/2.5, currentDigit[i][1]+fieldHeight/1.5);
			particles.push(particle);
	}
}

function draw() {
	//show background
	background(0);
	//update speed, position and show each dot
	for (var i = 0; i < particles.length; i++) {
	particles[i].move();
	particles[i].update();
	particles[i].show();
	}
}

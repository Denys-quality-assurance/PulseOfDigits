//canvas size
const fieldWidth = 500;
const fieldHeight = 500;

//array of particles (dots)
let particles = [];

function setup() {
	//create canvas
  	createCanvas(fieldWidth, fieldHeight);


   		for (var i = 0; i < digits.zero.length; i++) {
   			let particle = new Particle(digits.zero[i][0]+fieldWidth/2.5, digits.zero[i][1]+fieldHeight/1.5);
			particles.push(particle);
	}
}

function draw() {
	//show background
	background(0);
	//show each dot
	for (var i = 0; i < particles.length; i++) {
	particles[i].show();
	}
}

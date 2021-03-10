//canvas size
const fieldWidth = 500;
const fieldHeight = 500;
//Centre of the Canvas
//let canvasCentre = createVector(width/2,height/2);

//array of particles (dots)
let particles = [];
//value of current digit
let currentDigit = digits.eight;


//is this time for pulse?
let timeToPulse = false;

//time for pulse 
function pulseOn () {
		timeToPulse = true;
	}

//not time for pulse 
function pulseOff () {
		timeToPulse = false;
	}


//set time interval for pusle
function timerToPulse () {
	setTimeout(pulseOn, 0);
	setTimeout(pulseOff, 15);
	setTimeout(pulseOn, 200);
	setTimeout(pulseOff, 215);		
	setTimeout(timerToPulse, 3000);				
}





function setup() {
	//create canvas
  	createCanvas(fieldWidth, fieldHeight);
  	//create dots for the digit contours
   	for (var i = 0; i < currentDigit.length; i++) {
   		let particle = new Particle(currentDigit[i][0]+fieldWidth/2.5, currentDigit[i][1]+fieldHeight/1.5);
		particles.push(particle);
	}

	//pulse started
	setTimeout(timerToPulse, 2000);
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



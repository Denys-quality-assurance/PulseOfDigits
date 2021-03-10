//canvas size
const fieldWidth = 500;
const fieldHeight = 500;

//array of particles (dots)
let particles = [];
//value of current digit
let currentDigit = digits.one;


//is this time for pulse?
let timeToPulse = false;

//time for pulse 
function pulseOn () {
		timeToPulse = true;
		setTimeout(pulseOff, 15);
	}

//not time for pulse 
function pulseOff () {
		timeToPulse = false;
	}


//set time interval for pusle
function timerToPulse () {
	setTimeout(pulseOn, 0);
	setTimeout(pulseOn, 200);
	setTimeout(timerToPulse, 3000);				
}





function setup() {
	//create canvas
  	createCanvas(fieldWidth, fieldHeight);
	//left border of digit contours
	let minX = currentDigit[0][0];
	//right border of digit contours
	let maxX = currentDigit[0][0];
	//top border of digit contours
	let minY = currentDigit[0][1];
	//bottom border of digit contours
	let maxY = currentDigit[0][1];
  	//find the left and right borders of digit contours
  	for (var i = 0; i < currentDigit.length; i++) {
  		if(currentDigit[i][0] < minX) {
  			minX = currentDigit[i][0];
  		} else if (currentDigit[i][0] > maxX) {
  			maxX = currentDigit[i][0];
  		};
  		if(currentDigit[i][1] < minY) {
  			minY = currentDigit[i][1];
  		} else if (currentDigit[i][1] > maxY) {
  			maxY = currentDigit[i][1];
  		};
  	}
	//center correction
	let centerCorrectionX = width/2 - (minX+maxX)/2;
	let centerCorrectionY = height/2 - (minY+maxY)/2;	

  	//create dots for the digit contours
   	for (var i = 0; i < currentDigit.length; i++) {
   		let particle = new Particle(currentDigit[i][0]+centerCorrectionX, currentDigit[i][1]+centerCorrectionY);
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



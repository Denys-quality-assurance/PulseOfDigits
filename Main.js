//canvas size
const fieldWidth = window.screen.width;
const fieldHeight = window.screen.height;

//array of particles (dots)
let particles = [];
//coordinates of current digit contours
let currentDigitCoord = digits.nine;


//is this time for pulse?
let timeToPulse = false;


function setup() {
	//create canvas
  	createCanvas(fieldWidth, fieldHeight);

	//pulse started
	setTimeout(digits.timerToPulse, 2000);
	
	//make contour for the current digit
	digits.digitContouring();
}

function draw() {
	//show background
	background(0);
	//change the digit if mause is close to the center
	digits.digitChange();
	//update speed, position and show each dot
	for (var i = 0; i < particles.length; i++) {
	particles[i].move();
	particles[i].update();
	particles[i].show();
	}
}
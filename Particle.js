class Particle {
	constructor(x, y) {
	//Particle properties
	//Initial position of the particle	
	this.pos = createVector(x, y);
	//Size of the particle
	this.size = 7;
	}

	//draw the particle
	show() {
		stroke(225);
		strokeWeight(this.size);
		point(this.pos.x,this.pos.y);
	}
}
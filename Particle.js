class Particle {
	constructor(x, y) {
	//Particle properties
	//Size of the particle
	this.size = 7;
	//Initial position of particle	
	this.pos = createVector(random(width), random(height));
	//Target position of particle
	this.target = createVector(x,y);
	//Current Speed of particle
	this.currentSpeed = p5.Vector.random2D();
	//Max Speed of particle
	this.maxSpeed = 10;
	//Acceleration
	this.acc = createVector();
	//Min Distance (radius)
	this.minDistance = 100;
	//Max Force attached to a particle
	this.maxForce = 1;
	}

	//update the Acceleration, Speed and Position of the Particle
	update() {
		this.currentSpeed.add(this.acc);		
		this.pos.add(this.currentSpeed);
		//reset acceleration value until next computation 
		this.acc.mult(0);
	}

	//determine the corrective force depending on the distance to the Target
	arrive(target) {
		//subtracts two vectors: find the difference between the Current and Target Position of the Particle 
		let desired = p5.Vector.sub(target, this.pos);
		//find the magnitude: find the distance to the Target
		let distance = desired.mag();
		//set the max Speed
		let speed = this.maxSpeed
		//the closer to the target, the lower the speed 
		if (distance < this.minDistance) {
			speed = map(distance, 0, this.minDistance, 0, this.maxSpeed)
		}  
		desired.setMag(speed);
		//subtracts two vectors: find the difference between the Current and Target Speed of the Particle 		
		let steer = p5.Vector.sub(desired, this.currentSpeed);
		//limit the magnitude of the Steer vector
		steer.limit(this.maxForce);

		return steer;
	}

	//move the Particle to the Target: determine the Acceleration depending on the corrective force 
	move() {
		//fing the corrective force
		let arrive = this.arrive(this.target);
		//change the Acceleration of the Particle
		this.applyForce(arrive);
	}

	//change the Acceleration of the Particle
	applyForce(force) {
		this.acc.add(force);
	}	

	//draw the particle
	show() {
		stroke(225);
		strokeWeight(this.size);
		point(this.pos.x,this.pos.y);
	}
}
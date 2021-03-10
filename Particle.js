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
	//Strengthening the repulsion force
	this.repulsionBoost = 10;
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

	mousePosition() {
		let mouse = createVector(mouseX,mouseY);
		return mouse;
	}

	//determine the repulsion force depending on the distance from the Mouse
	repulsion(target) {
		//subtracts two vectors: find the difference between the Current Position of the Particle and Mouse Position
		let desired = p5.Vector.sub(target, this.pos);
		//find the magnitude: find the distance to the Mouse
		let distance = desired.mag();
		//push away a particle close to the mouse 
		if (distance < this.minDistance) {
			//set the max Speed
			desired.setMag(this.maxSpeed);
			//reverse direction 
			desired.mult(-1);
			//subtracts two vectors: find the difference between the Current and Target Speed of the Particle 
			let steer = p5.Vector.sub(desired, this.currentSpeed);
			//limit the magnitude of the Steer vector
			steer.limit(this.maxForce);

			return steer;
		}  else {
			return createVector(0,0);
		}
	}

	//move the Particle to the Target: determine the Acceleration depending on the forces
	move() {
		//find the corrective force
		let correctiveForce = this.arrive(this.target);
		//change the Acceleration of the Particle by corrective force
		this.applyForce(correctiveForce);
		//find the repulsion force
		let repulsionForce = this.repulsion(this.mousePosition());
		//strengthening the repulsion force 
		repulsionForce.mult(this.repulsionBoost);
		//change the Acceleration of the Particle by repulsion force
		this.applyForce(repulsionForce);

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
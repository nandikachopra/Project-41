class Drops{
constructor(x,y){
	var options = {
		'friction':0.001,
		restitution:0.1
	}
	this.body = Bodies.circle(x,y,5,options);
	this.radius=5;
	World.add(world,this.body);
}

update(){
	if(this.body.position.y > height){
		Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
	}
}
display(){
	fill("Blue");
	ellipseMode(CENTER);
	ellipse(this.body.position.x,this.body.position.y,5,5);
}
}

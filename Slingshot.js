class Slingshot{
    constructor(bodyA,pointB) {
        var options={
            'bodyA': bodyA,
            'pointB': pointB,
            'length': 40,
            'stiffness': 0.04
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling); 
    }
    display() {
        push();
        strokeWeight(5);
        stroke(255);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        //line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        //line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        pop();
        
    }
}
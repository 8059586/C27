class Bob{
    constructor(x, y, radius){
        var properties = {
            isStatic: false,
            friction:0.1,
            density:0.1,
            restitution: 1
        }

        this.body = Bodies.circle(x, y, radius, properties);
        this.diameter = radius*2;
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    
    }

    display(){
        var position = this.body.position;
        fill(255, 0, 255);

        ellipse(position.x, position.y, this.diameter, this.diameter);
    }
}
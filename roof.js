class Roof{
    constructor(x, y, width, height) {
        var properties = {
            isStatic: true, 
            friction:0.5, 
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, properties);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        var ground1 = createSprite(pos.x, pos.y, this.width, this.height);
        ground1.shapeColor = "Brown";
    }
}
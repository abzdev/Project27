class Roof {
    constructor() {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: true
        }
        this.roof = Bodies.rectangle(width/2,200,500,50,options);
        World.add(world,this.roof);
    }
    display() {
        rect(this.roof.position.x,this.roof.position.y,500,50);
    }
}
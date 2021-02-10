class Bob {
    constructor(x,y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.bob = Bodies.circle(x, y, 40, options);
        World.add(world,this.bob);
    }
    display() {
        var pos = this.bob.position;
        push();
        fill(255);
        circle(pos.x,pos.y,40);
        pop();
    }
}
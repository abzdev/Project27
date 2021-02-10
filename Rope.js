class Rope {
    constructor(bodyA,bodyB,xOffset,yOffset) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: xOffset, y: yOffset}
        }
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        stroke(255);
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        strokeWeight(4);

        var offsetPointX = posB.x + this.xOffset;
        var offsetPointY = posB.y + this.yOffset;

        line(posA.x,posA.y,posB.x,posB.y);
    }
}
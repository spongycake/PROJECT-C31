class Particle {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            density : 1.8,
            restitution : 0.5
        }
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.x = x;
        this.y = y;
        
        World.add(world,this.body);
    }display(){
        
        var Pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(Pos.x, Pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
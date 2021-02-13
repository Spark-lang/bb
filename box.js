class Box{
    constructor(x,y,w,h){
        var op={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,w,h,op)
        this.width = w;
        this.height = h;
        World.add(wo,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        console.log(pos)
        rectMode(CENTER);
        strokeWeight(5)
        stroke("green")
        fill("white") 
        rect(0,0,this.width,this.height);
        pop();
    }
};
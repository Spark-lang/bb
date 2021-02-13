class Ground{
    constructor(x,y,w,h){
        var op={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,op)
        this.width = w;
        this.height = h;
        World.add(wo,this.body);
    }
    display(){
        var pos = this.body.position;
        console.log(pos)
        rectMode(CENTER);
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height);
    }
};
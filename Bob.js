class Bob
{
    constructor(x,y,color)
    {
        var options={
           
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
     }
       
        this.body=Bodies.rectangle(x,y,40,40,options)
        this.x=x;
        this.y=y;
        this.color=color

        World.add(world,this.body);
    }
    display()
    {
     var angle=this.body.angle;
     var pos=this.body.position
     
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER)
     stroke(199)
     fill(0)
     ellipse(0,0,50,50)
     pop();
    }
};
class Box 
{
constructor(x,y,width,height)
 {
    var options = 
    {
      isStatic : true
    }

    this.bodies = Bodies.rectangle(x,y,width,height,options); 
     this.width=width;
     this.height=height;
  
    World.add(world , this.bodies);
 }
   display()
   { var pos =this.bodies.position;
     var angle = this.bodies.angle;
        push();
        rotate (angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);
        pop();
   } 
         
};
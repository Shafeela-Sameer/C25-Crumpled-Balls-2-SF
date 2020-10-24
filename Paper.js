class Paper{
    
    constructor(x,y,radius)
    {
         var options = { 
             isStatic:false, 
            restituition:0.1, 
            friction:0.5, 
            density:1.2 
        } 
         
         this.radius = radius;
         this.x=x;
         this.y=y; 
         this.image=loadImage("paper.png");
         this.body = Bodies.circle(x,y,(this.radius-20)/2, options); 
         World.add(world, this.body);
    } 
         
         display(){ 
             var pos =this.body.position; 
             push()
             translate(pos.x, pos.y);
            imageMode(CENTER); 
            fill(255,0,255); 
           //ellipse(0,0,this.radius,this.radius);
           image(this.image,0,0,this.radius,this.radius);
            pop()
         } 
}
class Dustbin{

constructor(x,y,width,height){

var options= {
    isStatic:true
}


this.bodyleft=Bodies.rectangle(x,y,width,height,options);
this.bodyright=Bodies.rectangle(x,y,width,height,options);
this.image=loadImage("dustbingreen.png");
this.bodyBottom=Bodies.rectangle(x,y,width,height,options);
this.width =width;
this.height=height;

World.add(world,this.bodyleft);
World.add(world,this.bodyright);
World.add(world,this.bodyBottom);

}

display(){

var posleft=this.bodyleft.position;
var posright=this.bodyright.position;
var posbottom=this.bodyBottom.position;
push();
rectMode(CENTER);
fill("brown");
////rect(posleft.x,posleft.y,this.width,this.height);
pop();


push();
rectMode(CENTER);
fill("brown");
//rect(posright.x,posright.y,this.width,this.height);
pop();

push();
imageMode(CENTER);
image(this.image, posbottom.x,posbottom.y-50,this.width,this.height+100);
pop();
}


}
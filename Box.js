class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:0.1
           
        }
        this.Visibility=255;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
       World.add(world,this.body);
    }
    display(){
      
        if(this.body.speed<8.4){
            var angle = this.body.angle;
        var pos= this.body.position;
        
           push();
           translate(pos.x,pos.y);
           rotate(angle);
           rectMode(CENTER);
           fill("red")
           rect(0,0,this.width,this.height);
           pop();
       }
       else{
           World.remove(world,this.body);
           push();
           this.Visibility=this.Visibility-5;

           pop();
       }
   }
}


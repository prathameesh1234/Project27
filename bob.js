class bob {
    constructor(x,y,r){
        var options = {
        isStatic:false,
            'restitution':1,
            'friction':0.1
        }
    
        this.body = Bodies.circle(x, y,r, options);
       this.radius = r;
        
        World.add(world, this.body);
            
    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
     translate(pos.x, pos.y);
     rotate(angle);
       ellipseMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
    
        pop();
    }
    
    };
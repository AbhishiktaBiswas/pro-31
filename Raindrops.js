class Raindrops{
    constructor(x,y,r){
        var options={
            isStatic:false ,
            restitution:0.2,
            friction:0.1,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
    
        push();
        
        if (this.raindrops.position.y>height){
            Matter.Body.setposition(this.raindrops,{x:random(0,400),y:random(0,400)})
        }

        var maxDrops=100;
        for(var i=0;i<maxDrops;i++){
            maxDrops.push(new createDrop(random(0,400),random(0,400)));
        }
        pop();

    }
}
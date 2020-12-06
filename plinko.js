class Plinko{
    constructor(x,y,r){
        var option ={
            isStatic:true

        }
        this.body = Bodies.circle(x,y,r,option);
    this.radius = r;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position   

    }
}
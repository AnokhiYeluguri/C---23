class Box {
    constructor(x,y,width,height){
        var boxoptions={
            restitution:1.0
           }
          this.boxbody = Bodies.rectangle(x,y,width,height,boxoptions)
          World.add(world,this.boxbody)
          this.width = width
          this.height = height
    }
    display(){
        var pos = this.boxbody.position
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
        
    }
}
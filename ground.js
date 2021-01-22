class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y, this.width);
    }
  };

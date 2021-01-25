class Plinko {
    constructor(x,y,width) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(CENTER);
      ellipse( 0, 0, this.width, this.height);
      pop();
    }
  };

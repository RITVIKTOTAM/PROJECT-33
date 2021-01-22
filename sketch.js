const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16;
 var ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27,ball28,ball29,ball30,ball31;
 var ball32,ball33,ball34,ball35,ball36,ball37,ball38,bal39,ball40,ball41,ball42,ball43,ball44,ball45,ball46,ball47,ball48,ball49,ball50,ball51,ball52,ball53,ball54,ball55;
 var paddle1,paddle2,paddle3,paddle4,paddle5,paddle6,paddle7,paddle8,paddle9,paddle10,paddle11;
 var plinko1,plinko2,plinko3,plinko4,plinko5;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
    
    ball1 = new Ground(50,50,10);
    ball2 = new Ground(70,50,10);
    ball3 = new Ground(90,50,10);
    ball4 = new Ground(110,50,10);
    ball5 = new Ground(130,50,10);
    ball6 = new Ground(150,50,10);
    ball7 = new Ground(170,50,10);
    ball8 = new Ground(190,50,10);
    ball9 = new Ground(210,50,10);
    ball10 = new Ground(230,50,10);
    ball11 = new Ground(250,50,10);
    ball12 = new Ground(270,50,10);
    ball13 = new Ground(290,50,10);
    ball14 = new Ground(30,50,10);
    ball15 = new Ground(310,50,10);
    ball16 = new Ground(330,50,10);
    ball17 = new Ground(350,50,10);
    ball18 = new Ground(370,50,10);
    ball19 = new Ground(40,100,10);
    ball20 = new Ground(60,100,10);
    ball21 = new Ground(60,100,10);
    ball22 = new Ground(80,100,10);
    ball23 = new Ground(100,100,10);
    ball24 = new Ground(120,100,10);
    ball25 = new Ground(140,100,10);
    ball26 = new Ground(160,100,10);
    ball27 = new Ground(180,100,10);
    ball28 = new Ground(200,100,10);
    ball29 = new Ground(220,100,10);
    ball30 = new Ground(240,100,10);
    ball31 = new Ground(260,100,10);
    ball32 = new Ground(280,100,10);
    ball33 = new Ground(300,100,10);
    ball34 = new Ground(320,100,10);
    ball35 = new Ground(340,100,10);
    ball36 = new Ground(360,100,10);
    ball37 = new Ground(380,100,10);
    ball38 = new Ground(50,150,10);
    ball39 = new Ground(70,150,10);
    ball40 = new Ground(90,150,10);
    ball41 = new Ground(110,150,10);
    ball42 = new Ground(130,150,10);
    ball43 = new Ground(150,150,10);
    ball44 = new Ground(170,150,10);
    ball45 = new Ground(190,150,10);
    ball46 = new Ground(210,150,10);
    ball47 = new Ground(230,150,10);
    ball48 = new Ground(250,150,10);
    ball49 = new Ground(270,150,10);
    ball50 = new Ground(290,150,10);
    ball51 = new Ground(30,150,10);
    ball52 = new Ground(310,150,10);
    ball53 = new Ground(330,150,10);
    ball54 = new Ground(350,150,10);
    ball55 = new Ground(370,150,10);
    paddle1 = new Particle(0,320,5,180);
    paddle3 = new Particle(50,320,5,180);
    paddle4 = new Particle(100,320,5,180);
    paddle5 = new Particle(150,320,5,180);
    paddle6 = new Particle(200,320,5,180);
    paddle7 = new Particle(250,320,5,180);
    paddle8 = new Particle(300,320,5,180);
    paddle9 = new Particle(350,320,5,180);
    paddle10 = new Particle(400,320,5,180);
    paddle2 = new Particle(200,400,400,10);
    plinko1 = new Plinko(160,20,10);
    plinko2 = new Plinko(210,20,10);
    plinko3 = new Plinko(260,20,10);
    plinko4 = new Plinko(310,20,10);
    plinko5 = new Plinko(360,20,10);
    
}
 


function draw() {
  background("black");
 

  text("100",15,250);
  text("200",65,250);
  
  text("300",115,250);
  
  text("400",165,250);
  
  text("500",215,250);
  
  text("600",265,250);
  
  text("700",315,250);
  
  text("800",365,250);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  ball13.display();
  ball14.display();
  ball15.display();
  ball16.display();
  ball17.display();
  ball18.display();
  ball19.display();
  ball21.display();
  ball22.display();
  ball23.display();
  ball24.display();
  ball25.display();
  ball26.display();
  ball27.display();
  ball28.display();
  ball29.display();
  ball30.display();
  ball31.display();
  ball32.display();
  ball33.display();
  ball34.display();
  ball35.display();
  ball36.display();
  ball37.display();
  ball38.display();
  ball39.display();
  ball40.display();
  ball41.display();
  ball42.display();
  ball43.display();
  ball44.display();
  ball45.display();
  ball46.display();
  ball47.display();
  ball48.display();
  ball49.display();
  ball50.display();
  ball51.display();
  ball52.display();
  ball53.display();
  ball54.display();
  ball55.display();
  paddle2.display();
  paddle1.display();
  paddle3.display();
  paddle4.display();
  paddle5.display();
  paddle6.display();
  paddle7.display();
  paddle8.display();
  paddle9.display();
  paddle10.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  

}

function keyPressed(){
  if  (keyDown(UP_ARROW)){
    Matter.Body.applyForce(plinko1.body,plinko1.body.position,{x:10,y:10});
  }
}
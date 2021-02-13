const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var en;
function setup() {
  var canvas = createCanvas(1200,400);
  en = Engine.create(); //create engine
  wo = en.world;        //create world in en
  ground1 = new Ground(600,height,1200,20)
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  
  pig1 = new Pig(810,350)
  log1 = new Log(810,260,300,PI*85.99)
  
 
}

function draw() {
  background("lightblue");
  Engine.update(en);
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
}

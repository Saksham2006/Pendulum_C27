const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, slingshot, platform;

function setup(){
    var canvas = createCanvas(innerWidth,innerHeight);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600, 100, 700, 20);
    ball= new Ball(500,300,100);
    slingshot = new Slingshot(ball.body,{x: 600, y: 100});

}

function draw(){
    background(25);
    Engine.update(engine);
    ball.display();
    slingshot.display();
    platform.display();
    if(mouseIsPressed) {
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
    }
}

/*function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

function mouseReleased() {
  Matter.Body.setPosition(ball.body,{x: 500,y: 300});
}
*/

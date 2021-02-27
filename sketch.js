const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(450,900);
    engine = Engine.create();
    world = engine.world;

    raindrops = new Raindrops(100,50,2);

}

function draw(){
    background(0);
    Engine.update(engine);

    raindrops.display();
    
}   


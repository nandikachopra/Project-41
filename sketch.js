const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var umbrella;
var drops=[];
var maxDrops=100;
var thunderCreatedframe=0;

function preload(){ 
thunder1=loadImage("images/thunderbolt/thunderbolt1.png");
thunder2=loadImage("images/thunderbolt/thunderbolt2.png");
thunder3=loadImage("images/thunderbolt/thunderbolt3.png");
thunder4=loadImage("images/thunderbolt/thunderbolt4.png");

}

function setup(){
   canvas = createCanvas(800,800);
   engine=Engine.create();
   world=engine.world;
   umbrella = new Umbrella(200,500);
   
   for(var i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400), random(0,400)));
   }
}

function draw(){
    background(0);
    Engine.update(engine);
    
    umbrella.display();
    for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
    }

    /*thunder=createSprite(random(10,370),random(10,30));
    if (frameCount%80===0){
    thunderCreatedframe=frameCount;
    
    rand=Math.round(random(1,4));
    switch(rand){
     case 1: thunder.addImage(thunder1);
            break;
     case 2: thunder.addImage(thunder2);
            break;
     case 3: thunder.addImage(thunder3);
            break;
     case 4: thunder.addImage(thunder4);
        break;
	}
	}
    if(thunderCreatedframe+10===frameCount && thunder){
     thunder.destroy();
	}*/
    drawSprites();
}   


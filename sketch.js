const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//debugger;
//var a;
//var circles=[];
var stand, polygon;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15, block16;

function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup() {
    createCanvas(800,800);
    stroke(255);

    engine = Engine.create();
    world = engine.world;
    
    //camera=new Camera(width/2,height/2,0.5);
    //camera.on();
    //a=height;
    //circles.push(width/2);

    /*Stand*/
    stand = new Ground(395,310,200,40);
    /*Polygon thingo*/
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingShot = new SlingShot(polygon, {x:100, y:200});
    /*Level one*/
    block1 = new Block(300, 275, 30, 40); 
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 270, 30, 40);
    /*Level two*/
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    /*Level three*//* DO NOT MIX THE GOOPS hehehe */
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    /*Top*/
    block16 = new Block(390, 155, 30, 40);
}

function draw() {
    //camera.zoom=camera.zoom+1
    background(0);
    
    //a=a-1;
    //camera.zoom=camera.zoom+0.01
    //camera.position={x:width/2,y:a}



    /*for (i=0;i<circles.length;i++)
    {
        circle(circles[i], height/2,20)
    }
    if(camera.position.x%width===0)
    {
        circles.push(camera.position.x+width/2)
    }*/

    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingShot.display();
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
    // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
    drawSprites();
    Engine.update(engine);
}

function mouseDragged() {
    polygon.position.x = mouseX;
    polygon.position.y = mouseY;
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    /*if(keyCode === RIGHT_ARROW)
    {
        if(keyIsDown(RIGHT_ARROW))
        {
            camera.position.x=camera.position.x+10;
        }
    }*/
    if(keyCode === 32) {
        slingShot.attach(polygon);
    }
} 

/*
function DO_NOT_MIX_THE_GOOPS(integer) {
    if(integer===2) {
        rect(0, 0, 800, 800);
        fill(0);
    }
}
*/
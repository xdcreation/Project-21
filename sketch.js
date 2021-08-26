var canvas;
var music;
var surface1,surface2,surface3,surface4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100,580,190,20)
    surface1.shapeColor="blue";
    surface2 = createSprite(310,580,190,20)
    surface2.shapeColor="orange";
    surface3 = createSprite(510,580,190,20)
    surface3.shapeColor="red";
    surface4 = createSprite(710,580,190,20)
    surface4.shapeColor="green";
    box = createSprite(400,300,40,40)
    box.shapeColor="yellow";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges)
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "blue"
    music.play()
}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "orange"
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "red"
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "green"
}
if(mousePressedOver(box)){
    box.velocityX = 5;
    box.velocityY = 11;
}
drawSprites();

    //add condition to check if box touching surface and make it box
}

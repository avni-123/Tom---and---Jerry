var ground, groundImg;

var jerry, jerryImg;

var tom, tomImg;

function preload() {
    //load the images here

    groundImg = loadImage("images / garden.png");

    jerryImg = loadAnimation("images / jerryOne.png", "images / jerryTwo.png", "images / jerryThree.png", "images / jerryFour.png");

    tomImg = loadAnimation("images / tomOne.png", "images / tomTwo.png", "images / tomThree.png", "images / tomFour");

}

function setup(){
    createCanvas(680,680);
    
    ground = createSprite(340, 340, 10, 50);
    ground.addImage("groundImg", groundImg);
    ground.scale = 2;

    jerry = createSprite(200, 300, 50, 100);
    jerry.addAnimation("jerryImg", jerryImg);
    jerry.scale = 0.5;
    jerry.debug = true;

    tom = createSprite(100, 400, 20, 40);
    tom.addAnimation("tomImg", tomImg);
    tom.scale = 0.6;
    tom.debug = true;

}

function draw() {

    background(rgb(30, 100, 220));
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

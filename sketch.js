
var control = 0;
var gameState = 0;
function preload()
{
	pLImg = loadImage("leftplayer.png");
	pRImg = loadImage("rightplayer.png");
	soccerImg = loadImage("soccer.png");
	bg = loadImage("bgsoccer.png");
}

function setup() {
	createCanvas(1200, 600);
	edges = createEdgeSprites();
	p1 = createSprite(120,120,20,20);
	p1.addImage(pLImg);
	p1.scale = 0.3;
	p2 = createSprite(300,430,20,20);
	p2.addImage(pLImg);
	p2.scale = 0.3;
	p3 = createSprite(870,140,20,20);
	p3.addImage(pRImg);
	p3.scale = 0.3;
	p4 = createSprite(830,450,20,20);
	p4.addImage(pRImg);
	p4.scale = 0.3;
	ball = createSprite(600,300,30,30);
	ball.scale = 0.1;
	ball.addImage(soccerImg);
	p1.scale = 0.3;
	ball.shapeColor = "white"
/*	selectLeftorRight = Math.round(random(1,2));
	if(selectLeftorRight ==1){
	ball.velocityX = 3;
	ball.velocityY = 3;
	}
	else{
		ball.velocityX =-3;
	ball.velocityY = -3;
	} */
//	control = 1;
  
}


function draw() {
	if(gameState ==0){
		background("black");
		textSize (40);
		text ("press SPACE to Start",400,300);
		if(keyDown("SPACE")){
			gameState = 1;
		}
	}
	else if (gameState==1){
	background("white");
 background(bg);
 textSize(20);
 fill ("black");
 text ("x " +mouseX,1050,50 );
 text ("y " +mouseY,1150,50 );

 text ("press 1", p1.x,p1.y-50);
 text ("press 2", p2.x,p2.y-50);
 text ("press 3", p3.x,p3.y-50);
 text ("press 4", p4.x,p4.y-50);
 if (keyDown("1")&&keyDown(LEFT_ARROW)){
	p1.x= p1.x -10
 } 
 else if (keyDown("1")&&keyDown(RIGHT_ARROW)){
	p1.x= p1.x +10
 } 
 if (keyDown("1")&&keyDown(UP_ARROW)){
	p1.y= p1.y -10
 } 
 else if (keyDown("1")&&keyDown(DOWN_ARROW)){
	p1.y= p1.y +10
 } 
 if (keyDown("2")&&keyDown(LEFT_ARROW)){
	p2.x= p2.x -10
 } 
 else if (keyDown("2")&&keyDown(RIGHT_ARROW)){
	p2.x= p2.x +10
 }  
 if (keyDown("2")&&keyDown(UP_ARROW)){
	p2.y= p2.y -10
 } 
 else if (keyDown("2")&&keyDown(DOWN_ARROW)){
	p2.y= p2.y +10
 } 
 if (keyDown("3")&&keyDown(LEFT_ARROW)){
	p3.x= p3.x -10
 } 
 else if (keyDown("3")&&keyDown(RIGHT_ARROW)){
	p3.x= p3.x +10
 } 
 if (keyDown("3")&&keyDown(UP_ARROW)){
	p3.y= p3.y -10
 } 
 else if (keyDown("3")&&keyDown(DOWN_ARROW)){
	p3.y= p3.y +10
 } 
 if (keyDown("4")&&keyDown(LEFT_ARROW)){
	p4.x= p4.x -10
 } 
 else if (keyDown("4")&&keyDown(RIGHT_ARROW)){
	p4.x= p4.x +10
 } 
 if (keyDown("4")&&keyDown(UP_ARROW)){
	p4.y= p4.y -10
 } 
 else if (keyDown("4")&&keyDown(DOWN_ARROW)){
	p4.y= p4.y +10
 } 
 for (var i = 0; i < 600; i+=20) {
	line(600,i,600,i+10);
 }
 /*if(ball.isTouching(topEdge)){
	ball.bounceOff(edges);
	ball.velocityX = 5;
	ball.velocityY = 5;
	ball.bounceOff(topEdge);
 } */

 ball.bounceOff(edges);
 p1.bounceOff(edges);
 p2.bounceOff(edges);
 p3.bounceOff(edges);
 p4.bounceOff(edges);

 if(p1.isTouching(ball)){
ball.setVelocity(5,6);
 }
 p1.bounceOff(ball);
 p2.bounceOff(ball);
 p3.bounceOff(ball);
 p4.bounceOff(ball);
 p1.setVelocity(0, 0);
 p2.setVelocity(0, 0);
 p3.setVelocity(0, 0);
 p4.setVelocity(0, 0);
 
  drawSprites();
 
}
}



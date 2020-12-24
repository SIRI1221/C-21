var canvas;
var fixedRect,movingRect;

function setup()
{
canvas=createCanvas(600,600);

fixedRect=createSprite(300,300,50,50);
fixedRect.shapeColor="blue";
fixedRect.debug=true;

movingRect=createSprite(400,300,50,50);
movingRect.shapeColor="blue";
movingRect.debug=true;

gameObject1=createSprite(100,200,50,50);
gameObject2=createSprite(200,200,50,50);
gameObject3=createSprite(300,200,50,50);
gameObject4=createSprite(400,200,50,50);

gameObject1.shapeColor="red";
gameObject2.shapeColor="red";
gameObject3.shapeColor="red";
gameObject4.shapeColor="red";
}

function draw()
{
background("gold");
movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(gameObject1,movingRect))
{
  gameObject1.shapeColor="green";
  movingRect.shapeColor="green";
}
else
{
  gameObject1.shapeColor="blue";
  movingRect.shapeColor="blue";
}

drawSprites();
}

function isTouching(object1,object2)
{
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.width/2+object2.width/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}


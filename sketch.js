var database,position;
var ball, ballImg;
var backImg;

function preload(){
ballImg = loadImage("Hot Air Ballon-04.png")
backImg = loadImage("Hot Air Ballon-01.png ")


}





function setup() {
  createCanvas(1200,600);
  database = firebase.database()
 ball =  createSprite(400, 200);
 ball.addImage(ballImg)
 ball.scale =0.4
 var ballPos = database.ref('ball/position')
 ballPos.on("value",readPosition,showError)
}

function draw() {
  background(backImg);  
  if(keyDown(LEFT_ARROW)){

    update(-4,0)
  }

  if(keyDown(RIGHT_ARROW)){

    
    update(4,0)
      }

  if(keyDown(UP_ARROW)){

     update(0,-4)
          }

   if(keyDown(DOWN_ARROW)){

      update(0,4)
              }
  drawSprites();
}



function readPosition(data){

  position = data.val()
  ball.x = position.x
  ball.y = position.y
}


function update(x,y)
{
  database.ref("ball/position").set({
    'x': position.x + x,
    'y': position.y + y
  });
  
}


function showError(){

  console.log(error)
}
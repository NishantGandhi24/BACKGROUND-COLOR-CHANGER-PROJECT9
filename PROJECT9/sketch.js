
function setup() {
  createCanvas(700,700,);
  
}

function draw() 
{
  background("lightblue");

  if (keyIsDown(DOWN_ARROW)){
    background('red');
  }
  if (keyIsDown(UP_ARROW)) {
     background('yellow');
  }
  if (keyIsDown(RIGHT_ARROW)){
    background('orange')
  }
  if (keyIsDown(LEFT_ARROW)){
    background('purple');
  }
}





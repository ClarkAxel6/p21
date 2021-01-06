var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 80, 20);
  bullet.shapeColor = 'white';
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background('black');  

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX - 0;
    bullet.x = wall.x - 30;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    console.log(damage);

    if(damage > 10){
      wall.shapeColor = 'red';
    }

    else if (damage < 10){
      wall.shapeColor = 'green';
    }
  }
  drawSprites();
}
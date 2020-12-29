var car1, car2, car3, car4, car5, wall;
var line1, lin2, lin3, line4;
var speed1, weight1, speed2, weight3, speed3, weight3, speed4, weight4, speed5, weight5;
var def1, def2, def3, def4, def5;

function setup() {
  createCanvas(1200, 400);

  car1 = createSprite(100, 30, 40, 20);
  car1.shapeColor = "lightblue";
  car2 = createSprite(100, 120, 40, 20);
  car2.shapeColor = "lightblue";
  car3 = createSprite(100, 205, 40, 20);
  car3.shapeColor = "lightblue";
  car4 = createSprite(100, 285, 40, 20);
  car4.shapeColor = "lightblue";
  car5 = createSprite(100, 370, 40, 20);
  car5.shapeColor = "lightblue";

  wall = createSprite(1100, 200, 10, 380);
  wall.shapeColor = "blue";

  line1 = createSprite(500, 75, 1200, 5);
  line1.shapeColor = "white";
  line2 = createSprite(500, 160, 1200, 5);
  line2.shapeColor = "white";
  line3 = createSprite(500, 245, 1200, 5);
  line3.shapeColor = "white";
  line4 = createSprite(500, 330, 1200, 5);
  line4.shapeColor = "white";

  speed1 = random(20, 40);
  weight1 = random(4000, 6000);
  speed2 = random(20, 40);
  weight2 = random(4000, 6000);
  speed3 = random(20, 40);
  weight3 = random(4000, 6000);
  speed4 = random(20, 40);
  weight4 = random(4000, 6000);
  speed5 = random(20, 40);
  weight5 = random(4000, 6000);

  def1 = 0;
  def2 = 0;
  def3 = 0;
  def4 = 0;
  def5 = 0;
}

function draw() {
  background(0);

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  car5.velocityX = speed5;

  if ((wall.width + car1.width) / 2 > wall.x - car1.x) {
    car1.velocityX = 0;
    def1 = 0.5 * speed1 * speed1 * weight1 / 22500;
    if (def1 < 100)
      car1.shapeColor = "green"
    if (def1 > 100 && def1 < 180)
      car1.shapeColor = "yellow"
    if (def1 > 180)
      car1.shapecolour = "red";
  }

  if ((wall.width + car2.width) / 2 > wall.x - car2.x) {
    car2.velocityX = 0;
    def2 = 0.5 * speed2 * speed2 * weight2 / 22500;

    if (def2 < 100)
      car2.shapeColor = "green"
    if (def2 > 100 && def1 < 180)
      car2.shapeColor = "yellow"
    if (def2 > 180)
      car2.shapecolour = "red";
  }

  if ((wall.width + car3.width) / 2 > wall.x - car3.x) {
    car3.velocityX = 0;
    def3 = 0.5 * speed3 * speed3 * weight3 / 22500;

    if (def3 < 100)
      car3.shapeColor = "green"
    if (def3 > 100 && def1 < 180)
      car3.shapeColor = "yellow"
    if (def3 > 180)
      car3.shapecolour = "red";
  }

  if ((wall.width + car4.width) / 2 > wall.x - car4.x) {
    car4.velocityX = 0;
    def4 = 0.5 * speed4 * speed4 * weight4 / 22500;

    if (def4 < 100)
      car4.shapeColor = "green"
    if (def4 > 100 && def1 < 180)
      car4.shapeColor = "yellow"
    if (def4 > 180)
      car4.shapecolour = "red";
  }

  if ((wall.width + car5.width) / 2 > wall.x - car5.x) {
    car5.velocityX = 0;
    def5 = 0.5 * speed5 * speed5 * weight5 / 22500;

    if (def5 < 100)
      car5.shapeColor = "green"
    if (def5 > 100 && def1 < 180)
      car5.shapeColor = "yellow"
    if (def5 > 180)
      car5.shapecolour = "red";
  }

  drawSprites();
}
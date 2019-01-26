var myImg;
var myImg2;
var myImg3;
var myImg4;
var myImg5;
var myImg6;

function preload() {
  myImage = loadImage("./library/sfondo.png");
  myImage2 = loadImage("./library/covermariposa.png");
  myImage3 = loadImage("./library/coverrana.png");
  myImage4 = loadImage("./library/coverarmadillo.png");
  myImage5 = loadImage("./library/coverbradipo.png");
  myImage6 = loadImage("./library/coversimio.png");
}

function setup () {
	createCanvas(3999, 2244);



}


function draw () {


	image(myImage, 0, 0, myImage.width, myImage.height);




//cover mariposa

image(myImage2, 548, 385, 250,250);

//cover rana

image(myImage3, 499, 1995, 200,200);

//cover armadillo

image(myImage4, 1975, 1780, 590, 590);

//cover bradipo

image(myImage5, 2130, -130, 350, 1360);

//cover simio

image(myImage6, 2420, 1200, 500, 500);


//texto inicio
	push()
	textFont('Rubik:300')
	fill(250)
	textAlign(CENTER)
	textSize(15)
	text('In the last year has increased the number \nof species extinted because of human acts. \nDeforestation of the Amazon, hunting \nand other actions are destroying diverse species. \nChoose the different tools and search in this jungle \nfive animals in danger and discover more about them.',width/2,height/2.5)
	pop()

//botón inicio
	  var distance = dist(mouseX, mouseY, width/2, height/1.5);

	  if(distance < 50)
	  {
	    isOverCircle = true;
	  } else {
	    isOverCircle = false;
	  }

	  ellipseMode(CENTER);
	  stroke(250);
	  strokeWeight(1);
	  if(isOverCircle == true)
	  {
	    fill(100);
	    cursor(HAND);
	  } else {
	    fill(200,120);
	    cursor(ARROW);
	  }
	  ellipse(width/2, height/1.5, 80,75);
		textSize(15)
		textFont('Rubik:300')
		text(CENTER)
		noStroke()
		fill(0)
		text('play',width/2.04, height/1.49)



}



//primer boton

function mousePressed(){
  if(isOverCircle == true)
  {
    backgroundColor = color(random(255), random(255), random(255));
  }
}

function windowResized() {
  resizeCanvas(3999, 2244);
}

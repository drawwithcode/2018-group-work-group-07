var myImg;

function preload() {
  myImage = loadImage("./library/sfondo.png");

}

function setup () {
	createCanvas(3999, 2244);



}


function draw () {
	image(myImage, 0, 0, myImage.width, myImage.height);
	translate(-2000, 1500);



//rectangulo
push()
fill(0)
stroke(250)
strokeWeight(1)
rectMode(CENTER)
rect(100,100,100,100)
pop()

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
  resizeCanvas(windowWidth, windowHeight);
}

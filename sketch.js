var myImg;
var myImg2;
var myImg3;
var myImg4;
var myImg5;
var myImg6;
var myImg7;
var myImg8;
var button;

var mySong;


function preload() {
  myImage = loadImage("./library/sfondo.png");
  myImage2 = loadImage("./library/covermariposa.png");
  myImage3 = loadImage("./library/coverrana.png");
  myImage4 = loadImage("./library/coverarmadillo.png");
  myImage5 = loadImage("./library/coverbradipo.png");
  myImage6 = loadImage("./library/coversimio.png");
  myImage7 = loadImage("./library/primera.png");
  myImage8 = loadImage("./library/exppng.png");

  mySong = loadSound("./library/backsounds.mp3");

  //button iconi
  button = createImg("./library/exppng.png");
  button.position(50, 50);
  button.size(50,50)
  button.mousePressed()
}

function setup () {

  createCanvas(windowWidth,windowHeight)
  background(myImage)

  mySong.play();
}


function draw () {

//image(myImage, 0, 0, myImage.width/3, myImage.height/3);



//cover mariposa

image(myImage2, 208, 125, 75,75);

//cover rana

image(myImage3, 200, 660, 50, 50);

//cover armadillo

image(myImage4, 735, 600, 160, 160);

//cover bradipo

image(myImage5, 767, -35, 125, 430);

//cover simio

image(myImage6, 855, 380, 190, 190);


//primera pagina

//image(myImage7, 0, 0, myImage.width/2.7, myImage.height/2.7);

//iconi

//image(myImage8, 50, 50, 50, 50);

//botone icono





//texto inicio
	// push()
	// textFont('Rubik:300')
	// fill(250)
	// textAlign(CENTER)
	// textSize(15)
	// text('In the last years has increased the number of species in danger or threatened because of human acts and it has been declared as a “global epidemic”. Scientists estimate that up to 200 species die every hour. The deforestation of the Amazon, hunting and other human actions are destroying diverse species. With this game you will discover some of the species that are in danger. Choose different tools and discover more about animals in danger in the Amazon.',width/2,height/2.5)
	// pop()


  //texto instrucciones
  // push()
	// textFont('Rubik:300')
	// fill(250)
	// textAlign(CENTER)
	// textSize(15)
	// text('',width/2,height/2.5)
	// pop()


//botón inicio
	  // var distance = dist(mouseX, mouseY, width/2, height/1.5);
    //
	  // if(distance < 50)
	  // {
	  //   isOverCircle = true;
	  // } else {
	  //   isOverCircle = false;
	  // }
    //
	  // ellipseMode(CENTER);
	  // stroke(250);
	  // strokeWeight(1);
	  // if(isOverCircle == true)
	  // {
	  //   fill(100);
	  //   cursor(HAND);
	  // } else {
	  //   fill(200,120);
	  //   cursor(ARROW);
	  // }
	  // ellipse(width/2, height/1.5, 80,75);
		// textSize(15)
		// textFont('Rubik:300')
		// text(CENTER)
		// noStroke()
		// fill(0)
		// text('play',width/2.04, height/1.49)



}



//primer boton

function mousePressed(){
  if(isOverCircle == true)
  {
    backgroundColor = color(random(255), random(255), random(255));
  }
}
//Button
// function clickFunction(){
//
//   background(myImage)
//
// }

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

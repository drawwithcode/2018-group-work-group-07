var myImg;
var myImg2;
var myImg3;
var myImg4;
var myImg5;
var myImg6;
var myImg7;
var mySong;

<<<<<<< HEAD
var button;


=======
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f
function preload() {
  myImage = loadImage("./library/sfondo.png");
  myImage2 = loadImage("./library/covermariposa.png");
  myImage3 = loadImage("./library/coverrana.png");
  myImage4 = loadImage("./library/coverarmadillo.png");
  myImage5 = loadImage("./library/coverbradipo.png");
  myImage6 = loadImage("./library/coversimio.png");
<<<<<<< HEAD
  myImage7 = loadImage("./library/primera2.png");
  mySong = loadSound("./library/backsounds.mp3");


}
=======

  mySong = loadSound('./Rainforest-sounds.mp3');
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f

}

<<<<<<< HEAD
  createCanvas(windowWidth,windowHeight)
  background(myImage)

  mySong.play();
=======
function setup() {
  createCanvas(3999, 2244);

  mySong = loadSound("./library/backsounds.mp3");

>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f
}

function draw() {

// music

  if (mySong.isPlaying() == true) {
    mySong.play();
  }

  mySong.loop();

  //image(myImage, 0, 0, myImage.width/3, myImage.height/3);



  image(myImage, 0, 0, myImage.width, myImage.height);

<<<<<<< HEAD
image(myImage2, 210, 130, 75,75);
=======
  //cover mariposa
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f

  image(myImage2, 548, 385, 250, 250);

<<<<<<< HEAD
image(myImage3, 200, 725, 50, 50);
=======
  //cover rana
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f

  image(myImage3, 499, 1995, 200, 200);

<<<<<<< HEAD
image(myImage4, 735, 670, 160, 160);
=======
  //cover armadillo
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f

  image(myImage4, 1975, 1780, 590, 590);

<<<<<<< HEAD
image(myImage5, 767, -8, 125, 430);
=======
  //cover bradipo
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f

  image(myImage5, 2130, -130, 350, 1360);

<<<<<<< HEAD
image(myImage6, 855, 423, 190, 190);


//primera pagina

//image(myImage7, 0, 0, myImage.width/2.7, myImage.height/2.7);


//iconi



=======
  //cover simio
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f

  image(myImage6, 2420, 1200, 500, 500);

<<<<<<< HEAD
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
=======

  //texto inicio
  push()
  textFont('Rubik:300')
  fill(250)
  textAlign(CENTER)
  textSize(15)
  text('In the last year has increased the number \nof species extinted because of human acts. \nDeforestation of the Amazon, hunting \nand other actions are destroying diverse species. \nChoose the different tools and search in this jungle \nfive animals in danger and discover more about them.', width / 2, height / 2.5)
  pop()

  //botón inicio
  var distance = dist(mouseX, mouseY, width / 2, height / 1.5);

  if (distance < 50) {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }

  ellipseMode(CENTER);
  stroke(250);
  strokeWeight(1);
  if (isOverCircle == true) {
    fill(100);
    cursor(HAND);
  } else {
    fill(200, 120);
    cursor(ARROW);
  }
  ellipse(width / 2, height / 1.5, 80, 75);
  textSize(15)
  textFont('Rubik:300')
  text(CENTER)
  noStroke()
  fill(0)
  text('play', width / 2.04, height / 1.49)
>>>>>>> 0723295bca3a0af5fbc76722260f07139d29f34f



}



//primer boton

function mousePressed() {
  if (isOverCircle == true) {
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

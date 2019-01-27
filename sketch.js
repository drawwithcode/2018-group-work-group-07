var myImg;
var myImg2;
var myImg3;
var myImg4;
var myImg5;
var myImg6;
var myImg7;
var myImg8;
var myImg9;
var myImg10;
var myImg11;
var myImg12;
var myImg13;


var button;


function preload() {
  mySong = loadSound("./library/sound.mp3");

  myImage = loadImage("./library/sfondo.png");
  myImage2 = loadImage("./library/covermariposa.png");
  myImage3 = loadImage("./library/coverrana.png");
  myImage4 = loadImage("./library/coverarmadillo.png");
  myImage5 = loadImage("./library/coverbradipo.png");
  myImage6 = loadImage("./library/coversimio.png");
  myImage7 = loadImage("./library/primera.png");
  myImage8 = loadImage("./library/exppng.png");
  myImage9 = loadImage("./library/suono.png");
  myImage10 = loadImage("./library/binocolo.png");
  myImage11 = loadImage("./library/tastiera.png");
  myImage12 = loadImage("./library/luce.png");
  myImage13 = loadImage("./library/banner.png");



  //button iconi
  button = createImg("./library/exppng.png");
  button.position(50, 50);
  button.size(50,50)
  button.mousePressed(menu)

  //button inicio
  button = createImg("./library/boton.png");
  button.position(650, 600);
  button.size(100,30)
  button.mousePressed(play)


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

//icono banner
image(myImage13, 370, 50, 700, 50);

//icono suono
image(myImage9, 330, -105, 700, 400);

//icono binoculo
image(myImage10, 360,-105, 700, 400);

//icono tastiera
image(myImage11, 380, -105, 700, 400);

//luce
image(myImage12, 400, -105, 700, 400);




//primera pagina

//image(myImage7, 0, 0, myImage.width/2.7, myImage.height/2.7);




//texto inicio
	// push()
	// textFont('Rubik:300')
	// fill(250)
	// textAlign(CENTER)
	// textSize(15)
	// text('In the last years has increased the number of species in danger or threatened because of human acts and it has been declared as a “global epidemic”. Scientists estimate that up to 200 species die every hour. The deforestation of the Amazon, hunting and other human actions are destroying diverse species. With this game you will discover some of the species that are in danger. Choose different tools and discover more about animals in danger in the Amazon.',width/2,height/2.5)
	// pop()


}

//boton menu

function menu() {

if(button.mousePressed(menu)){
background(0)
} else {
background(myImage)
}


}

//boton play
function play() {

if(!button.mousePressed(play)){

background(0)
} else {
background(myImage);

}

}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

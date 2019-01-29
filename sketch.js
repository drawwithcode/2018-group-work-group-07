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
var myImg14;
var myImg15;
var myImg16;
var myImg17;
var myImg18;
var myImg19;
var myImg20;
var myImg21;
var myImg22;
var myImg23;
var myImg24;
var myImg25;
var myImg26;
var myImg27;



var mySong;
var button;
let angle = 0.0;
let jitter = 0.0;

function preload() {
  mySong = loadSound("./library/sound.mp3");

  myImage = loadImage("./library/fondo.png");
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
  myImage14 = loadImage("./library/liana.png");
  myImage15 = loadImage("./library/farfalla.png");
  myImage16 = loadImage("./library/rana.png");
  myImage17 = loadImage("./library/armadillo.png");
  myImage18 = loadImage("./library/bradipo.png");
  myImage19 = loadImage("./library/scimmia.png");
  myImage20 = loadImage("./library/sfondofinale.png");
  myImage21 = loadImage("./library/ranafinale.png");
  myImage22 = loadImage("./library/armadillofinale.png");
  myImage23 = loadImage("./library/farfallafinale.png");
  myImage24 = loadImage("./library/bradipofinale.png");
  myImage25 = loadImage("./library/scimmiafinalepng.png");
  myImage26 = loadImage("./library/a1.png");
  myImage27 = loadImage("./library/L1.png");





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
  //background(myImage)
  mySong.play();



}





function draw () {
//background(myImage)
image(myImage, 0, 0, windowWidth, windowHeight);





//farfalla
image(myImage15, 0,0,windowWidth,windowHeight);

//cover farfalla

image(myImage2, 210, 110, 75,75);

//rana
image(myImage16, 0,0,windowWidth,windowHeight);

//cover rana

image(myImage3, 185, 655, 70, 70);

//armadillo
image(myImage17, 0,0,windowWidth,windowHeight);

//cover armadillo

image(myImage4, 735, 600, 160, 160);

// bradipo

image(myImage18, 0,0,windowWidth,windowHeight);

//cover bradipo

image(myImage5, 768, -35, 125, 430);

// simio

image(myImage19,0,0,windowWidth,windowHeight);

//cover simio

image(myImage6, 855, 380, 190, 190);


//iconi

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
//image(myImage7, 0, 0, windowWidth, windowHeight);



//texto inicio
	// push()
	// textFont('Rubik:300')
	// fill(250)
	// textAlign(CENTER)
	// textSize(15)
	// text('In the last years has increased the number of species in danger or threatened because of human acts and it has been declared as a “global epidemic”. Scientists estimate that up to 200 species die every hour. The deforestation of the Amazon, hunting and other human actions are destroying diverse species. With this game you will discover some of the species that are in danger. Choose different tools and discover more about animals in danger in the Amazon.',width/2,height/2.5)
	// pop()



//herramienta keyboard
push()
if (keyIsPressed == true) {  // If the key is pressed,
    image(myImage3, 185, 655, 70, 70);
    image(myImage26, 10,0,windowWidth,windowHeight);
    image(myImage27, 400,-20,windowWidth,windowHeight);

  }
  else {
    image(myImage3, 187, 655, 70, 70);
    image(myImage26, 8,2,windowWidth,windowHeight);
    image(myImage27, 400,2,windowWidth,windowHeight);

  }
pop()



  push()
  //movimento liana amarilla
  if (second() % 1 === 0) {
    jitter = random(0, 0.1);
   }
   angle = angle + jitter;
    let c = cos(angle);

  translate(0,0)
   rotate(c);
   image(myImage14,-100,-100,1000,500);
  pop()

}
//boton menu

function menu() {

if(button.mousePressed(menu)){
background(0)
} else {
  image(myImage, 0, 0, windowWidth, windowHeight);
}


}

//boton play
function play() {

if(button.mousePressed(play)){

  image(myImage, 0, 0, windowWidth, windowHeight);

} else {
  image(myImage7, 0, 0, windowWidth, windowHeight);

}

}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

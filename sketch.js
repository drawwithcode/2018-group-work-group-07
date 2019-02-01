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
var myImg28;
var myImg29;
var myImg30;
var myImg31;
var myImg32;
var myImg33;
var myImg34;
var myImg35;
var myImg36;
var myImg37;
var mySong;
var button;
let angle = 0.0;
let jitter = 0.0;
var rana = false
var farfalla = false
var scimmia = false
var armadillo = false

var myImg39; // hoja morada
var myImg38; // cover negra con hueco
var light = false; //sirve que sea asì
var leavessloth = true; //igual que light




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
  myImage28 = loadImage("./library/c2.png");
  myImage29 = loadImage("./library/g4.png");
  myImage30 = loadImage("./library/u1.png");
  myImage31 = loadImage("./library/s3.png");
  myImage32 = loadImage("./library/i2.png");
  myImage33 = loadImage("./library/testoarmadillo.png");
  myImage34 = loadImage("./library/testobradipo.png");
  myImage35 = loadImage("./library/testofarfalla.png");
  myImage36 = loadImage("./library/testorana.png");
  myImage37 = loadImage("./library/testoscimmia.png");
  myImage38 = loadImage("./library/cover.png");
  myImage39 = loadImage("./library/copribradipo.png");







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

//image(myImage2, 0,0,windowWidth,windowHeight);

//rana
image(myImage16, 0,0,windowWidth,windowHeight);

//cover rana

//image(myImage3,0,0,windowWidth,windowHeight);

//armadillo
image(myImage17, 0,0,windowWidth,windowHeight);

//cover armadillo

//image(myImage4, 0,0,windowWidth,windowHeight);

// bradipo

image(myImage18, 0,0,windowWidth,windowHeight);

//cover bradipo

//image(myImage5, 0,0,windowWidth,windowHeight);

// scimmia

image(myImage19,0,0,windowWidth,windowHeight);

//cover scimmia

//image(myImage6, 0,0,windowWidth,windowHeight);

//iconi

//icono banner
image(myImage13, windowWidth/4.8,windowHeight/15,windowWidth/1.8,windowHeight/15);

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
    image(myImage3, 0,0,windowWidth,windowHeight);
    image(myImage26, 10,0,windowWidth,windowHeight);
    image(myImage27, 400,-30,windowWidth,windowHeight);
    image(myImage28, 700,-130,windowWidth,windowHeight)
    image(myImage29, 700,0,windowWidth,windowHeight)
    image(myImage29, 0,0,windowWidth,windowHeight)
    image(myImage30, 0,-10,windowWidth,windowHeight)
    image(myImage31, 0,0,windowWidth,windowHeight)
    image(myImage32, 0,0,windowWidth,windowHeight)
  }
  else {
    image(myImage3, 2,0,windowWidth,windowHeight);
    image(myImage26, 8,2,windowWidth,windowHeight);
    image(myImage27, 400,0,windowWidth,windowHeight);
    image(myImage28, 715,-135,windowWidth,windowHeight)
    image(myImage29, 700,5,windowWidth,windowHeight)
    image(myImage29, 3,0,windowWidth,windowHeight)
    image(myImage30, 0,5,windowWidth,windowHeight)
    image(myImage31, 0,5,windowWidth,windowHeight)
    image(myImage32, 5,2,windowWidth,windowHeight)
  }
pop()



//aparición rana
if (rana){
image(myImage16, 0,0,windowWidth,windowHeight)

} else {
  image(myImage3, 0,0,windowWidth,windowHeight)

}

//aparicion farfalla
if (farfalla){
image(myImage15, 0,0,windowWidth,windowHeight)

} else {
  image(myImage2, 0,0,windowWidth,windowHeight)
}


//aparición scimmia
if (scimmia){
image(myImage19, 0,0,windowWidth,windowHeight)

} else {
  image(myImage6, 0,0,windowWidth,windowHeight)

}

//aparición armadillo
if (armadillo){
image(myImage17, 0,0,windowWidth,windowHeight)

} else {
  image(myImage4, 0,0,windowWidth,windowHeight)

}

//aparicion sloth

  if (leavessloth) {
    var x = random(1);
    var y = random(1);
    image(myImage5, x, y, windowWidth, windowHeight);
    image(myImage39, x, y, windowWidth, windowHeight);
  }

  // da cancellare poi: è solo per fare il tool della luce
  fill(250)
  ellipse(windowWidth /2, windowHeight / 3, 30);


  if (light) {
    image(myImage38, mouseX - myImage38.width / 2, mouseY - myImage38.height / 2, myImage38.width, myImage38.height);
  }
}




// //pagina final
// image(myImage20, 0,0,windowWidth,windowHeight);
// image(myImage21, 0,0,windowWidth,windowHeight);
// image(myImage22, 0,0,windowWidth,windowHeight);
// image(myImage23, 0,0,windowWidth,windowHeight);
// image(myImage24, 0,0,windowWidth,windowHeight);
// image(myImage25, 0,0,windowWidth,windowHeight);
//
//
// if ((mouseX > windowWidth/10) && (mouseX < windowWidth/5)){
//   image(myImage36, 0,0,windowWidth,windowHeight);
// }
// else {
//   fill(0);
// }
//




function menu() {

if(button.mousePressed(menu)){
background(0)
} else {
  image(myImage, 0, 0, windowWidth, windowHeight);
}


}


//click rana + farfall + scimmia + armadillo
function mouseClicked(){
var dirana = dist(mouseX,mouseY,windowWidth/6.5,windowHeight/12*11.3)
if (dirana < 40){
  rana = true

}
var difarfalla = dist(mouseX,mouseY,windowWidth/6.2,windowHeight/5)
if (difarfalla < 40){
  farfalla = true
  }
var discimmia = dist(mouseX,mouseY,windowWidth/1.5,windowHeight/1.6)
if (discimmia < 50){
    scimmia = true
    }
var diarmadillo = dist(mouseX,mouseY,windowWidth/1.8,windowHeight/12*11.3)
if (diarmadillo < 40){
    armadillo = true
    }

var dlight = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 3);
if (dlight  < 20) {
      light = true;
      }

  var dsloth = dist(mouseX, mouseY, windowWidth / 1.7, windowHeight / 3);
  if (dsloth < 50) {
    leavessloth = false;
    light = false;
      }

}



//boton play
// function play() {
//
// if(button.mousePressed(play)){
//
//   image(myImage, 0, 0, windowWidth, windowHeight);
//
// } else {
//   image(myImage7, 0, 0, windowWidth, windowHeight);
//
// }
//
// }

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

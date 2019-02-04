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
// var button;
// var angle = 0.0;
// var jitter = 0.0;
var rana = false;
var farfalla = false;
var scimmia = false;
var armadillo = false;

var myImg39; // hoja morada
var myImg38; // cover negra con hueco
var light = false; //sirve que sea asì
var leavessloth = true; //igual que light

//var myImage40;
//var myImage41;
var myImage42;
var myImage43;
var myImage44;
var myImage45;
var myImage46;

var leavemonkey = true;
var leaves = true;
var banana = false;

var info = false;
var xinfo = false;

var SpeechRec;
var analyzer;

var instructions = false;
var intro = false;
var startgame = false;
var sfondo = false;

var myInstructions;
var myIntro;
var avanti1;
var avanti2;

// var bradipo;
var armadillo;


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
  //myImage40 = loadImage('./library/scimmia.png');
  //myImage41 = loadImage('./library/coperturascimmia1.png');
  myImage42 = loadImage('./library/s1.png');
  myImage43 = loadImage('./library/z4.png');
  myImage44 = loadImage('./library/z5.png');
  myImage45 = loadImage('./library/z6.png');
  myImage46 = loadImage('./library/banana.png');
  myImage47 = loadImage('./library/info.png');

  bottoneplay = loadImage("./library/boton.png");

  myInstructions = loadImage("./library/istruzioni.png");
  myIntro = loadImage("./library/intro.png");
  avanti1 = loadImage("./library/avanti_1.png");
  avanti2 = loadImage("./library/avanti_2.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight)
  mySong.play();

  //speech recognition
  var speechRec = new p5.SpeechRec('en-US', parseResult);

  var continuous = true;
  var interim = true;

  speechRec.start(continuous, interim);

  function gotSpeech() {
    if (speechRec.resultValue) {
      createP(speechRec.resultString);
    }
    console.log(speechRec);
  }

  function parseResult() {

    var mostrecentword = speechRec.resultString.split(' ').pop();

    if (mostrecentword.indexOf("sloth") !== -1) {
      bradipo.shake();
    } else if (mostrecentword.indexOf("armadillo") !== -1) {
      armadillo.shake();
    } else if (mostrecentword.indexOf("green") !== -1) {
      fill(0, 255, 0);
      ellipse(width / 2, height / 4, 200);
    } else if (mostrecentword.indexOf("blue") !== -1) {
      fill(0, 0, 255);
      ellipse(width / 2, height / 4, 200);
    }

  }

  // analyzer
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  // bradipo = new Bradipo();
  armadillo = new Armadillo();


}


function draw() {

  //schermate iniziali
  if (sfondo) {
    if (instructions) {
      if (startgame) {
        image(myImage, 0, 0, windowWidth, windowHeight); //sfondo gioco
        bradipo.display();
        armadillo.display();
      } else {
        image(myInstructions, 0, 0, windowWidth, windowHeight); //sfondo instructions
        push();
        imageMode(CENTER);
        image(avanti2, windowWidth / 7 * 5.85, windowHeight / 10 * 7.6, 30, 30); //avanti2
        pop();
        // ellipse(windowWidth / 7 * 5.85, windowHeight / 10 * 7.6, 30);
      }
    } else {
      image(myIntro, 0, 0, windowWidth, windowHeight); //sfondo intro
      // ellipse(windowWidth / 7 * 5.65, windowHeight / 10 * 7.6, 30);
      push();
      imageMode(CENTER);
      image(avanti1, windowWidth / 7 * 5.65, windowHeight / 10 * 7.6, 30, 30); //avanti1
      pop();
    }
  } else {
    image(myImage7, 0, 0, windowWidth, windowHeight); //sfondo inizio
    push();
    imageMode(CENTER);
    image(bottoneplay, windowWidth / 2, windowHeight / 10 * 7.6, 100, 30);
    pop();
  }

  //map volume
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  // //background(myImage)
  // image(myImage, 0, 0, windowWidth, windowHeight);
  //
  //
  // //farfalla
  // image(myImage15, 0,0,windowWidth,windowHeight);

  //cover farfalla
  //image(myImage2, 0,0,windowWidth,windowHeight);

  //rana
  image(myImage16, 0, 0, windowWidth, windowHeight);

  //cover rana
  //image(myImage3,0,0,windowWidth,windowHeight);

  //armadillo
  image(myImage17, 0, 0, windowWidth, windowHeight);

  //cover armadillo
  //image(myImage4, 0,0,windowWidth,windowHeight);

  // bradipo
  image(myImage18, 0, 0, windowWidth, windowHeight);

  //cover bradipo
  //image(myImage5, 0,0,windowWidth,windowHeight);

  // scimmia
  image(myImage19, 0, 0, windowWidth, windowHeight);

  //cover scimmia
  //image(myImage6, 0,0,windowWidth,windowHeight);

  //icono banner
  image(myImage13, windowWidth / 4.8, windowHeight / 13, windowWidth / 1.8, windowHeight / 13);

  //icono suono
  image(myImage9, 0, 0, windowWidth, windowHeight);

  //icono binoculo
  image(myImage10, 0, 0, windowWidth, windowHeight);

  //icono tastiera
  image(myImage11, 0, 0, windowWidth, windowHeight);

  //luce
  image(myImage12, 0, 0, windowWidth, windowHeight);

  // error if the window is too small
  if (windowWidth < 1100 || windowHeight < 620) {
    push();
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(100);
    text('Error', windowWidth / 2, 300);
    fill(255, 0, 0);
    pop();
  }

  //mouse cursor changing
  var dforward1 = dist(mouseX, mouseY, windowWidth / 7 * 5.85, windowHeight / 10 * 7.6);
  var dforward2 = dist(mouseX, mouseY, windowWidth / 7 * 5.65, windowHeight / 10 * 7.6);
  var dforward3 = dist(mouseX, mouseY, windowWidth / 7 * 5.45, windowHeight / 10 * 7.6);
  if (dforward1 < 15 || dforward2 < 15 || dforward3 < 15 || mouseX > windowWidth / 2 - 50 && mouseX < windowWidth / 2 + 50 && mouseY > windowHeight / 10 * 7.6 - 15 && mouseY < windowHeight / 10 * 7.6 + 15) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  //herramienta keyboard
  push()
  if (keyIsPressed == true) { // If the key is pressed,
    image(myImage3, 0, 0, windowWidth, windowHeight);
    image(myImage26, 10, 0, windowWidth, windowHeight);
    image(myImage27, 400, -30, windowWidth, windowHeight);
    image(myImage28, 700, -130, windowWidth, windowHeight)
    image(myImage29, 700, 0, windowWidth, windowHeight)
    image(myImage29, 0, 0, windowWidth, windowHeight)
    image(myImage30, 0, -10, windowWidth, windowHeight)
    image(myImage31, 0, 0, windowWidth, windowHeight)
    image(myImage32, 0, 0, windowWidth, windowHeight)
  } else {
    image(myImage3, 2, 0, windowWidth, windowHeight);
    image(myImage26, 8, 2, windowWidth, windowHeight);
    image(myImage27, 400, 0, windowWidth, windowHeight);
    image(myImage28, 715, -135, windowWidth, windowHeight)
    image(myImage29, 700, 5, windowWidth, windowHeight)
    image(myImage29, 3, 0, windowWidth, windowHeight)
    image(myImage30, 0, 5, windowWidth, windowHeight)
    image(myImage31, 0, 5, windowWidth, windowHeight)
    image(myImage32, 5, 2, windowWidth, windowHeight)
  }
  pop()


  //aparición rana
  if (rana) {
    image(myImage16, 0, 0, windowWidth, windowHeight)

  } else {
    image(myImage3, 0, 0, windowWidth, windowHeight)

  }

  //aparicion farfalla
  if (farfalla) {
    image(myImage15, 0, 0, windowWidth, windowHeight)

  } else {
    image(myImage2, 0, 0, windowWidth, windowHeight)
  }


  //aparición scimmia
  if (scimmia) {
    image(myImage19, 0, 0, windowWidth, windowHeight)

  } else {
    image(myImage6, 0, 0, windowWidth, windowHeight)

  }

  //aparición armadillo
  if (armadillo) {
    image(myImage17, 0, 0, windowWidth, windowHeight)

  } else {
    image(myImage4, 0, 0, windowWidth, windowHeight)

  }

  // banna + scimmmia
  image(myImage19, 0, 0, windowWidth, windowHeight);

  if (leavemonkey) {
    image(myImage6, 0, 0, windowWidth, windowHeight);
  }

  if (leaves) {

    image(myImage43, 0, 0, windowWidth, windowHeight);
    image(myImage44, 0, 0, windowWidth, windowHeight);
    image(myImage45, 0, 0, windowWidth, windowHeight);
  }

  if (mouseX >= windowWidth / 1.5 - windowWidth / 8 && mouseX <= windowWidth / 1.5 + windowWidth / 8 && mouseY >= windowHeight / 1.6 - windowHeight / 8 && mouseY <= windowHeight / 1.6 + windowHeight / 8) {
    var x = random(2);
    var y = random(2);
    image(myImage43, x, y, windowWidth, windowHeight);
    image(myImage44, x, y, windowWidth, windowHeight);
    image(myImage45, x, y, windowWidth, windowHeight);
  }

  if (banana) {
    image(myImage46, mouseX, mouseY, windowWidth / 15, windowHeight / 10);
  }

  ellipse(windowWidth / 1.77, windowHeight / 9, 20);

  //aparicion sloth

  if (leavessloth) {
    var x = random(1);
    var y = random(1);
    image(myImage5, x, y, windowWidth, windowHeight);
    image(myImage39, x, y, windowWidth, windowHeight);
  }

  // da cancellare poi: è solo per fare il tool della luce
  fill(250)
  ellipse(windowWidth / 3, windowHeight / 9, 20);


  if (light) {
    image(myImage38, mouseX - myImage38.width / 2, mouseY - myImage38.height / 2, myImage38.width, myImage38.height);
  }


  //boton info
  image(myImage8, 0, 0, windowWidth, windowHeight)

  if (info) {
    image(myImage47, 0, 0, windowWidth, windowHeight)

  }
  fill(250)
  ellipse(windowWidth / 1.065, windowHeight / 10, 30);

  //boton x
  if (xinfo) {
    image(myImage47, 0, 0, windowWidth, windowHeight)

  }
  fill(250)
  ellipse(windowWidth / 1.15, windowHeight / 9, 30);

  ////pagina final info animali
  // image(myImage20, 0,0,windowWidth,windowHeight);
  // image(myImage21, 0,0,windowWidth,windowHeight);
  // image(myImage22, 0,0,windowWidth,windowHeight);
  // image(myImage23, 0,0,windowWidth,windowHeight);
  // image(myImage24, 0,0,windowWidth,windowHeight);
  // image(myImage25, 0,0,windowWidth,windowHeight);
  //
  // //info rana
  // if ((mouseX > windowWidth/10) && (mouseX < windowWidth/5)){
  //   image(myImage36, 0,0,windowWidth,windowHeight);
  // }
  // //info armadillo
  // if ((mouseX > windowWidth/5) && (mouseX < windowWidth/3)){
  //   image(myImage33, 0,0,windowWidth,windowHeight);
  // }
  // //info bradipo
  // if ((mouseX > windowWidth/2.8) && (mouseX < windowWidth/1.5)){
  //   image(myImage34, 0,0,windowWidth,windowHeight);
  // }
  // //info farfalla
  // if ((mouseX > windowWidth/1.5) && (mouseX < windowWidth/1.3)){
  //   image(myImage35, 0,0,windowWidth,windowHeight);
  // }
  // //info scimmia
  // if ((mouseX > windowWidth/1.3) && (mouseX < windowWidth/1.01)){
  //   image(myImage37, 0,0,windowWidth,windowHeight);
  // }
}

// function Bradipo() {
//
//   this.x = 767;
//   this.y = -35;
//
//   this.display = function() {
//     image(myImage5, this.x, this.y, 125, 430);
//   }
//
//   this.shake = function() {
//     this.x = this.x + random (-5, 5);
//   }
// }

function Armadillo() {

  this.x = 630;
  this.y = 500;

  this.display = function() {
    image(myImage4, this.x, this.y, 160, 160);
  }

  this.shake = function() {
    this.x = this.x + random (-5, 5);
  }
}



//click rana + farfalla + scimmia + armadillo + bradipo
function mouseClicked() {

  //bottone play
  if (mouseX > windowWidth / 2 - 50 && mouseX < windowWidth / 2 + 50 && mouseY > windowHeight / 10 * 7.6 - 15 && mouseY < windowHeight / 10 * 7.6 + 15) {
    sfondo = true;
  }

  //istruzioni-->inizio gioco
  var dforward1 = dist(mouseX, mouseY, windowWidth / 7 * 5.85, windowHeight / 10 * 7.6);
  if (dforward1 < 15 || dforward2 < 15 || dforward2 < 15) {
    startgame = true;
  }
  //prima pagina-->istruzioni
  var dforward2 = dist(mouseX, mouseY, windowWidth / 7 * 5.65, windowHeight / 10 * 7.6);
  if (dforward2 < 15) {
    instructions = true;
  }

  var dirana = dist(mouseX, mouseY, windowWidth / 6.5, windowHeight / 12 * 11.3)
  if (dirana < 40) {
    rana = true

  }
  var difarfalla = dist(mouseX, mouseY, windowWidth / 6.2, windowHeight / 5)
  if (difarfalla < 40) {
    farfalla = true
  }
  var discimmia = dist(mouseX, mouseY, windowWidth / 1.5, windowHeight / 1.6)
  if (discimmia < 50) {
    scimmia = true
  }
  var diarmadillo = dist(mouseX, mouseY, windowWidth / 1.8, windowHeight / 12 * 11.3)
  if (diarmadillo < 40) {
    armadillo = true
  }

  var dlight = dist(mouseX, mouseY, windowWidth / 3, windowHeight / 9);
  if (dlight < 20) {
    light = true;
  }

  var dsloth = dist(mouseX, mouseY, windowWidth / 1.7, windowHeight / 3);
  if (dsloth < 50) {
    leavessloth = false;
    light = false;
  }

  //bannan + scimmia
  var dmonkey = dist(mouseX, mouseY, windowWidth / 1.5, windowHeight / 1.6);
  if (dmonkey < windowWidth / 20) {
    leavemonkey = false;
    banana = false;
  }

  var dbanana = dist(mouseX, mouseY, windowWidth / 1.77, windowHeight / 9);
  if (dbanana < 20) {
    banana = true;
  }
  //boton info
  var diinfo = dist(mouseX, mouseY, windowWidth / 1.065, windowHeight / 10)
  if (diinfo < 50) {
    info = true

  }

  //cerrar boton info
  var dxinfo = dist(mouseX, mouseY, windowWidth / 1.15, windowHeight / 9)
  if (dxinfo < 50) {
    info = false
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

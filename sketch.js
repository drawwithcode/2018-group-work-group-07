// immagini
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

// suono della foresta
var mySong;

var rana = false;
var farfall = false;
var scimmia = false;
var armadill = false;

//
var myImg39; // hoja morada
var myImg38; // cover negra con hueco
var light = false; //sirve que sea asì
var leavessloth = true; //igual que light

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

var armadillo;
var farfalla;

var brad = false;
var butter = false;
var monkey = false;
var armad = false;
var frog = false;


var giraffa = false;
var girlup;
var refresh;

var amazzonia = false;
var amazon;
var next;

var finale = false;

// foglie che si muovono con volume
var b1;
var f4;
var m1;
var m2;
var n5;
var u;

function preload() {

  mySong = loadSound("./library/sound.mp3");


  // schermate
  myImage = loadImage("./library/sfondo.png");
  myImage7 = loadImage("./library/primera.png");
  myImage20 = loadImage("./library/sfondofinale.png");
  myImage21 = loadImage("./library/ranafinale.png");
  myImage22 = loadImage("./library/armadillofinale.png");
  myImage23 = loadImage("./library/farfallafinale.png");
  myImage24 = loadImage("./library/bradipofinale.png");
  myImage25 = loadImage("./library/scimmiafinalepng.png");
  myImage38 = loadImage("./library/cover.png");
  myImage47 = loadImage('./library/info.png');
  myInstructions = loadImage("./library/istruzioni.png");
  myIntro = loadImage("./library/intro.png");
  goodjob = loadImage('./library/GOODJOB_Tavola disegno 1.png');
  girlup = loadImage('./library/giraffaelupo.png');
  amazon = loadImage('./library/amazon.png');


  // coperture animali
  myImage2 = loadImage("./library/covermariposa.png");
  myImage3 = loadImage("./library/coverrana.png");
  myImage4 = loadImage("./library/coverarmadillo.png");
  myImage5 = loadImage("./library/coverbradipo.png");
  myImage6 = loadImage("./library/coversimio.png");


  // icone
  myImage8 = loadImage("./library/exppng.png");
  myImage9 = loadImage("./library/suono.png");
  myImage10 = loadImage("./library/binocolo.png");
  myImage11 = loadImage("./library/tastiera.png");
  myImage12 = loadImage("./library/luce.png");
  myImage13 = loadImage("./library/banner.png");
  myImage46 = loadImage('./library/banana.png');
  bottoneplay = loadImage("./library/boton.png");
  avanti1 = loadImage("./library/avanti_1.png");
  avanti2 = loadImage("./library/avanti_2.png");
  next = loadImage('./library/next_Tavola disegno 1.png');
  exit = loadImage('./library/x exit.png');



  // animali
  myImage15 = loadImage("./library/farfalla.png");
  myImage16 = loadImage("./library/rana.png");
  myImage17 = loadImage("./library/armadillo.png");
  myImage18 = loadImage("./library/bradipo.png");
  myImage19 = loadImage("./library/scimmia.png");


  // fogliame
  myImage39 = loadImage("./library/copribradipo.png");
  myImage26 = loadImage("./library/a1.png");
  myImage27 = loadImage("./library/L1.png");
  myImage28 = loadImage("./library/c2.png");
  myImage29 = loadImage("./library/g4.png");
  myImage30 = loadImage("./library/u1.png");
  myImage31 = loadImage("./library/s3.png");
  myImage32 = loadImage("./library/i2.png");
  myImage42 = loadImage('./library/s1.png');
  myImage43 = loadImage('./library/z4.png');
  myImage44 = loadImage('./library/z5.png');
  myImage45 = loadImage('./library/z6.png');
  b1 = loadImage('./library/b1_.png');
  f4 = loadImage('./library/f4.png');
  n5 = loadImage('./library/n5.png');
  m1 = loadImage('./library/m1.png');
  m2 = loadImage('./library/m2.png');
  u = loadImage('./library/u.png');


  // testi
  myImage33 = loadImage("./library/testoarmadillo.png");
  myImage34 = loadImage("./library/testobradipo.png");
  myImage35 = loadImage("./library/testofarfalla.png");
  myImage36 = loadImage("./library/testorana.png");
  myImage37 = loadImage("./library/testoscimmia.png");
  refresh = loadImage('./library/refresh_Tavola disegno 1.png');

}

function setup() {

  createCanvas(windowWidth, windowHeight)
  mySong.play();

  //speech recognition tool for armadillo and butterfly
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
    } else if (mostrecentword.indexOf("butterfly") !== -1) {
      farfalla.shake();
    }

  }

  // analyzer
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);


  armadillo = new ArmadilloCover();
  farfalla = new FarfallaCover();

}


function draw() {

  //map volume
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  //flow of game windows
  if (sfondo) {
    if (instructions) {
      if (startgame) {
        //sfondo del gioco
        image(myImage, 0, 0, windowWidth, windowHeight);

        //movement of leaves using the keyboard
        //when key is pressed move these elements
        push()
        if (keyIsPressed == true) {
          image(myImage3, -15, 10, windowWidth, windowHeight);
          image(myImage26, 10, 0, windowWidth, windowHeight);
          image(myImage27, 400, -30, windowWidth, windowHeight);
          image(myImage29, 700, 0, windowWidth, windowHeight);
          image(myImage29, 0, 0, windowWidth, windowHeight);
          image(myImage30, 0, -10, windowWidth, windowHeight);
          image(myImage31, 0, 0, windowWidth, windowHeight);
          image(myImage32, 0, 0, windowWidth, windowHeight);
        } else {
          image(myImage3, 0, 0, windowWidth, windowHeight);
          image(myImage26, 0, 0, windowWidth, windowHeight);
          image(myImage27, 400, 0, windowWidth, windowHeight);
          image(myImage29, 700, 5, windowWidth, windowHeight);
          image(myImage29, 3, 0, windowWidth, windowHeight);
          image(myImage30, 0, 5, windowWidth, windowHeight);
          image(myImage31, 0, 5, windowWidth, windowHeight);
          image(myImage32, 5, 2, windowWidth, windowHeight);
        }
        pop();

        //show frog and hide its cover when clicked
        if (rana) {
          image(myImage16, random(5), random(5), windowWidth, windowHeight);
        } else if (keyIsPressed == true) {
          image(myImage16, 0, 0, windowWidth, windowHeight);
          image(myImage3, -15, 10, windowWidth, windowHeight);
        } else {
          image(myImage16, 0, 0, windowWidth, windowHeight);
          image(myImage3, 0, 0, windowWidth, windowHeight);
        }

        //show farfalla and hide its cover
        if (farfall) {
          image(myImage15, random(6), random(6), windowWidth, windowHeight);
        } else {
          image(myImage15, 0, 0, windowWidth, windowHeight);
          farfalla.display();
        }

        //show monkey and hide its cover when clicked
        if (monkey) {
          image(myImage19, random(5), random(5), windowWidth, windowHeight);
        } else {
          image(myImage19, 0, 0, windowWidth, windowHeight);
          image(myImage6, 0, 0, windowWidth, windowHeight);
        }

        //show armadillo and hide its cover
        if (armadill) {
          image(myImage17, random(5), random(5), windowWidth, windowHeight);
        } else {
          image(myImage17, 0, 0, windowWidth, windowHeight);
          armadillo.display();
        }

        //show sloth and hide its cover when clicked
        if (leavessloth) {
          image(myImage18, 0, 0, windowWidth, windowHeight);
          var x = random(1);
          var y = random(1);
          image(myImage5, x, y, windowWidth, windowHeight);
          image(myImage39, x, y, windowWidth, windowHeight);
        } else {
          image(myImage18, random(5), random(5), windowWidth, windowHeight);
        }

        // hide monkey leaf
        if (leavemonkey) {
          image(myImage6, 0, 0, windowWidth, windowHeight);
        }

        // monkey leaves
        if (leaves) {
          image(myImage43, 0, 0, windowWidth, windowHeight);
          image(myImage44, 0, 0, windowWidth, windowHeight);
          image(myImage45, 0, 0, windowWidth, windowHeight);
        }

        // sloth leaves
        if (mouseX >= windowWidth / 1.5 - windowWidth / 8 && mouseX <= windowWidth / 1.5 + windowWidth / 8 && mouseY >= windowHeight / 1.6 - windowHeight / 8 && mouseY <= windowHeight / 1.6 + windowHeight / 8) {
          var x = random(2);
          var y = random(2);
          image(myImage43, x, y, windowWidth, windowHeight);
          image(myImage44, x, y, windowWidth, windowHeight);
          image(myImage45, x, y, windowWidth, windowHeight);
        }

        // banana tool
        if (banana) {
          push();
          imageMode(CENTER);
          image(myImage46, mouseX, mouseY, windowWidth / 15, windowHeight / 10);
          pop();
        }

        // leaves moving with volume
        var vx = volume / 2;
        var vy = volume / 2;

        image(b1, vx, vy, windowWidth, windowHeight);
        image(f4, vx, vy, windowWidth, windowHeight);
        image(n5, vx, vy, windowWidth, windowHeight);
        image(m1, vx, vy, windowWidth, windowHeight);
        image(m2, vx, vy, windowWidth, windowHeight);
        image(u, vx, vy, windowWidth, windowHeight);


        //instruments banner
        image(myImage13, windowWidth / 4.8, windowHeight / 13, windowWidth / 1.8, windowHeight / 13);

        //icon sound
        image(myImage9, 0, 0, windowWidth, windowHeight);

        //icon banana
        image(myImage10, 0, 0, windowWidth, windowHeight);

        //icon keyboard
        image(myImage11, 0, 0, windowWidth, windowHeight);

        //icon light
        image(myImage12, 0, 0, windowWidth, windowHeight);

        // light tool
        if (light) {
          image(myImage38, mouseX - myImage38.width / 2, mouseY - myImage38.height / 2, myImage38.width, myImage38.height);
        }

        //button about
        image(myImage8, 0, 0, windowWidth, windowHeight);
        if (info) {
          image(myImage47, 0, 0, windowWidth, windowHeight);
          image(exit, 0, 0, windowWidth, windowHeight);
        }

        // end of the game
        if (brad) {
          if (butter) {
            if (monkey) {
              if (armad) {
                if (frog) {
                  if (giraffa) {
                    // schermata finale giraffa e lupo
                    image(girlup, 0, 0, windowWidth, windowHeight);
                    image(refresh, 0, 0, windowWidth, windowHeight);
                  } else if (finale) {
                    //pagina info animali
                    image(myImage20, 0, 0, windowWidth, windowHeight);
                    image(myImage21, 0, 0, windowWidth, windowHeight);
                    image(myImage22, 0, 0, windowWidth, windowHeight);
                    image(myImage23, 0, 0, windowWidth, windowHeight);
                    image(myImage24, 0, 0, windowWidth, windowHeight);
                    image(myImage25, 0, 0, windowWidth, windowHeight);

                    //info rana
                    if ((mouseX > windowWidth / 10) && (mouseX < windowWidth / 5)) {
                      image(myImage36, 0, 0, windowWidth, windowHeight);
                    }
                    //info armadillo
                    if ((mouseX > windowWidth / 5) && (mouseX < windowWidth / 3)) {
                      image(myImage33, 0, 0, windowWidth, windowHeight);
                    }
                    //info bradipo
                    if ((mouseX > windowWidth / 2.8) && (mouseX < windowWidth / 1.5)) {
                      image(myImage34, 0, 0, windowWidth, windowHeight);
                    }
                    //info farfalla
                    if ((mouseX > windowWidth / 1.5) && (mouseX < windowWidth / 1.3)) {
                      image(myImage35, 0, 0, windowWidth, windowHeight);
                    }
                    //info scimmia
                    if ((mouseX > windowWidth / 1.3) && (mouseX < windowWidth / 1.01)) {
                      image(myImage37, 0, 0, windowWidth, windowHeight);
                    }

                    // pulsante avanti2
                    push();
                    imageMode(CENTER);
                    image(avanti2, windowWidth / 7 * 6.5, windowHeight / 2, 60, 60);
                    pop();

                  } else if (amazzonia) {

                    // info amazzonia
                    image(amazon, 0, 0, windowWidth, windowHeight);

                    // pulsante avanti1
                    push();
                    imageMode(CENTER);
                    image(avanti1, windowWidth / 7 * 5.85, windowHeight / 10 * 8, 30, 30);
                    pop();

                  } else {

                    // fine gioco + goodjob
                    image(goodjob, 0, 0, windowWidth, windowHeight);
                    image(next, 0, 0, windowWidth, windowHeight);
                  }
                }
              }
            }
          }
        }


      } else {
        //background instructions of the game
        image(myInstructions, 0, 0, windowWidth, windowHeight);
        //button forward 2
        push();
        imageMode(CENTER);
        image(avanti2, windowWidth / 7 * 5.85, windowHeight / 10 * 7.6, 30, 30);
        pop();
      }
    } else {
      //background introduction of the game
      image(myIntro, 0, 0, windowWidth, windowHeight);
      //button forward 1
      push();
      imageMode(CENTER);
      image(avanti1, windowWidth / 7 * 5.65, windowHeight / 10 * 7.6, 30, 30);
      pop();
    }

  } else {
    //background beginning of the game
    image(myImage7, 0, 0, windowWidth, windowHeight);
    //button play
    push();
    imageMode(CENTER);
    image(bottoneplay, windowWidth / 2, windowHeight / 10 * 7.6, 100, 30);
    pop();
  }

  // play the song
  if (mouseClicked == true) {
    mySong.stop();
  } else {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  }

  // error if the window is too small
  if (windowWidth < 1100 || windowHeight < 620) {
    push();
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(50);
    text('THE AMAZON RAINFOREST IS BIG.', windowWidth / 2, 300);
    textSize(20);
    text('Do not change its dimensions. Love it the way it is. ♥︎', windowWidth / 2, 600);
    fill(255, 0, 0);
    pop();
  }

  //mouse cursor changing
  var dforward1 = dist(mouseX, mouseY, windowWidth / 7 * 5.85, windowHeight / 10 * 7.6);
  var dforward2 = dist(mouseX, mouseY, windowWidth / 7 * 5.65, windowHeight / 10 * 7.6);
  var dforward3 = dist(mouseX, mouseY, windowWidth / 7 * 5.45, windowHeight / 10 * 7.6);
  var dlight = dist(mouseX, mouseY, windowWidth / 3, windowHeight / 9);
  var dbanana = dist(mouseX, mouseY, windowWidth / 1.77, windowHeight / 9);
  var diinfo = dist(mouseX, mouseY, windowWidth / 1.070, windowHeight / 8.9);
  var dsloth = dist(mouseX, mouseY, windowWidth / 1.7, windowHeight / 3);
  var discimmia = dist(mouseX, mouseY, windowWidth / 1.5, windowHeight / 1.6);
  var diarmadillo = dist(mouseX, mouseY, windowWidth / 1.8, windowHeight / 12 * 11.3);
  var difarfalla = dist(mouseX, mouseY, windowWidth / 6.2, windowHeight / 5);
  var dirana = dist(mouseX, mouseY, windowWidth / 6.5, windowHeight / 12 * 11.3);

  var dnext = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 1.25);
  var dgir = dist(mouseX, mouseY, windowWidth / 7 * 6.5, windowHeight / 2);
  var dfin = dist(mouseX, mouseY, windowWidth / 7 * 5.85, windowHeight / 10 * 8)

  if (dfin < 15 || dgir < 30 || dnext < 25 || dirana < 30 || difarfalla < 40 || discimmia < 65 || diarmadillo < 50 || dsloth < 65 || diinfo < 25 || dbanana < 20 || dlight < 20 || dforward1 < 15 || dforward2 < 15 || dforward3 < 15 || mouseX > windowWidth / 2 - 50 && mouseX < windowWidth / 2 + 50 && mouseY > windowHeight / 10 * 7.6 - 15 && mouseY < windowHeight / 10 * 7.6 + 15) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

}

// oggetto di copertura della farfalla che si muove a comando vocale
function FarfallaCover() {

  this.x = 0;
  this.y = 0;
  this.w = windowWidth;
  this.h = windowHeight;

  this.display = function() {
    image(myImage2, this.x, this.y, this.w, this.h);
  }

  this.shake = function() {
    this.x = this.x + random(-12, 12);
    this.y = this.y + random(-12, 12);
    this.w = this.w + random(0, 10);
    this.h = this.h + random(0, 10);
  }
}

// oggetto di copertura dell'armadillo che si muove a comando vocale
function ArmadilloCover() {

  this.x = 0;
  this.y = 0;
  this.w = windowWidth;
  this.h = windowHeight;

  this.display = function() {
    image(myImage4, this.x, this.y, this.w, this.h);
  }

  this.shake = function() {
    this.x = this.x + random(-12, 12);
    this.y = this.y + random(-12, 12);
    this.w = this.w + random(0, 10);
    this.h = this.h + random(0, 10);
  }
}


function mouseClicked() {

mySong.pause();
  //play-->first page
  if (mouseX > windowWidth / 2 - 50 && mouseX < windowWidth / 2 + 50 && mouseY > windowHeight / 10 * 7.6 - 15 && mouseY < windowHeight / 10 * 7.6 + 15) {
    sfondo = true;
  }

  //first page-->instructions
  var dforward2 = dist(mouseX, mouseY, windowWidth / 7 * 5.65, windowHeight / 10 * 7.6);
  if (dforward2 < 15) {
    instructions = true;
  }

  //instructions-->game
  var dforward1 = dist(mouseX, mouseY, windowWidth / 7 * 5.85, windowHeight / 10 * 7.6);
  if (dforward1 < 15 || dforward2 < 15 || dforward2 < 15) {
    startgame = true;
  }

  // click sulla rana
  var dirana = dist(mouseX, mouseY, windowWidth / 6.5, windowHeight / 12 * 11.3);
  if (dirana < 30) {
    rana = true;
    frog = true;
  }

  // click sulla farfalla
  var difarfalla = dist(mouseX, mouseY, windowWidth / 6.2, windowHeight / 5);
  if (difarfalla < 40) {
    // farfalla = true;
    butter = true;
    farfall = true;
  }

  // click sulla scimmia
  var discimmia = dist(mouseX, mouseY, windowWidth / 1.5, windowHeight / 1.6);
  if (discimmia < 65) {
    scimmia = true;
    monkey = true;
    leavemonkey = false;
    banana = false;
  }

  // click su armadillo
  var diarmadillo = dist(mouseX, mouseY, windowWidth / 1.8, windowHeight / 12 * 11.3);
  if (diarmadillo < 50) {
    armad = true;
    armadill = true;
  }

  // click su icona della luce + se usi light non puoi usare banana
  var dlight = dist(mouseX, mouseY, windowWidth / 3, windowHeight / 9);
  if (dlight < 20) {
    light = !light;
    banana = false;
  }

  // click su bradipo
  var dsloth = dist(mouseX, mouseY, windowWidth / 1.7, windowHeight / 3);
  if (dsloth < 65) {
    leavessloth = false;
    light = false;
    brad = true;
  }

  // click su icona banana + se usi banana non puoi usare light
  var dbanana = dist(mouseX, mouseY, windowWidth / 1.77, windowHeight / 9);
  if (dbanana < 20) {
    banana = !banana;
    light = false;
  }

  //button about
  var diinfo = dist(mouseX, mouseY, windowWidth / 1.070, windowHeight / 8.9);
  if (diinfo < 25) {
    info = !info;
  }

  // endgame --> info about amazon
  var dnext = dist(mouseX, mouseY, windowWidth / 2, windowHeight / 10 * 8);
  if (dnext < 25) {
    amazzonia = true;
  }

  // info about amazon --> info about animals
  var dfin = dist(mouseX, mouseY, windowWidth / 7 * 5.85, windowHeight / 10 * 8)
  if (dfin < 15) {
    finale = true;
  }

  // info about animals --> final joke
  var dgir = dist(mouseX, mouseY, windowWidth / 7 * 6.5, windowHeight / 2);
  if (dgir < 30) {
    giraffa = true;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

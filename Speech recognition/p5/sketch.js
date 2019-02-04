function preload(){
  // put preload code here
}

var SpeechRec;

function setup() {
  createCanvas(windowWidth,windowHeight);

  var speechRec = new p5.SpeechRec('en-US', parseResult);

  var continuous = true;
  var interim = true;
  speechRec.start(continuous, interim);

  function gotSpeech() {
    if (speechRec.resultValue) {
      createP(speechRec.resultString);
    }
    if (speechRec.resultString = "hello") {
      fill(255, 0, 0);
      ellipse(width/2, height/4, 100);
    }
    console.log(speechRec);
  }

  function parseResult() {
  			var mostrecentword = speechRec.resultString.split(' ').pop();

  	    if(mostrecentword.indexOf("white")!==-1) {
          fill(255);
          ellipse(width/2, height/4, 200);
  	    }

  	    else if (mostrecentword.indexOf("red")!==-1)
  	    {
          fill(255, 0, 0);
          ellipse(width/2, height/4, 200);
  	    }

        else if (mostrecentword.indexOf("green")!==-1)
        {
          fill(0, 255, 0);
          ellipse(width/2, height/4, 200);
        }

        else if (mostrecentword.indexOf("blue")!==-1)
        {
          fill(0, 0, 255);
          ellipse(width/2, height/4, 200);
        }

  	}

}



function draw() {

}

var branch = [];
var offset = -90.0;
var count;
var s_color;
var s_weight;

var isOverCircle;


function setup () {

  // primera pantalla (jungla)
	pixelDensity (displayDensity ());
	createCanvas (windowWidth, windowHeight);
	background (0);
	colorMode (RGB, 255, 255, 255, 100);
	branch.push (new CreateBranch (width / 2, height, width / 2, height - 80.0, 80.0, 0.0));
	count = 0;
	s_color = 0;
	s_weight = 0;

}


function draw () {

//rectangulo
push()
fill(0)
stroke(250)
strokeWeight(1)
rectMode(CENTER)
rect(width/2,height/2,width/3,height/2)
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





//fondo inicio plantas
	for (var i = 0; i < branch.length; i++) {
		branch[i].render ();
		branch[i].update ();


	}
}


//funcion primera pantalla con arboles
function CreateBranch (sx, sy, ex, ey, sl, sd) {
	var startx = sx;
	var starty = sy;
	var endx = ex;
	var endy = ey;
	var length = sl;
	var degree = sd;;
	var nextx = startx;
	var nexty = starty;
	var prevx = startx;
	var prevy = starty;
	var next_flag = true;
	var draw_flag = true;
	this.update = function () {
		nextx += (endx - nextx) * 0.4;
		nexty += (endy - nexty) * 0.4;
		s_color = int (count / 10.0);
		s_weight = 3.0 / (count / 100 + 1);
		if (abs (nextx - endx) < 1.0 && abs (nexty - endy) < 1.0 && next_flag == true) {
			next_flag = false;
			draw_flag = false;
			nextx = endx;
			nexty = endy;
			var num = int (random (2, 4));
			for (var i = 0; i < num; i++) {
				var sx = endx;
				var sy = endy;
				var sl = random (random (10.0, 20.0), length * 0.99);
				var sd = random (-24.0, 24.0);
				var ex = sx + sl * cos (radians (sd + degree + offset));
				var ey = sy + sl * sin (radians (sd + degree + offset));
				branch.push (new CreateBranch (sx, sy, ex, ey, sl, sd + degree));
			}
			count += 1;
		}
		if (branch.length > 6000) {
			count = 0;
			s_color = 255;
			s_weight = 0;
			var sx = random (width);
			var sl = random (0.0, 180.0);
			branch = [];
			branch.push (new CreateBranch (sx, height, sx, height - sl, sl, 0.0));
		}
	}
	this.render = function () {
		if (draw_flag == true) {
			stroke (s_color);
			strokeWeight (s_weight);
			line (prevx, prevy, nextx, nexty);
		}
		prevx = nextx;
		prevy = nexty;
	}
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

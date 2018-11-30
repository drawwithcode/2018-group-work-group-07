var branch = [];
var offset = -90.0;
var count;
var s_color;
var s_weight;


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
	for (var i = 0; i < branch.length; i++) {
		branch[i].render ();
		branch[i].update ();
	}
}



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


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

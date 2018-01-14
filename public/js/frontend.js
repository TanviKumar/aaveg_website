var iterations = -35;
var bg_image;
var full_rock;
var right_rock;
var left_rock;
var broken_rock;
var aaveg;
var broken = false;
var sizeVar = 24;
var x = 0, y = 0;
var bounced = false;
var complete = false;
var back_up = 0;
var back_down = 0;
var rock_diff = 24;

function preload() {
	bg_image = loadImage("imgs/asset1.png");
    full_rock = loadImage("imgs/full_rock.png");
    right_rock = loadImage("imgs/right_rock.png");
    left_rock = loadImage("imgs/left_rock.png");
    broken_rock = loadImage("imgs/broken_rock.png");
    aaveg = loadImage("imgs/Layer2.png");
    carved = loadImage("imgs/carved.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight); 
	background(51);
	stroke("#000000");
	fill(color(126, 166, 247));
    noStroke();
    rect(0,0,windowWidth, windowHeight);
    frameRate(60);
}

function draw() {
	iterations++;
	fill(color(126, 166, 247));
    noStroke();
	rect(0,0,windowWidth, windowHeight);
	background(bg_image);
	if(iterations*20 < windowHeight*3/5 && windowHeight > 750 && windowWidth > 420) {
		image(full_rock, windowWidth/2 - windowWidth/8, iterations*20, windowWidth/4, windowHeight/3);
		
	}
	else if (iterations*20 >= windowHeight*3/5  && bounced == false && complete == false && windowHeight > 750 && windowWidth > 420){
		bounced = true;
	}
	else if (bounced == true && complete == false && windowHeight > 750 && windowWidth > 420) {
		if (back_up <= windowHeight/20){
			image(full_rock, windowWidth/2 - windowWidth/8, windowHeight*2/5 - back_up, windowWidth/4, windowHeight/3);
			back_up += 10;
		}
		else if (back_down <= windowHeight/4){
			image(full_rock, windowWidth/2 - windowWidth/8, windowHeight*2/5 - back_up + back_down, windowWidth/4, windowHeight/3);
			back_down += 10;
		}
		else {
			complete = true;
		}
	}
	else if (complete == true && windowHeight > 750 && windowWidth > 420){
		if(rock_diff>17) {
			image(left_rock, windowWidth/2 - left_rock.width/6 - left_rock.width/rock_diff, windowHeight*3/4 - left_rock.height/6, left_rock.width/3, left_rock.height/3);
			image(right_rock, windowWidth/2 - right_rock.width/6 + right_rock.width/rock_diff, windowHeight*3/4 - right_rock.height/6, right_rock.width/3, right_rock.height/3);
			if(rock_diff - 1 > 17)
				rock_diff --;
		}
		image(aaveg, windowWidth/2 - aaveg.width/sizeVar, windowHeight/2 - aaveg.height/sizeVar, aaveg.width*2/sizeVar, aaveg.height*2/sizeVar);
		image(carved, windowWidth/2 - carved.width/sizeVar, windowHeight*3/4 - carved.height/sizeVar, carved.width*2/sizeVar, carved.height*2/sizeVar);
		if(sizeVar>10)
			sizeVar--;
		else
			noLoop();
	}
	else {
		image(left_rock, windowWidth/2 - left_rock.width/10 - left_rock.width/rock_diff, windowHeight*3/4 - left_rock.height/10, left_rock.width/5, left_rock.height/5);
		image(right_rock, windowWidth/2 - right_rock.width/10 + right_rock.width/rock_diff, windowHeight*3/4 - right_rock.height/10, right_rock.width/5, right_rock.height/5);
		image(aaveg, windowWidth/2 - aaveg.width/sizeVar, windowHeight/2 - aaveg.height/sizeVar, aaveg.width*2/sizeVar, aaveg.height*2/sizeVar);
		image(carved, windowWidth/2 - carved.width/sizeVar, windowHeight*3/4 - carved.height/sizeVar, carved.width*2/sizeVar, carved.height*2/sizeVar);
		if(sizeVar>10)
			sizeVar--;
		else
			noLoop();

	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

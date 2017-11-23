var color;
var randx;
var randy;
var randSize;

var canvas = document.getElementById('myCanvas');
var maxWidth = canvas.scrollWidth;
var maxHeight = canvas.scrollHeight;

var circles =[];

var sound1 = new Howl({
  src: ['assets/sounds/soundRoundOne/bubbles.mp3']
});
var sound2 = new Howl({
  src: ['assets/sounds/soundRoundOne/clay.mp3']
});
var sound3 = new Howl({
  src: ['assets/sounds/soundRoundOne/confetti.mp3']
});
var sound4 = new Howl({
  src: ['assets/sounds/soundRoundOne/corona.mp3']
});
var sound5 = new Howl({
  src: ['assets/sounds/soundRoundOne/dotted-spiral.mp3']
});
var sound6 = new Howl({
  src: ['assets/sounds/soundRoundOne/flash-1.mp3']
});
var sound7 = new Howl({
  src: ['assets/sounds/soundRoundOne/flash-2.mp3']
});
var sound8 = new Howl({
  src: ['assets/sounds/soundRoundOne/flash-3.mp3']
});
var sound9 = new Howl({
  src: ['assets/sounds/soundRoundOne/glimmer.mp3']
});
var sound10 = new Howl({
  src: ['assets/sounds/soundRoundOne/moon.mp3']
});
var sound11 = new Howl({
  src: ['assets/sounds/soundRoundOne/pinwheel.mp3']
});
var sound12 = new Howl({
  src: ['assets/sounds/soundRoundOne/piston-1.mp3']
});
var sound13 = new Howl({
  src: ['assets/sounds/soundRoundOne/piston-2.mp3']
});
var sound14 = new Howl({
  src: ['assets/sounds/soundRoundOne/piston-3.mp3']
});
var sound15 = new Howl({
  src: ['assets/sounds/soundRoundOne/prism-1.mp3']
});
var sound16 = new Howl({
  src: ['assets/sounds/soundRoundOne/prism-2.mp3']
});
var sound17 = new Howl({
  src: ['assets/sounds/soundRoundOne/prism-3.mp3']
});
var sound18 = new Howl({
  src: ['assets/sounds/soundRoundOne/splits.mp3']
});
var sound19 = new Howl({
  src: ['assets/sounds/soundRoundOne/squiggle.mp3']
});
var sound20 = new Howl({
  src: ['assets/sounds/soundRoundOne/strike.mp3']
});
var sound21 = new Howl({
  src: ['assets/sounds/soundRoundOne/suspension.mp3']
});
var sound22 = new Howl({
  src: ['assets/sounds/soundRoundOne/timer.mp3']
});
var sound23 = new Howl({
  src: ['assets/sounds/soundRoundOne/ufo.mp3']
});
var sound24 = new Howl({
  src: ['assets/sounds/soundRoundOne/veil.mp3']
});
var sound25 = new Howl({
  src: ['assets/sounds/soundRoundOne/wipe.mp3']
});
var sound26 = new Howl({
  src: ['assets/sounds/soundRoundOne/zig-zag.mp3']
});

function createRandomColor() {
	//Create a random RGB value each call.
	color = "RGB(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

function createRandomPos() {
	//Create a random set of values each call.
 	randx = Math.floor(Math.random() * maxWidth) ;
 	randy = Math.floor(Math.random() * maxHeight);
 	randSize = Math.floor(Math.random() * 250) + 100;
 	if (randx > (maxWidth - randSize)) {
 		randx = randx - 500;
 	}
 	 if (randx < (0 + randSize)) {
 		randx = randx + 500;
 	}
 	 if (randy < (0 + randSize)) {
 		randy = randy + 250;
 	}
 	 if (randy > (maxHeight - randSize)) {
 		randy = randy - 250;
 	}
}

$(document).keydown(function(e) {
		createRandomColor();
		switch (e.which) {
        case 65: 
        	sound1.play();
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#C485B6"; 
        	circles.push(circleTest); 
            break;
        case 66: 
        	sound2.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#BF8173"; 
        	circles.push(circleTest); 
            break;
        case 67: 
        	sound3.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#511EC3"; 
        	circles.push(circleTest);  
            break;
        case 68: 
        	sound4.play();
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "orange"; 
        	circles.push(circleTest); 
            break;
        case 69: 
        	sound5.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#D62EEC"; 
        	circles.push(circleTest); 
            break;
        case 71: 
        	sound6.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#B5F725"; 
        	circles.push(circleTest); 
            break;
        case 72: 
        	sound7.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#0AD051"; 
        	circles.push(circleTest); 
            break;
        case 73: 
        	sound8.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#EE830F"; 
        	circles.push(circleTest); 
            break;
        case 74: 
        	sound9.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#2DD2D8"; 
        	circles.push(circleTest); 
            break;
        case 75: 
        	sound10.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#EEB656"; 
        	circles.push(circleTest); 
            break;
        case 76: 
        	sound11.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#2F56E6"; 
        	circles.push(circleTest); 
            break;
        case 77: 
        	sound12.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#184FE9"; 
        	circles.push(circleTest); 
            break;
        case 78: 
        	sound13.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#1C9761"; 
        	circles.push(circleTest); 
            break;
        case 79: 
        	sound14.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#B6C886"; 
        	circles.push(circleTest); 
            break;
        case 80: 
        	sound15.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#38A881"; 
        	circles.push(circleTest); 
            break;
        case 81: 
        	sound16.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#48CA9C"; 
        	circles.push(circleTest); 
            break;
        case 82: 
        	sound17.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#95FF7D"; 
        	circles.push(circleTest); 
            break;
        case 83: 
        	sound18.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#92707B"; 
        	circles.push(circleTest); 
            break;
        case 84: 
        	sound19.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#D93B6F"; 
        	circles.push(circleTest); 
            break;
        case 85: 
        	sound20.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#452207"; 
        	circles.push(circleTest); 
            break;
        case 86: 
        	sound21.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#C92D26"; 
        	circles.push(circleTest); 
            break;
        case 87: 
        	sound22.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#72D694"; 
        	circles.push(circleTest); 
            break;
        case 88: 
        	sound23.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#803578"; 
        	circles.push(circleTest); 
            break;
        case 89: 
        	sound24.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#4B48C3"; 
        	circles.push(circleTest); 
            break;
        case 90: 
        	sound25.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#BB7837"; 
        	circles.push(circleTest); 
            break;
        case 70: 
        	sound26.play(); 
        	createRandomPos();
        	var circleTest = new Path.Circle(new Point(randx, randy), randSize);
        	circleTest.fillColor = "#65E8F8"; 
        	circles.push(circleTest); 
            break;
}
});


var circleSize = 30;
var circleSpace = circleSize*2;
var xstart = circleSize;
var ystart = circleSize;
var xpos = xstart;
var ypos = ystart;
var rows = 5;
var cols = 4;
paper.install(window);

window.onload = function() {
	// Setup directly from canvas id:
	var tool = new Tool();
	paper.setup('myCanvas');
	view.draw();

	view.onFrame = function(event) {
	for (var i = 0; i < circles.length; i++){
	circles[i].scale(0.95);
	circles[i].fillColor.hue +=1;
}
}
// 			for (i = 0; i < rows; i++){
// 	for (j = 0; j < cols; j++){
// 		createRandomColor();
// 	new Path.Circle(new Point(xpos, ypos), circleSize).fillColor = color;
// 	xpos +=circleSpace;
// }
// xpos = xstart;
// ypos += circleSpace;
// }


}
document.getElementById('openKeyboard').addEventListener('click', function(){
    var inputElement = document.getElementById('hiddenInput');
    inputElement.style.visibility = 'visible'; // unhide the input
    inputElement.focus(); // focus on it so keyboard pops
    inputElement.style.visibility = 'hidden'; // hide it again
});


//view.draw();

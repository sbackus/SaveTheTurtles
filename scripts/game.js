window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback){
				window.setTimeout(callback, 1000/60);
			};
})();

var gameWidth = 800;
var gameHeight = 900;

var images = [];
var doneImages = 0;
var requiredImages = 0;

var gameCanvas = document.getElementById("gameCanvas").getContext("2d");

var keys = [];

var key = {
	up: 38,
	down: 40,
	left: 37,
	right: 39,
	space: 32,
	w: 87,
	a: 65,
	s: 83,
	d: 68,
}

var mouseX = 0;
var mouseY = 0;

document.addEventListener('mousemove', function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  if( mouseX <= gameWidth && mouseY <= gameHeight ){
  	document.body.style.cursor = "none";
  }else{
  	document.body.style.cursor = "default";
  }

});

function loop(){
	
	requestAnimFrame(function(){
		loop();
	});
	update();
	render();

}

$(document).keydown(function(e){
	e.preventDefault();
	keys[e.keyCode ? e.keyCode : e.which] = true;
});

$(document).keyup(function(e){
	e.preventDefault();
	delete keys[e.keyCode ? e.keyCode : e.which];
});


function init(){
	loop();
	// DON'T PUT ANYTHING AFTER THE GAME LOOP STARTS!
}

function update(){

}

function render(){
	//draw background beach image
	gameCanvas.drawImage(images[0], 0, 0);

	//draw hand 
	gameCanvas.drawImage(images[1], mouseX, mouseY)
}

gameCanvas.font = "bold 50px monaco";
gameCanvas.fillStyle = "white";
gameCanvas.fillText("loading",gameWidth/2-100,gameHeight/2);

loadImages(["images/beach.png", "images/open-hand.png"]);

checkImages();
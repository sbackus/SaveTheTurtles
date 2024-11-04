function Turtle(x,y) {
	this.image = images[2];
	this.x = x;
	this.y = y;


	this.draw =  function(){
		gameCanvas.drawImage(this.image, this.x, this.y);
	}

	this.update = function(){
		this.y -= 1;
	}
}
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".button");


// first task
color1.value = "#0ffff0";
color2.value = "#0f55f5";

// second task 
updateColor();

function randomNumber(){ 
	return Math.floor(Math.random()*256);
}

function toHex(number){
	var hex = number.toString(16);
	console.log(hex)
  	return hex.length == 1 ? "0" + hex : hex;
}

function getRandomColor() {
	var randomColor = 
		"#" 
		+ toHex(randomNumber())
		+ toHex(randomNumber())
		+ toHex(randomNumber())
	return randomColor;
}

function setRandomGradient(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	updateColor();
}


function updateColor(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+", "
	+ color2.value
	+ ")";
	h3.textContent = body.style.background + ";";
}

randomButton.addEventListener("click", setRandomGradient);
color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);


const kids = {
	name: 'David'
}



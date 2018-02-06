// alert("Connected!");

var colors = generateRandomColors(6);
var h1 =  document.querySelector("h1");
var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

var numSquares = 6;

colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++)
{
	//add initial colors to squares.
	squares[i].style.backgroundColor = colors[i];

	// add event listeners
	squares[i].addEventListener("click", function(){
		// get the color of clicked square and compare it to the picked color
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!!";
			changeToCorrectColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Agian?"
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeToCorrectColor(color)
{
	// once the right color is picked change the color of all squares to that color
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	// pick a random color using random function
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) 
	{
		// get random color and push it into array
		arr[i] = randomColor();
	}
	// return that array
	return arr;
}

function randomColor()
{
	// pick a red from 0 -255
	var r = Math.floor(Math.random()*256);
	// pick a green from 0 -255
	var g =	Math.floor(Math.random()*256);
	// pick a blue from 0 -255
	var b =	Math.floor(Math.random()*256);
	return"rgb("+r+", "+g+", "+b+")";
}

resetButton.addEventListener("click", function()
{
	reset();
});

for(var i=0; i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function()
	{	
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset()
{
	colors = generateRandomColors(numSquares);
	// pick a new color to be winner
	pickedColor = pickColor();
	// change message in h1 to the picked color
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}
// easyBtn.addEventListener("click",function()
// {
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor	= pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++)
// 	{
// 		if(colors[i])
// 		{
// 			squares[i].style.backgroundColor = colors[i]
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function()
// {
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares);
// 	pickedColor	= pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++)
// 	{
// 		squares[i].style.backgroundColor = colors[i]
// 		squares[i].style.display = "block";
// 	}
// });

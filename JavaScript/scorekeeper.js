// alert("Connected!");
var p1button = document.querySelector("#player1");
var p1Display = document.getElementById("p1score");
console.log(p1Display);
var p2button = document.getElementById("player2");
var p2Display = document.getElementById("p2score");

console.log(p2Display);
var resetButton =  document.getElementById("reset");
var scoreToWIn = document.querySelector("input[type='number']");


var p1Score=0;
var p2Score=0;

var gameOver = false;
var winningScore = 5;
var winningNumber = document.getElementById("winningNumber");

p1button.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score === winningScore)
		{
			gameOver = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score === winningScore)
		{
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function()
{
	reset();
});

function reset()
{
	p1Score=0;
	p2Score=0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}

scoreToWIn.addEventListener("change",function()
{
	winningNumber.textContent = scoreToWIn.value;
	winningScore= Number(scoreToWIn.value);
	reset();
});
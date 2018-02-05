// alert("Connected!");
var button = document.querySelector("button");

button.addEventListener("click",buttonClicked);

function buttonClicked()
{
	// if (document.body.style.background == "purple")
	// {
	// 	document.body.style.background = "white";
	// }
	// else
	// {
	// 	document.body.style.background = "purple";
	// }
	
	// alternate solution to toggle the background colour
	document.body.classList.toggle("purple");
}
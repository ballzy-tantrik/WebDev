console.log("Connected!");
var todos = [];

var input = prompt("What would you like to do?");

while((input!=="quit"))
{
	if((input === "List")||(input ==="list") )
	{
		console.log(todos);
	}
	else if((input === "New")||(input === "new"))
	{
		var newTodo = prompt("What would you like to add");
		todos.push(newTodo);
	}
	input = prompt("What would you like to do?");
}

console.log("You quit the app!");
// check off todos by clicking

$("ul").on("click","li",function(){
	// if li gray turn it black else turn it grey
	$(this).toggleClass("completed");
});

// click on X to delete to do item
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// stopPropagation helps in the event triggering the parent containers from triggering the event
	event.stopPropagation();
});

// creation of new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var value = $(this).val();/*New To Do list input*/
		$(this).val("");/*Clear the text input field*/
		/*Create a new Li and add it to the current list*/
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+value+"</li>");
	}

});

$("h1").on("click",".fa-plus-square",function(){
	console.log("clicked the plus");
	$("input[type='text']").fadeToggle();
});


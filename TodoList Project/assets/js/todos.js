// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


//adding new
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-eraser'></i></span> " + todoText +"</li");
		//clear out input
		$(this).val("");
	}
});

//making the plus button show and hide
$("#plus").on("click", function(){
	$("input[type='text']").fadeToggle(500);
});
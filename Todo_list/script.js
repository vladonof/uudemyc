
var todos = [];
var input = prompt("What would like to do?");

while(input != "quit"){
	if(input == "list"){
		listTodos();	
	}else if(input == "new"){
		addTodo();
	}else if(input ==="delete"){
		deleteTodo();
	}
	var input = prompt("What would like to do?");
}
console.log("Ok, you quit the app");

function listTodos(){
	console.log("**********")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********")
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	var deletedIndex = prompt("Enter index of todo to delete");
	//splice(start_deleting, #how_many);
	todos.splice(deletedIndex, 1);
	console.log("Deleted todo");
}
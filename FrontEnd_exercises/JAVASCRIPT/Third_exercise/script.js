var age = prompt("What is your age?");
if(age < 0){
	console.log("ERROR! Your age can't be a negative number.");
}
else if(age < 18){
	console.log("You can't enter");
}
else if(age < 21){
	console.log("You can enter but you can't drink");
}
else{
	console.log("Come on in. You can drink")
}

//Checking if age is equal to 21
if(age == 21){
	console.log("Happy 21st birthday!!");
}

//Checking if age is an odd number
if((age % 2) == 1){
	console.log("Your age is odd");
}

//Checking if age is a perfect square
if(Math.sqrt(age) % 1 === 0){
	console.log("Perfect square");
}
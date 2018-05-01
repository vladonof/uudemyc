//Create secret number
var secretNumber = 4;
//Ask user for guess
var guess = prompt("Guess a number");
//Check guess
if(guess == secretNumber){
	alert("YOU GOT IT RIGHT!");
}
//Check if guess is hi/lo to secret number
else if(guess > secretNumber){
	alert("Too high, guess again");
}
else{
	alert("Too low, guess again");
}




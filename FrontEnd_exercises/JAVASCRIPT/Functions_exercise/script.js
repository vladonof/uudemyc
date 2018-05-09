//This function takes a single numeric argument and returns
//true if the number is even, and false otherwise
function isEven(num){
	if(num % 2 == 0)
		return true;
	return false;
}

//This function takes a single numeric argument and returns
//the factorial of that number
function factorial(num){
	var result = 1;
	if(num == 0)
		return 1;
	for(var i = 1; i <= num; i++)
		result *= i;
	return result;
}

//This function takes a single kebab-cased string argument
//and returns the snake_cased version
function kebabToSnake(txt){
	for(i = 0; i < txt.length; i++)
		if(text[i] == "-")
			var txt = txt.replace(txt[i], "_");
	return txt;
}
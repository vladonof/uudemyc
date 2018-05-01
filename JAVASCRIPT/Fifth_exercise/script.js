var firstTask = -10;
var secondTask = 10;
var thirdTask = 300;
var forthTask = 5;

console.log("Print all numbers between -10 and 19");
while(firstTask < 19){
	console.log(firstTask);
	firstTask++;
}

console.log("Print all even numbers between 10 and 40");
while(secondTask < 40){
	if(secondTask % 2 == 0)
		console.log(secondTask);
	secondTask++;
}

console.log("Print all odd numbers between 300 and 333");
while(thirdTask < 333){
	if(thirdTask % 2 == 1)
		console.log(thirdTask);
	thirdTask++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while(forthTask < 50){
	if(forthTask % 5 == 0 && forthTask % 3 == 0)
		console.log(forthTask);
	forthTask++;
}
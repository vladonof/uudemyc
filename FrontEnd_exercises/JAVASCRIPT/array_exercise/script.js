function printReverse(array){
	for(var i = array.length - 1; i >= 0; i--)
		console.log(array[i]);
}

function isUniform(array){
	var firstValue = array[0];
	for(var i = 1; i < array.length; i++)
		if(firstValue != array[i])
			return false;
	return true;
}

function sumArray(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++)
		sum += array[i];
	return sum;
}

function max(array){
	max = array[0];
	for(var i = 1; i < array.length; i++)
		if(max < array[i])
			max = array[i];
	return max;
}
// This script will ask the question "Are we there yet"
// until it is answered with "yes" or "yea"

var answer = prompt("Are we there yet?");
while((answer != "yes") || (answer != "yea")){
	if(answer == "yes" || answer == "yea")
		break;
	var answer = prompt("Are we there yet?");	
}
alert("Yay, we finally made it!");

//Text changes when button is pressed
var button = document.querySelector("button");
var paragraph = document.querySelector("p");
button.addEventListener("click", function(){
	paragraph.textContent = "Someone has clicked the button!";
});
//Color changes when li is pressed.
var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}
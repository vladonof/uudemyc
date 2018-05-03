// This script changes the background from white
// to purple and vicevera
var btn = document.querySelector("button");
var body = document.getElementsByTagName("body")[0];
var isWhite = 1;
btn.addEventListener("click", function(){
	if(isWhite){
		body.style.background = "purple";
		isWhite = 0;
	}
	else{
		body.style.background = "white";
		isWhite = 1;
	}
});
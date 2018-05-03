// This script changes the background from white
// to purple and vicevera
var btn = document.querySelector("button");
var body = document.getElementsByTagName("body")[0];
var isWhite = 1;

// btn.addEventListener("click", function(){
// 	if(isWhite){
// 		body.style.background = "purple";
// 	}
// 	else{
// 		body.style.background = "white";
// 	}
// 	isWhite = !isWhite;
// });



btn.addEventListener("click", function(){
		document.body.classList.toggle("purple");
});


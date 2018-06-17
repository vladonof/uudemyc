var css  = document.querySelector("h3"),
		col1 = document.querySelector(".color1"),
		col2 = document.querySelector(".color2"),
		body = document.getElementById("gradient");


function setGradient(){
		body.style.background = `linear-gradient(to right, ${col1.value}, ${col2.value})`;

		css.textContent = `${body.style.background};`;
}


col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient);
//********************************************************
//declaring variables
//********************************************************
var p1Button = document.querySelector("#p1Button");
var p2Button = document.getElementById("p2Button");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var gameOver = false;
var resetButton = document.getElementById("reset");
var maxScore = 5;

//********************************************************
//When player1/2 button are pressed the score increments
//********************************************************
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === maxScore){
			gameOver = true;
			p1Display.classList.add("green");
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === maxScore){
			gameOver = true;
			p2Display.classList.add("green");
		}
		p2Display.textContent = p2Score;
	}
});
//********************************************************
//resets score
//********************************************************
resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	maxScore = Number(this.value);
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
}
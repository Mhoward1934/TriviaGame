var timer = 30
var display = 00;
var correctAns = 0;
var qAns = ["Apple", "Ask Me Anything", "Central Processing Unit", "Twitter", "Super Nintendo Entertainment System"];
var incorrectAns = 0;
var score = 0;

//Counts correct and incorrect choices
function count() {
    correctAns === qAns;
    correctAns++;
    document.getElementById("correctAns").innerHTML = Correct;
    correctAns !== qAns;
    incorrectAns++;
    document.getElementById("incorretAns").innerHTML = Incorrect;
}
//Starts the timer
//function timer() {
      intervalId = setInterval(decrement, 1000);
      var decrement = timer--;
        $("#display").html(display);
//}

//When the player clicks the start game button the button is hiddent and the timer starts
//$("button").on(click)
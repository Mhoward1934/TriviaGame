var timer = 30
var display = 00;
var correctAns = 0;
var questionAns = qAns;
var qAns = ["Apple", "Ask Me Anything", "Central Processing Unit", "Twitter", "Super Nintendo Entertainment System"];
var incorrectAns = 0;
var score = 0;
var intervalId;


function decrement() {
    timer--;
    $("#display").html(timer);
    if (timer === 0) {
        stop()
    }
}
//Counts correct and incorrect choices
function count() {
    questionAns === qAns;
    correctAns++;
    document.getElementById("correctAns").innerHTML = correctAns;
    if (questionAns !== qAns) {
        incorrectAns++;
        document.getElementById("incorrectAns").innerHTML = incorrectAns;
    }  
}

//When the player clicks the "Start Game" button the button is hidden and the timer starts
$("button").on("click", function () {
    intervalId = setInterval(decrement, 1000);
    timer === 30;
    $(this).hide();
    //console.log();

    //Tracking player answers
    $("#questionAns").on("click", function () {
        count()
    })




})




function stop() {
    clearInterval(intervalId);
}

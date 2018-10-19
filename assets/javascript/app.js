var timer = 30
var display = 00;
var correctAns = 0;
var question1 = [];
var qAns = ["Apple", "Ask Me Anything", "Central Processing Unit", "Twitter", "Super Nintendo Entertainment System"];
var incorrectAns = 0;
var intervalId;
//console.log(question1);

function decrement() {
    timer--;
    $("#display").html(timer);
    if (timer === 0) {
        stop()
    }
}
//Function to track correct and incorrect choices
function count() {
    if (questionAns === "Apple") {
        correctAns++;
        document.getElementById("correctAns").innerHTML = correctAns;
    } else {
        (questionAns !== "Apple");
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

    //When the player clicks on a radio button the response is collected using the "function count" as outlined above
    $("#questionAns").on("click", function () {
        count();
    })

    //Function "Stop" stops the timer when it reaches zero
})
function stop() {
    clearInterval(intervalId);
}


var timer = 30;
var display = 00;
var qAns = ["Apple", "Ask Me Anything", "Central Processing Unit", "Twitter", "Super Nintendo Entertainment System"],
    data = $("input"),
    correctAns = 0,
    incorrectAns = 0;
var intervalId;

function decrement() {
    timer--;
    $("#display").html(timer);
    if (timer === 0) {
        stop()
    }
}
//When the player clicks on a radio button the response is collected using the "function count" as outlined above
function count() {
    $(".data").on("click", function () {
        for (var i = 0; i < data.length; i++) {

            if (data[i].checked) {
                //console.log(form-check-input);
                if (qAns.indexOf(data[i].value) !== -1) {
                    correctAns++;
                    $("#correctAns").html = correctAns;
                }
                else {
                    incorrectAns++;
                    $("#incorrectAns").html = incorrectAns;
                }
            }
        }
    })   
}

//When the player clicks the "Start Game" button the button is hidden and the timer starts
$("button").on("click", function () {
    intervalId = setInterval(decrement, 1000);
    timer === 30;
    $(this).hide();
    //console.log();
    count()

//Hide results until time is up or player is done answering questions


//Function "Stop" stops the timer when it reaches zero
})
function stop() {
    clearInterval(intervalId);
}

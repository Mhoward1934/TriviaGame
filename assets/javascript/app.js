
var timer = 30;
var display = 00;
var qAns = ["Apple", "Ask Me Anything", "Central Processing Unit", "Twitter", "Super Nintendo Entertainment System"],
    data = $("input.value"),
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
//Function to track correct and incorrect choices
//function count() {
   // if (questionAns === qAns) {
   //     correctAns++;
   //     document.getElementById("correctAns").innerHTML = correctAns;
  //  } else {
   //     (questionAns !== qAns);
   //     incorrectAns++;
  //      document.getElementById("incorrectAns").innerHTML = incorrectAns;
  //  }
//}

//When the player clicks the "Start Game" button the button is hidden and the timer starts
$("button").on("click", function () {
    intervalId = setInterval(decrement, 1000);
    timer === 30;
    $(this).hide();
    //console.log();

    //When the player clicks on a radio button the response is collected using the "function count" as outlined above
    $(".data").click(function () {
        for (var i = 0; i < data.length; i++) {

            if (data[i].checked) {
                console.log(data);
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

    //Function "Stop" stops the timer when it reaches zero
})
function stop() {
    clearInterval(intervalId);
}

//Variables
var targetNumber;
var wins = 0;
var losses = 0;
var totalscore = 0;
var randomNumber;

random();

//Equations
function random() {
    randomNumber = [(Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1)];
    console.log(randomNumber);

    console.log("target number: ");

    targetNumber = [Math.floor(Math.random() * (120 - 19) + 19)];
    console.log(targetNumber);
    console.log("mouse");

    //Attaching number values to crystals
$("#blueCrystal").attr("data-crystalvalue", randomNumber[0]);
$("#purpleCrystal").attr("data-crystalvalue", randomNumber[1]);
$("#greenCrystal").attr("data-crystalvalue", randomNumber[2]);
$("#redCrystal").attr("data-crystalvalue", randomNumber[3]);
}

function resetGame() {
    $("#totalscore, #target-number").empty();
    totalscore = 0;

    random();
    
    $("#totalscore").text(totalscore);
    $("#target-number").text(targetNumber);
    console.log("monkey");
}


//To replace display in browswer with randomized numbers
$("#wins-text").text(wins);
$("#losses-text").text(losses);
$("#totalscore").text(totalscore);
$("#target-number").text(targetNumber);



//Adding an event when any crystal is clicked on
$(".crystalImages").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue); //changes the randomized "number" from string to actual number value type
    totalscore += crystalValue;
    $("#totalscore").text(totalscore);
    console.log(totalscore);

    //Alert win or loss and change win/loss counter
    if (totalscore == targetNumber) {
        alert("YOU WON!!! AWESOME JOB!!!");
        wins++;
        $("#wins-text").text(wins);
        resetGame();
    }
    else if (totalscore > targetNumber) {
        alert("Sorry, you lost...");
        losses++;
        $("#losses-text").text(losses);
        resetGame();
    }
})


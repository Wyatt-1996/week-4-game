$(document).ready(function () {

    var goalNumber = $('#goal-number').text(Math.floor((Math.random() * 120) + 19));

    var purpleGemNumber = Math.floor((Math.random() * 12) + 1);
    var redGemNumber = Math.floor((Math.random() * 12) + 1);
    var blueGemNumber = Math.floor((Math.random() * 12) + 1);
    var greenGemNumber = Math.floor((Math.random() * 12) + 1);

    var score = 0;

    var winOrLoss = '';
    var winsCounter = 0;
    var lossCounter = 0;

    function newGame() {

        // sets the goal number to a random number from 19-120
        goalNumber = $('#goal-number').text(Math.floor((Math.random() * 120) + 19));
        console.log(goalNumber);

        // creates 4 random numbers each from 1-12 for the crystal buttons
        purpleGemNumber = Math.floor((Math.random() * 12) + 1);
        redGemNumber = Math.floor((Math.random() * 12) + 1);
        blueGemNumber = Math.floor((Math.random() * 12) + 1);
        greenGemNumber = Math.floor((Math.random() * 12) + 1);

    };

    function addGemNumbers() {

        

    };



    newGame();
    // when you click a crystal its value is added to the score
    $('.crystal').on('click', function () {

        $('#score').text(score + purpleGemNumber);
    });

    // all random values reset after win, loss or reload
    // the value of every crystal you click gets added to the previous one
    // get the sum of the values of crystals clicked to = the goal number & win
    // sum goes higher than goal number & you lose

});
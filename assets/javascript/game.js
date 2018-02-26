$(document).ready(function () {

    // set win or loss to empty string
    var winOrLoss = '';

    // set counters to 0
    var winsCounter = 0;
    var lossCounter = 0;

    // set global score variable
    var score;

    newGame();
    // game
    function newGame() {

        // set score to 0
        score = 0;

        // show 0 in score box
        $('#score').text(score);

        // sets the goal number to a random number from 19-120
        var goalNumber = (Math.floor((Math.random() * 120) + 19));
        console.log(goalNumber);

        var $goalNumDiv = $('#goal-number');

        $goalNumDiv.text(goalNumber);

        // creates 4 random numbers each from 1-12 for the crystal buttons
        purpleGemNumber = Math.floor((Math.random() * 12) + 1);
        console.log(purpleGemNumber + ' purple');

        redGemNumber = Math.floor((Math.random() * 12) + 1);
        console.log(redGemNumber + ' red');

        blueGemNumber = Math.floor((Math.random() * 12) + 1);
        console.log(blueGemNumber + ' blue');

        greenGemNumber = Math.floor((Math.random() * 12) + 1);
        console.log(greenGemNumber + ' green');

        // check if score & goal number match after every new addition
        function matchNumbers(score) {

            console.log(score + ' :score');
            console.log(goalNumber + ' :Goal');

            // win if score = goalnumber
            if (score === goalNumber) {

                $('.win-lose').text('You Win!');
                $('win-lose').css('color', 'darkgreen')

                winsCounter++;
                $('#wins').text('Wins: ' + winsCounter);

                newGame();
            }

            // lose if score > goalnumber
            else if (score > goalNumber) {

                $('.win-lose').text('You Lost.');
                $('.win-lose').css('color', 'red');

                lossCounter++;
                $('#losses').text('Losses: ' + lossCounter);

                newGame();
            }

        };

        // when you click a crystal its value is added to the score
        $('.crystal').on('click', function () {

            // the value of every crystal you click gets added to the previous one
            if (this.id === 'purple') {
                $('#score').text(score += purpleGemNumber);
                console.log(score);
            }
            else if (this.id === 'red') {
                $('#score').text(score += redGemNumber);
                console.log(score);
            }
            else if (this.id === 'blue') {
                $('#score').text(score += blueGemNumber);
                console.log(score);
            }
            else if (this.id === 'green') {
                $('#score').text(score += greenGemNumber);
                console.log(score);
            }

            matchNumbers(score);

            // remove win or loss text
            $('.win-lose').text(winOrLoss);

        });

    };

});

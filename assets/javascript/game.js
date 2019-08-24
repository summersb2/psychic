// what do I need to do?//
//Guesses left will be ten and decrease with each guess//
//Guesses to far will be 0 and increase till 5//
//wins and losses will start at 0 and each increase based on the results of the game as many times as the game is played//
//I need to generate a random letter function with 26 possible options//

// I need to create an array of choices//
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// I need to set variables for keeping track of wins losses and guesess//
var wins = 0;
var losses = 0;
var numGuesses = 5;
var computerGuess = [];
var lettersGuessed = [];

// This I was trying another way and honestly had to google this way but it works so fuck it//

window.onload = function () {
    var computerChosen = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(computerGuess);

}

//Create if statements to determine the results of the game//


document.onkeyup = function (event) {


    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    if ((userGuess === computerGuess[0]) && (numGuesses > 0)) {
        wins++;
        numGuesses = 5;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var computerChosen = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(computerChosen);


    }

    else if ((userGuess !== computerGuess[0]) && (numGuesses > 0)) {
        numGuesses = numGuesses - 1;

    }

    else {
        losses++;
        numGuesses = 5;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var computerChosen = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(computerChosen);

    }

    var html = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + numGuesses + "</p>" +
        "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector(".box").innerHTML = html;
}
// Create Variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var chancesLeft = 9;
var guessed = [];
var compGuess = "";


// Variables that reference an ID in the HTML
var winTotal = document.getElementById("win-total");
var lossTotal = document.getElementById("loss-total");
var guessesLeft = document.getElementById("guessID");
var letterGuessed = document.getElementById("letters-guessed");




            // FUNCTIONS
compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(compGuess);

document.onkeyup = function (event) {
    console.log(event.key);

    if (event.key.toLowerCase() == compGuess) {
        console.log("You Guessed " + event.key + " - Correct");
        guessed = [],
        letterGuessed.textContent = "Your Guesses So Far: " + guessed;
        win++;
        winTotal.textContent = "Wins: " + win;
        console.log("You have " + win + " wins");
        compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(compGuess);
        
        
        

    }
    else {
        console.log("You Guessed " + event.key + " - Incorrect, Try Again");
        chancesLeft--;
        

    }

    guessed.push(event.key);
    console.log(guessed);
}
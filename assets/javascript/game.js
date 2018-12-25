var plants = ["Jade", "Air Plant", "Christmas Cactus", "Spider"];
var wins;
var remainingLetters;
var wordSpell= [];
var userGuess;
var guessLeft = 6;
var randomWord = "";

// Create function to pick the  from list of words

function initializeGame() {

  // Reset the guesses back to 0.
  numGuesses = 6;
  // Create function to pick the  from list of words
  randomWord = plants[Math.floor(Math.random() * plants.length)];
  wordSpell = randomWord.split("");
  numDash = randomWord.length;
  console.log(" This is the randomWord " + randomWord);
  goodLtrDashes = [];
  wrongGuesses = [];

  // Put in the dashes for the letters in chosen plant
  for (var i = 0; i < numDash; i++) {
    goodLtrDashes.push("_");
  }

  console.log("The number of Dashes: " + goodLtrDashes);
  document.getElementById("guesses").innerHTML = numGuesses;

    document.getElementById("nameSpace").innerHTML = goodLtrDashes.join(" ");
  document.getElementById("usedLetter").innerHTML = wrongGuesses.join(" ");
}


function checkLtrs(letter) {
  console.log("Inside checkLtrs - did I receive a ltr? " + userGuess)

  // a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numDash; i++) {

    if (randomWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numDash; j++) {

      // Populate the goodLtrDashes with every instance of the letter.
      if (randomWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        goodLtrDashes[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(goodLtrDashes);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

    console.log("WinCount: " + wins + "  Gusesses Left: " + guessLeft);

  document.getElementById("guesses").innerHTML = guessLeft;
  document.getElementById("usedLetter").innerHTML = goodLtrDashes.join(" ");

    if (wordSpell.toString() === goodLtrDashes.toString()) {
    wins++;
    alert("You win!");

    initializeGame();
  } 
  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose");
    // Restart the game
    initializeGame();

  }

}



initializeGame();

document.onkeyup = function (event) {
 console.log("Did we register a keyboad click? " + event)
  letterGuessed = String.fromCharCode(event.which).toLowerCase();
  roundComplete();
};



function reset() {
  wins = 0;
  randomWord = "";
  remainingLetters = "";
}
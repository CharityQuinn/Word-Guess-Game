var plants = ["jade", "air plant", "christmas cactus", "spider"];
var wins = 0;
var remainingLetters;
var wordSpell = [];
var userGuess;
var guessLeft = 9;
var randomWord = "";

// Create function to pick the  from list of words

function initializeGame() {

  numGuesses = 9;
  // Assign picked word to a variable
  randomWord = plants[Math.floor(Math.random() * plants.length)];
  wordSpell = randomWord.split("");
  console.log(wordSpell)
  numDash = randomWord.length;
  console.log(" This is the randomWord " + randomWord);
  goodLtrDashes = [];
  wrongLtr = [];

  // Put in the dashes in chosen plant
  for (var i = 0; i < numDash; i++) {
    goodLtrDashes.push("_");
  }

  console.log("The number of Dashes: " + goodLtrDashes);
  document.getElementById("guesses").innerHTML = numGuesses;

  document.getElementById("nameSpace").innerHTML = goodLtrDashes.join(" ");
  document.getElementById("usedLetter").innerHTML = wrongLtr.join(" ");
}


function checkLtrs(letter) {
  console.log("Inside checkLtrs - did I receive a ltr? " + userGuess);

  var letterInWord = false;
  for (var i = 0; i < numDash; i++) {
    if (randomWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numDash; j++) {
      if (randomWord[j] === letter) {
       dashes[j] = letter;
      }
    }
    console.log(dashes);
  } 
  else {
    wrongLtr.push(letter);
    numGuesses--;

  }

}



// check the user's word function
function checkLetter() {

  console.log("Number of wins: " + wins + "  Gusesses Left: " + guessLeft);

  document.getElementById("guesses").innerHTML = guessLeft;
  document.getElementById("usedLetter").innerHTML = goodLtrDashes.join(" ");

  if (wordSpell.toString() === goodLtrDashes.toString()) {
    wins++;
    alert("You win!");

    initializeGame();
  } else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose");
    // Restart the game
    initializeGame();

  }

}



initializeGame();

$(".imgcrys").click(function () {
         
      document.on('keyup', evaluateInput);
      
      console.log("Did we register a keyboad click? " + event);
      userGuess = String.fromCharCode(event).toLowerCase();
      checkLetter();
})
      // $(document).on('keyup', function () {
      //   console.log([object KeyboardEvent]);
      //   console.log("Did we register a keyboad click? " + event);
      //   userGuess = String.fromCharCode(event).toLowerCase();
      //   checkLetter();
      // });




      function reset() {
        wins = 0;
        randomWord = "";
        remainingLetters = "";
      }
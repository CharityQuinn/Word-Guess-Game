var plants = ["Jade", "Air Plant", "Christmas Cactus", "Spider"];
var wins;
var remainingLetters;
var lettersGuessed = [];
var letterBlanks = [];
var guessArray = [];
var randomWord = "";

// Create function to pick the  from list of words
function inititalizeGame() {
 remainingLetters = plants.length;
 console.log(remainingLetters);
  randomWord = words[Math.floor((Math.random()=plants.length))];
  console.log(randomWord);
}
console.log(randomWord);
  for (var i = 0; i < randomWord.length; i++) {
    letterBlanks.push("_");
 console.log(plants.length); 
}
document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
}
// Set up the answer array

function newFunction() {
var remainingLetters = newFunction();
while (remainingLetters > 0) {
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
}
return word.length;
}


// If letter matches, replace the dash with the letter user typed 
function LtrCheck() {
  for (let i = 0; i < randomWord.length; i++) {
    if (userGuess == randomWord[i]) {
      dashes = dashes.replaceAt(i, userGuess);
      console.log(dashes);
      wins = wins + 1;
      alert("You guessed right!");
    }
  }
}

//create character replacement function
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr((index + 1), this.length);
  console.log()
}
function reset () {
wins = 0;
randomWord = "";
remainingLetters = "";
}



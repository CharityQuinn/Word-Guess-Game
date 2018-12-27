var wins = 0;
var numGuess = 9;
var numSpaces;
var pickedLtr = "";

// array variables
var plants = ["jade", "air plant", "xmas cactus", "spider"];
var pickedWord = [];
var dashes = [];
var wrongLtr = [];
var wordSplit = [];
var randomWord = [];



randomWord = plants[Math.floor(Math.random() * plants.length)];
wordSplit = randomWord.split("");
numSpaces = randomWord.length;
console.log(" This is the randomWord " + wordSplit);

// Put in the dashes in chosen plant
for (var i = 0; i < numSpaces; i++) {
  dashes.push("_");
}

console.log("The number of Dashes: " + dashes);
document.getElementById("guesses").innerHTML = numGuess;

document.getElementById("nameSpace").innerHTML = dashes.join(" ");
document.getElementById("usedLetter").innerHTML = wrongLtr.join(" ");




document.onkeyup = function (event) {
  console.log("I am in document.onkeyup " + event);
  // Converts all key clicks to lowercase letters.
  pickedLtr = String.fromCharCode(event.which).toLowerCase();
  console.log("This is the letter going to evaluateInput " + pickedLtr);
  evaluateInput(pickedLtr);

  console.log("This is the user input " + pickedLtr);
  evaluateInput(pickedLtr);



  function evaluateInput() {
    console.log("In evaluateInput, has pickedWord arrived? " + pickedLtr);
    var letter = pickedLtr;
    console.log("Did letter get a value of pickedLtr? " + letter);
    var letterInWord = false;
    for (var i = 0; i < numSpaces; i++) {
      if (randomWord[i] === letter) {
        letterInWord = true;
        console.log("The letter matches and boolean is " + letterInWord);
      }
    }

    if (letterInWord) {
      for (var j = 0; j < numSpaces; j++) {

        if (randomWord[j] === letter) {
          dashes[j] = letter;
          console.log("Dashes now has a letter " + dashes);
          document.getElementById("nameSpace").innerHTML = dashes.join(" ");

        }
      }
      console.log(dashes);
    } else {
      console.log("The letter was wrong")

      document.getElementById("usedLetter").innerHTML = wrongLtr.join(" ");
      numGuess--;
      console.log("These are wrong letters " + wrongLtr + "Guesses now is " + numGuess);
      document.getElementById("guesses").innerHTML = numGuess;

    }


    if (dashes.toString() === randomWord.toString()) {
      console.log("Does the whole word match?");
      wins++;
      alert("You win!");
      document.getElementById("wins").innerHTML = wins;

      guesses = 0;
      guessesLeft = 7;
    }
  }
}
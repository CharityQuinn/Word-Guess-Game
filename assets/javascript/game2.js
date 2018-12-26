var wins = 0;
var numGuess = 9;
var numSpaces;

// array variables
var plants = ["jade", "air plant", "xmas cactus", "spider"];
var pickedWord = [];
var dashes = [];
var wrongLtr = [];
var wordSplit = [];
var randomWord = [];



randomWord = plants[Math.floor(Math.random() * plants.length)];
wordSpell = randomWord.split("");
numSpaces = randomWord.length;
console.log(" This is the randomWord " + randomWord);

// Put in the dashes in chosen plant
for (var i = 0; i < numSpaces; i++) {
  pickedWord.push("_");
}
console.log("The number of Dashes: " + pickedWord);
document.getElementById("guesses").innerHTML = numGuess;

document.getElementById("nameSpace").innerHTML = dashes.join(" ");
document.getElementById("usedLetter").innerHTML = wrongLtr.join(" ");



$("input").keyup(function(){
//document.onkeyup(event)
pickedWord = event.key.toLowerCase;
console.log(pickedWord);
})




console.log("This is the user input " + pickedWord);
evaluateInput(pickedWord);



function evaluateInput() {
  var letter = pickedWord;
  var letterInWord = false;
  for (var i = 0; i < numSpaces; i++) {
    if (randomWord[i] === letter) {

      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numSpaces; j++) {

      if (randomWord[j] === letter) {
        dashes[j] = letter;
      }
    }
    console.log(dashes);
  } else {
    wrongLtr.push(letter);
    numGuess--;

  }
}
if (pickedWord.toString() === dashes.toString()) {
  wins++;
  alert("You win!");
  document.getElementById("wins").innerHTML = wins;
}

function reset() {
  wins = 0;
  randomWord = "";
  pickedWord = "";
}
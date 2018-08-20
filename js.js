
var words =              [
    "csharp",
    "cplusplus",
    "rubyonrails",
    "python",
    "javascript",
    "ansic",

];

var word = words[Math.floor(Math.random() * words.length)];



var answerArray = [];
for (var x = 0; x < word.length; x++) {
    answerArray[x] = "_";
}
var remaining = word.length;

while (remaining > 0) {
    break
}
alert(answerArray.join(" "));

var guess = prompt("type a letter, or click q to quit");
if (guess === null) {

} else if (guess.length !== 1) {
    alert(" Pick one letter");
} else {

    for (var apple = 0; apple < word.length; apple++) {
        if (word[apple] === guess) {
            answerArray[apple] = guess;
            remaining--;
        }
    }

}
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
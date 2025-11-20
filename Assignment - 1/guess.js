const secretNo = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // test value

if (userGuess === secretNo) {
    console.log("Correct guess!");
}
else if (Math.abs(userGuess - secretNo) <= 3) {
    console.log("Very close!");
}
else if (userGuess > secretNo) {
    console.log("Too high");
}
else {
    console.log("Too low");
}

console.log("Secret:", secretNo);

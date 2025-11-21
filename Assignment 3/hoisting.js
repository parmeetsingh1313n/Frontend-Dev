"use strict";

// Original code misbehaves because score is hoisted but set to undefined,
// and status (let) is not hoisted in the same way.

var score = 50;
function announce() { console.log("Game started"); }
let stat = "ready";

console.log(score);
announce();
startGame();

function startGame() {
    console.log(stat);
}

const startGameArrow = () => console.log(stat);
startGameArrow();

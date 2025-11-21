"use strict";

// Hoisting creates separate memory for each "cnt" variable

function outer() {
    console.log(cnt);
    var cnt = 5;

    const inner = () => {
        console.log(cnt);
        var cnt = 10;
    };
    inner();
}
outer();
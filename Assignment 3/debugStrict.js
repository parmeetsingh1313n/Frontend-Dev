"use strict";
// This fails because greeting becomes a global in strict mode..
function showMessage() {
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

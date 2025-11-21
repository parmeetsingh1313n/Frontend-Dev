"use strict";

// Mixed incoming API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const num = Number(value);     // numeric form
    const bool = Boolean(value);   // boolean form
    const str = String(value);     // string form

    console.log(`Raw:- ${value}, Number:- ${num}, Boolean:- ${bool}, String:- "${str}"`);

    // checking for numeric validity..
    if (!isNaN(num) && value !== " " && value !== "100px") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
    }
}

console.log("Valid numeric values:", validNumbers);
console.log("Invalid numeric values:", invalidNumbers);

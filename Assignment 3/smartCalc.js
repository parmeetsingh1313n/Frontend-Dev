"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

for (let op of operations) {
    try {
        let res;
        switch (op) {
            case "add":
                res = num1 + num2;
                break;
            case "subtract":
                res = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("Cannot divide by zero");
                res = num1 / num2;
                break;
            case "power":
                res = Math.pow(num1, 3);
                break;
            case "root":
                if (num1 < 0) throw new Error("(-ve) root error");
                res = Math.sqrt(num1);
                break;
            default:
                throw new Error("invalidOperationErr");
        }

        console.log(`${op}: ${res}`);

    }
    catch (err) {
        console.log(`${op}: ERROR => `, err.message);
    }
}

"use strict";

const rawData = [
    '{"user":"Parmeet","age":20}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Krishna","age":"20"}'
];

let clean = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (!parsed.user || !parsed.age) {
            throw new Error("Missing required keys");
        }

        parsed.age = Number(parsed.age);

        if (parsed.age >= 18) clean.push(parsed);

    }
    catch (err) {
        console.log(`Error at line ${i}:`, err.message);
    }
}
console.log("Valid JSON entries:", clean);
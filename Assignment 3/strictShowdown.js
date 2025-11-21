// Without strict mode, duplicate parameters & global assignments allowed.
// With strict mode, they throw errors.

"use strict";

function demo(a, b) {
    let total = 10;
    console.log(total);
}

demo(5, 10);

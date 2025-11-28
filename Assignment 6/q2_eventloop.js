console.log("Start");

// macrotask
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// microtask
Promise.resolve().then(() => {
    console.log("Promise.then callback (microtask)");
});

// synchronous
console.log("Synchronous log");

console.log("End");

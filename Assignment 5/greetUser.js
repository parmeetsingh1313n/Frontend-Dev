// Simple callback flow
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();     // running the next step
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

// demonstration
greetUser("Parmeet", showEndMessage);

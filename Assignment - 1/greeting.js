const userName = "Parmeet";
const currHr = new Date().getHours();

let message = "";

if (currHr < 12) {
    message = `Good Morning ${userName}!`;
}
else if (currHr >= 12 && currHr < 17) {
    message = `Good Afternoon ${userName}!`;
}
else {
    message = `Good Evening ${userName}!`;
}

console.log(message);

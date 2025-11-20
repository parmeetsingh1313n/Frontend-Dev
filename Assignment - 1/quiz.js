const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const ops = ["+", "-", "*", "/"];
const picked = ops[Math.floor(Math.random() * ops.length)];

let ans;

switch (picked) {
    case "+":
        ans = num1 + num2;
        break;
    case "-":
        ans = num1 - num2;
        break;
    case "*":
        ans = num1 * num2;
        break;
    case "/":
        ans = (num1 / num2).toFixed(2);
        break;
}

console.log(`Question: ${num1} ${picked} ${num2}`);
console.log("ans:", ans);

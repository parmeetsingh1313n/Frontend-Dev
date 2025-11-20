const expenses = [3000, 1200, 8000, 2000, 1500];

const total = expenses.reduce((sum, v) => sum + v, 0);
const avg = total / expenses.length;

let finalAmount = total;
finalAmount += finalAmount * 0.10; // adding 10% tax

console.log("Total:", total.toFixed(2));
console.log("Average:", avg.toFixed(2));
console.log("After Tax:", finalAmount.toFixed(2));

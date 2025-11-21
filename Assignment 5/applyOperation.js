// Running operations using callback
function applyOperation(numbers, operation) {
  let res = [];
  for (let n of numbers) {
    res.push(operation(n));
  }
  return res;
}

const nums = [1, 2, 3, 4];

console.log("Double:", applyOperation(nums, n => n * 2));
console.log("Square:", applyOperation(nums, n => n * n));

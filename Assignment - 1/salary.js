let currSalary = 30000;
const yearlyInc = 8; // percentage
const record = [];

for (let year = 1; year <= 5; year++) {
    currSalary += (currSalary * yearlyInc) / 100;
    record.push({ Year: year, Salary: Math.round(currSalary) });
}

console.table(record);

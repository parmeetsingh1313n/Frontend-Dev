let bonus = 5000; // global value

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true; // try changing this to false

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Total Salary : -", salary);
}

calculateSalary();

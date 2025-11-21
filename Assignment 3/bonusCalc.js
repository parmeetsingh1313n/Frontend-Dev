"use strict";
const employees = [
    { name: "Parmeet", salary: "45000", years: "5" },
    { name: "Karan", salary: "38000", years: "2" },
    { name: "Aman", salary: "52000", years: "7" }
];

for (let person of employees) {
    try {
        const sal = Number(person.salary);
        const yrs = Number(person.years);

        if (isNaN(sal) || isNaN(yrs)) {
            throw new Error("Invalid numeric conversion");
        }

        let bonus = yrs > 3 ? sal * 0.10 : sal * 0.05;

        console.log(`Employee:- ${person.name} Salary:- ${sal} Years:-  ${yrs} Bonus:-  ${bonus} -------------------`);
    }
    catch (err) {
        console.log("Error:", err.message);
    }
}

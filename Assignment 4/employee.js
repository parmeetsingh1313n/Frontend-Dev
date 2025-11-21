// Employee salary + bonus calculation
class Employee {
    constructor(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.department = dept;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent / 100);
    }
}

const staff = [
    new Employee(1, "Parmeet", "Tech", 45000),
    new Employee(2, "Arjun", "Finance", 38000),
    new Employee(3, "Raj", "Tech", 52000),
    new Employee(4, "Aditya", "HR", 30000),
    new Employee(5, "Karan", "Admin", 41000)
];

const payout = staff.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:-", payout);

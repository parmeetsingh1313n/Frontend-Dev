// q4_employee.js
// Employee base class + Manager derived class

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department}`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} is managing the ${this.department} team`;
    }
}

// polymorphism tests
const e1 = new Employee("Riya", "Sales");
const m1 = new Manager("Arjun", "Tech");

console.log(e1.work());
console.log(m1.work());

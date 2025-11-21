// 3-level prototype chain
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log("Hello, I am", this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.showDept = function () {
    console.log("Department:", this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};

const p = new Professor("Shivanshu", "Tech", "AI");

p.sayHello();     // from Person
p.showDept();     // from Faculty
p.showSubject();  // from Professor

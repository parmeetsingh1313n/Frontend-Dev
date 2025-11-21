// Basic prototype inheritance
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);     // inherit properties
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);   // inherit methods

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const s1 = new Student("Parmeet", "CSE");
s1.showName();
s1.showBranch();
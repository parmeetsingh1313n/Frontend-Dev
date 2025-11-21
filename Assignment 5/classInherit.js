// ES6 class version of Person => Student
class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:-", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);          // call parent
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:-", this.branch);
    }
}

const s1 = new Student("Parmeet", "CSE");
s1.showName();
s1.showBranch();
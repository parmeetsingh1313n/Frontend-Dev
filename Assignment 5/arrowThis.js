// Arrow functions do NOT bind their own 'this'
const user = {
    name: "Amit",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const userFixed = {
    name: "Parmeet",
    showName: function () {
        console.log(this.name);   // correct
    }
};

userFixed.showName();
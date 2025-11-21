// Simple constructor + shared prototype method
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`${this.brand} - ${this.model}`);
};

const c1 = new Car("Honda", "City");
const c2 = new Car("Hyundai", "i20");

c1.getDetails();
c2.getDetails();
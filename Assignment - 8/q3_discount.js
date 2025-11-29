function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    const discountAmount = this.price * (percent / 100);
    return this.price - discountAmount;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Phone", 20000);
const p3 = new Product("Watch", 5000);

console.log("Laptop after 10%:", p1.applyDiscount(10));
console.log("Phone after 20%:", p2.applyDiscount(20));
console.log("Watch after 5%:", p3.applyDiscount(5));

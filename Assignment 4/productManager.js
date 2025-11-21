// Simple Product class for admin panel
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `#${this.id} | ${this.name} | ₹${this.price} | ${this.category}`;
    }
}

// sample products
const items = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 1500, "Fashion"),
    new Product(3, "Pen", 40, "Stationery")
];

// applying 10% discount on all.
items.forEach(p => p.applyDiscount(10));

const exp = items.filter(p => p.price > 1000);

console.log("Products priced above 1000:--> ");
exp.forEach(p => console.log(p.getDetails()));

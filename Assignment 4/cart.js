// Cart with coupon validation
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
    }

    applyCoupon(code) {
        const couponReg = /^(SAVE|DISC)\d{2}$/;

        if (!couponReg.test(code)) {
            console.log("Invalid coupon");
            return this.getTotal();
        }

        const percent = Number(code.slice(-2));
        const total = this.getTotal();
        return total - (total * percent / 100);
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

console.log("Total:", cart.getTotal());
console.log("After Coupon:", cart.applyCoupon("SAVE20"));
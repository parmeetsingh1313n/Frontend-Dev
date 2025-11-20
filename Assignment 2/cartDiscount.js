const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let product of cart) {
    let finalPrice = product.price;

    if (product.category === "electronics") {
        finalPrice -= finalPrice * 0.10;
    }
    else if (product.category === "fashion") {
        finalPrice -= finalPrice * 0.05;
    }

    total += finalPrice;
}

// extra discount for big purchases.
if (total > 50000) {
    total -= total * 0.05;
}

console.log("Final Cart Total:", Math.round(total));

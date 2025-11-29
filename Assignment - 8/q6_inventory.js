const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 50000, stock: 2 },
    { id: 2, name: "Phone", category: "electronics", price: 20000, stock: 10 },
    { id: 3, name: "Shirt", category: "fashion", price: 1200, stock: 3 },
    { id: 4, name: "Shoes", category: "fashion", price: 2500, stock: 5 },
    { id: 5, name: "Book", category: "education", price: 500, stock: 20 }
];

// 1. Low stock
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. Sort by price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

// 4. Group by category
function groupByCategory() {
    return products.reduce((groups, item) => {
        if (!groups[item.category]) {
            groups[item.category] = [];
        }
        groups[item.category].push(item);
        return groups;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Group by Category:", groupByCategory());

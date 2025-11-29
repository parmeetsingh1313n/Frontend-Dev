const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    fries: 80
};

function calculateBill(orderItems) {
    try {
        // map  -- >  convert item names into prices
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item not found: ${item}`);
            }
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);

        console.log("Your bill is:", total);
        return total;
    } catch (err) {
        console.log("Error:", err.message);
    }
}

calculateBill(["pizza", "fries"]);
calculateBill(["pasta", "chips"]);

const totalPurchase = 6400;
let disRate = 0;

if (totalPurchase >= 10000) {
    disRate = 25;
}
else if (totalPurchase >= 5000) {
    disRate = 15;
}
else if (totalPurchase >= 2000) {
    disRate = 5;
}

const discountAmount = (totalPurchase * disRate) / 100;
const finalPrice = totalPurchase - discountAmount;

console.log("Original:", totalPurchase);
console.log("Discount:", disRate + "%");
console.log("Final Price:", Math.round(finalPrice));
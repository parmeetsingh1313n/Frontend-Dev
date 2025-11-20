let rawName = "  wireless headphones PRO   ";

let cleaned = rawName.trim().toLowerCase();

let words = cleaned.split("");

// capitalizing each word naturally..
let finalTitle = cleaned.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ").replace("Pro", "Pro Edition");

console.log("Clean Title:-", finalTitle);
console.log("Length: -", finalTitle.length);

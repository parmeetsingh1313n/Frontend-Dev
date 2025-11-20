let comment = "Great product! Fast delivery and amazing sound quality!";

let words = comment.split(" ").length;

let hasNegative = comment.toLowerCase().includes("bad") ||
    comment.toLowerCase().includes("poor");

if (hasNegative) {
    console.log("Needs Improvement");
}
else {
    console.log("Positive Feedback");
}

console.log("Word Count:", words);

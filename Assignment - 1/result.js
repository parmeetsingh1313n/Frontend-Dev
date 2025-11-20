const marks = [88, 76, 92, 65, 80];

let total = 0;
let anyFailed = false;

// checking each subject manually
for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        anyFailed = true; // even one failed → detained
    }
}

// percentage calculation
const percentage = (total / (marks.length * 100)) * 100;

// final decision
if (anyFailed) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50) {
    console.log("Promoted");
}
else {
    console.log("Detained");
}

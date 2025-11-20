const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
    let dept = departments[i][0];
    let score = departments[i][1];
    let remark = "";

    if (score >= 90) {
        remark = "Excellent";
    }
    else if (score >= 75) {
        remark = "Good";
    }
    else if (score >= 60) {
        remark = "Average";
    }
    else {
        remark = "Needs Improvement";
    }

    console.log(`${dept}: ${remark}`);
}

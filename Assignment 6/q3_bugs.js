function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.2; // 20% chance to simulate failure
            if (fail) {
                reject(new Error("API failed to fetch bugs"));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(err => {
        console.log("Failed to fetch bugs:", err.message);
    });

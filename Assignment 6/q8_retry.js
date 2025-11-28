function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject(new Error("Random submit failure"));
            } else {
                resolve("Order submitted");
            }
        }, 500);
    });
}

async function processOrder() {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return; // stop after success
        } catch (err) {
            console.log(`Attempt ${attempt}: Failed`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed");
            }
            // small delay before retry (optional)
            await new Promise(r => setTimeout(r, 500));
        }
    }
}

processOrder()
    .then(() => console.log("Order processed successfully"))
    .catch(err => console.log(err.message));

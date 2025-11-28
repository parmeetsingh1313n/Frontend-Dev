function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) return reject(new Error("Server A failed"));
            resolve("Server A done");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) return reject(new Error("Server B failed"));
            resolve("Server B done");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers:", results);
    })
    .catch(err => {
        console.log("Deployment failed:", err.message);
    });

Promise.race([serverA(), serverB()])
    .then(first => {
        console.log("Fastest response:", first);
    })
    .catch(err => {
        console.log("Fastest responder error:", err.message);
    });

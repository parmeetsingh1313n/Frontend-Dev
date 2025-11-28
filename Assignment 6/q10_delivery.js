function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000; // 1-2s
}

function maybeFailStep(step) {
    if (Math.random() < 0.2) {
        throw new Error(`${step} failed`);
    }
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFailStep("takeOrder");
                console.log("Step 1: Order taken");
                resolve("order");
            } catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

function prepare(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFailStep("prepare");
                console.log("Step 2: Food prepared");
                resolve("prepared");
            } catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

function pack(prepared) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFailStep("pack");
                console.log("Step 3: Package ready");
                resolve("packed");
            } catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

function dispatch(packed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFailStep("dispatch");
                console.log("Step 4: Out for delivery");
                resolve("dispatched");
            } catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

function deliver(dispatched) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFailStep("deliver");
                console.log("Delivery completed!");
                resolve("delivered");
            } catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        const order = await takeOrder();
        const prepared = await prepare(order);
        const packed = await pack(prepared);
        const dispatched = await dispatch(packed);
        await deliver(dispatched);
        console.log("Pipeline finished successfully!");
    }
    catch (err) {
        console.log(err.message);
        console.log("Pipeline failed!");
    }
}

runPipeline();

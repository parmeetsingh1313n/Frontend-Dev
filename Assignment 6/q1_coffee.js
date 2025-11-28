function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000; // 1-2s
}

function maybeFail(stepName) {
    // 20% chance to fail
    if (Math.random() < 0.2) {
        throw new Error(`${stepName} failed`);
    }
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFail("Boiling water");
                console.log("Boiled water");
                resolve("water");
            } catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

function brewCoffee(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFail("Brewing coffee");
                console.log("Brewed coffee from", water);
                resolve("coffee");
            }
            catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

function pourCup(coffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                maybeFail("Pouring coffee");
                console.log("Poured coffee into cup");
                resolve("cup of coffee");
            }
            catch (err) {
                reject(err);
            }
        }, randomDelay());
    });
}

boilWater()
    .then(result => brewCoffee(result))
    .then(result => pourCup(result))
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((err) => {
        console.log(err.message);
        console.log("Coffee preparation failed!");
    });

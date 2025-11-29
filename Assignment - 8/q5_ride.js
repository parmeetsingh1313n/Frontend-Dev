class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.from = fromLocation;
        this.to = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (!this.distance || this.distance < 0) {
            throw new Error("Invalid distance for fare calculation.");
        }
        return this.distance * 12; // ₹12 per km
    }
}

try {
    const t = new Trip("Delhi", "Noida", 15);
    console.log("Fare:", t.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const t2 = new Trip("A", "B", -5); // error
    console.log(t2.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}

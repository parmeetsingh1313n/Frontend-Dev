class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Dataset is empty");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(u => u.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce((sum, u) => sum + u.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(u => `${u.user} burned ${u.calories} calories today.`);
    }
}

const users = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const fa = new FitnessAnalytics(users);

    console.log("Active Users:", fa.getActiveUsers());
    console.log("Average Calories:", fa.getAverageCalories());
    console.log("User Summary:", fa.getUserSummary());

}
catch (err) {
    console.log("Error:", err.message);
}

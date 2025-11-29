class BankAccount {
    #bal = 0;

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid deposit amount");
        this.#bal += amount;
    }

    withdraw(amount) {
        if (amount > this.#bal) {
            throw new Error("Insufficient balance");
        }
        this.#bal -= amount;
    }

    getBalance() {
        return this.#bal;
    }
}

const acc = new BankAccount();

try {
    acc.deposit(5000);
    console.log("bal:", acc.getBalance());

    acc.withdraw(2000);
    console.log("bal:", acc.getBalance());

    acc.withdraw(4000); // insufficient funds.
}
catch (err) {
    console.log("Error:", err.message);
}

// Basic booking validation
function bookTicket() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const seats = document.getElementById("seats");

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatReg = /^([1-9]|10)$/;

    if (!nameReg.test(name.value)) return alert("Invalid name");
    if (!emailReg.test(email.value)) return alert("Invalid email");
    if (!seatReg.test(seats.value)) return alert("Seats must be 1–10");

    const booking = {
        name: name.value,
        email: email.value,
        seats: seats.value
    };

    console.log("Your Ticket:", booking);
}

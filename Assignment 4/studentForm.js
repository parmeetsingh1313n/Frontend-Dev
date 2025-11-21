// Simple RegExp validation on form submit
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg = /^[0-9]{10}$/;
    const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    validateField(name, nameReg, "Invalid name");
    validateField(email, emailReg, "Invalid email");
    validateField(phone, phoneReg, "Phone must be 10 digits");
    validateField(password, passReg, "Weak password");
}

function validateField(input, regex, message) {
    let err = input.nextElementSibling;

    if (!regex.test(input.value)) {
        input.style.border = "2px solid red";
        err.textContent = message;
    } else {
        input.style.border = "2px solid green";
        err.textContent = "";
    }
}

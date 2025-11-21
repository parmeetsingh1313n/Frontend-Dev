// Simple login validation
function validateLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const userReg = /^.{5,}$/;
    const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!userReg.test(user)) return alert("Username too short");
    if (!passReg.test(pass)) return alert("Weak password");

    alert("Login successful!");
}



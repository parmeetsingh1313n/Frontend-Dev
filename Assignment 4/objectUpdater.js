// Updating an object from a form

let user = { name: "Parmeet Singh", email: "parmeetsingh1313n@gmail.com", age: 20 };

function updateUser() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;

    document.getElementById("result").textContent = JSON.stringify(user, null, 2);
}

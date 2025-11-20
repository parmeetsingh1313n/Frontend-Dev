const fullName = "Parmeet";
const age = 22;
const isStudent = true;
const hobbies = ["gaming", "music", "travel"];
const profile = { country: "India", score: 88 };
const nothingHere = null;
let notAssigned;

console.table({
    fullName: { value: fullName, type: typeof fullName },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    hobbies: { value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    profile: { value: profile, type: typeof profile },
    nothingHere: { value: nothingHere, type: typeof nothingHere },
    notAssigned: { value: notAssigned, type: typeof notAssigned }
});

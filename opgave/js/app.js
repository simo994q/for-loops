// Deklarer fruits arrayet
let fruits = [
    "apple",
    "banana",
    "cherry",
    "durian",
    "elderberry"
]

// Brug en for-in løkke til at udskrive indekset for hvert element i fruits arrayet.
for (let i in fruits) {
    console.log(i);
}

// Brug en for-of-løkke til at udskrive hvert element i fruits arrayet.
for (let x of fruits) {
    console.log(x);
}

// Deklarer person objektet
let person = {
    name: "John", 
    age: 30, 
    gender: "male", 
    occupation: "teacher" 
}

// Brug en for-in løkke til at udskrive nøglen og værdien for hver egenskab i person objektet.
for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}
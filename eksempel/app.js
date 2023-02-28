//normal for loop
//normal for loop
let array = ["H","E","L","P"]

for(i = 0; i < array.length; i++){
    console.log("Normal-" + array[i]);
}


//in er bedst for objects men kan også bruges på en array
let car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}

for(let property in car){
    console.log(`the car ${property} is ${car[property]}`);
}

//for of er brugt på en array og fungere ikke på et object

const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

for(const n of names){
    console.log(n);
}
//in versionen af en array
for(let n in names){
    console.log(names[n]);
}

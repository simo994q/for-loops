//normal for loop
let array = ["H","E","L","P"]

for(i = 0; i < array.length; i++){
    console.log("Normal-" + array[i]);
}


//in er normalt best for et object og kan ikke bruges på et object
let car = {
    make: "Chevy",
    model: "Corvette",
    year: 2022,
    color: "blue"
}

for(let property in car){
    console.log(`the car ${property} is ${car[property]}`);
}

//for of er normalt mest brugt på en array

const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

for(const n of names){
    console.log(n);
}
//in versionen af en array
for(let i in array){
    console.log(array[i]);
}


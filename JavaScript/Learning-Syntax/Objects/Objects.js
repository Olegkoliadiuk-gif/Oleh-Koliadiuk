// Objects
Structure: { key: value }


// Examples
const OlegKoliadiuk = {
    Name: "OlegKoliadiuk",
    Age: "14",
    DateOfBirthday: "29_02_2012",
    Country: "Ukraine",
    City: "Rivne"
};

let OlegKoliadiuk = {
    Name: "OlegKoliadiuk",
    Age: "14",
    DateOfBirthday: "29_02_2012",
    Country: "Ukraine",
    City: "Rivne"
};

// function and object
function makeUser(name, age) {
    return {
        name: name,
        age: age, // or just name, age, ...
    };
}

let user = makeUser("Oleg", 14);
alert(user.name); // Oleg

// We can use for, let, return... in object
let obj = {
    for: 1,
    let: 2,
    return: 3,
};

alert(obj.for + obj.let + obj.return) // 6


// 0 = "0"
const obj = {
    0: "Test",
};

alert(obj[0]); // Test
alert(obj["0"]) // Test


// undefined
let user = {};

alert( user.noSuchProperty === undefined); // true


// 0 == "0" true
// 0.Number === "0".String false
let zerO = 0;
let zero = 0;
(typeof zero) // Number
let zeroString = (String(zero)) // String
zer0 === zero // False


let user = { name: "Oleg"};
let admin = user; // copy
// it will be the same, because they looking into the same object

// SCHEME
/*
Computer memory:
[ Box: { name: "Oleg" } ]
       ▲                  ▲
       │                  │
  variable user        variable admin
*/
 

// Spread operator "..."
let user = { name: "Oleg"};

let realClone = { ...user };

realClone.name = "Bro";

console.log(user.name); // "Oleg" 
console.log(realClone.name); // // "Bro" Clone lives his own life

// SCHEME
/*
Computer memory after {...user}:

[ Box No1: { name: "Oleg" } ]   ◀── variable user
  
[ Box No2: { name: "Bro" }  ]   ◀── variable realClone
 */
/*
// Template String
const a = 10;
const checkIfMoreThan2 = (a) => {
    if (a>2) {
        return true
    }
};
console.log(`${checkIfMoreThan2(10)}`); // cannot put if else condition inside template string

// Spread Operator
const arr = [10, 20, 30];
console.log(`arr ${arr}`);
console.log(`[...arr, 40] ${[...arr, 40]}`);
console.log(`[40, ...arr] ${[40, ...arr]}`);
console.log(`arr ${arr}`);
*/

// Spread Operator in Functions
function saySomethingToGroup(message, ...names) {
    console.log(names);
}
saySomethingToGroup('Hello', 'Alice', 'Bob', 'Cecilia');

// Destructuring
/*const person = {
    firstName: "Bob",
    lastName: "Smith",
    age: 10,
    birthYear: "2000",
}
const {firstName, age, birthYear: b} = person;  // referencing by {key, key, saving into another variable}
console.log(firstName, age, b);
//console.log(lastName);  // causing error, not set in anywhere
*/

// Destructuring nested objects

/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 * node arrow-functions.js
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     return a + b;
// }
// let sum = addTwoNumbers(3, 6);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
 

let sum = addTwoNumbers(3, 6);

console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) =>  a + b;
let sum2 = addTwoNumbers2(3, 6);

console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hiya tina");

const hello = () => console.log("hello");
hello();


// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p> 
    This is multi line string!
    I can write as many lines as I want
    </p>`)
    

console.log(returnMultipleLines() );

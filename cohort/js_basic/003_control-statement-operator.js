// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).
const num1 = 10;
const num2 = 5;
const addition = (num1, num2) => {
    return num1 + num2;
}
const subtraction = (num1, num2) => {
    return num1 - num2;
}
const multiplication = (num1, num2) => {
    return num1 * num2;
}
const division = (num1, num2) => {
    return num1 / num2;
}
console.log(`Addition : ${addition(num1, num2)}`);
console.log(`subtraction : ${subtraction(num1, num2)}`);
console.log(`Multiplication : ${multiplication(num1, num2)}`);
console.log(`division : ${division(num1, num2)}`);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.
// assignment operators : =, +=, -=, *=, /=, %=, **=
let a = 10
console.log(a);
a += 10;
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);
a /= 10;
console.log(a);
a %= 10;
console.log(a);
a **= 10;
console.log(a);

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.
// link - https://github.com/Mahikolhe23/MERN/blob/main/cohort/js_basic/002_control-statement-if-else.js - 1st problem


// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.
// logical operator - || , && , !=
const number1 = 10;
const number2 = 20;

if (number1 == 10 || number2 == 20) {
    console.log("logical OR operator");
} else if (number1 == 10 && number2 == 20) {
    console.log("logical AND operator");
} else if (number1 != number2) {
    console.log("logical NOT operator");
}

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.
// bitwise operators : &, |, ^, ~, <<, >>, >>>
const a1 = 10;
const a2 = 58;
console.log("Bitwise AND operation :" + (a1 & a2));
console.log("Bitwise OR operation :" + (a1 | a2));
console.log("Bitwise XOR operation :" + (a1 ^ a2));
console.log("Bitwise NOT operation :" + (~a2));
console.log("Bitwise LEFT SHIRT operation :" + (a1 << a2));
console.log("Bitwise RIGHT SHIFT operation :" + (a1 >> a2));
console.log("Bitwise REPL operation :" + (a1 >>> a2));


// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.
const n1 = 10;
const n2 = 20;
console.log("Largest Number : " + (n1 > n2 ? n1 : n2))

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.
console.log(typeof 10);
console.log(typeof "Mahi");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "Mahi" });
console.log(typeof function () { });
console.log(typeof new Date());
console.log(typeof new Error());

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.
const fname = "Mahi";
const lname = "Kolhe";
console.log(fname + " " + lname);

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.
// same as problem 7

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.
const person = {
    name: "Mahi",
    city: "Pune",
    age: 27
}

console.log("name" in person);
console.log("city" in person);
console.log("age" in person);

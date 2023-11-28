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

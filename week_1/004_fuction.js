//Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".
greeting("Mahi");
function greeting(name) {
    console.log("Hello " + name);
}

//Question-2:  Write a function that takes two parameters, adds them together, and returns the result.
const num1 = 10;
const num2 = 20;
function add(num1, num2) {
    return num1 + num2;
}
console.log("Addition : " + add(num1, num2));

//Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.
// same as page having problem 4 

//Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.
const length = 10;
const width = 10;
function area(length, width) {
    return length * width;
}
console.log("Area of Rectangle : " + area(length, width));

//Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.
const ans = (num1, num2) => {
    return num1 ** num2;
}
console.log(ans(2, 3));

//Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.
const prime = (num1) => {
    if (num1 == 1 || num1 == 2) {
        console.log("Prime");
    }
    let sum = 0;
    for (let i = 2; i < num1 / 2; i++) {
        if (num1 % i == 0) {
            sum += 1;
            console.log("Given number is not prime");
            break;
        }
    }
    if (sum == 0) {
        console.log("Given Number is Prime");
    }
}
prime(12);

//Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
const globalVaribale = "Niku";
const localVaribale = () => {
    const localVaribale = "Mahi";
    console.log(localVaribale);
}
localVaribale();
console.log(globalVaribale);


//Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.
function outer() {
    const localOuterVariable = "Mahi";
    return inner(localOuterVariable);
}
function inner(localOuterVariable) {
    console.log(localOuterVariable);
}
outer();

//Question-9:  Write a recursive function to calculate the factorial of a given number.
function factorial(num) {
    if (num == 1 || num == 2) {
        return num;
    }
    return factorial(num - 1) * num;
}
console.log(factorial(5));

//Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).
const f = (x) => {
    return x + 2;
}
const g = (x) => {
    return 2 * x;
}
const h = (x) => {
    return f(g(x));
}
console.log(h(5));
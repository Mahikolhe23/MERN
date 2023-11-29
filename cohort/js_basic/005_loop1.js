//Question-1: WAP that logs numbers from 1 to 10 to the console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Question-2: WAP that log all even numbers from 2 to 20.
for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Question-3: WAP that counts backward from 10 to 1 and logs the values.
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Question-4: WAP to calculate the sum of numbers from 1 to 5.
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);

//Question-5: WAP that prints powers of 2 (2^n) up to 64.
const power = (base, num) => {
    return base ** num;
}
for (let i = 1; i < 7; i++) {
    console.log(power(2, i));
}


//Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.
const num = 10;

do {

} while (condition);
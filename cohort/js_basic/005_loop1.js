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
// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess;
// do {
//   guess = prompt("Guess the number between 1 to 10");
// } while (guess != randomNumber);
// alert("You guess it");

//Question-7: WAP to display the multiplication table (1 to 10) in the console.
for (let i = 1; i <= 10; i++) {
  console.log(i + " * 10 = " + (i * 10));
}

//Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
let p = 1;
while (p <= 10) {
  if (p == 3) {
    p++;
    continue;
  }
  if (p == 5) {
    break;
  }
  console.log(p);
  p++;
}

//Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  }
  if (i % 5 == 0) {
    console.log("Buzz");
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
}

//Question-10: WAP to identify and log prime numbers within a given range.
const num1 = 1;
const num2 = 20;
function primeNumbers(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
function isPrime(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
primeNumbers(num1, num2);
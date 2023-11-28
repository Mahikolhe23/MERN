//Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const num = 5;
if (num > 10) {
  console.log(num + " is greater than 10");
} else {
  console.log(num + " is less than 10")
}

//Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).
const age = 19;
if (age > 18) {
  console.log("You are eligible to drive car")
} else {
  console.log("You are not eligible to drive car")
}

//Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
const mark = 89;
if (mark >= 90 && mark <= 100) console.log("Grade : A")
else if (mark >= 80 && mark <= 90) console.log("Grade : B")
else if (mark >= 70 && mark <= 80) console.log("Grade : C")
else if (mark >= 60 && mark <= 70) console.log("Grade : D")
else if (mark >= 50 && mark <= 60) console.log("Grade : E")

//Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
const time = 9;
if (time > 12 && time < 16) {
  console.log("Good Afternoon")
} else if (time < 12) {
  console.log("Good Morning")
} else if (time > 16 && time < 20) {
  console.log("Good evening")
}

//Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
const day = 1;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
}

//Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
const month = 1;
switch (month) {
  case 1: console.log("January"); break;
  case 2: console.log("February"); break;
  case 3: console.log("March"); break;
  case 4: console.log("April"); break;
  case 5: console.log("May"); break;
  case 6: console.log("June"); break;
  case 7: console.log("July"); break;
  case 8: console.log("August"); break;
  case 9: console.log("September"); break;
  case 10: console.log("October"); break;
  case 11: console.log("November"); break;
  case 12: console.log("December"); break;
}

//Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
const fruit = "banana";
switch (fruit) {
  case "apple": console.log("This is Apple Fruit"); break;
  case "banana": console.log("This is Banana Fruit"); break;
  case "orange": console.log("This is Orange Fruit"); break;
  default: console.log("Invalid input"); break;
}

//Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.
const temperature = 90;
if (temperature >= 0 && temperature <= 30) {
  console.log("Low Temp Found");
} else if (temperature > 30 && temperature <= 70) {
  console.log("Medium Temp Found");
} else {
  console.log("High Temp Found");
}

//Question-9:   WAP that classifies a number as positive, negative, even, or odd.
const number = -10;
if (number % 2 == 0 && number > 0) {
  console.log("This is positive even number");
}
if (number % 2 != 0 && number < 0) {
  console.log("This is negative odd number");
}
if (number < 0 && number % 2 == 0) {
  console.log("This is negative even number");
}
if (number > 0 && number % 2 != 0) {
  console.log("This is positive odd number");
}

//Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."
const username = "Mahendra";
if (username.length < 6) {
  console.log("User name is too short");
} else if (username.length > 15) {
  console.log("User name is too long")
} else {
  console.log("User name accepeted");
}
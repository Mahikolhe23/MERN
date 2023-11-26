//Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
const distance_in_km = 10;
console.log("Distance in KM " + distance_in_km);
const distance_in_m  = distance_in_km * 1000;
console.log("Distance in M " + distance_in_m);
const distance_in_cm = distance_in_m * 100;
console.log("Distance in CM " + distance_in_cm);


//Question-2:    WAP to input radius of a circle and log the area of circle.
const radius = 10;
const areaOfCircle = Math.PI * radius *radius;
console.log("Area of circle " + areaOfCircle);

//Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.
const num1 = 10;
const num2 = 5;
const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
console.log("Addition "+addition);
console.log("subtraction "+subtraction);
console.log("multiplication "+multiplication);
console.log("division "+division);

//Question-4:    WAP to calculate total marks in two subject and then calculate percentage.
const sub_1 = 90;
const sub_2 = 80;
console.log("Total marks = " + (sub_1 + sub_2)); 
const percentage = (sub_1 + sub_2)/200
console.log("Percentage = " + (percentage*100));

//Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.
const length = 50;
const breath = 20;
const perimeter = 2*length + 2*breath;
const areaOfRectangle = length * breath;
console.log("Area of Rectangle " + areaOfRectangle);
console.log("Perimeter of rectangle " + perimeter); 

//Question-6:    WAP to input n numbers and log the average of those number.
const nums = [10,20,30,40,50];
const avg = (nums)=>{
    let sum = 0;
    nums.forEach(num=>{
        sum+=num;
    });
    return sum / nums.length;
}
console.log(`Average : ${avg(nums)}`);

//Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
const distanceInKm = 10;
const distanceInMeter = distanceInKm * 1000;
const distanceInFeet = distanceInMeter * 3.5;
const distanceInInches = distanceInFeet * 12;
const distanceInCentimeter  = distanceInMeter * 100;

console.log("Distance in km " + distanceInKm);
console.log("Distance in Meter " + distanceInMeter);
console.log("Distance in Centimeter " + distanceInCentimeter);
console.log("Distance in feet " + distanceInFeet);
console.log("Distance in inches " + distanceInInches); 

//Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
const temperatureInFarenheit = 100;
const temperatureInCentigrade = (temperatureInFarenheit - 32) * 5 / 9;
console.log("Temp in Centigrade " + temperatureInCentigrade);

//Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
const quantity = 10;
const rate = 100;

const calculateAmount = (quantity, rate) => {
    return quantity * rate;
}

const calculateDiscountAmount = (quantity, rate) => {
    return calculateAmount(quantity, rate) * 10 / 100;
}

const calculateAfterDiscountAmount = (quantity, rate) => {
    return calculateAmount(quantity, rate) - calculateDiscountAmount(quantity, rate);
}

console.log(`Amount:${calculateAmount(quantity, rate)}`);
console.log(`Discount Amount:${calculateDiscountAmount(quantity, rate)}`);
console.log(`Amount after discount:${calculateAfterDiscountAmount(quantity, rate)}`);

//Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
const principalAmount = 1000;
const rateOfInterest = 10;
const numberOfYears = 1;
const simpleInterest = (principalAmount,rateOfInterest,numberOfYears )=> {
    return (principalAmount * rateOfInterest * numberOfYears) / 100;
}

console.log(`Simple Interest: ${simpleInterest(principalAmount, rateOfInterest, numberOfYears)}`);
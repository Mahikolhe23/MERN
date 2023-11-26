let num = 5;
if(num > 10){
    console.log(num+" is greater than 10");
}else{
    console.log(num+" is less than 10")
}

//q
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (userInput) => {
  if(userInput > 18){
    console.log("You eligible to drive car")
  }else{
    console.log("You not eligible to drive car")
  }
  rl.close();
});

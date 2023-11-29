// Question-1:  WAP to print this
// *
// **
// ***
// ****
// *****  
for (let i = 0; i <= 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
console.log("------------------------------------------------------------");
// Question-2:  WAP to print this 
//    *
//   ***
//  *****
// *******
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= rows - i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}

//Question-3: WAP to print this
// *****
// *   *
// *   *
// *****


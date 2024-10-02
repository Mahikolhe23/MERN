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
console.log("------------------------------------------------------------");

//Question-3: WAP to print this
// *****
// *   *
// *   *
// *****

for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || i == 4 || j == 1 || j == 5) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}

console.log("------------------------------------------------------------");

// Question-4: WAP to print this
// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
console.log("------------------------------------------------------------");

// Question-5 WAP to print this
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 1; j <= rows - i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str += String.fromCharCode(64 + i);
  }
  console.log(str);
}
console.log("------------------------------------------------------------");

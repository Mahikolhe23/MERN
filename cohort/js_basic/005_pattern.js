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

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i / 2 - 1; j++) {
        str += "*";
    }
    console.log(str);
}

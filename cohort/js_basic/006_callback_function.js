function sum(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    if (n1 != 0 && n2 != 0) {
        return n1 / n2;
    } else {
        return 0;
    }
}
function cal(n1, n2, fn) {
    return fn(n1, n2);
}

console.log(cal(3, 2, sum));

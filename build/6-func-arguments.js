"use strict";
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));
//default parameter
function fullname(first, last = "bin fulan") {
    return first + " " + last;
}
console.log(fullname("Agan"));
//optional parameter
//
function namaLengkap(first, last) {
    return first + " " + last;
}
console.log(namaLengkap("Agan"));
let age = 24;
const tambah = (val1, val2) => {
    return val1 + val2;
};

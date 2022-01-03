"use strict";
//return string
function getStr() {
    return "Hello typescript";
}
console.log(getStr());
//return number
function getNum() {
    // return true;
    return 24;
}
console.log(getNum());
//return string
function getBool() {
    // return 24;
    return true;
}
console.log(getBool());
//tidak error jika any
function getAny() {
    return "string";
    return 24;
    return true;
}
console.log(getAny());
//return kosong
function getVoid() {
    // return "a" //error
    console.log("a");
}
getVoid();

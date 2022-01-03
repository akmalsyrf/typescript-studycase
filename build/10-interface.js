"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
let asus = new Asus("Republic of Gaming", true);
console.log(asus.on());
console.log(asus.off());
let mac = new Macbook("PRO", true);
console.log(mac.on());
console.log(mac.off());

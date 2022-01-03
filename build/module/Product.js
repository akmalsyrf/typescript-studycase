"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asus_1 = __importDefault(require("./Asus"));
const MacBook_1 = __importDefault(require("./MacBook"));
let asus = new Asus_1.default("ROG", true, true);
console.log(asus);
let mac = new MacBook_1.default("PRO", true, true);
console.log(mac);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _2_BaseLaptop_1 = __importDefault(require("./2-BaseLaptop"));
class Asus extends _2_BaseLaptop_1.default {
    constructor(type, numeric, touchButton) {
        super("Asus", type, numeric, touchButton);
    }
}
exports.default = Asus;

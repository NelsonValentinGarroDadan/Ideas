"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const urlDB = "mongodb+srv://nelsonvgarrodadan:zg5efej0vPIXA0xV@workplase.0pzcr.mongodb.net/Ideas?retryWrites=true&w=majority&appName=WorkPlase";
const dbCon = async () => {
    mongoose_1.default.connect(urlDB);
};
module.exports = dbCon;

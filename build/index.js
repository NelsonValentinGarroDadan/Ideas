"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = void 0;
const server_1 = __importDefault(require("./server/server"));
const dbConfig_1 = __importDefault(require("./server/config/dbConfig"));
const port = Number(process.env.PORT) || 3000;
(0, dbConfig_1.default)()
    .then(() => {
    console.log("DB connect");
    server_1.default.listen(port, () => {
        console.log("Server listen in port ", port);
    });
})
    .catch((err) => {
    console.log(err.message);
});
exports.API_URL = process.env.API_URL || 'http://localhost:3000/ideas/api';

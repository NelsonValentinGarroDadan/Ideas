"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ideasRouter_1 = __importDefault(require("./ideasRouter"));
const router = express_1.default.Router();
router.use("/ideas", ideasRouter_1.default);
exports.default = router;

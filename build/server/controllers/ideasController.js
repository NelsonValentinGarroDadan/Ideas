"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ideas_1 = __importDefault(require("../models/Ideas"));
exports.default = {
    getIdeas: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ideas = yield Ideas_1.default.getIdeas();
            res.status(200).json(ideas);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error al intentar traer las ideas de la BD' });
        }
    }),
    postIdea: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { content, autor } = req.body;
        try {
            const idea = yield Ideas_1.default.postIdea(content, autor);
            res.status(200).json(idea);
        }
        catch (err) {
            res.status(500).json({ message: 'Error al intentar crear la idea en la base de datos' });
        }
    }),
    getIdeasPage: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.render('index');
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error al intentar rendedizar el index' });
        }
    })
};

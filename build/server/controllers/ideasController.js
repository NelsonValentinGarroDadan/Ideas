"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ideas_1 = __importDefault(require("../models/Ideas"));
exports.default = {
    getIdeas: async (req, res) => {
        try {
            const ideas = await Ideas_1.default.getIdeas();
            res.status(200).json(ideas);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error al intentar traer las ideas de la BD' });
        }
    },
    postIdea: async (req, res) => {
        const { content, autor } = req.body;
        try {
            const idea = await Ideas_1.default.postIdea(content, autor);
            res.status(200).json(idea);
        }
        catch (err) {
            res.status(500).json({ message: 'Error al intentar crear la idea en la base de datos' });
        }
    },
    getIdeasPage: async (req, res) => {
        try {
            res.render('index');
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Error al intentar rendedizar el index' });
        }
    }
};

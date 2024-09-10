"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const ideaSchema = new mongoose_1.default.Schema({
    content: String,
    autor: String
});
ideaSchema.statics.getIdeas = async function () {
    return await this.find().lean();
};
ideaSchema.statics.getIdeaById = async function (id) {
    return await this.findOne({ _id: id }).lean();
};
ideaSchema.statics.postIdea = async function (content, autor) {
    return await this.create({ content, autor });
};
const Idea = mongoose_1.default.model('Idea', ideaSchema);
module.exports = Idea;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ideasController_1 = __importDefault(require("../controllers/ideasController"));
const validateIdea_1 = __importDefault(require("../middlewares/validateIdea"));
const ideasRouter = express_1.default.Router();
ideasRouter.get("/", ideasController_1.default.getIdeasPage);
ideasRouter.get("/api", ideasController_1.default.getIdeas);
ideasRouter.post("/api", validateIdea_1.default, ideasController_1.default.postIdea);
module.exports = ideasRouter;

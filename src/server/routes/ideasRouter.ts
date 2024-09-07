import express from 'express';
import ideasController from '../controllers/ideasController';
import validateIdea from '../middlewares/validateIdea';

const ideasRouter = express.Router();

ideasRouter.get("/",ideasController.getIdeas);
ideasRouter.post("/",validateIdea, ideasController.postIdea);

export = ideasRouter;
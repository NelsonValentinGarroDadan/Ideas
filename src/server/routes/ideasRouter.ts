import express from 'express';
import ideasController from '../controllers/ideasController';
import validateIdea from '../middlewares/validateIdea';

const ideasRouter = express.Router();

ideasRouter.get("/",ideasController.getIdeasPage);
ideasRouter.get("/api", ideasController.getIdeas);
ideasRouter.post("/api",validateIdea, ideasController.postIdea);



export = ideasRouter;
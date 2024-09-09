import { Request, Response } from 'express';
import Idea from "../models/Ideas";
export default {
    postIdea : async (req:Request, res:Response)=>{
        const {content , autor} = req.body;
        console.log(autor);
        try{
            const idea = await Idea.postIdea(content , autor);
            res.status(200).json(idea);
        }catch(err){
            res.status(500).json({ message: 'Error al intentar crear la idea en la base de datos'});
        }
    },
    getIdeasPage : async (req:Request, res:Response)=>{
        try{
            const ideas = await Idea.getIdeas();
            res.render('index',{ideas: ideas});
        }catch(err){
            console.log(err);
            res.status(500).json({ message: 'Error al intentar rendedizar el index'});
        }
        

    }
}
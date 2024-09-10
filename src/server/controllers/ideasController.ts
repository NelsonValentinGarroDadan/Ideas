import { Request, Response } from 'express';
import Idea from "../models/Ideas";
export default {
    getIdeas : async (req:Request, res:Response) =>{
        try{
            const ideas = await Idea.getIdeas();
            res.status(200).json(ideas);
        }catch(err){
            console.log(err);
            res.status(500).json({ message: 'Error al intentar traer las ideas de la BD'});
        }
        
    },
    postIdea : async (req:Request, res:Response)=>{
        const {content , autor} = req.body;
        try{
            const idea = await Idea.postIdea(content , autor);
            res.status(200).json(idea);
        }catch(err){
            res.status(500).json({ message: 'Error al intentar crear la idea en la base de datos'});
        }
    },
    getIdeasPage : async (req:Request, res:Response)=>{
        try{
            res.render('index');
        }catch(err){
            console.log(err);
            res.status(500).json({ message: 'Error al intentar rendedizar el index'});
        }
        

    }
}
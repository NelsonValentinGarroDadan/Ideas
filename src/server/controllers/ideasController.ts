import { Request, Response } from 'express';
import Idea from "../models/Ideas";
export default {
    getIdeas : async (req:Request ,res:Response)=>{
        try {
            const ideas = await Idea.getIdeas(); 
            res.status(200).json(ideas);
        } catch (error) {
            res.status(500).json({ message: 'Error al intentar traer los datos de la Base de Datos'});
        }
    },
    postIdea : async (req:Request, res:Response)=>{
        const {content , autor} = req.body;
        console.log(autor);
        try{
            const idea = await Idea.postIdea(content , autor);
            res.status(200).json(idea);
        }catch(err){
            console.log(err);
            res.status(500).json({ message: 'Error al intentar crear la base de datos'});
        }
    }
}
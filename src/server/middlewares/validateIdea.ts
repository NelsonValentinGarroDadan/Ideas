import { Request, Response } from 'express';
const validateIdea = (req:Request, res:Response, next:Function) =>{
    const {content , autor} = req.body;
    if(!content) next({statusCode:400,message:"El contenido de la idea no puede ser vacio"});
    if(!autor) next({statusCode:400,message:"El autor no puede estar"});
    next();
}

export = validateIdea;
import express from 'express';

const ideasRouter = express.Router();

ideasRouter.get("/",(req,res)=>{
    res.status(200).json("holis")
});

export default ideasRouter;
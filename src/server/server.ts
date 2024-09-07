import express,{ Request, Response } from 'express';
import ErrorPersonalizado from '../Types/ErrorPersonalizado';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index';

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(router);


app.use((err:ErrorPersonalizado, req:Request, res:Response, next:Function) => {
    res
        .status(err.statusCode || 500)
        .json({ message: err.message});
    next();
});


export = app;
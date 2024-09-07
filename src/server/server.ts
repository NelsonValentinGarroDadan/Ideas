import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index';

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// app.use((err, req, res, next) => {
//     res
//         .status(err.statusCode || 500)
//         .json({ message: err.message});
//     next();
// });

app.use(router);

export = app;
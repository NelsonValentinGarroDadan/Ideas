import express from 'express';
import ideasRouter from './ideasRouter';

const router = express.Router();

router.use("/ideas", ideasRouter);

export default router;

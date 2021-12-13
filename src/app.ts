/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import './setup/setup';
import userRouter from './routes/user.router';
import questionRouter from './routes/question.router';
import errorMiddleware from './middlewares/serverMiddlewareErro';

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(questionRouter);
app.use(errorMiddleware);

export default app;

import express from 'express';
import cors from 'cors';
import './setup/setup';
import userRouter from './routes/user.router';
import questionRouter from './routes/question.router';

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(questionRouter);

export default app;

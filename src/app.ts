import express from 'express';
import cors from 'cors';
import './setup/setup';
import userRouter from './routes/user.router';

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

export default app;

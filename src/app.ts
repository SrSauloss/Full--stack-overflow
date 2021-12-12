import express from 'express';
import cors from "cors";
import './setup/setup';

const app = express();
app.use(cors());
app.use(express.json());

export default app;
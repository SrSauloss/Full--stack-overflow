import { Router } from 'express';
import { storeQuestion } from '../controllers/questions.controller';

const questionRouter = new (Router as any)();

questionRouter.post('/questions', storeQuestion);

export default questionRouter;

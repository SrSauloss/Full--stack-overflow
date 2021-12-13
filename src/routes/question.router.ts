import { Router } from 'express';
import { getQuestionId, storeQuestion } from '../controllers/questions.controller';

const questionRouter = new (Router as any)();

questionRouter.post('/questions', storeQuestion);
questionRouter.get('/questions/:id', getQuestionId);

export default questionRouter;

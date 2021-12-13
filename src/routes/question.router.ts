import { Router } from 'express';
import { getQuestionId, storeQuestion, updateQuestion } from '../controllers/questions.controller';

const questionRouter = new (Router as any)();

questionRouter.post('/questions', storeQuestion);
questionRouter.get('/questions/:id', getQuestionId);
questionRouter.post('/questions/:id', updateQuestion);

export default questionRouter;

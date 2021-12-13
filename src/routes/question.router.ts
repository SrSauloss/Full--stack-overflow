/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Router } from 'express';
import * as questionsController from '../controllers/questions.controller';

const questionRouter = new (Router as any)();

questionRouter.post('/questions', questionsController.storeQuestion);
questionRouter.get('/questions/:id', questionsController.getQuestionId);
questionRouter.post('/questions/:id', questionsController.updateQuestion);
questionRouter.get('/questions', questionsController.getQuestionsNotAnswer);

export default questionRouter;

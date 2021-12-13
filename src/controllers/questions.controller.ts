import { Request, Response } from 'express';
import { question } from '../protocols/question.protocol';
import { questionStoreSchema } from '../validations/schemas';
import * as questionService from '../services/question.service';

async function storeQuestion(req: Request, res: Response) {
    const objectQuestion : question = req.body;

    const isValid = questionStoreSchema.validate(objectQuestion);
    if (isValid.error) {
        return res.sendStatus(403);
    }

    try{
      const resul = await questionService.storeQuestion(objectQuestion);
      res.status(201).send(resul);
    }catch(err){
      res.sendStatus(500)
    }
}

async function getQuestionId(req: Request, res: Response) {
   const { id } = req.params;
   if(!id) {
    return res.status(400).send({message: 'It is necessary to inform the question id by parameter'});
   }

   try{
    const resul = await questionService.getQuestionById(id);
    res.send(resul);
   }catch(err){
    if(err.name === 'QuestionError'){
        return res.status(400).send(err.message);
    }
    res.sendStatus(500)
   }
}

async function updateQuestion(req: Request, res: Response) {
    const { id } = req.params;
    const { answer } = req.body;

    const token = req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.sendStatus(401);
    }
    if(!id || !answer) {
        return res.sendStatus(400);
    }

    try{
        const resul = await questionService.updateAnswerQuestion(token, id, answer);
        return res.sendStatus(200);
    } catch(err) {
        if(err.name === 'QuestionError'){
            return res.status(409).send(err.message);
        }
        res.sendStatus(500);
    }
}


async function getQuestionsNotAnswer(req: Request, res: Response) {
   try{
    const resul = await questionService.getAllQuestionsNotAnswer();
    res.send(resul);
   }catch(err){
    res.sendStatus(500)
   }
}

export { storeQuestion, getQuestionId, updateQuestion, getQuestionsNotAnswer };

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
    res.sendStatus(500)
   }
}


export { storeQuestion, getQuestionId };

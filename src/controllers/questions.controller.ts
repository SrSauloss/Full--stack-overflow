import { Request, Response } from 'express';
import { questionStoreSchema } from '../validations/schemas';

async function storeQuestion(req: Request, res: Response) {
    const { question, student, tags } = req.body;
    const classe = req.body.class;

    const isValid = questionStoreSchema.validate({ question, student, tags, class: classe });
    console.log(isValid.error);
    res.sendStatus(201);
}

export { storeQuestion };

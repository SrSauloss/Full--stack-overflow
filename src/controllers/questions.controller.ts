import { Request, Response } from 'express';

async function storeQuestion(req: Request, res: Response) {
    res.sendStatus(201);
}

export { storeQuestion };

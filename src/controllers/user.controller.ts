import { Request, Response } from 'express';
import { userStoreSchema } from '../validations/schemas';
import * as userService from '../services/user.service';
import { user } from '../protocols/user.protocol';

async function storeUser(req: Request, res: Response) {
    const { name } = req.body;
    const classe = req.body.class;
    const isValid = userStoreSchema.validate({ name, class: classe });

    if (isValid.error) {
        return res.sendStatus(403);
    }

    try {
        const objectUser : user = { name, class: classe };
        const resul = await userService.storeUser(objectUser);
        res.status(201).send(resul);
    } catch (err) {
        if (err.name === 'UserError') {
            return res.status(400).send(err.message);
        }
        res.sendStatus(500);
    }
}

export { storeUser };

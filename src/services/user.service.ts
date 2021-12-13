/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';
import * as userRepository from '../repositories/user.repository';
import UserError from '../errors/user.error';
import { db_user, user } from '../protocols/user.protocol';
import { auth } from '../protocols/auth.protocol';

async function storeUser(objectUser : user) {
    const user = await userRepository.findUser(objectUser);
    if (user) {
        throw new UserError('Usuário já cadastrado');
    }

    const userResul : db_user = await userRepository.storeUser(objectUser);
    const objectAuth : auth = { user_id: userResul.id.toString(), token: uuid() };

    const resul = await userRepository.storeAuth(objectAuth);

    return resul;
}

export { storeUser };

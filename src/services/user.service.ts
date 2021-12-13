import { db_user, user } from "../protocols/user";
import * as userRepository from '../repositories/user.repository';
import UserError from '../errors/user.error';

async function storeUser(objectUser:user) {

  const user = await userRepository.findUser(objectUser);
  if(user) {
      throw new UserError('Usuário já cadastrado');

  }

  const resul : db_user = await userRepository.storeUser(objectUser);
  return resul;
}

export { storeUser };

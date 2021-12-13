import { question } from "../protocols/question.protocol";
import * as questionRepository from '../repositories/question.repository';

async function storeQuestion(objectQuestion : question) {

  const resul  = await questionRepository.storeQuestion(objectQuestion);
  return resul;
}

export { storeQuestion };

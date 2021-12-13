import { question } from "../protocols/question.protocol";
import * as questionRepository from '../repositories/question.repository';

async function storeQuestion(objectQuestion : question) {

  const resul  = await questionRepository.storeQuestion(objectQuestion);
  return resul;
}

async function getQuestionById(id : string) {
    const resul = await questionRepository.getQuestionById(id);
    return resul;
}

export { storeQuestion, getQuestionById };

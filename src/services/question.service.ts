import { db_question, question } from "../protocols/question.protocol";
import * as questionRepository from '../repositories/question.repository';

async function storeQuestion(objectQuestion : question) {

  const resul  = await questionRepository.storeQuestion(objectQuestion);
  return resul;
}

async function getQuestionById(id : string) {
    const answered = await questionRepository.getAnswerById(id);
    let res;

    if(!answered){
        res = await questionRepository.getQuestionById(id);
    }

    return res;
}

async function getAllQuestionsNotAnswer() {
    const questions = await questionRepository.getAllQuestionsNotAnswer();
    console.log(questions)
    return questions;
}


export { storeQuestion, getQuestionById, getAllQuestionsNotAnswer };

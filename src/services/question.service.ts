import QuestionError from "../errors/question.error";
import { answer, db_answer, db_question, question } from "../protocols/question.protocol";
import * as questionRepository from '../repositories/question.repository';
import * as userRepository from '../repositories/user.repository';

async function storeQuestion(objectQuestion : question) {

  const resul  = await questionRepository.storeQuestion(objectQuestion);
  return resul;
}

async function getQuestionById(id : string) {
    const answered = await questionRepository.getAnswerById(id);
    let res = await questionRepository.getQuestionById(id);

    if(!res){
        throw new QuestionError('Non-existent question');
    }
    if(answered){
      res = {...res, ...answered};
    }
   
    return res;
}

async function updateAnswerQuestion(token: string, id : string, answer : string) {
    const question = await questionRepository.getQuestionById(id);

    if(question.answered){
        throw new QuestionError('This question has already been answered');
    }

    const resulUser = await userRepository.findUserByToken(token);

    const objectAnswer : answer = { 
        question_id: id, 
        user_id: resulUser.id, 
        answeredBy: resulUser.name,
        answer: answer
    }

    const resultAnswer = await questionRepository.updateQuestion(objectAnswer);
 
    return resultAnswer;
}

export { storeQuestion, getQuestionById, updateAnswerQuestion };

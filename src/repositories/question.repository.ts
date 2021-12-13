import connection from "../database/database";
import { db_answer, db_question, question } from "../protocols/question.protocol";

async function storeQuestion(question: question) {
    const resul = await connection.query(`
    INSERT INTO questions (question, student, class, tags, "submitAt") 
        VALUES($1, $2, $3, $4, NOW()) RETURNING id`,
    [question.question, question.student, question.class, question.tags]);

    return resul.rows[  0];
}

async function getQuestionById(id: string) : Promise<db_question>{
    const resul = await connection.query(` 
    SELECT question, student, class, tags, answered, "submitAt" 
        FROM questions 
            WHERE id = $1`, [id]);
    return resul.rows[0];
}

async function getAnswerById(id: string) : Promise<db_answer> {
    const resul = await connection.query(`SELECT * FROM answers WHERE question_id = $1`, [id]);
    return resul.rows[0];
}

async function getAllQuestionsNotAnswer() : Promise<db_question[]>{
    const resul = await connection.query(`SELECT * FROM questions WHERE answered = $1`, [false]);
    return resul.rows;
}

export { storeQuestion, getQuestionById,getAnswerById, getAllQuestionsNotAnswer };

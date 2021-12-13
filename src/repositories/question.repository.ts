import connection from "../database/database";
import { answer, db_answer, db_question, question } from "../protocols/question.protocol";

async function storeQuestion(question : question) {
    const resul = await connection.query(`
    INSERT INTO questions (question, student, class, tags, "submitAt") 
        VALUES($1, $2, $3, $4, NOW()) RETURNING id`,
    [question.question, question.student, question.class, question.tags]);

    return resul.rows[0];
}

async function getQuestionById(id : string) : Promise<db_question>{
    const resul = await connection.query(` 
    SELECT question, student, class, tags, answered, "submitAt" 
        FROM questions 
            WHERE id = $1`, [id]);
    return resul.rows[0];
}

async function getAnswerById(id : string) : Promise<db_answer> {
    const resul = await connection.query(`SELECT * FROM answers WHERE question_id = $1`, [id]);

    if(resul.rowCount != 0){
        delete resul.rows[0].id;
        delete resul.rows[0].question_id;
        delete resul.rows[0].user_id;
    }

    return resul.rows[0];
}

async function getAllQuestionsNotAnswer() : Promise<db_question[]>{
    const resul = await connection.query(`SELECT * FROM questions WHERE answered = $1`, [false]);
    return resul.rows;
}

async function updateQuestion(objectanswer : answer) {
    const resul = await connection.query(`
    INSERT INTO answers ("answeredAt", "answeredBy", answer, question_id, user_id )
        VALUES(NOW(), $1, $2, $3, $4) RETURNING id
    `,[objectanswer.answeredBy, objectanswer.answer, objectanswer.question_id, objectanswer.user_id]);

    const resulQuestion = await connection.query(`
    UPDATE questions SET answered = $1 WHERE id = $2
    `, [true, objectanswer.question_id]);

    return resulQuestion.rowCount;
}

export { storeQuestion, getQuestionById, getAnswerById, updateQuestion, getAllQuestionsNotAnswer};

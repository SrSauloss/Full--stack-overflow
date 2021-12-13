import connection from "../database/database";
import { db_question, question } from "../protocols/question.protocol";

async function storeQuestion(question: question){
    const resul = await connection.query(`
    INSERT INTO questions (question, student, class, tags, "submitAt") 
        VALUES($1, $2, $3, $4, NOW()) RETURNING id`,
    [question.question, question.student, question.class, question.tags]);

    return resul.rows[  0];
}

async function getQuestionById(id: string){
    const resul = await connection.query(`SELECT * FROM questions WHERE id = $1`, [id]);
    console.log(resul)
    return resul.rows[0];
}


export { storeQuestion, getQuestionById };

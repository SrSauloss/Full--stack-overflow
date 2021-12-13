/* eslint-disable no-shadow */
import connection from '../database/database';
import { db_user, user } from '../protocols/user.protocol';

async function findUser(user:user) : Promise<db_user> {
  const resul = await connection.query('SELECT * FROM users WHERE name = $1', [user.name]);
  return resul.rows[0];
}

async function findUserByToken(token:string) {
  const resul = await connection.query(`SELECT users.name, users.id FROM users
    JOIN auths ON users.id = auths.user_id
    WHERE auths.token = $1`, [token]);
  return resul.rows[0];
}

async function storeUser(user:user) : Promise<db_user> {
  const resul = await connection.query('INSERT INTO users (name, class) VALUES($1, $2) RETURNING *', [user.name, user.class]);
  return resul.rows[0];
}

export { storeUser, findUser, findUserByToken };

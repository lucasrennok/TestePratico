import knex from 'knex';
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
//@ts-ignore
dotenv.config({path: path.resolve})

// Configuração para conectar ao banco
const db = knex({
    client: 'mysql2',
    connection: process.env.DB_CONNECTION
});

export default db;
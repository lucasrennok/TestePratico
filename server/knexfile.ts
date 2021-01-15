import path from 'path';
import dotenv from 'dotenv'

dotenv.config()
//@ts-ignore
dotenv.config({path: path.resolve})

// Conexão ao banco e pasta de migrations
module.exports = {
    client: 'mysql2',
    connection: process.env.DB_CONNECTION,
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}
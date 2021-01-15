import path from 'path';

// Conexão ao banco e pasta de migrations
module.exports = {
    client: 'mysql2',
    connection: "mysql://root:@localhost:3306/comentarios",
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}
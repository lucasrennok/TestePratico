import knex from 'knex';

// Configuração para conectar ao banco
const db = knex({
    client: 'mysql2',
    connection: "mysql://root:@localhost:3306/comentarios"
});

export default db;
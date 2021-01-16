import Knex from 'knex';

//Create a 'user' table
export async function up(knex: Knex){
    return knex.schema.createTable('comentario', table => {
        table.increments();
        table.text('texto', 'longtext');
        table.timestamp('created_at').defaultTo(knex.fn.now());;
    });
}

//Drop table when something gone wrong
export async function down(knex: Knex){
    return knex.schema.dropTable('comentario');
}

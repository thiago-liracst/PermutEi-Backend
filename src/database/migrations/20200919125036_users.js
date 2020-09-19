
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.string('nome').notNullable();
        table.string('sexo').notNullable();
        table.string('datanasc').notNullable();
        table.string('endereco').notNullable();
        table.decimal('cpf').primary();
        table.decimal('numero').notNullable();
        table.decimal('matricula').notNullable();
        table.string('batalhao').notNullable();
        table.string('batalhaointeresse').notNullable();
        table.boolean('disponibilidade').notNullable();
        table.string('orgao').notNullable();
        table.string('comportamento').notNullable();
        table.string('login').notNullable();
        table.string('senha').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

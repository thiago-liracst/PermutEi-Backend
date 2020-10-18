
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.string('nome').notNullable();
        table.string('sexo').notNullable();
        table.string('datanasc').notNullable();
        table.decimal('cpf').primary();
        table.decimal('numero').notNullable();
        table.string('estadoAtual').notNullable();
        table.string('estadoInteresse').notNullable();

        table.decimal('matricula').notNullable();
        table.string('batalhaoAtual').notNullable();
        table.string('batalhaoInteresse').notNullable();
        table.string('orgao').notNullable();
        table.string('comportamento').notNullable();
        table.string('postoGraduacao').notNullable();
        table.boolean('disponibilidade').notNullable();

        table.string('login').primary();
        table.string('senha').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

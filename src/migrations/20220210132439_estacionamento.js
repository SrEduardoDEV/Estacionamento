
exports.up = function(knex) {
    return knex.schema.createTable('estacionamento', (t)=> {
        t.increments();
        t.integer('id_veiculo').unsigned().notNullable();
        t.foreign('id_veiculo').references('id').inTable('veiculos');
        t.integer('id_patio').unsigned().notNullable();
        t.foreign('id_patio').references('id').inTable('patio');
        t.date('data').notNull();
        t.time('hora_entrada').notNull();
        t.time('hora_saida');
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('estacionamento');
};

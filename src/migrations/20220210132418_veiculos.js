
exports.up = function(knex) {
    return knex.schema.createTable('veiculos', (t)=> {
        t.increments();
        t.string('placa', 8).notNull();
        t.integer('id_cliente').unsigned().notNullable();
        t.foreign('id_clientes').references('id').inTable('clientes');
        t.integer('id_modelo').unsigned().notNullable();
        t.foreign('id_modelo').references('id').inTable('modelos');
        t.string('cor', 20).notNull();
        t.integer('ano_fabricacao', 50).notNull();
    });

};


exports.down = function(knex) {
    return knex.schema.dropTable('veiculos');
};

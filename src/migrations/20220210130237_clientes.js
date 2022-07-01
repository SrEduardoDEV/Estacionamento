
exports.up = function(knex) {

return knex.schema.createTable('clientes', (t)=> {
    t.increments();
    t.string('nome', 100).notNull();
    t.string('cpf', 11).notNull().unique();
    t.string('email').notNull().unique();
    t.string('telefone', 15).notNull();
    t.string('endereco', 50).notNull();
    t.string('numero', 50);
    t.string('bairro', 50).notNull();
    t.string('cidade', 50).notNull();
    t.string('estado', 2).notNull();
});
  
};


exports.down = function(knex) {
  return knex.schema.dropTable('clientes');
};

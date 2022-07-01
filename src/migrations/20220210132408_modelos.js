
exports.up = function (knex) {

    return knex.schema.createTable('modelos', (t) => {
        t.increments();
        t.string('modelo', 30).notNull().unique();
        t.string('marca', 30).notNull().unique();
    });

};


exports.down = function (knex) {
    return knex.schema.dropTable('modelos');
};

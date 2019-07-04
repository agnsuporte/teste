
exports.up = function (knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments('id', 11).primary()
        table.string('name', 191).notNull()
        table.integer('parent_id', 11)
            .references('id')
            .inTable('categories').unsigned()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('categories')
};

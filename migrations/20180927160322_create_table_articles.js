
exports.up = function (knex, Promise) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 192).notNull()
        table.string('imageUrl', 191)
        table.binary('content').notNull()
        table.integer('user_id').references('id')
            .inTable('users').unsigned().notNull()
        table.integer('category_id').references('id')
            .inTable('categories').unsigned().notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('articles')
};

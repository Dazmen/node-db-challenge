
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');

        tbl.string('title')
            .notNullable()
            .unique();
        
        tbl.string('description');

        tbl.string('complete')
            .notNullable()
            .defaultTo('false');
    })
    .createTable('resources', tbl => {
        tbl.increments('id');

        tbl.string('name')
            .notNullable()
            .unique();

        tbl.string('description');
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('projects');

        tbl.string('task')
            .notNullable()
            .unique();

        tbl.string('note');

        tbl.string('complete')
            .notNullable()
            .defaultTo('false');
    })
    .createTable('project_resources', tbl => {
        tbl.increments('id');

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('projects')

        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('resources')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};

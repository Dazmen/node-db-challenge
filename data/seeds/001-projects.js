
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {title: 'Project Seed', 
        description: 'Seeding the project for stretch',
        complete: 'true'
      }
      ]);
    });
};

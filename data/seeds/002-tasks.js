
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 1, 
          task: 'create seed scripts', 
          note: 'Just need to test', 
          complete: 'true'}

      ]);
    });
};

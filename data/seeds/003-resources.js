
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'computer', description: 'well.... how else are you suppose to code? a whiteboard?'}
      ]);
    });
};

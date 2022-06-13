/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Bird Food', description: 'Food for birds'},
    {id: 2, name: 'Cat Food', description: 'Food for cats'},
    {id: 3, name: 'Dog Food', description: 'Food for dogs'},
    {id: 4, name: 'Fish Food', description: 'Food for fishes'},
  ]);
};

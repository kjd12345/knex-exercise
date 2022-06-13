const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development'])

app.listen(port, () => {
  console.log('Your Knex and Express application are running successfully');
})

app.get('/', (req, res) => {
  res.send('Application up and running.');
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(data => data.map(pet => pet.name))
    .then(petNames => res.json(petNames))
})

app.get('/petdata', (req, res) => {
  knex
    .select('pet.name',
            'pet_type.name as type',
            'food_type.name as food_name',
            'food_type.description as food_description'
    )
    .from('pet')
    .innerJoin('pet_type', 'pet.pet_type_id', '=', 'pet_type.id')
    .innerJoin('food_type', 'pet.food_type_id', '=', 'food_type.id')
    .then(data => res.json(data))
})
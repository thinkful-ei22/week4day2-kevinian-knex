'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .debug(true)
//   .then(res => console.log(res));

// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .debug(true)
//   .then(res => console.log(res));

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .select()
//   .from('restaurants')
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(results => console.log(results));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .limit(10)
//   .where('cuisine', 'Italian')
//   .then(res => console.log(res));

// knex
//   .select()
//   .count()
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .then(res => console.log(res));

// knex
//   .select()
//   .count()
//   .from('restaurants')
//   .then(res => console.log(res));

// knex
//   .select()
//   .count()
//   .from('restaurants')
//   .where({cuisine: 'Thai', address_zipcode: '11372'})
//   .then(res => console.log(res));

// knex 
//   .select()
//   .from('restaurants')
//   .where({address_zipcode: ['10012','10013', '10014'], cuisine: 'Italian'})
//   .orderBy('name', 'asc')
//   .limit(5)
//   .then(res => console.log(res));

// knex ('restaurants')
//   .insert({'name': 'Byte Cafe', borough: 'Brooklyn', cuisine : 'coffee', 
//     address_building_number : '123', address_street: 'Atlantic Ave', 
//     address_zipcode :'11231'})
//   .then(res => console.log(res));

// knex ('restaurants')
//   .insert({'name': 'Byte Cafe', borough: 'Brooklyn', cuisine : 'coffee', 
//     address_building_number : '123', address_street: 'Atlantic Ave', 
//     address_zipcode :'11231'}) 
//   .returning(['id','name'])
//   .then(res => console.log(res));

// knex ('restaurants')
//   .insert(
//     [{'name': 'Byte Cafe', borough: 'Brooklyn', cuisine : 'coffee', 
//       address_building_number : '123', address_street: 'Atlantic Ave', 
//       address_zipcode :'11231'},
//     {'name': 'Byte Cafe', borough: 'Brooklyn', cuisine : 'coffee', 
//       address_building_number : '123', address_street: 'Atlantic Ave', 
//       address_zipcode :'11231'},
//     {'name': 'Byte Cafe', borough: 'Brooklyn', cuisine : 'coffee', 
//       address_building_number : '123', address_street: 'Atlantic Ave', 
//       address_zipcode :'11231'}]
//   ) 
//   .returning(['id','name'])
//   .then(res => console.log(res));

// knex ('restaurants')
//   .where('nyc_restaurant_id', '30191841')
//   .update('name', 'DJ Reynolds Pub and Restaurant')
//   .then(res => console.log(res));

// knex ('restaurants')
//   .select()
//   .where('nyc_restaurant_id', 30191841)
//   .then(res => console.log(res));

// knex('grades')
//   .where('id', 10)
//   .del()
//   .then(res => console.log(res));

// knex('grades')
//   .select()
//   .where('id', 10)
//   .then(res => console.log(res));

knex('restaurants')
  .where('id', 22)
  .del()
  .then(res => console.log(res));
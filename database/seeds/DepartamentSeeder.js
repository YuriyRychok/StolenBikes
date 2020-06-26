'use strict'

/*
|--------------------------------------------------------------------------
| DepartamentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DepartamentSeeder {
  async run () {
    const departamentsArray = await Factory
      .model('App/Models/Departament')
      .createMany(5)
  }
}

module.exports = DepartamentSeeder

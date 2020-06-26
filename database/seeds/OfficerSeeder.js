'use strict'

/*
|--------------------------------------------------------------------------
| OfficerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class OfficerSeeder {
  async run () {
    const officersArray = await Factory
      .model('App/Models/Officer')
      .createMany(5)
  }
}

module.exports = OfficerSeeder

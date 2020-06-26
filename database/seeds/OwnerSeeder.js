'use strict'

/*
|--------------------------------------------------------------------------
| OwnerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class OwnerSeeder {
  async run () {
    const ownersArray = await Factory
      .model('App/Models/Owner')
      .createMany(5)
  }
}

module.exports = OwnerSeeder

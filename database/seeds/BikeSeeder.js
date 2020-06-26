'use strict'

/*
|--------------------------------------------------------------------------
| BikeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BikeSeeder {
  async run () {
    const bikesArray = await Factory
      .model('App/Models/Bike')
      .createMany(5)
  }
}

module.exports = BikeSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| CaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CaseSeeder {
  async run () {
    await Factory.model('App/Model/Case').create()
  }
}

module.exports = CaseSeeder

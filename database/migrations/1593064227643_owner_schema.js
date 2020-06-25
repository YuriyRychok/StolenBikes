'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.increments('id')
      table.string('username', 80).notNullable()
      table.string('phone_number', 80).notNullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnerSchema

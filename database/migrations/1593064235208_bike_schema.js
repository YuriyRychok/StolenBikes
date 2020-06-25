'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BikeSchema extends Schema {
  up () {
    this.create('bikes', (table) => {
      table.increments('id')
      table.string('type', 120).notNullable()
      table.string('color', 40).notNullable()
      table.string('license', 100).notNullable()
      table.integer('owner_id').references('owners')
      table.timestamp('created_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('bikes')
  }
}

module.exports = BikeSchema

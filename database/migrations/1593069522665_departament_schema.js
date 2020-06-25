'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartamentSchema extends Schema {
  up () {
    this.create('departaments', (table) => {
      table.increments('id')
      table.string('name', 80).notNullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('departaments')
  }
}

module.exports = DepartamentSchema

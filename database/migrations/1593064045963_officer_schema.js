'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OfficerSchema extends Schema {
  up () {
    this.create('officers', (table) => {
      table.increments('id')
      table.string('name', 120).notNullable()
      table.integer('case_id').references('cases')
      table.integer('departament_id').references('departaments')
      table.timestamp('created_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('officers')
  }
}

module.exports = OfficerSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaseSchema extends Schema {
  up () {
    this.create('cases', (table) => {
      table.increments('id')
      table.enu('status', ['open', 'in_progress', 'resolved'])
      table.text('details')
      table.integer('officer_id').references('officers')
      table.integer('bike_id').references('bikes')
      table.timestamp('theft_date').defaultTo(this.fn.now())
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop('cases')
  }
}

module.exports = CaseSchema

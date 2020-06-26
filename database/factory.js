'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Case', (faker) => {
  return {
    status: "open",
    details: faker.sentence(),
    officer_id: 1,
    bike_id: 1,
    departament_id: 1
  }
})

Factory.blueprint('App/Models/Bike', (faker) => {
    return {
        type: faker.word(),
        color: faker.word(),
        license: faker.string(),
        owner_id: 1
    }
})

Factory.blueprint('App/Models/Departament', (faker) => {
    return {
        name: faker.name()
    }
})

Factory.blueprint('App/Models/Officer', (faker) => {
    return {
        name: faker.name(),
        case_id: null,
        departament_id: 1
    }
})

Factory.blueprint('App/Models/Owner', (faker) => {
    return {
        name: faker.name(),
        phone_number: faker.phone()
    }
})

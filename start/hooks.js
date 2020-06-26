const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Validator = use('Validator')
  const Database = use('Database')

  const array_open_cases = ["open", "in_progress"]

  const existsFn = async (data, field, message, args, get) => {
    const value = get(data, field)
    if (!value) {
      /**
       * skip validation if value is not defined. `required` rule
       * should take care of it.
       */
      return
    }

    const [table, column] = args
    const row = await Database.table(table).where(column, value).first()

    if (!row) {
      throw message
    }
  }

  const oneCaseOfficerFn = async (data, field, message, args, get) => {
    const value = get(data, field)
    if (!value) {
      /**
       * skip validation if value is not defined. `required` rule
       * should take care of it.
       */
      return
    }

    const case_ = await Database.table("cases")
      .where("officer_id", value)
      .whereIn('status', array_open_cases)
      .first()

    if (case_) {
      throw "This officer is not free. Please use another one"
    }
  }

  const oneCaseBikeFn = async (data, field, message, args, get) => {
    const value = get(data, field)
    if (!value) {
      /**
       * skip validation if value is not defined. `required` rule
       * should take care of it.
       */
      return
    }

    const case_ = await Database.table("cases")
      .where("bike_id", value)
      .whereIn('status', array_open_cases)
      .first()

      if (case_) {
        throw "Bike has already active in system"
      }
  }

  Validator.extend('exists', existsFn)
  Validator.extend('oneCaseOfficer', oneCaseOfficerFn)
  Validator.extend('oneCaseBike', oneCaseBikeFn)
})

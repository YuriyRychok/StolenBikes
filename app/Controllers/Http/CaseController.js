'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Case = use('App/Models/Case')
const { validate } = use('Validator')

const rules = {
  status: 'required|in:open, in_progress, resolved',
  // details: '',
  officer_id: 'required|integer',
  bike_id: 'required|integer',
  departament_id: 'required|integer',
  created_at: 'date_format:YYYY-MM-DD HH:mm:ss',
  updated_at: 'date_format:YYYY-MM-DD HH:mm:ss',
  theft_date: 'date_format:YYYY-MM-DD HH:mm:ss',
}

/**
 * Resourceful controller for interacting with cases
 */
class CaseController {
  /**
   * Show a list of all cases.
   * GET cases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response}) {
    const cases = await Case.all()

    // converting to JSON array
    const casesJSON = cases.toJSON()
    return casesJSON
  }

  /**
   * Show a list of active cases.
   * GET cases/active
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async getActive ({ request, response}) {
    const cases = await Case
      .query()
      .where('status', '=', 'in_progress')
      .fetch()

    // converting to JSON array
    const casesJSON = cases.toJSON()
    return casesJSON
  }

  /**
   * Show a list of closed cases.
   * GET cases/closed
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async getClosed ({ request, response}) {
    const cases = await Case
      .query()
      .where('status', '=', 'resolved')
      .fetch()

    // converting to JSON array
    const casesJSON = cases.toJSON()
    return casesJSON
  }

  /**
   * Show a list of closed cases.
   * GET cases/open
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async getOpen ({ request, response}) {
    const cases = await Case
      .query()
      .where('status', '=', 'open')
      .fetch()

    // converting to JSON array
    const casesJSON = cases.toJSON()
    return casesJSON
  }

  /**
   * Create/save a new case.
   * POST cases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
    const body = request.post()

    const validation = await validate(body, rules)

    if (validation.fails()) {
      return validation
    }

    var new_case = new Case()
    new_case.status = body['status']
    new_case.details = body['details']
    new_case.officer_id = body['officer_id']
    new_case.bike_id = body['bike_id']
    new_case.departament_id = body['departament_id']

    await new_case.save()
  }

  /**
   * Display a single case.
   * GET cases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async getCaseById ({ params, request, response}) {
    const { id } = params
    return await Case.find(id)
  }

  /**
   * Update case details.
   * PUT cases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async edit ({ params, request, response }) {
    const { id } = params
    const body = request.all()

    const validation = await validate(body, rules)

    if (validation.fails()) {
      return validation
    }

    await Case
      .find(id)
      .update({
        // status: body['status'],
        // details: body['details'],
        // officer_id: body['officer_id'],
        // bike_id: body['bike_id'],
        // departament_id: body['departament_id'],
      })

  }

  /**
   * Delete a case with id.
   * DELETE cases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete ({ params, request, response }) {
    const { id } = params
    const case1 = await Case.find(id)

    await case1.delete()
  }
}

module.exports = CaseController

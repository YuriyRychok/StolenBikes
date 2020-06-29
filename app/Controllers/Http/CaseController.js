'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Case = use('App/Models/Case')
const { validate } = use('Validator')

const rules = {
  status: 'required|in:open,in_progress,resolved',
  officer_id: 'required|integer|exists:officers,id|oneCaseOfficer',
  bike_id: 'required|integer|exists:bikes,id|oneCaseBike',
  departament_id: 'required|integer|exists:departaments,id',
  created_at: 'date_format:YYYY-MM-DD HH:mm:ss',
  updated_at: 'date_format:YYYY-MM-DD HH:mm:ss',
  theft_date: 'date_format:YYYY-MM-DD HH:mm:ss',
}

const rules_update = {
  status: 'in:open,in_progress,resolved',
  officer_id: 'integer|exists:officers,id|oneCaseOfficer',
  bike_id: 'integer|exists:bikes,id|oneCaseBike',
  departament_id: 'integer|exists:departaments,id',
  theft_date: 'date_format:YYYY-MM-DD HH:mm:ss',
}

/**
 * Resourceful controller for interacting with cases
 */
class CaseController {
  /**
   * @api {get} /api/v1/cases Request a list of all cases information
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   *
   * @apiSuccess {Object[]} Case List of all cases
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async index () {
    try {
      const cases = await Case.all()
  
      // converting to JSON array
      const casesJSON = cases.toJSON()
      return casesJSON
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * @api {get} /api/v1/cases/active Request a list of all active cases
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   *
   * @apiSuccess {Object[]} Case List of all active cases
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async getActive () {
    try {
      const cases = await Case
        .query()
        .where('status', '=', 'in_progress')
        .fetch()
  
      // converting to JSON array
      const casesJSON = cases.toJSON()
      return casesJSON
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * @api {get} /api/v1/cases/closed Request a list of all closed cases
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   *
   * @apiSuccess {Object[]} Case List of all closed cases
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async getClosed () {
    try {
      const cases = await Case
        .query()
        .where('status', '=', 'resolved')
        .fetch()
  
      // converting to JSON array
      const casesJSON = cases.toJSON()
      return casesJSON
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * @api {get} /api/v1/cases/closed Request a list of all open cases
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   *
   * @apiSuccess {Object[]} Case List of all open cases
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async getOpen () {
    try {
      const cases = await Case
        .query()
        .where('status', '=', 'open')
        .fetch()
  
      // converting to JSON array
      const casesJSON = cases.toJSON()
      return casesJSON
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * Create/save a new case.
   * POST cases
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  /**
   * @api {post} /api/v1/cases Create a new case
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   * 
   * @apiParam {Text} details Details of case
   * @apiParam {string="open","in_progress","resolved"} status Case status
   * @apiParam {Number} officer_id Officer ID
   * @apiParam {Number} bike_id Bike ID
   * @apiParam {Number} departament_id Departament ID
   * @apiParam {Date} [theft_date=now] theft_date Theft date
   *
   * @apiSuccess {String} SuccessMessage Success!
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async create ({ request, response }) {
    
    try {
      const body = request.post()
  
      const validation = await validate(body, rules)
  
      if (validation.fails()) {
        return response
             .status(400)
             .send({ message: { error: 'Validation failed: '+JSON.stringify(validation.messages()) } })
      }
  
      var new_case = new Case()
      new_case.status = body['status']
      new_case.details = body['details']
      new_case.officer_id = body['officer_id']
      new_case.bike_id = body['bike_id']
      new_case.departament_id = body['departament_id']

      if (body['theft_date']) {
        new_case.theft_date = body['theft_date'];
      }
  
      await new_case.save()
      return response
        .status(200)
        .send({message: "Sucess!"})
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * Display a single case.
   * GET cases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

   /**
   * @api {get} /api/v1/cases/:id Get case by id
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   * 
   * @apiSuccess {Object} Case
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async getCaseById ({ params, request, response}) {
    try {
      const { id } = params
      return await Case.find(id)
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * Update case details.
   * PUT cases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

   /**
   * @api {put} /api/v1/cases/:id Edit a case
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   * 
   * @apiParam {Text} details Details of case
   * @apiParam {string="open","in_progress","resolved"} status Case status
   * @apiParam {Number} officer_id Officer ID
   * @apiParam {Number} bike_id Bike ID
   * @apiParam {Number} departament_id Departament ID
   * @apiParam {Date} theft_date Theft date
   *
   * @apiSuccess {String} SuccessMessage Success!
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async edit ({ params, request, response }) {
    try {
      const { id } = params
      const body = request.all()
  
      const validation = await validate(body, rules_update)
  
      if (validation.fails()) {
        return response
          .status(400)
          .send({ message: { error: 'Validation failed: '+JSON.stringify(validation.messages())}})
      }
  
      let merge_obj = {}
      merge_obj.status = body['status'] || "";
      merge_obj.details = body['details'] || "";
      merge_obj.officer_id = body['officer_id'] || "";
      merge_obj.bike_id = body['bike_id'] || "";
      merge_obj.departament_id = body['departament_id'] || "";
      merge_obj.theft_date = body['theft_date'] || "";
  
      for(var key in merge_obj) {
        if(merge_obj[key] === "") {
           delete merge_obj[key]
        }
      }
  
      let edit_case = await Case.find(id)
  
      edit_case.merge(merge_obj)
  
      await edit_case.save()
  
      return response
        .status(200)
        .send({message: "Sucess!"})
  
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }

  /**
   * Delete a case with id.
   * DELETE cases/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

   /**
   * @api {delete} /api/v1/cases/:id Delete case by id
   * @apiName StolenBikes
   * @apiGroup Case
   * @apiVersion 0.0.1
   * 
   * @apiSuccess {String} SuccessMessage Success!
   * @apiError (500) {String} ServerError Something went wrong in the server...
   */
  async delete ({ params, request, response }) {
    try {
      const { id } = params
      const case1 = await Case.find(id)
  
      await case1.delete()
      return response
        .status(200)
        .send({message: "Sucess!"})
    } catch (error) {
        return response
            .status(500)
            .send({ message: { error: 'Something went wrong in the server...' } })
    }
  }
}

module.exports = CaseController

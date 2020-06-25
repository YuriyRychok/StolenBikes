'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { 404: '404 Bad Request' }
})

Route.group(() => {
  /**Cases routes */
  // GET
  Route.get('cases', "CaseController.getAll")
  Route.get('cases/active', "CaseController.getActive")
  Route.get('cases/closed', "CaseController.getClosed")
  Route.get('cases/open', "CaseController.getOpen")
  Route.get('cases/:id', "CaseController.getCaseById")
  Route.get('cases/:id/bike', "CaseController.getBikeDetails")
  Route.get('cases/:id/owner', "CaseController.getOwnerDetails")
  Route.get('cases/:id/officer', "CaseController.getOfficerDetails")
  // POST
  Route.post('cases', "CaseController.create")
  // PUT
  Route.put('cases/:id', "CaseController.edit")
  Route.put('cases/assign-officer', "CaseController.assignOfficer")
  Route.put('cases/:id/close', "CaseController.close")
  // DLETE
  Route.delete('cases/:id', "CaseController.delete")

  /**Officer routes */
  // GET
  Route.get('officers', "OfficerController.getAll")
  Route.get('officers/active', "OfficerController.getActive")
  Route.get('officers/free', "OfficerController.getFree")
  Route.get('officers/:id/free', "OfficerController.isFree")
  Route.get('officers/:id', "OfficerController.getDetails")
  // POST
  Route.post('officers', "OfficerController.create")
  Route.post('officers/take-case', "OfficerController.takeCase")
  // PUT
  Route.put('officers/:id', "OfficerController.edit")
  Route.put('officers/:id/change-status', "OfficerController.changeStatus")
  // DLETE
  Route.delete('officers/:id', "OfficerController.delete")

}).prefix('api/v1')

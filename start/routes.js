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

Route.post('/api/pessoas', 'PessoaController.create')
Route.get('/api/pessoas/get', 'PessoaController.get')
Route.get('/api/pessoas/get/:id', 'PessoaController.getById')
Route.get('/api/pessoas/getPaginado', 'PessoaController.getPaginado')
Route.put('/api/pessoas/update/:id', 'PessoaController.update')
Route.delete('/api/pessoas/delete/:id', 'PessoaController.delete')